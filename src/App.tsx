import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SuccessPage, HomePage } from '@/pages';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader/Preloader';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  });
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
};

export default App;
