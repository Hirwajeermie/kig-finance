import ElderlyCareHome from "./component/homegage";
import AboutSection from "./component/aboutpage";
import AboutSections from "./component/aboutpages";
import Contactus from "./component/contactus";
import Volunteer from "./component/volunteer";
import Footer from "./component/footer";

export default function App() {
  return (
    <>
      <ElderlyCareHome />
      <AboutSection />
      <AboutSections />
      <Contactus />
      <Volunteer />
      <Footer />
    </>
  );
}