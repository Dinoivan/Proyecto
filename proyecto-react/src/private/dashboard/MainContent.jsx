import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../styles/dashboard/MainContent.css"
import { UserInformation} from '../../services/dashboard/DashboardService';
import { DashboardState } from "../../hooks/dashboard/DashboardState";
import {useAuth} from '../../contexts/Authutils';
import { useEffect } from "react";

export function MainContent(){

    return(

        <main className="Principal">
            <section className="Principal__titulo">
                <h1>Módulos activos</h1>
            </section>

            <section className="Principal__modulos">

                <article className="Principal__modulos--contenido">
                    <section className="Contenido">
                        <section className="Contenido__importaciones">
                            <span></span>
                        </section>
                        <h1>Importaciones</h1>
                        <p>Coordinación, control y optimización</p>
                    </section>

                    <section className="Icono">
                        <span><FontAwesomeIcon icon={faArrowRight}/></span>
                    </section>
                </article>

                <article className="Principal__modulos--contenido">
                    <section className="Contenido">
                        <section className="Contenido__exportaciones">
                            <span></span>
                        </section>
                        <h1>Exportaciones</h1>
                        <p>Registro de documentación para venta</p>
                    </section>

                    <section className="Icono">
                        <span><FontAwesomeIcon icon={faArrowRight}/></span>
                    </section>
                </article>

                <article className="Principal__modulos--contenido">
                    <section className="Contenido">
                        <section className="Contenido__reclamaciones">
                            <span></span>
                        </section>
                        <h1>Reclamaciones</h1>
                        <p>Inicio y seguimiento</p>
                    </section>

                    <section className="Icono">
                        <span><FontAwesomeIcon icon={faArrowRight}/></span> 
                    </section>

                </article>

            </section>


            <section className="Principal__titulo">
                <h1>Gestión de Usurios</h1>
            </section>

            <section className="Principal__modulos">

                <article className="Principal__modulos--contenido">
                    <section className="Contenido">
                        <section className="Contenido__importaciones">
                            <span></span>
                        </section>
                        <h1>Mantenimiento de usuario</h1>
                        <p>Coordinación, control y optimización</p>
                    </section>

                    <section className="Icono">
                        <span><FontAwesomeIcon icon={faArrowRight}/></span>
                    </section>
                </article>

                <article className="Principal__modulos--contenido">
                    <section className="Contenido">
                        <section className="Contenido__exportaciones">
                            <span></span>
                        </section>
                        <h1>Gestión de Roles</h1>
                        <p>Registro de documentación para venta</p>
                    </section>

                    <section className="Icono">
                        <span><FontAwesomeIcon icon={faArrowRight}/></span>
                    </section>
                </article>
            </section>


            <section className="Principal__titulo">
                <h1>Parametrizaciones de sistema</h1>
            </section>

            <section className="Principal__modulos">

                <article className="Principal__modulos--contenido">
                    <section className="Contenido">
                        <section className="Contenido__importaciones">
                            <span></span>
                        </section>
                        <h1>Mantenimiento de tablas</h1>
                        <p>Coordinación, control y optimización</p>
                    </section>

                    <section className="Icono">
                        <span><FontAwesomeIcon icon={faArrowRight}/></span>
                    </section>
                </article>

                <article className="Principal__modulos--contenido">
                    <section className="Contenido">
                        <section className="Contenido__exportaciones">
                            <span></span>
                        </section>
                        <h1>Carga de Proveedores</h1>
                        <p className="ajuste">Carga masiva de excel</p>
                        <p>Carga manual</p>
                    </section>

                    <section className="Icono">
                        <span><FontAwesomeIcon icon={faArrowRight}/></span>
                    </section>
                </article>

                <article className="Principal__modulos--contenido">
                    <section className="Contenido">
                        <section className="Contenido__reclamaciones">
                            <span></span>
                        </section>
                        <h1>Reclamos y Exportaciones</h1>
                        <p>Control de reclamos y exportaciones</p>
                    </section>

                    <section className="Icono">
                        <span><FontAwesomeIcon icon={faArrowRight}/></span> 
                    </section>

                </article>

            </section>




        </main>

    );

}