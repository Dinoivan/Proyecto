import {Link, NavLink} from 'react-router-dom';
import { faGreaterThan,faTimes,faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../styles/components/SideMenu.css"


export function SideMenu({menuOpen,setMenuOpen}){

    return (
        <section className={`menu__side ${menuOpen ? '': 'menu__side_move'}`}>

            <section className='options__menu'>
                <NavLink exact="true" to="/dashboard">
                    <div className={`option ${menuOpen ? "menuOpen": ""}`}>
                        <section className='option__d'>
                            <span></span>
                        </section>
                        <h4>Principal</h4>
                    </div>
                </NavLink>

                <NavLink exact="true" to="/modulos/importaciones">
                    <div className={`option ${menuOpen ? "menuOpen": ""}`}>
                        <section className='option__i'>
                            <span></span>
                        </section>
                        <h4>Importaciones</h4>
                    </div>
                </NavLink>

                <div className='submenu'>
                    <ul>
                        <li>
                            <NavLink exact="true" to='/modulos/importaciones/pedidos'>
                             <span><em className="icon-nav icon-nav--pedido"></em></span>Lista de pedidos
                            </NavLink>

                            <NavLink exact="true" to='/modulos/importaciones/fichas'>
                             <span><em className="icon-nav icon-nav--pedido"></em></span>Gestión de fichas
                            </NavLink>
                        </li>

                        <li>
                            <NavLink exact="true" to="/modulos/importaciones/seguimiento">
                                <span><em className="icon-nav icon-nav--pedido"></em></span>Seguimiento de Fechas y documento</NavLink>
                                <ul className='sub-submenu'>
                                    <li><NavLink exact="true" to='/modulos/importaciones/seguimiento/seguimiento-lista-ficha'>Lista de Fichas</NavLink></li>
                                    <li><NavLink exact="true" to='/modulos/importaciones/seguimiento/seguimiento-pedido-de-compra'>Lista de Posición Pedido de Compra de Ficha</NavLink></li>
                                    <li><NavLink exact="true" to='/modulos/importaciones/seguimiento/seguimiento-datos-de-ficha'>Seguimiento de Datos Fichas</NavLink></li>
                                    <li><NavLink exact="true" to='/modulos/importaciones/seguimiento/seguimiento-de-documentos'>Seguimiento de Documentos</NavLink></li>  
                                </ul>
                        </li>

                        <li><NavLink exact="true" to='/modulos/importaciones/gestion'><span><em className="icon-nav icon-nav--pedido"></em></span> Gestión EM</NavLink>
                                <ul className='sub-submenu'>
                                    <li><NavLink exact="true" to='/modulos/importaciones/gestion/gestion-em-lista-ficha'>Lista de Fichas</NavLink></li>
                                    <li><NavLink exact="true" to='/modulos/importaciones/gestion/gestion-em-lista-posicion'>Lista de Posición de Pedido de Compra Listo para EM</NavLink></li>
                                    <li><NavLink exact="true" to='/modulos/importaciones/gestion/gestion-em-evidencia'>Evidencia EM</NavLink></li>
                                </ul>
                        </li>

                    </ul>
                </div>

                <NavLink exact="true" to='/modulos/exportaciones'>
                    <div className={`option ${menuOpen ? "menuOpen" : ""}`}>
                        <section className='option__e'>
                            <span></span>
                        </section>
                        <h4>Exportaciones</h4>
                    </div>
                </NavLink>

                <div className='submenu'>
                    <ul>
                        <li><NavLink exact="true" to='/modulos/exportaciones/pedidos'><span><em className="icon-nav icon-nav--gficha"></em></span> Lista de pedidos</NavLink></li>
                        <li><NavLink exact="true" to='/modulos/exportaciones/fichas'><span><em className="icon-nav icon-nav--gsficha"></em></span> Gestión de fichas</NavLink></li>
                        <li><NavLink exact="true" to='/modulos/exportaciones/reporte'><span><em className="icon-nav icon-nav--seguimiento"></em></span>Seguimiento</NavLink></li>
                    </ul>

                </div>

                
                <NavLink exact="true" to='/modulos/reclamaciones'>
                    <div className={`option ${menuOpen ? "menuOpen" : ""}`}>
                        <section className='option__r'>
                            <span></span>
                        </section>
                        <h4>Reclamaciones</h4>
                    </div>
                    </NavLink>
                    <div className='submenu'>
                        <ul>
                            <li><NavLink exact="true" to='/modulos/reclamaciones/nuevo-registro'><span><em className="icon-nav icon-nav--gficha"></em></span> Nuevo registro</NavLink></li>
                            <li><NavLink exact="true" to='/modulos/reclamaciones/gestionar-fichas'><span><em className="icon-nav icon-nav--gsficha"></em></span> Gestión de fichas</NavLink></li>
                        </ul>
                    </div>



                    <Link  to="#">
                    <div className={`option ${menuOpen ? "menuOpen" : ""}`}>
                        <section className='option__user'>
                            <span></span>
                        </section>
                        <h4>Mantenimiento de usuarios</h4>
                    </div>
                    </Link>

            </section>

            <div>
                <div className={menuOpen ? "icon-menu--open": "icon__menu"}>
                    <FontAwesomeIcon icon={ menuOpen ? faGreaterThan  : faLessThan} onClick={() => setMenuOpen(!menuOpen)}/>
                </div>

                <div className="icon__cerrar">
                    <FontAwesomeIcon icon={faTimes} onClick={() => setMenuOpen(!menuOpen)}/>
                </div>
            </div>

        </section>

    );
}