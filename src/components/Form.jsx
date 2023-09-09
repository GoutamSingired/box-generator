import React, { useState } from "react";

const Form = (props) => {
    const {isBoxVisible, setIsBoxVisible} = props;
    const {color, setColor} = props;

    const handleBox = (e) => {
        e.preventDefault();

        setIsBoxVisible( [ ...isBoxVisible, color ] );
        console.log([setIsBoxVisible]);
        setColor(" ");
    }

    return (
        <>
            <form onSubmit={handleBox} style={{ margin: "20px" }}>
                <label>Color</label>
                <input type = "text" value={color} onChange = { (e) => setColor(e.target.value)} />
                <input type ="submit" value="Add" />                
            </form>
        </>
    )
}

export default Form;


