import React from 'react';
import './footer.css';
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
                        <hr/>
                        <div className='redes-sociales'>


                        </div>
                    </div>
                    <hr/>
                    <div className='footer-secundario'>
                        <ul className='list-footer'>
                            <li>
                                <a>Inicio</a>
                            </li>
                            <li>
                                <a>Politica de privacidad</a>
                            </li>
                            <li>
                                <a>Acerca de nosotros</a>
                            </li>
                            <li>
                                <a>Contacto</a>
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
