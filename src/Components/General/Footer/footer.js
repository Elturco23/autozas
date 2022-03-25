import React from 'react';
import './footer.css';
import iconfacebook from '../../../img/facebook-removebg-preview.png';
import iconinstagram from '../../../img/instagram (1).png'
import iconwhatsapp from '../../../img/whatsapp (1).png'
export default function Footer() {
    return (

        <>
            <footer>
                <div className='container-principal-footer'>

                    <div className='footer-primario'>
                        <ul className='list-footer-primario'>
                            <li className='list-footer-primario-li'>
                                <a>AUTOZAS</a>
                            </li>
                        </ul>
                        <hr className='separador-footer'/>
                        <div className='redes-sociales'>
                         <img src={iconfacebook} className='icon-face'/>
                         <img src={iconinstagram} className='icon-insta'/>
                         <img src={iconwhatsapp}className='icon-what'/>
                         

                        </div>
                    </div>
                    <hr className='separador-footer'/>
                    <div className='footer-secundario'>
                        <ul className='list-footer'>
                            <li>
                                <a href='/'>Inicio</a>
                            </li>
                            <li>
                                <a href='/politicaprivacidad'>Politica de privacidad</a>
                            </li>
                            <li>
                                <a href='/quienessomos'>Acerca de nosotros</a>
                            </li>
                            <li>
                                <a href='/contactanos'>Contacto</a>
                            </li>
                            <li>
                                <a href='/faqs'>Preguntas frecuentes</a>
                            </li>

                        </ul>
                        <ul className='list-footer-2'>
                        <li className='list-footer-2-li'>
                                <a >© 2022 Copyright : Autozas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>

    );
}
