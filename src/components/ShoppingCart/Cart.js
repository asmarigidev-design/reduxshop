import React from 'react';
import formatCurrency from '../Products/util';              // فرمت‌دهی به قیمت | Price formatting utility
import { useSelector, useDispatch } from 'react-redux';     // استفاده از Redux برای مدیریت سبد خرید

// تعریف کامپوننت سبد خرید | Define Cart component
function Cart() {
  const cart = useSelector((store) => store);               // دریافت آیتم‌های سبد خرید از Redux | Get cart items
  const dispatch = useDispatch();                           // ارسال اکشن‌ها به Redux | Dispatch actions

  // تابع جمع قیمت‌ها | Function to calculate total price
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };

  const total = cart.reduce(addition, 0);                   // محاسبه مجموع قیمت | Calculate total price

  return (
    <>
      {/* نمایش آیتم‌های سبد خرید | Display cart items */}
      <div className="cart">
        {
          cart.map(item => {
            console.log(item); // نمایش اطلاعات آیتم در کنسول | Log item data
            return (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="cart-item-text">
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>

                    {/* دکمه حذف از سبد | Remove from cart */}
                    <div className='rebutton'>
                      <button onClick={() => dispatch({ type: "REMOVE", payload: item })}>
                        حذف از سبد
                      </button>
                    </div>

                    <h5>قیمت: {formatCurrency(item.price)}</h5>
                  </div>

                  {/* کنترل تعداد محصول | Quantity controls */}
                  <div className="add-to-cart">
                    <button onClick={() => dispatch({ type: "INCREASE", payload: item })}>+</button>
                    <span>تعداد : {item.quantity}</span>
                    <button onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}>-</button>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>

      {/* نمایش مجموع قیمت یا پیام خالی بودن سبد | Show total or empty cart message */}
      <div className="total">
        {
          total > 0
            ? <p>مجموع قیمت : {formatCurrency(total)}</p>
            : <p>سبد خرید خالی است</p>
        }
      </div>
    </>
  );
}

export default Cart;
