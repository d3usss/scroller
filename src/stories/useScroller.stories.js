import React from "react";
import { useScroller } from "../useScroller";

export default {
    "title": "UseScorller"
};

export const UseScrollerExample = () => {
    const scroller = useScroller({y: 1000, isSmooth: true})

    return (
        <div style={{height: 3000}}>
            <button onClick={scroller}>Click</button>
        </div>
    )
}
