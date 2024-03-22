import React from 'react';
import "./HomePage.css"
import gif1 from '../assets/img/bibeo2.jpg';
import {Link} from "react-router-dom";
export function EndPage() {
    return (

        <>

            <div className="card">
                    <img style={{width: '40%'}} src={gif1} alt="birthday" className="birthday" />
                <div className="text">
                    {/*<h1>Happy Birthday!</h1>*/}
                    <h3>Vẫn chưa hết đâu vợ nhé keke, điều kiện để nhận được món quà trên là phải hôn người tặng 100 cái liên tục nha🥰🥰</h3>
                    <h2>LOVE YOUU❤️❤️❤️</h2>

                    <div className="mt-4">
                    </div>
                    <p>Bây giờ chúng mình cùng xem lại những kỷ niệm ngày 21/03/2024 nhá keke</p>
                    <p>Vì anh làm vội nên bố cục chưa được đẹp, vợ iu xem đỡ nha hí hí ^^ (canh lề bằng những dòng code khó quó vợ uii😭)</p>

                    <Link to="/viewImg210324">
                        <button className="btn btn-primary">Vợ kích vào đây để típ tục nhóe❤️❤️</button>
                    </Link>
                </div>
                <div className="space"></div>
            </div>
        </>
    )
}