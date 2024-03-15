import PropTypes from 'prop-types';
import "../../styles/modal/ErrorModal.css";
import "../../styles/global/button.css";
import { FaTimes} from 'react-icons/fa';

export function ErrorModal({ isOpen, onClose, message }) {
    if (!isOpen) return null;
    return (
        <div className="errorModal_content">
                <FaTimes size={30} color="red" />
                <p className='errorText'>{message}</p>
                <button className='btn btn__primary' onClick={onClose}>Cerrar</button>
            </div>     
    );
}

ErrorModal.propTypes = 
{isOpen: PropTypes.bool.isRequired,
onClose: PropTypes.func.isRequired,
message: PropTypes.string.isRequired};