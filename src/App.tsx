import React, {useRef, useEffect} from 'react';
import Promise from 'bluebird';
import './App.css';
import StyleText from "./components/style-text/style-text";
import WorkStyle from "./components/work-text/work-style";

const App: React.FC = () => {
    const styleRef: React.MutableRefObject<any> = useRef();
    const workRef: React.MutableRefObject<any> = useRef();
    let styleTagEl = document.getElementById('style-tag') as HTMLElement;
    const startAnimation = async () => {
        try {
            await styleRef.current.write(0);
            await workRef.current.write();
            await styleRef.current.write(1);
            workRef.current.showWorkBox();
            await Promise.delay(2000);
            await styleRef.current.write(2);
        } catch (e) {
            if (e.message === 'SKIP IT') {
                surprisinglyShortAttentionSpan();
            } else {
                throw e;
            }
        }
    };
    const surprisinglyShortAttentionSpan = () => {
        styleRef.current.writeToEnd();
        // this.$refs.workText.showWorkBox()
    };
    const styleAppend = (styleText: any) => {
        styleTagEl.textContent += styleText;
    };
    const styleOverwrite = (styleText: any) => {
        styleTagEl.textContent = styleText;
    };
    useEffect(() => {
        startAnimation().then();
        // eslint-disable-next-line
    }, []);
    return (
        <div id="App">
            <StyleText
                animationSkipped={false}
                paused={false}
                styleOverwrite={styleOverwrite}
                styleAppend={styleAppend}
                innerRef={styleRef}/>
            <WorkStyle
                paused={false}
                workRef={workRef}
            />

        </div>
    );
};

export default App;
