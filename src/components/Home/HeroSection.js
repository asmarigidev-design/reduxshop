import React from 'react'
import Slider from '../slider/Slider.js'; // اسلایدر محصولات یا تبلیغات | Product or promo slider
import Header from './Header.js';         // پیام تخفیف ویژه | Promotional header

// تعریف کامپوننت HeroSection | Define HeroSection component
function HeroSection() {
     return (
          <>
               {/* نمایش پیام تخفیف | Display discount message */}
               <Header />

               {/* نمایش اسلایدر | Display slider */}
               <Slider />   
          </>
     )
}

// خروجی کامپوننت | Export component
export default HeroSection;
