import React from "react";
import FAQs from "../../Components/FAQs/faqs";
import Navbar from "../../Components/General/Navbar/navbar";
import "./faqs.css";
import Footer from '../../Components/General/Footer/footer';
function faqs() {
  return (
    <>
      <Navbar />
      <div class="container container-faqs">
        <FAQs />
      </div>
      <Footer/>
    </>
  );
}

export default faqs;
