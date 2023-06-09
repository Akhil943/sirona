import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Bestseller() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className=' bg-light bestseller px-3' >
            
            <h3 className='text-center best m-auto' style={{  width: "200px", }}><b>BEST SELLER</b></h3>
            <div className='container my-4'>

                <Slider {...settings}>
                    <div className="card "  >
                        <img src="https://files.thesirona.com/site-images/400x400/medium-menstrual-cup-listing-00.jpg" className="image-fluid " alt="..." />
                        <div className="card-body  text-center ">
                            <h6 className="card-title"><b>MENSTRUAL CUP WITH POUCH</b></h6>
                            <p className="card-text">FDA Approved | 100% medical grade silicone | Reusable</p>
                            <h5>4.8 <i className="fa-solid fa-star" style={{ color: " #ff8ac8", fontSize: "20px", padding: "5px", borderRight: "1px solid grey", }}></i> &nbsp;2671 ratings</h5>
                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 259</b></span> &nbsp; <strike>&#8377; 399</strike>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="https://files.thesirona.com/site-images/400x400/bum-cream-1_1.png" className="image-fluid " alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title"><b>SIRONA NATURAL CREAM</b></h6>
                            <p className="card-text">100gm | Tasmanian Pepper Fruit, Honey & Pumpkin Seed Oil</p>
                            <h5>4.7 <i className="fa-solid fa-star " style={{ color: " #ff8ac8", fontSize: "20px", padding: "5px", borderRight: "2px solid grey", }}></i> &nbsp;122 ratings</h5>
                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 199</b></span> &nbsp; <strike>&#8377; 599</strike>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="https://files.thesirona.com/site-images/400x400/Exfoliating-Facewash_2.jpg" className="image-fluid " alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title"><b>SIRONA NATURAL FACE WASH</b></h6>
                            <p className="card-text">Anti Acne,Reduces Blemishes,Anti Ageing,Facial Cleanser Apricot</p>
                            <h5>4.8 <i className="fa-solid fa-star" style={{ color: " #ff8ac8", fontSize: "20px", padding: "5px", borderRight: "2px solid grey", }}></i> &nbsp;522 ratings</h5>
                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 285</b></span> &nbsp; <strike>&#8377; 375</strike>
                        </div>
                    </div>
                    <div className=" card"  >
                        <img src="https://files.thesirona.com/site-images/400x400/Period-Stain-Remover-1.jpg" className="image-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title"><b>SIRONA STAIN REMOVER</b></h6>
                            <p className="card-text">SIRONA ANTIBACTERIAL PERIOD STAIN REMOVER </p>
                            <h5>4.8 <i className="fa-solid fa-star" style={{ color: " #ff8ac8", fontSize: "20px", padding: "5px", borderRight: "2px solid grey", }}></i> &nbsp;48 ratings</h5>
                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 321</b></span> &nbsp; <strike>&#8377; 349</strike>
                        </div>
                    </div>
                    <div className=" card"  >
                        <img src="https://files.thesirona.com/site-images/400x400/FSp577_1.png" className="image-fluid " alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title"><b>STRETCH MARKS BODY BUTTER</b></h6>
                            <p className="card-text">Stretch Marks,Skin Moisturization with Vit.A,Avocado Oil</p>
                            <h5>4.9 <i className="fa-solid fa-star" style={{ color: " #ff8ac8", fontSize: "20px", padding: "5px", borderRight: "2px solid grey", }}></i> &nbsp;57 ratings</h5>
                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 349</b></span> &nbsp; <strike>&#8377; 499</strike>
                        </div>
                    </div>
                    <div className=" card" >
                        <img src="https://files.thesirona.com/site-images/400x400/peebuddy-disposable-portable-female-urination-device-2_2.jpg " className="image-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title"><b>PEEBUDDY URINATION DEVICE</b></h6>
                            <p className="card-text">Female Urination Device| Portable, Leak-proof Stand and Pee Funnels</p>
                            <h5>4.8 <i className="fa-solid fa-star" style={{ color: " #ff8ac8", fontSize: "20px", padding: "5px", borderRight: "2px solid grey", }}></i> &nbsp;413 ratings</h5>
                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 307</b></span> &nbsp; <strike>&#8377; 325</strike>
                        </div>
                    </div>



                </Slider >
            </div >
        </div >
    )
}


