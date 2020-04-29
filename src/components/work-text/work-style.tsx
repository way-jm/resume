import React, {useImperativeHandle, useReducer, useState, useRef} from 'react';
import Promise from 'bluebird';
import {handleChar} from "../../utils/util";
import wheel from 'mouse-wheel';
import Markdown from 'markdown';

import {speed} from "../../utils/util";


const toHTML = Markdown.markdown.toHTML;

interface propsInterface {
    paused: boolean,
    workRef?: any
}

const endOfSentence = /[？！。~：]$/;
const comma = /\D[，；、]$/;
const endOfBlock = /[^/]\n\n$/;
const WorkStyle: React.FC<propsInterface> = (props) => {
    const {workRef} = props;


    function setT(state: any, char: string) {
        return handleChar(state, char);
    }

    const el2Ref: React.MutableRefObject<any> = useRef<HTMLElement>(null);

    const writeTo: any = async (el: Element, message: string, index: number, interval: number, charsPerInterval: number) => {
        let chars = message.slice(index, index + charsPerInterval);
        index += charsPerInterval;

        el.scrollTop = el.scrollHeight;
        writeSimpleChar(chars);

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
    const writeSimpleChar = (char: string) => {
        setText(char);
    };

    const [text, setText] = useReducer(setT, '');
    // eslint-disable-next-line import/no-webpack-loader-syntax
    const workText = require('!!raw-loader!./work.txt');
    const mdText = toHTML(workText);

    const [flipped, setFlipped] = useState(false);
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState(true);

    useImperativeHandle(workRef, () => ({
        write: async (index: number) => {
            setShow(true);
            await writeTo(el2Ref.current, workText, 0, speed, 1);
        },
        showWorkBox: () => {
            setShow(true);
            setPreview(false);
            setFlipped(true);
            setTimeout(() => {

                el2Ref.current.scrollTop = 9999;

                let flipping = false;
                // @ts-ignore
                wheel(el2Ref.current, async function (dx,dy) {
                    if (flipping) return;
                    let half = (el2Ref.current.scrollHeight - el2Ref.current.clientHeight) / 2;
                    let pastHalf = flipped ? el2Ref.current.scrollTop < half : el2Ref.current.scrollTop > half;

                    if (pastHalf) {
                        setFlipped(!flipped);
                        flipping = true;
                        await Promise.delay(500);
                        el2Ref.current.scrollTop = flipped ? 9999 : 0;
                        flipping = false;
                    }

                    (el2Ref as any).scrollTop += (dy * (flipped ? -1 : 1));
                }, true);
            }, 200);
        }
    }));
    return <>
        {show ?
            <pre id='work-text' ref={el2Ref} className={flipped ? 'flipped' : ''}>
                {preview ?
                    <div dangerouslySetInnerHTML={{__html: text}} />
                    :
                    <div>
                        <div className="text" dangerouslySetInnerHTML={{__html: workText}}/>
                        <div className="md" dangerouslySetInnerHTML={{__html: mdText}}/>
                    </div>
                }
            </pre>
            : null}
    </>;

};

export default WorkStyle;
