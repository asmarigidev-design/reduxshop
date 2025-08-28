import React, { useState, useEffect } from 'react';  
import './Slider.css';  
import { Link } from 'react-router-dom';

import image1 from './img/shop.jpg';  
import image2 from './img/shop9.jpg';  
import image3 from './img/shop2.jpg';  
import image4 from './img/shop3.jpg';  
import image5 from './img/shop4.jpg';  
import image6 from './img/shop6.jpg';  
import image11 from './img/red4.jfif'; // تصویر دسته زنانه | Women's category image
import image12 from './img/red6.jfif'; // تصویر دسته بچگانه | Kids category image
import image13 from './img/red3.jfif'; // تصویر دسته مردانه | Men's category image

// آرایه اسلایدها با تصویر و متن | Slides array with image and text
const slides = [  
  { image: image1, text: 'مدل‌های جدید پوشاک برای شما!' },  
  { image: image6, text: 'تجربه‌ی فوق‌العاده خرید آنلاین لباس' },  
  { image: image3, text: 'تخفیف‌های ویژه برای مشتریان جدید' },  
  { image: image4, text: 'مشاوره 24 ساعته برای انتخاب بهترین‌ها' },  
  { image: image5, text: 'تحویل سریع و مطمئن به درب منزل شما' },
  { image: image2, text: 'خرید همزمان برای همه ی اعضای خانواده' }
]; 

// تعریف کامپوننت اسلایدر | Define Slider component
function Slider() {  
  const [currentSlide, setCurrentSlide] = useState(0);  // وضعیت اسلاید فعلی | Current slide index

  // تغییر خودکار اسلاید هر ۵ ثانیه | Auto slide change every 5 seconds
  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);  
    }, 5000);  
    return () => clearInterval(interval);  
  }, []);  

  return (  
    <div className='redu'>  
      <div className='cont'>  
        {/* نمایش اسلایدر | Slider display */}
        <div className="slider-container">  
          {slides.map((slide, index) => (
            <div className={`slide ${currentSlide === index ? 'active' : ''}`} key={index}>  
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />  
              <div className="slide-text">  
                <h2>{slide.text}</h2>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
         
      {/* نمایش دسته‌بندی‌ها | Category cards */}
      <div className='cartparent'>  
        <div className='cartco'>  
          <div className='image' style={{ backgroundImage: `url(${image11})` }}></div>  
          <Link to="/WomenWearGallery">
            <p>زنانه</p>
          </Link>
        </div>  

        <div className='cartco'>  
          <div className='image' style={{ backgroundImage: `url(${image12})` }}></div>  
          <Link to="/KidsWearGallery">
            <p>بچگانه</p>
          </Link>   
        </div>  

        <div className='cartco'>  
          <div className='image' style={{ backgroundImage: `url(${image13})` }}></div>  
          <Link to="/MenWearGallery">
            <p>مردانه</p>
          </Link> 
        </div>  
      </div>  
    </div>  
  );  
}

export default Slider;
