import React from 'react';
import { Carousel } from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';



class SlideHome extends React.Component{

    render(){
        return(
            <Carousel>
            <Carousel.Item>
                <img
                src='https://d26lpennugtm8s.cloudfront.net/stores/001/120/603/themes/amazonas/slide-1595627845828-8184849445-37dcf6c918ca839550dfb98a0a54290b1595627847-1920-1920.jpg?63388772'
                alt="Primer slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='https://images.homify.com/image/upload/a_0,c_fill,f_auto,h_900,q_auto,w_1920/v1440079523/p/photo/image/835354/Ambiente_Zen_blanco_carvalho_aserrado_2_FILEminimizer.jpg'
                alt="Segundo slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='https://cinco25.com/wp-content/uploads/2020/04/homeslide1_3.jpg'
                alt="Tercer slide"
                />
            </Carousel.Item>
            </Carousel>
        )
    }
}

export default SlideHome;