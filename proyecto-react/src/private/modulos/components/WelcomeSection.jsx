import Proptypes from 'prop-types';
import "../../../styles/dashboard/WelcomeSection.css"

export function WelcomeSection({menuOpen,loading,userEmail,Lupa}){
    return(

        <section className="bienvenido">

                <section className={menuOpen ? "Bienvenido__texto--abierto ": "Bienvenido__texto" }>
                    <h1 >Bienvenido {loading ? 'Cargando...': userEmail}</h1>
                    <p>Opciones disponibles para acceder</p>
                </section>
                
            </section>

    )
}

WelcomeSection.propTypes = {
    menuOpen: Proptypes.bool.isRequired,
    loading: Proptypes.bool.isRequired,
    userEmail: Proptypes.string.isRequired,
    Lupa: Proptypes.string.isRequired
}