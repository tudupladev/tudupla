import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import { MainLayout } from 'layouts';
import AboutUsPage from 'pages/AboutUsPage';
import ContactPage from 'pages/ContactPage';

const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/about" element={<AboutUsPage />} />
        <Route index path="/contact" element={<ContactPage />} />
        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </MainLayout>
  );
};

export default MainRoutes;
