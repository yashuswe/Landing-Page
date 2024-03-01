import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";
import { Header } from "./Header";

export const Hero: React.FC = () => {
    const images = ['/assets/1.png', '/assets/2.png', '/assets/3.png'];
    return (
       <div>
        <Header/>
         <Carousel images={images} />
        
       </div>
    )


}