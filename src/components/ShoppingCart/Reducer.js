// تعریف تابع Reducer برای مدیریت سبد خرید | Define Reducer function for cart management
const Reducer = (cart = [], action) => {

     // افزودن محصول به سبد خرید | Add item to cart
   if (action.type === "ADD") {
     let tempcart = cart.filter((item) => item.id === action.payload.id); // بررسی وجود محصول

     if (tempcart.length < 1) {
          return [...cart, action.payload]; // افزودن محصول جدید
     } else {
          const alertBox = document.createElement("div");
          alertBox.className = "custom-alert";
          alertBox.textContent = "در سبد خرید موجوداست";
          document.body.appendChild(alertBox);

          setTimeout(() => {
               alertBox.remove();
          }, 3000); // حذف خودکار بعد از ۳ ثانیه

          return cart; // بدون تغییر
     }
}

     // حذف محصول از سبد خرید | Remove item from cart
     if (action.type === "REMOVE") {
          return cart.filter((item) => item.id !== action.payload.id);
     }

     // افزایش تعداد محصول | Increase item quantity
     if (action.type === "INCREASE") {
          let tempcart = cart.map((item) => {
               if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
               }
               return item;
          });
          return tempcart;
     }

     // کاهش تعداد محصول | Decrease item quantity
     if (action.type === "DECREASE") {
          let tempcart = cart.map((item) => {
               if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity - 1 };
               }
               return item;
          });
          return tempcart;
     }

     // مقدار پیش‌فرض | Default return
     return cart;
}

// خروجی تابع | Export reducer
export default Reducer;
