import React, { useState } from 'react';

const SplashPage = () => {
    // State to hold the input value
    const [inputValue, setInputValue] = useState('');

    // Function to update state based on input changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div id="main" style={{ margin: '50px' }}>
            <h1>Comedy! Comedy!</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                maxLength="25"
                placeholder="Enter text here..."
                style={{ padding: '10px', fontSize: '16px', margin: '10px 0' }}
            />
            <div style={{ marginTop: '20px', fontSize: '20px', color: 'blue' }}>
                {inputValue}
            </div>
        </div>
    );
};

export default SplashPage;
