import './App.css';
import KeyPadComponent from './Calculator';
import React from 'react'
import Button from "./Button.js";
import image from './me.jpg'
import { useState } from "react";

function DisplayComponent() {
    const [isShown, setIsShown] = useState(false);
    const [ne, setNe] = useState(0);
    const showMe = () => {
        setIsShown(true);
    }

    const showNumber = () => {
        alert(ne);
    }
    return (
        <React.Fragment>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 20,
            }}>
                <Button ClickHandle={showMe} label="Click me" />
                {isShown && <img width={200} src={image} alt="me" />}
                <input type="number" value={ne} onChange={(e) => setNe(e.target.value)} />
                <Button ClickHandle={showNumber} label="Square" />

            </div>
            <KeyPadComponent />
        </React.Fragment>
    );
}

export default DisplayComponent
