import React, { useState } from 'react';
import './Component.css'
const Component = () => {
    const [radian,setRadian] = useState(null);
    const [grade,setGrade] = useState(null);
    const [phrase,setPhrase] = useState(" ");

    const toRadian = (radians) => {
        setGrade(radians *  57.296);
    };
    const toDegrees  = (grades) => {
        setRadian(grades *0.01745 );
    };

    const cleanInputGrade = () => {
        setGrade(null);
        setPhrase("Convirtiendo de Grados a Radianes");
    };


    const cleanInputRadian = () => {
        setRadian(null);
        setPhrase("Convirtiendo de Radianes a Grados");
    };



    return (
        <div className="box">
            <h1>{phrase}</h1>
            <p>Radianes:</p>
            <input
                type="number"
                onChange = {e => {toRadian(e.target.value)}}
                value = {radian}
                onClick = {cleanInputRadian}
            />
            <p>Grados</p>
            <input
                type="number"
                onChange = {e => {toDegrees(e.target.value)}}
                value = {grade}
                onClick = {cleanInputGrade}

            />
        </div>

    );
};

export default Component;