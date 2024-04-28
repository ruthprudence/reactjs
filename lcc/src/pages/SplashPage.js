import React, { useState } from 'react';

const SplashPage = () => {
    const [zipCode, setZipCode] = useState('');

    const handleInputChange = (event) => {
        setZipCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("ZIP Code entered:", zipCode);
        // Here you can add logic to handle the ZIP code (e.g., store, search, etc.)
    };

    return (
        <div style={{ margin: '50px' }}>
            <h1>Welcome to Our Event Platform!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={zipCode}
                    onChange={handleInputChange}
                    maxLength="5"
                    placeholder="Enter your ZIP code"
                    style={{ padding: '10px', fontSize: '16px', margin: '10px 0' }}
                />
                <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
            </form>
        </div>
    );
};

export default SplashPage;
