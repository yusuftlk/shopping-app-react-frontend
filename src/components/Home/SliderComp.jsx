import React from "react";
import Slider from "react-slick";

const SliderComp = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        
      };
    return(
        <div>
        <Slider {...settings}>
        
        <div className="!flex items-center font-bold bg-gray-100 px-6">
            <div className="">
                <div className="text-5xl">En kaliteli Ayakkabı</div>
                <div className="text-lg my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptates porro? Magnam aperiam quibusdam, iste soluta eius dicta dolor! Nobis pariatur doloremque minus officiis, quam doloribus quaerat ea laboriosam, exercitationem unde asperiores quibusdam dignissimos corrupti tempora ipsa. Placeat ipsa quod maiores dolore quo, rerum minus et praesentium illo fugit quasi, at nobis assumenda! Veniam enim laboriosam tempora odit similique nulla?</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">incele</div>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f9e087d-1f0f-4b72-8576-b7b7b64e73ae/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png" alt=""/>
        </div>
          <div className="!flex items-center font-bold bg-gray-100 px-6">
          <div className="">
                <div className="text-5xl">En kaliteli Ayakkabı</div>
                <div className="text-lg my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptates porro? Magnam aperiam quibusdam, iste soluta eius dicta dolor! Nobis pariatur doloremque minus officiis, quam doloribus quaerat ea laboriosam, exercitationem unde asperiores quibusdam dignissimos corrupti tempora ipsa. Placeat ipsa quod maiores dolore quo, rerum minus et praesentium illo fugit quasi, at nobis assumenda! Veniam enim laboriosam tempora odit similique nulla?</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">incele</div>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34eee066-1d81-4ef1-8ef3-70ea21ac1a24/dunk-high-retro-ayakkab%C4%B1s%C4%B1-NGQKfr.png" alt=""/>
          </div>
          <div className="!flex items-center font-bold bg-gray-100 px-6">
          <div className="">
                <div className="text-5xl">En kaliteli Ayakkabı</div>
                <div className="text-lg my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptates porro? Magnam aperiam quibusdam, iste soluta eius dicta dolor! Nobis pariatur doloremque minus officiis, quam doloribus quaerat ea laboriosam, exercitationem unde asperiores quibusdam dignissimos corrupti tempora ipsa. Placeat ipsa quod maiores dolore quo, rerum minus et praesentium illo fugit quasi, at nobis assumenda! Veniam enim laboriosam tempora odit similique nulla?</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">incele</div>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5ef78991-467a-46bb-919d-c998fbf0e353/air-max-alpha-trainer-5-antrenman-ayakkab%C4%B1s%C4%B1-mgZ1Lq.png" alt=""/>
          </div>
        </Slider>
        </div>
    )
}

export default SliderComp;