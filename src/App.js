import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import Cart from './components/ShoppingCart/Cart';                      // کامپوننت سبد خرید | Cart component
import HeroSection from './components/Home/HeroSection';               // بخش ابتدایی صفحه اصلی | Hero section
import WomenWearGallery from './components/Products/WomenWearGallery'; // گالری پوشاک زنانه | Women's gallery
import KidsWearGallery from './components/Products/KidsWearGallery';   // گالری پوشاک بچگانه | Kids gallery
import MenWearGallery from './components/Products/MenWearGallery';     // گالری پوشاک مردانه | Men's gallery
import Navbar from './components/Home/Navbar';                         // نوار ناوبری | Navigation bar
import { Datawomen, Datakids, Datamen } from './components/Products/data'; // داده‌های محصولات | Product data
import ProductDetails from './components/ProductDetails/ProductDetails';   // جزئیات محصول | Product details

// تعریف کامپوننت اصلی برنامه | Define main App component
function App() {
  const [filteredData, setFilteredData] = useState([]);               // نتایج جست‌وجو | Search results
  const [isResultsVisible, setIsResultsVisible] = useState(false);    // وضعیت نمایش نتایج | Visibility of results

  // هندل کردن جست‌وجو | Handle search input
  const handleSearch = (query) => {
    if (query) {
      const allData = [...Datawomen, ...Datakids, ...Datamen];        // ترکیب همه داده‌ها | Combine all product data
      const results = allData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())        // فیلتر بر اساس عنوان | Filter by title
      );
      setFilteredData(results);
      setIsResultsVisible(true);
    } else {
      setFilteredData([]);
      setIsResultsVisible(false);
    }
  };

  // بستن نتایج جست‌وجو | Close search results
  const handleCloseResults = () => {
    setIsResultsVisible(false);
  };

  return (
    <BrowserRouter>
      <div>
        {/* نوار ناوبری با قابلیت جست‌وجو | Navbar with search */}
        <Navbar
          onSearch={handleSearch}
          results={filteredData}
          isVisible={isResultsVisible}
          onClose={handleCloseResults}
        />

        {/* مسیرهای صفحات مختلف | Application routes */}
        <Routes>
          <Route path="/WomenWearGallery" element={<WomenWearGallery />} />
          <Route path="/kidsWearGallery" element={<KidsWearGallery />} />
          <Route path="/menWearGallery" element={<MenWearGallery />} />
          <Route path="/" element={<HeroSection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
