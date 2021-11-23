import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const urlForm = () => {

    const baseUrl = "https://api.shrtco.de/v2/";
    const [initialUrl, setInitialUrl] = useState('');
    const [tinyUrl, setTinyUrl] = useState('');

    const handleUrl = async(e) => {
        e.preventDefault();

        try {
            let reqUrl = `${baseUrl}shorten?url=${initialUrl}`
            let urlRes = await axios.get(reqUrl);

            let tinyUrlRes = urlRes.result.short_link;
            setTinyUrl(tinyUrlRes);
            window.location.assign('/url-result');
        } catch (err) {
            alert(err);
        }     
    }
 
    return(
        <div className="container">
            <h3>Easy-to-get compact and short links</h3>
            <img></img>
            <form>
                <input type="text" className="url"/>
                <button type="submit" onClick={handleUrl}>Tinify!</button>
            </form>
        </div>
    )
}

export default urlForm;
