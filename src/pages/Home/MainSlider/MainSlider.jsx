
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import image1 from "./img/1.svg"
import image2 from "./img/2.svg"
import image3 from "./img/3.svg"
import image4 from "./img/4.svg"
import MainSlide from './MainSlide';

const data = [
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.",
        title:"Unlock Your Potential with Byway",
        image: image1,
        buttonText: "Start your instructor journey"
    },
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. ",
        title:"Unlock Your Potential with Byway",
        image: image2,
        buttonText: "Start your instructor journey"
    },
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.",
        title:"Unlock Your Potential with Byway",
        image: image3,
        buttonText: "Start your instructor journey"
    },
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.",
        title:"Unlock Your Potential with Byway",
        image: image4,
        buttonText: "Start your instructor journey"
    }
]

const MainSlider = () => {
    return (
        <Swiper
            
            slidesPerView={1}
            >
            {
                data.map((item, i) => {
                    return (
                        <SwiperSlide keyi>
                            <MainSlide {...item}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default MainSlider