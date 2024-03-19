import PropTypes from "prop-types"
import { faTimes,faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState,useEffect } from "react"
import { ErrorModal } from "../../ErrorModal"
import { ResposablesExportaciones } from "../../../../services/exportaciones/PedidosPageService"
import { useAuth } from "../../../../contexts/Authutils"

export function CrearFichaModal({isOpen,onClose,title,onSubmit,setDocumentPDF,pedidosSeleccionados,pedidosModal}){

    const [isSubmitClicked,setIsSubmitClicked] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [isErrorModalOpen,setIsErrorModalOpen] = useState(false);
    const [isDocumentSelected,setIsDocumentSelected] = useState(false);
    const [uploadedFile,setUploadedFile] = useState(null);
    const [isFileUploaded,setIsFileUploaded] = useState(false);
    const [userOptions,setUserOptions] = useState(false);

    const {accessToken} = useAuth();

    const [formData,setFormData] = useState({
        proforma_number: "",
        freight_contract_number: "",
        customer_oc_number: "",
        container_type: "",
        responsible_user_comex: "",
        san_juan_de_lurigancho: "",
        la_milla: "",
        punta_hermosa: "",
        trebol_san_martin: "",
        total_containers: "0",
        status: "START",
        status_comment: "",
        via: ""
    });

    if(!isOpen) return null;

    useEffect(() =>{
        async function fetchData(){
            try{
                const result = await ResposablesExportaciones(accessToken)
                setUserOptions(result)
            }catch(error){
                return {error};
            }
        }
        fetchData()
    },[setUserOptions,accessToken])

    const transporteOptions = ["Marítima","Aérea","Terrestre"]

    const handleFileChange = (e) =>{
        const {files} = e.target;

        if(files.lenght > 0){
            setDocumentPDF(files[0])
            setIsDocumentSelected(true);
            setUploadedFile(files[0]);
            setIsFileUploaded(true);
        }else{
            setDocumentPDF(null);
            setIsDocumentSelected(false);
            setUploadedFile(null);
            setIsFileUploaded(false);
        }
    }

    const handleDeleteFile = () =>{
        setDocumentPDF(null);
        setIsDocumentSelected(false);
        setUploadedFile(null);
        setIsFileUploaded(false);
    }

    const truncateFileName = (fileName,maxLenght) =>{
        if(fileName.lenght > maxLenght){
            return fileName.substring(0,maxLenght) + "...";
        }else{
            return fileName;
        }
    }

    const handleChange = (e) =>{
        const {name,value,type,files} = e.target;

        if(["san_juan_de_lurigancho","la_milla","punta_hermosa","trebol_san_martin"].includes(name)){
            const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;

            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: type === 'file' ? files[0]: numericValue,
            }));
        
        setFormData((prevFormData) =>   {
            const sum = parseFloat(prevFormData.san_juan_de_lurigancho || 0) +
            parseFloat(prevFormData.la_milla || 0) +
            parseFloat(prevFormData.punta_hermosa || 0) +
            parseFloat(prevFormData.trebol_san_martin || 0);

            return {
                ...prevFormData,
                total_containers: sum.toString(),
            };
        });
    }else{
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'file' ? files[0]: value,
        }))
    }
  };

  

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!formData.proforma_number || !formData.container_type ||
        !formData.responsible_user_comex || !isDocumentSelected ||
        !formData.via){
            setIsErrorModalOpen(true);
            return;
        }
        setIsLoading(true);
        try{
            const response = await onSubmit(formData);
        }catch(error){
            console.error("Error al crear ficha");
        }finally{
            setIsLoading(false);
        }
  }

  return (
    <>
    <div className="customModal">
        <div className="customModal__content">
            {pedidosSeleccionados.lenght === 0 ? (
                <>
                <ErrorModal isOpen={true} onClose={onClose} message="Selecciona la menos un pedido para crear ficha"/>
                </>
            ): pedidosSeleccionados.lenght === 1 || new Set(selectedPedidosInfo.map((pedido) => pedido.sell_organization)).size === 1 ?(
                <>
                <div className="direccion">
                    <button className="signup-x" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>
                <h2>{title}</h2>
                 <form onSubmit={handleSubmit} encType="multipart/form-data">

                </form>
                </>
            ):(
                <>
                <ErrorModal isOpen={true} onClose={onClose} message="Error organizaciones de venta diferente."/>
                </>
            )}

        </div>
    </div>
    
    </>

  );


}


CrearFichaModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    setDocumentPDF: PropTypes.func.isRequired,
    pedidosSeleccionados: PropTypes.array.isRequired,
    pedidosModal: PropTypes.array.isRequired,crearFichaStatus: PropTypes.shape({
        success: PropTypes.bool.isRequired,
        message: PropTypes.string
    })

}
