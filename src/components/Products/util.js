// تابع فرمت‌دهی به قیمت | Format price with currency
export default function formatCurrency(num) {
     // تبدیل عدد به سه رقم اعشار و سپس به رشته با جداکننده هزارگان | Format to 3 decimals and localize
     return Number(num.toFixed(3)).toLocaleString() + " تومان";
}
