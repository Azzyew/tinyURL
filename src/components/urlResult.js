import React, { useState, useEffect } from 'react';
import './urlForm';

const urlResult = () => {
    return(
        <div className="resultContainer">
            <h2>{tinyUrl}</h2>
        </div>
    )
}

export default urlResult;
