import React, { useState, useEffect } from 'react';
import './UrlForm';

const UrlResult = (props) => {
    return(
        <div className="resultContainer">
            <h2>{props.short}</h2>
        </div>
    )
}

export default UrlResult;
