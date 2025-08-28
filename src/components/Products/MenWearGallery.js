import { React, useEffect } from 'react'; 
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Datamen } from './data';               // داده‌های محصولات مردانه | Men's product data
import formatCurrency from './util';            // فرمت قیمت | Price formatting utility

// تعریف کامپوننت گالری پوشاک مردانه | Define MenWearGallery component
function MenWearGallery() {
    const dispatch = useDispatch();                 // برای افزودن به سبد خرید | Redux dispatch
    const navigate = useNavigate();                 // برای هدایت به صفحه جزئیات | Navigation hook
    const location = useLocation();                 // برای تشخیص تغییر مسیر | Detect route changes

    // هدایت به صفحه جزئیات محصول | Navigate to product details
    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    // پیمایش به بالای صفحه هنگام تغییر مسیر | Scroll to top on route change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location]);

    return (
        <>
            <div className="products">
                {Datamen.map(item => {
                    return (
                        <div className="product-item" key={item.id}>
                            {/* تصویر محصول با قابلیت کلیک | Product image with click */}
                            <img 
                                src={item.image} 
                                alt={item.title} 
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
                })}
            </div>
        </>
    );
}

export default MenWearGallery;
