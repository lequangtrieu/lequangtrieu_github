import React from 'react';
import "./HomePage.css"
import {Link} from "react-router-dom";
export function HomePage() {
    return (
        <>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2020/10/06/21/54/cake-5633461__480.png" alt="birthday" className="birthday" />
                <div className="text">
                    <h1>TaDaaa!!!!</h1>
                    <h1>Happy Birthday!</h1>
                    <h1>BI BÉO CUTE</h1>
                    <p className="size_p_tag">Happiest birthday to my darling! Wishing you endless happiness, always the most gorgeous and success in everything you do</p>
                    <h1>LOVE YOUUU FOREVER❤️</h1>

                    <Link to="/gift" className="btn btn-primary" >Kick here to continue</Link>

                    {/*<div className="credit">Made with <span style={{ color: 'tomato' }}>❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div>*/}
                </div>
                <div className="space"></div>
            </div>
        </>
    )
}