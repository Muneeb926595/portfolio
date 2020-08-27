import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper'
import pic1 from '../../assets/img/blog-1.jpg';
import pic2 from '../../assets/img/blog-2.jpg';
import pic3 from '../../assets/img/blog-3.jpg';


const clients = [
    {
        picture: pic1,
        date: '26 December 2019',
        title: "Client 1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae voluptate repellendus magni illo ea animi?"
    },
    {
        picture: pic2,
        date: '15 July 2017',
        title: "Client 2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae voluptate repellendus magni illo ea animi?"
    },
    {
        picture: pic3,
        date: '11 August 2020',
        title: "Client 3",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae voluptate repellendus magni illo ea animi?"
    }
];

export default function MySlider() {
    const swiper = useRef(null)
    useEffect(() => {
        swiper.current = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            mousewheel: {
                invert: false,
            }
        });
    }, [])

    return (
        <div className="blog-slider swiper-container" style={{ marginleft: '24px', marginRight: '0px', paddingRight: '0px' }}>
            <div className="blog-slider__wrp swiper-wrapper">
                {
                    clients.map((client) => {
                        return (
                            <div className="blog-slider__item swiper-slide">
                                <div></div>
                                <div className="blog-slider__img"><img src={client.picture} /></div>
                                <div className="blog-slider__content"><span className="blog-slider__code">
                                    {client.date}</span>
                                    <div className="blog-slider__title">{client.title}</div>
                                    <div className="blog-slider__text">{client.body}
                                    </div>
                                    <a className="className=&quot;blog-slider__button" href="#">READ MORE</a>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="blog-slider__pagination swiper-pagination"></div>
            </div>
        </div>
    )
}