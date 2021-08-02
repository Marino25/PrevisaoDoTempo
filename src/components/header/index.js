import React, { useState, useEffect } from 'react';
import * as S from './styled';
import ModalRoot from '../modal/index';
import api from '../service/api';

const Header = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [inputValue, setInputValue] = useState('');
    const [capital, setCapitais] = useState({
        "CAPITAL": " ",
        "TMIN18": " ",
        "TMAX18": " ",
        "UMIN18": " ",
        "PMAX12": " "
    }
    );

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    /* Capitais da Esquerda */
    var PORTOALEGR = capital[18]?.TMIN18;
    var BELOHORIZONT = capital[2]?.TMIN18;
    var CUIAB = capital[6]?.TMIN18;
    var RECIF = capital[20]?.TMIN18;
    var FORTALEZ = capital[9]?.TMIN18;

    var PORTOALEGRE = capital[18]?.TMAX18;
    var BELOHORIZONTE = capital[2]?.TMAX18;
    var CUIABA = capital[6]?.TMAX18;
    var RECIFE = capital[20]?.TMAX18;
    var FORTALEZA = capital[9]?.TMAX18;

    var PORTOALEGREMIN = parseInt(PORTOALEGR);
    var BELOHORIZONTEMIN = parseInt(BELOHORIZONT);
    var CUIABAMIN = parseInt(CUIAB);
    var RECIFEMIN = parseInt(RECIF);
    var FORTALEZAMIN = parseInt(FORTALEZ);

    var PORTOALEGREMAX = parseInt(PORTOALEGRE);
    var BELOHORIZONTEMAX = parseInt(BELOHORIZONTE);
    var CUIABAMAX = parseInt(CUIABA);
    var RECIFEMAX = parseInt(RECIFE);
    var FORTALEZAMAX = parseInt(FORTALEZA);

    /* Capitais da Direita */
    var RIODEJANEIR = capital[22]?.TMIN18;
    var SAOPAUL = capital[25]?.TMIN18;
    var BRASILI = capital[4]?.TMIN18;
    var GOIANI = capital[10]?.TMIN18;
    var FLORIANOPOLI = capital[8]?.TMIN18;

    var RIODEJANEIRO = capital[22]?.TMAX18;
    var SAOPAULO = capital[25]?.TMAX18;
    var BRASILIA = capital[4]?.TMAX18;
    var GOIANIA = capital[10]?.TMAX18;
    var FLORIANOPOLIS = capital[8]?.TMAX18;

    var RIODEJANEIROMIN = parseInt(RIODEJANEIR);
    var SAOPAULOMIN = parseInt(SAOPAUL);
    var BRASILIAMIN = parseInt(BRASILI);
    var GOIANIAMIN = parseInt(GOIANI);
    var FLORIANOPOLISMIN = parseInt(FLORIANOPOLI);

    var RIODEJANEIROMAX = parseInt(RIODEJANEIRO);
    var SAOPAULOMAX = parseInt(SAOPAULO);
    var BRASILIAMAX = parseInt(BRASILIA);
    var GOIANIAMAX = parseInt(GOIANIA);
    var FLORIANOPOLISMAX = parseInt(FLORIANOPOLIS);

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            console.log();

        }
    }

    useEffect(() => {
        api
            .get('2021-08-02')
            .then((response) => setCapitais(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <S.WrapperHeader>
            <S.WrapperTittle>
                <S.Tittle> Previsão do Tempo </S.Tittle>
            </S.WrapperTittle>
            <div>
                <input
                    type='text'
                    value={inputValue}

                    placeholder='Insira aqui o nome da cidade'
                    onChange={(e) => setInputValue(e.target.value)}
                >
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
                        <h2>{PORTOALEGREMIN}°</h2>
                        <h2>{BELOHORIZONTEMIN}°</h2>
                        <h2>{CUIABAMIN}°</h2>
                        <h2>{RECIFEMIN}°</h2>
                        <h2>{FORTALEZAMIN}°</h2>
                    </div>
                    <div class='TempNumbMaxEsq'>
                        <h2>{PORTOALEGREMAX}°</h2>
                        <h2>{BELOHORIZONTEMAX}°</h2>
                        <h2>{CUIABAMAX}°</h2>
                        <h2>{RECIFEMAX}°;/</h2>
                        <h2>{FORTALEZAMAX}°</h2>
                    </div>
                    <div class='CityNameEsq'>
                        <h4>{capital[18]?.CAPITAL}</h4>
                        <h4>{capital[2]?.CAPITAL}</h4>
                        <h4>{capital[6]?.CAPITAL}</h4>
                        <h4>{capital[20]?.CAPITAL}</h4>
                        <h4>{capital[9]?.CAPITAL}</h4>
                    </div>
                </div>

                <div className='divDir'>
                    <div class='GrausDir '>
                        <h2>Min</h2>
                        <h2>Máx</h2>
                    </div>
                    <div class='TempNumbMinDir'>
                        <h2>{RIODEJANEIROMIN}°</h2>
                        <h2>{SAOPAULOMIN}°</h2>
                        <h2>{BRASILIAMIN}°</h2>
                        <h2>{GOIANIAMIN}°</h2>
                        <h2>{FLORIANOPOLISMIN}°</h2>
                    </div>
                    <div class='TempNumbMaxDir'>
                        <h2>{RIODEJANEIROMAX}°</h2>
                        <h2>{SAOPAULOMAX}°</h2>
                        <h2>{BRASILIAMAX}°</h2>
                        <h2>{GOIANIAMAX}°</h2>
                        <h2>{FLORIANOPOLISMAX}°</h2>
                    </div>
                    <div class='CityNameDir'>
                        <h4>{capital[22]?.CAPITAL}</h4>
                        <h4>{capital[25]?.CAPITAL}</h4>
                        <h4>{capital[4]?.CAPITAL}</h4>
                        <h4>{capital[10]?.CAPITAL}</h4>
                        <h4>{capital[8]?.CAPITAL}</h4>
                    </div>
                </div>
            </S.WrapperContent>

        </S.WrapperHeader>

    )
};

export default Header;