import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../Assets/styles/Slider.css';
import slider1 from '../Assets/images/sliderimg1.jpg';
import slider2 from '../Assets/images/sliderimg2.jpg';
import slider3 from '../Assets/images/sliderimg3.jpg';
const Slider =()=>{
    const images = [
        slider1,
        slider2,
        slider3,
    ];
    return(
        <>
        <Slide style={{width:"100%"}}>
            <div className="each-slide-effect">
                <div className="slide-image" style={{ 'backgroundImage': `url(${images[0]})` }}>
                    {/* <span>Slide 1</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="slide-image" style={{ 'backgroundImage': `url(${images[1]})` }}>
                    {/* <span>Slide 2</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="slide-image" style={{ 'backgroundImage': `url(${images[2]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
        </Slide>
        </>
    )
}
export default Slider;