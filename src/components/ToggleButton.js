import React from "react";

const ToggleButton = (props) => (
    <div id="toggle-button" onClick={props.click} aria-label="open sidebar">
        <input type="checkbox" className="input"/>
        <span />
        <span />
        <span />
    </div>
)

export default ToggleButton;
