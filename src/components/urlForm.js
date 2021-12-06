import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UrlGetForm = () => {

    const baseUrl = "https://api.shrtco.de/v2/";
    const [initialUrl, setInitialUrl] = useState('');
    const [short, setShort] = useState('');

    const handleUrl = async(e) => {
        e.preventDefault();

        try {
            let reqUrl = `${baseUrl}shorten?url=${initialUrl}`
            let { data } = await axios.get(reqUrl);
            
            setShort(data.result.full_short_link);

        } catch (err) {
            alert(err);
        }     
    }
 
    return(
        <div className="container">
            <h3>Easy-to-get compact and short links</h3>
            <img></img>
            <form>
                <input type="text" className="url" value={initialUrl} onChange={e => setInitialUrl(e.target.value)}/>
                <button type="submit" onClick={handleUrl}>Tinify!</button>
            </form>
            
            <div>
                <h2><a href={short}>{short}</a></h2>
            </div>

        </div>
    )
}

export default UrlGetForm;
