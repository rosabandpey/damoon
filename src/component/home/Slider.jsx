import SwiperCore, { Navigation, Pagination, Controller, Autoplay,Scrollbar,A11y ,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';
import 'swiper/css';
import styles from './style/slider.module.scss'
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Slider(props) {

    // let pagination = false;
    // if (props?.pagination) {
    //     if (props?.pagination === true) {
    //         pagination = { clickable: true };
    //     } else {
    //         pagination = props?.pagination;
    //     }
    // }

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={0}
        // slidesPerView={3}
       
        // scrollbar={{ draggable: true }}
            dir="rtl"
            grabCursor
            {...props}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
           
            breakpoints={{
                576.1: {
                    spaceBetween: 50
                }
            }}
           
        >
            {
                (props.children || []).map((child, i) => (
                    <SwiperSlide key={i}>
                        {child}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
