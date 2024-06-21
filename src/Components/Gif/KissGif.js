import './Gif.css';
import React, { useState } from'react';

export default function KissGif() {
    const [text, setText] = useState();

    return (<>
    <div className={`kiss-gif`}>
        <img src={require('./resource/cute-love-kisses-for-you-uujbuokzyop19e4w.gif')}></img>

        <div>
            <p onMouseEnter={() => {
                setText(!text)
            }} className='kiss-text'>
                {text ? <a href='/Card'>Just kidding sayang click here !! </a> : <span> Loading ... </span>}
            </p>
        </div>
    </div>
    </>
    );
}