import React from 'react';  
import { Link } from 'react-router-dom';  
import { IoBasketOutline, IoHomeSharp } from "react-icons/io5";  
import { useSelector } from 'react-redux';  
import Search from '../search/Search.js';  // کامپوننت جست‌وجو | Search component

function Navbar({ onSearch, results, isVisible, onClose }) {  
  const cart = useSelector((store) => store);  // دریافت اطلاعات سبد خرید از Redux | Get cart data from Redux

  return (  
    <nav className="navbar">  
      {/* لینک به صفحه اصلی | Link to homepage */}
      <Link to="/">  
        <IoHomeSharp />  
      </Link>  

      {/* لینک به صفحه سبد خرید | Link to cart page */}
      <Link to="/cart">  
        <div className="right-navbar">  
          <IoBasketOutline />  
          <span className="notif">{cart.length}</span>  {/* تعداد آیتم‌های سبد خرید | Cart item count */}
        </div>  
      </Link>  

      {/* کامپوننت جست‌وجو با ارسال props | Search component with props */}
      <Search
        onSearch={onSearch}
        results={results}
        isVisible={isVisible}
        onClose={onClose}
      />
    </nav>  
  );  
}  

export default Navbar;
