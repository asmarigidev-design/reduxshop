import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';  
import { Datakids } from './data';               // داده‌های محصولات بچگانه | Baby product data
import formatCurrency from './util';            // فرمت قیمت | Price formatting utility
import './Products.css';                        // استایل محصولات | Product styles

function KidsWearGallery() {
  const dispatch = useDispatch();               // برای افزودن به سبد خرید | Redux dispatch
  const navigate = useNavigate();               // برای هدایت به صفحه جزئیات | Navigation hook

  // هدایت به صفحه جزئیات محصول | Navigate to product details
  const handleProductClick = (id) => {  
    navigate(`/product/${id}`);  
  }; 

 
  return (
    <div className="products">
      {
        Datakids.map(item => {
          return (
            <div className="product-item" key={item.id}>
              {/* تصویر محصول با قابلیت کلیک برای جزئیات | Product image with click */}
              <img src={item.image} alt={item.title} 
                onClick={() => handleProductClick(item.id)}
              />

              {/* اطلاعات محصول و دکمه افزودن به سبد خرید | Product info and add-to-cart */}
              <div className="product-item-text">
                <div className="product-item-info" onClick={() => handleProductClick(item.id)}>
                  <h4>{item.title}</h4>
                  <h5>{formatCurrency(item.price)}</h5>
                </div>
                <div className="add-to-cart">
                  <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default KidsWearGallery;
