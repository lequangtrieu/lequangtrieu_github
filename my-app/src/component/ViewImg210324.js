import React, { useState, useEffect } from 'react';
import "./HomePage.css"
import img1 from '../assets/img/img_210324/1.jpg';
import img2 from '../assets/img/img_210324/2.jpg';
import img3 from '../assets/img/img_210324/3.jpg';
import img4 from '../assets/img/img_210324/4.jpg';
import img5 from '../assets/img/img_210324/5.jpg';
import img6 from '../assets/img/img_210324/6.jpg';
import img7 from '../assets/img/img_210324/7.jpg';
import img8 from '../assets/img/img_210324/8.jpg';
import img9 from '../assets/img/img_210324/9.jpg';

import audio1 from '../assets/audio/I-Do-911.mp3'
import { Link } from "react-router-dom";

export function ViewImg210324() {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    useEffect(() => {
        const interval = setInterval(() => {
            // Tăng chỉ số ảnh hiện tại lên 1, nếu đã ở ảnh cuối cùng thì quay lại ảnh đầu tiên
            setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // 3 giây

        return () => clearInterval(interval); // Xóa interval khi component unmount
    }, []); // Chạy useEffect một lần sau khi component được render

    return (
        <>
            <div className="card">
                <img style={{ width: '40%' }} src={images[currentImgIndex]} alt="birthday" className="birthday" />
                <div className="text">
                    <h2>Taddaaa, Vợ iuu xem đỡ nha, ít bữa anh sẽ thêm nội dung vô cho vợ đọc nữa nè❤️❤️❤️</h2>
                </div>
                <div className="space"></div>
                <audio src={audio1} controls autoPlay loop style={{ display: 'none' }}/>
            </div>
        </>
    )
}
