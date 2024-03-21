import React, {useEffect, useState} from 'react';
import "./HomePage.css"
import gif1 from '../assets/img/img_vinw.jpg';
import {Link} from "react-router-dom";
import gif2 from "../assets/img/bibeo.jpg";
export function OpenGift3() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showLink, setShowLink] = useState(false);
    const messages = [
        "Đây mới là món quà chính anh muốn tặng vợ nè hihi😘😘😘",
        "Thi xong anh sẽ dẫn vợ đi VinWonder Nam Hội An Nhóe",
        "CẢM ƠN VỢ VÌ ĐÃ LUÔN BÊN CẠNH ANH, LUÔN LUÔN GIỮ ANH LẠI, VÀ...",
        "CẢM ƠN EM YÊU VÌ TẤT CẢ, ANH YÊU EM RẤT NHIỀU❤️❤️❤️",
        "Chưa hết đâu nha keke, vợ hãy bấm vào BIBEO-CUTE để xem hướng dẫn nhận quà nè🥰🥰"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => {
                if (prevIndex === messages.length - 1) {
                    clearInterval(timer); // Dừng đếm khi đã hiển thị hết các tin nhắn
                    return prevIndex;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 6000); // 6 giây

        return () => clearInterval(timer); // Cleanup để tránh rò rỉ bộ nhớ
    }, []);

    useEffect(() => {
        const linkInterval = setInterval(() => {
            setShowLink(true);
            clearInterval(linkInterval); // Dừng interval sau khi đường dẫn được hiển thị
        }, 30000); // 30 giây

        return () => clearInterval(linkInterval); // Cleanup để tránh rò rỉ bộ nhớ
    }, []);

    return (
        <div className="card">
                <img style={{width: '80%'}} src={gif1} alt="birthday" className="birthday" />
            <div className="text">
                {messages.slice(0, currentIndex + 1).map((message, index) => (
                    <h2 key={index} className="my-4">{message}</h2>
                ))}

                {showLink && (
                    <div>
                        <Link to="/end">
                            <img src={gif2} alt="" style={{width: '40%'}}/>
                        </Link>
                    </div>
                )}
            </div>

            <div className="space"></div>
        </div>
    );
}