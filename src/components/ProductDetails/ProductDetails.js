import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Datawomen, Datakids, Datamen } from  '../Products/data'; // داده‌های محصولات | Product datasets
import formatCurrency from '../Products/util';               // فرمت قیمت | Price formatting utility
import './ProductDetails.css';                               // استایل کامپوننت | Component styles

function ProductDetails() {
  const { id } = useParams();         // دریافت شناسه محصول از URL | Get product ID from URL
  const navigate = useNavigate();     // برای برگشت به صفحه قبل | Navigation hook

  // ترکیب همه داده‌ها | Combine all product data
  const allData = [...Datawomen, ...Datakids, ...Datamen];
  const product = allData.find(item => item.id === parseInt(id)); // پیدا کردن محصول با شناسه | Find product by ID

  // بستن پنجره با کلیک بیرون از مودال | Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.className === 'product-details-modal') {
        navigate(-1); // برگشت به صفحه قبل | Go back
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [navigate]);

  // اگر محصول پیدا نشد | If product not found
  if (!product) {
    return <p>محصول یافت نشد.</p>;
  }



  // بستن مودال | Close modal
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="product-details-modal">
      <div className="product-details">
        <img src={product.image} alt={product.title}  />
        <h2>{product.title}</h2>
        <h4>جنس: {product.material}</h4>
        <h4>اندازه: {product.size}</h4>
        <h4>{product.cap}</h4>
        <h2>{formatCurrency(product.price)}</h2>
        <button className="close-btn" onClick={handleClose}>بستن</button>
      </div>
    </div>
  );
}

export default ProductDetails;
