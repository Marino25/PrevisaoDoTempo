import React, { useState } from 'react';
import * as S from './styled';
import ModalRoot from '../modal/index';


const Header = () => {
    const [showModal, setShowModal] = React.useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <S.WrapperHeader>
            <S.WrapperTittle>
                <S.Tittle> Previsão do Tempo </S.Tittle>
            </S.WrapperTittle>
            <div>
                <input
                    type='text'
                    placeholder='Insira aqui o nome da cidade'>
                </input>
                <img src="./assets/search.png" alt='Imagem de Lupa' onClick={openModal} />
                <ModalRoot showModal={showModal} setShowModal={setShowModal} />
            </div>
            <S.Line />
            <S.WrapperContent>

                <div className='divEsq'>
                    <div className='SubTittleCity'>
                        <h1>Capitais</h1>
                    </div>
                    <div class='GrausEsq '>
                        <h2>Min</h2>
                        <h2>Máx</h2>
                    </div>
                    <div class='TempNumbMinEsq'>
                        <h2>10°</h2>
                        <h2>20°</h2>
                        <h2>30°</h2>
                        <h2>40°</h2>
                        <h2>50°</h2>
                    </div>
                    <div class='TempNumbMaxEsq'>
                        <h2>10°</h2>
                        <h2>20°</h2>
                        <h2>30°</h2>
                        <h2>40°</h2>
                        <h2>50°</h2>
                    </div>
                    <div class='CityNameEsq'>
                        <h4>Porto Alegre</h4>
                        <h4>Belo Horizonte</h4>
                        <h4>Cuiaba</h4>
                        <h4>Recife</h4>
                        <h4>Fortaleza</h4>
                    </div>
                </div>

                <div className='divDir'>
                    <div class='GrausDir '>
                        <h2>Min</h2>
                        <h2>Máx</h2>
                    </div>
                    <div class='TempNumbMinDir'>
                        <h2>10°</h2>
                        <h2>20°</h2>
                        <h2>30°</h2>
                        <h2>40°</h2>
                        <h2>50°</h2>
                    </div>
                    <div class='TempNumbMaxDir'>
                        <h2>10°</h2>
                        <h2>20°</h2>
                        <h2>30°</h2>
                        <h2>40°</h2>
                        <h2>50°</h2>
                    </div>
                    <div class='CityNameDir'>
                        <h4>Rio de Janeiro</h4>
                        <h4>São Paulo</h4>
                        <h4>Brasilia</h4>
                        <h4>Goiania</h4>
                        <h4>Curitiba</h4>
                    </div>
                </div>
            </S.WrapperContent>

        </S.WrapperHeader>

    )
};

export default Header;