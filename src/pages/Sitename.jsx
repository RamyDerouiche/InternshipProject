import React from 'react';

function Sitename({ className = '' }){
    return(
        <span className={`logo d-flex align-items-center ${className}`}>
            <h1 className="sitename mb-0">SmartAssign</h1>
            <span>.</span>
        </span>
    
    )
}

export default Sitename;