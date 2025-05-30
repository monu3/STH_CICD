import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/layout/layout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import GalleryPage from "./pages/gallery-page";
import ServicesPage from "./pages/services-page";
// import PackagesPage from "./pages/packages-page";
import BookingPage from "./pages/booking-page";
import ContactPage from "./pages/contact-page";
import OutletsPage from "./pages/outlets-page";
import "./App.css";
import { GalleryProvider } from "./context/gallery-context";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <GalleryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="services" element={<ServicesPage />} />
              {/* <Route path="packages" element={<PackagesPage />} /> */}
              <Route path="booking" element={<BookingPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="outlets" element={<OutletsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GalleryProvider>
    </ThemeProvider>
  );
}

export default App;
