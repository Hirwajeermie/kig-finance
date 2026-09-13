import { BrowserRouter, Routes, Route } from "react-router-dom";
import ElderlyCareHome from "./component/homegage";
import AboutSection from "./component/aboutpage";
import AboutSections from "./component/aboutpages";
import Contactus from "./component/contactus";
import Volunteer from "./component/volunteer";
import Footer from "./component/footer";
import ReadMore from "./pages/readmore";
import MoreExplain from "./pages/morexplain";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ElderlyCareHome />
              <AboutSection />
              <AboutSections />
              <Contactus />
              <Volunteer />
              <Footer />
            </>
          }
        />
        <Route path="/readmore" element={<ReadMore />} />
        <Route path="/morexplain" element={<MoreExplain />} />
      </Routes>
    </BrowserRouter>
  );
}