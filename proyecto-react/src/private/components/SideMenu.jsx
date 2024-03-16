import Proptypes from 'prop-types'
import {NavLink} from 'react-router-dom';
import { faGreaterThan,faTimes,faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function SideMenu(){

    return (
        <section className={`menu_side ${menuOpen ? '': 'menu__side_move'}`}>

            <section className='options__menu'>
                <NavLink to="/dashboard">
                    <div className={`option ${menuOpen ? "menuOpen": ""}`}>
                        <section className='Opcion__principal'>
                            <spa></spa>
                        </section>
                        <h4>Principal</h4>
                    </div>
                </NavLink>

                <NavLink to="/modulos/importaciones">
                    <div className={`option ${menuOpen ? "menuOpen": ""}`}>
                        <section className='Option__importaciones'>
                            <span></span>
                        </section>
                        <h4>Importaciones</h4>
                    </div>
                </NavLink>

                <div className='Submenu'>
                    <ul>
                        <li>
                            <NavLink exact to='/modulos/importaciones/pedidos'>

                            </NavLink>
                            
                        </li>

                    </ul>

                </div>

            </section>

        </section>

    );
}