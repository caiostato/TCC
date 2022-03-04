import './Menu.css';
import buttonHandler from '../Map/demo';
import React, { Component }  from 'react';

export default function menu(){
    return (
        <div className="menu">
            <div className='inside'>
                <h1>HealthMap</h1>
                <input type="input" className="form__field" placeholder="Endereço" name="endereco" id='name' required />
                <button onClick={buttonHandler}>daijdasda</button>
            </div>

        </div>
    );
}