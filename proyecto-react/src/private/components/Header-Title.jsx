import Proptypes from 'prop-types';
import "../../styles/components/Header-Title.css"

export function HeadTitleSection({menuOpen, Titulo}){

    return(

        <section className={menuOpen ? "Headbar": "Headbar--abierto Headbar" }>

            <div className="Headbar__title">
                <h3> {Titulo}</h3>
                <p>Coordinación, control y optimización</p>
            </div>

            <div className="Headbar__acciones">
                <button className="btn btn--ico btn--medium btn__secondary--outline">
                    <i className="bi bi-arrow-repeat"></i>
                    Migrar SAP
                </button>
            </div>  
                
        </section>

    )
}

HeadTitleSection.propTypes = {
    menuOpen: Proptypes.bool.isRequired,
    loading: Proptypes.bool.isRequired,
    Lupa: Proptypes.string.isRequired,
    Titulo: Proptypes.string.isRequired
}