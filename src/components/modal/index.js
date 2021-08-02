import React from 'react';
import Modal from 'react-modal';
import * as S from './styled';


export const ModalRoot = ({ showModal, setShowModal }) => {


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '50%',
            bottom: '-7%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'url("./assets/backgroundModal.jpg") no-repeat top right fixed',
        },
    };
    return (

        <Modal
            isOpen={showModal}
            style={customStyles}
        >
            <S.ModalContent>
                <div className='divContent'>
                    <div className='divTittle'>
                        <h4>Niteroi, Rj - Brasil</h4>
                    </div>
                    <div className='divButton'>
                        <button onClick={() => setShowModal(prev => !prev)}>
                            <img className='imgclose' src='./assets/cancel.png' alt='Close Button' width='19px' height='19px' />
                        </button>
                    </div>
                    <div className='divPropsTempCenter'>
                        <h1>20°C Nublado</h1>
                    </div>
                    <div className='divPropsTemp'>
                        <div>
                            <img src='./assets/down-arrow.png' alt='Minimum Temperature' width='18px' height='18px' /><h2>16°</h2>
                            <img src='./assets/up-arrow.png' alt='Maximum Temperature' width='18px' height='18px' /><h2>30°</h2>
                            <h4 />
                            <h3>Sensação 19°C</h3><img src='./assets/termometro.png' alt='thermometer' width='25px' height='25px' />
                        </div>
                    </div>
                    <div className='divPropsTemp'>
                        <div>
                            <img src='./assets/vento.png' alt='Wind' width='23px' height='23px' /> <h3>Vento 18 km/hr</h3>
                            <h4 />
                            <h3>Humidade 89%</h3> <img src='./assets/humidade.png' alt='Rain' width='23px' height='23px' />
                        </div>
                    </div>
                    <div className='divLine'>
                        <S.Line />
                    </div>
                    <div className='divPropsTempFooter'>
                        <h2>Segunda</h2>
                        <h2>Terça</h2>
                        <h2>Quarta</h2>
                        <h2>Quinta</h2>
                        <h2>Sexta</h2>
                        <h2>Sabado</h2>
                        <h2>Domingo</h2>
                    </div>
                    <div className='divDaysFooter'>
                        <div className='divPropsTempFooterSeg'>
                            <h3>10°</h3> <h3>20°</h3><h4 />
                        </div>
                        <div className='divPropsTempFooterTerc'>
                            <h3>20°</h3> <h3>30°</h3><h4 />
                        </div>
                        <div className='divPropsTempFooterQuart'>
                            <h3>20°</h3> <h3>30°</h3><h4 />
                        </div>
                        <div className='divPropsTempFooterQuint'>
                            <h3>20°</h3> <h3>30°</h3><h4 />
                        </div>
                        <div className='divPropsTempFooterSext'>
                            <h3>20°</h3> <h3>30°</h3><h4 />
                        </div>
                        <div className='divPropsTempFooterSab'>
                            <h3>20°</h3> <h3>30°</h3><h4 />
                        </div>
                        <div className='divPropsTempFooterDom'>
                            <h3>20°</h3> <h3>30°</h3>
                        </div>
                    </div>
                </div>
            </S.ModalContent>
        </Modal>

    );
}


export default ModalRoot;