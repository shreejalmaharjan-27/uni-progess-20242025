import './App.css';
import KeyPadComponent from './Calculator';
import React from 'react'
import Button from "./Button.js";
import image from './me.jpg'
import { useState } from "react";

function DisplayComponent() {
    const [isShown, setIsShown] = useState(false);
    const showMe = () => {
        setIsShown(true);
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

            </div>
            <KeyPadComponent />
        </React.Fragment>
    );
}

export default DisplayComponent
