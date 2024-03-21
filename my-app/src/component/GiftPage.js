import React from 'react';
import "./HomePage.css"
import gif1 from '../assets/img/gif2.gif';
import {Link} from "react-router-dom";
export function GiftPage() {
    return (

        <>

            <div className="card">
                <Link to="/open1">
                    <img style={{width: '100%'}} src={gif1} alt="birthday" className="birthday" />
                </Link>
                <div className="text">
                    {/*<h1>Happy Birthday!</h1>*/}
                    <h1>IT'S A GIFT</h1>
                    <br/>
                    <p className="size_p_tag">Wowww!! Nó là một món quà, anh và em cùng mở ra xem bên trong có gì nèooo🥰🥰🥰</p>


                </div>
                <div className="space"></div>
            </div>
        </>
    )
}