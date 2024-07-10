import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Success from "./pages/SuccessPage";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader/Preloader";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";

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
      <div>
        <Helmet>
          <title>Minh — Frontend Developer & Designer</title>
          <meta
            name="description"
            content="I create elevating digital experiences that inspire and connect with people through design and development"
          />
          <meta name="keywords" content="Portfolio" />
          <meta name="author" content="Minh" />
          <meta
            property="og:title"
            content="Minh | Frontend Developer & Web Designer"
          />
          <meta
            property="og:description"
            content="I create elevating digital experiences that inspire and connect with people through design and development"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image"
            content="https://www.sogaiart.com/opengraph-image.png?7da4453306bf765e"
          />
          <meta property="og:url" content="https://liiana.vercel.app/" />
        </Helmet>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
};

export default App;
