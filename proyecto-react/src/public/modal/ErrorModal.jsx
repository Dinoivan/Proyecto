import PropTypes from 'prop-types';
import "../../styles/modal/ErrorModal.css";
import "../../styles/global/button.css";
import { FaTimes,FaCheck,FaExclamationTriangle} from 'react-icons/fa';

export function ErrorModal({ isOpen, onClose, message }) {
    if (!isOpen) return null;
    return (
        <div className="customModal">
            <div className="customModal__content">
                <FaTimes className='color-red' />
                <p className='errorText'>{message}</p>
                <button className='btn btn__primary' onClick={onClose}>Cerrar</button>
            </div>
        </div>     
    );
}

ErrorModal.propTypes = 
{isOpen: PropTypes.bool.isRequired,
onClose: PropTypes.func.isRequired,
message: PropTypes.string.isRequired};


export function Verificacion({isOpen,onClose,data}){
    if(!isOpen)return null;

    return(

   data.title && (
    <div className="customModal">
      <div className="customModal__content">
        {data.icon === 'check' && <FaCheck className='color-green'/>}
        {data.icon === 'times' && <FaTimes className='color-red'/>}
        {data.icon === 'alert' && <FaExclamationTriangle className='color-yellow'/>}
        <p className='errorText'>{data.message}</p>
         <button className='btn btn__primary' onClick={onClose}>Cerrar</button> 
      </div>
    </div>
    )

    );
}