import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow,Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./EventSlider.css";
import EventsCard from "../EventsCard/EventsCard";

const EventSlider = ({eventType}) => {
    const sliderSettings = {
        grabCursor: true,
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            850: {
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 4,
            },
        },
    };


    const data = [
        {
            urlImage: "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
            title: "Noteworthy technology acquisitions 2021",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            urlImage: "https://res.infoq.com/articles/hackathon-developer-innovation/en/headerimage/generatedHeaderImage-1662578814159.jpg",
            title: "Noteworthy technology acquisitions 2021",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            urlImage: "https://res.infoq.com/articles/hackathon-developer-innovation/en/headerimage/generatedHeaderImage-1662578814159.jpg",
            title: "Noteworthy technology acquisitions 2021",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            urlImage: "https://res.infoq.com/articles/hackathon-developer-innovation/en/headerimage/generatedHeaderImage-1662578814159.jpg",
            title: "Noteworthy technology acquisitions 2021",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            urlImage: "https://res.infoq.com/articles/hackathon-developer-innovation/en/headerimage/generatedHeaderImage-1662578814159.jpg",
            title: "Noteworthy technology acquisitions 2021",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
    ]
    return (
        <div >
            <div div className="container">
            <h2 class="line-title">{eventType}</h2>
                <Swiper effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {/* slider */}
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <EventsCard card={card} className="card"/>
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <button name="arrow-back-outline">prev</button>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <button name="arrow-forward-outline"> next</button>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>

        </div>
    );
};

export default EventSlider;