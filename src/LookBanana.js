
import React from 'react';  

function LookBanana() {
    return (
        <div>
        <h1>LookBanana</h1>
        <p>Look at this banana!</p>
        
        <img src={process.env.PUBLIC_URL + "/lookbananalogo.png"} alt="Banana" />

        <p>This is very first beginning!</p>
        </div>
    );
}

export default LookBanana;