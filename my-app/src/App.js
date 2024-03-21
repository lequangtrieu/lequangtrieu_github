import logo from './logo.svg';
import './App.css';
import {HomePage} from "./component/HomePage";
import {Route, Routes} from "react-router-dom";
import {GiftPage} from "./component/GiftPage";
import {OpenGift1} from "./component/OpenGift1";
import {HideGift} from "./component/HideGift";
import {GiftPage2} from "./component/GiftPage2";
import {OpenGift2} from "./component/OpenGift2";
import {HideGift2} from "./component/HideGift2";
import {GiftPage3} from "./component/GiftPage3";
import {OpenGift3} from "./component/OpenGift3";
import {EndPage} from "./component/EndPage";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/gift" element={<GiftPage/>}></Route>
            <Route path="/open1" element={<OpenGift1/>}></Route>
            <Route path="/hide1" element={<HideGift/>}></Route>
            <Route path="/gift2" element={<GiftPage2/>}></Route>
            <Route path="/open2" element={<OpenGift2/>}></Route>
            <Route path="/hide2" element={<HideGift2/>}></Route>
            <Route path="/gift3" element={<GiftPage3/>}></Route>
            <Route path="/open3" element={<OpenGift3/>}></Route>
            <Route path="/end" element={<EndPage/>}></Route>
        </Routes>
    </>
  );
}

export default App;
