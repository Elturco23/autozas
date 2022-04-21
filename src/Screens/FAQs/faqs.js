import React from "react";
import FAQs from "../../Components/FAQs/faqs";
import Navbar from "../../Components/General/Navbar/navbar";
import "./faqs.css";
import Footer from '../../Components/General/Footer/footer';
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/WhatsApp";
function faqs() {
  return (
    <>
    <Fab color="primary" aria-label="add">
          <AddIcon />
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
          <div className="radar"></div>
        </Fab>
      <Navbar />
      <div className="container container-faqs">
        <FAQs />
      </div>
      <Footer/>
    </>
  );
}

export default faqs;
