import React, { useState } from 'react';
import axios from 'axios';
import hero from '../assets/hero.png';
import '../Global.css';

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
        <>
            <div className="container">
                
                <img src={hero} alt="Person using a computer" />
            
                <div className="formContainer">
                    <h2>Easy-to-get compact and short links</h2>
                    <form>
                        <input type="text" className="url" value={initialUrl} onChange={e => setInitialUrl(e.target.value)}/>
                        <button type="submit" onClick={handleUrl}>Tinify!</button>
                    </form>
                </div>
                
            </div>

            <div className="urlResult">
            <h3>Your link will appear here:</h3>
                <h3><a href={short}>{short}</a></h3>
            </div>
        </>
    )
}

export default UrlGetForm;
