import React, {useRef, useImperativeHandle,useReducer} from 'react';
import {handleChar} from "../../utils/util";
import Promise from 'bluebird';
import {speed} from "../../utils/util";

interface propsInterface {
    animationSkipped: boolean,
    paused: boolean,
    styleOverwrite?: any,
    styleAppend?: any
    innerRef?: any
}

const endOfSentence = /[？！。~：]$/;
const comma = /\D[，；、]$/;
const endOfBlock = /[^/]\n\n$/;

const StyleText: React.FC<propsInterface> = (props) => {
    function setT(state:any,char:string) {
        return handleChar(state,char)
    }
    const [text, setText] = useReducer(setT, '');
    const {innerRef} = props;
    // 这里需要使用强制同步数据流传递给父组件，useState，useReducer都不满足要求
    let styleBuffer='';

    const elRef = useRef(null);
    const styleText = [0, 1, 2].map(i => {


        return require('!!raw-loader!./styles' + i + '.css');
    });
    const writeTo: any = async (el: Element, message: string, index: number, interval: number, charsPerInterval: number) => {
        if (props.animationSkipped) {
            throw new Error('SKIP IT');
        }
        let chars = message.slice(index, index + charsPerInterval);
        index += charsPerInterval;

        el.scrollTop = el.scrollHeight;

        writeChar(chars);

        if (index < message.length) {
            let thisInterval = interval;
            let thisSlice = message.slice(index - 2, index);
            if (comma.test(thisSlice)) {
                thisInterval = interval * 30;
            }
            if (endOfSentence.test(thisSlice)) {
                thisInterval = interval * 70;
            }
            thisSlice = message.slice(index - 2, index + 1);
            if (endOfBlock.test(thisSlice)) {
                thisInterval = interval * 50;
            }

            do {
                await Promise.delay(thisInterval);
            } while (props.paused);
            return writeTo(el, message, index, interval, charsPerInterval);
        }
    };
    const writeChar = (char: string) => {
        setText(char);
        styleBuffer=styleBuffer + char;
        if (char === ';'||char==='}') {
            props.styleAppend(styleBuffer);
            styleBuffer='';
        }
    };
    useImperativeHandle(innerRef, () => ({
        write: async (index: number) => {
            await writeTo(elRef.current, styleText[index], 0, speed, 1);
        },
        writeToEnd: () => {
            let txt = styleText.join('\n');
            let styleHTML = '';
            for (let i = 0; i < txt.length; i++) {
                styleHTML = handleChar(styleHTML, txt[i]);
            }
            setText(styleHTML);
            props.styleOverwrite('#work-text * {transition: none; }' + txt);
        }
    }));
    return <pre id='style-text' contentEditable dangerouslySetInnerHTML={{__html: text}} ref={elRef}/>;
};

export default StyleText;
