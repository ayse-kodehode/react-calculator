import React from 'react';



const LargeButton = (props) => (

    <button className="large-btn" onClick= {props.onButtonPress}>
        {props.children}
    </button>


);

export default LargeButton;