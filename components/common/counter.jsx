import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Counter = ({number,text}) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
        if (!focus) {
            setFocus(true);
        }
        }
    };

    return (
        <>
            <CountUp start={focus ? 0 : null} end={number} duration={5}>
                {({ countUpRef }) => (
                <div className="d-inline-flex">
                    <span ref={countUpRef} />
                        <InView as="span" onChange={(inView) =>
                            visibleChangeHandler(inView)
                        }
                    >
                    <>
                        <span>{text}</span>
                    </>
                    </InView>
                </div>
                )}
            </CountUp>
        </>
    );
};

export default Counter;