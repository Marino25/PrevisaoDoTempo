import React, { useState, useEffect } from 'react';
import * as S from './styled';
import ModalRoot from '../modal/index';
import api from '../service/apiCapitals';
import apiLat from '../service/apiLatitude';


const Header = () => {
    const [showModal, setShowModal] = React.useState(false);

    const [inputValue, setInputValue] = useState();

    const [capital, setCapitais] = useState({
        "CAPITAL": " ",
        "TMIN18": " ",
        "TMAX18": " ",
        "UMIN18": " ",
        "PMAX12": " "
    }
    );

    const [cordenada, setLatValue] = useState(
        {
            "results": [
                {
                    "address_components": [
                        {
                            "long_name": "",
                            "short_name": "",
                            "types": ["", ""]
                        },

                    ],
                    "formatted_address": "",
                    "geometry": {
                        "bounds": {

                        },
                        "location": {
                            "lat": "",
                            "lng": ""
                        },
                    },
                    "status": ""
                }
            ]
        });

    const [cordenadaFinal, setCordenadaFinal] = useState({});

    /* Get ano/mes/dia para a API */
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = ano + '-' + mes + '-' + dia;
    /* Get ano/mes/dia para a API */

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
    /* Capitais da Esquerda */

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
    /* Capitais da Direita */

    const openModal = () => {
        setShowModal(prev => !prev);

    };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            if (cordenada.status === 'OK') {
                openModal();
                const cordFinal = cordenada.results[0].geometry.location;
                setCordenadaFinal(cordFinal);
            } else {
                alert("Cidade não encontrada ou nome incorreto, tente novamente");
            }
        }
    }

    function imgClick() {
        if (cordenada.status === 'OK') {
            openModal();
            const cordFinal = cordenada.results[0].geometry.location;
            setCordenadaFinal(cordFinal);
        } else {
            alert("Cidade não encontrada ou nome incorreto, tente novamente");
        }
    }
    let REACT_APP_GOOGLE_API_KEY = '';
    useEffect(() => {
        apiLat
            .get(inputValue + REACT_APP_GOOGLE_API_KEY)
            .then((response) => setLatValue(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [inputValue]);



    useEffect(() => {
        api
            .get(dataAtual)
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
                    value={inputValue}
                    onKeyPress={handleKeyPress}
                    placeholder='Insira aqui o nome da cidade'
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <img src="./assets/search.png" alt='Imagem de Lupa' onClick={imgClick} />
                <ModalRoot valueCordenates={cordenadaFinal} showModal={showModal} setShowModal={setShowModal} />
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
                        <h2>{PORTOALEGREMIN}°C</h2>
                        <h2>{BELOHORIZONTEMIN}°C</h2>
                        <h2>{CUIABAMIN}°C</h2>
                        <h2>{RECIFEMIN}°C</h2>
                        <h2>{FORTALEZAMIN}°C</h2>
                    </div>
                    <div class='TempNumbMaxEsq'>
                        <h2>{PORTOALEGREMAX}°C</h2>
                        <h2>{BELOHORIZONTEMAX}°C</h2>
                        <h2>{CUIABAMAX}°C</h2>
                        <h2>{RECIFEMAX}°C</h2>
                        <h2>{FORTALEZAMAX}°C</h2>
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
                        <h2>{RIODEJANEIROMIN}°C</h2>
                        <h2>{SAOPAULOMIN}°C</h2>
                        <h2>{BRASILIAMIN}°C</h2>
                        <h2>{GOIANIAMIN}°C</h2>
                        <h2>{FLORIANOPOLISMIN}°C</h2>
                    </div>
                    <div class='TempNumbMaxDir'>
                        <h2>{RIODEJANEIROMAX}°C</h2>
                        <h2>{SAOPAULOMAX}°C</h2>
                        <h2>{BRASILIAMAX}°C</h2>
                        <h2>{GOIANIAMAX}°C</h2>
                        <h2>{FLORIANOPOLISMAX}°C</h2>
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
