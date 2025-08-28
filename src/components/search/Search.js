import React, { useState } from "react";
import './Search.css';
import { FaSearch } from "react-icons/fa";              // آیکون جست‌وجو | Search icon
import { Link } from "react-router-dom";                // لینک‌دهی به صفحات | Routing links
import { useDispatch } from "react-redux";              // ارسال اکشن به Redux | Redux dispatch

// تعریف کامپوننت جست‌وجو | Define Search component
function Search({ onSearch, results, isVisible, onClose }) {
  const [isActive, setIsActive] = useState(false);      // وضعیت فعال بودن نوار جست‌وجو | Search bar toggle
  const [inputValue, setInputValue] = useState("");     // مقدار ورودی جست‌وجو | Search input value
  const dispatch = useDispatch();                       // استفاده از dispatch برای افزودن به سبد خرید

  // تغییر وضعیت نوار جست‌وجو | Toggle search bar visibility
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  // هندل کردن تغییر ورودی و ارسال به تابع جست‌وجو | Handle input change and trigger search
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="searchhh">
      {/* نوار جست‌وجو | Search bar */}
      <div className={`search ${isActive ? 'active' : ''}`}>
        <input
          type="text"
          className="input"
          placeholder="جستجو ..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="btn" onClick={handleButtonClick}>
          <FaSearch />
        </button>
      </div>

      {/* نمایش نتایج جست‌وجو | Search results modal */}
      {isVisible && (
        <div className="results-modal">
          <button onClick={onClose} className="close-btn">بستن</button>
          <div className="results">
            {results.length > 0 ? (
              results.map(item => (
                <div key={item.id} className="product-item">
                  {/* لینک به صفحه جزئیات محصول | Link to product details */}
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.title} />
                    <h3>جزییات</h3>
                  </Link>

                  {/* اطلاعات محصول و دکمه افزودن به سبد خرید | Product info and add-to-cart */}
                  <div className="product-item-text">
                    <div className="product-item-info">
                      <h4>{item.title}</h4>
                      <h5>{item.price} تومان</h5>
                    </div>
                    <div className="add-to-cart">
                      <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>موردی یافت نشد.</p>  // پیام در صورت نبود نتیجه | Message if no results found
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
