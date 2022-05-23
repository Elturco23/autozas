import React from 'react';
import Quienessomos from '../../Components/Quienessomos/index';
import Footer from '../../Components/General/Footer/footer';
import Navbar from '../../Components/General/Navbar/navbar';

function index(props) {
    return (
        <>
       
        <Navbar/>
        <div>
            <Quienessomos/>
        </div>
        <Footer/>
        </>
    );
}

export default index;