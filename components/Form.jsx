"use client"

import React, { useState } from 'react';
import Greeting from './Greeting';

const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name" 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input 
                        id="age" 
                        type="number" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {submitted && <Greeting name={name} age={age} />}
        </div>
    );
};

export default Form;