import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function Urlshortner() {
    const [originalUrl,setOriginalUrl] = useState('');
    const [shortUrl,setShortUrl] = useState('');
    const [error, setError] = useState('');
    const handlesubmit = async(event) => {
        event.preventDefault();
        setError('');
        try {
            const response= await axios.post('http://localhost:4000/url/shorten',{
                originalUrl:originalUrl
            });
            setShortUrl(response.data.shortUrl);
        } catch (error) {
            setError('Error shortening URL');
        }
    };
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input 
            type="url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Enter your URL" 
            required/>
            <button type='submit'>
                shorten URL
            </button>
        </form>
        {shortUrl && (
                <div>
                    <h2>Shortened URL:</h2>
                    <a
                        href={`http://localhost:4000/url/${shortUrl}`} // Update this to include the full redirect path
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                           {`http://localhost:4000/url/${shortUrl}`}
                    </a>
                </div>
            )}

            {error && <p>{error}</p>}

    </div>
  )
}

export default Urlshortner;
