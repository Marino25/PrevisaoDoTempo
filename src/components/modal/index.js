import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as S from './styled';
import apiCity from '../service/apiCity';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const ModalRoot = ({ showModal, setShowModal, valueCordenates }) => {
    const [city, setCityValue] = useState(
        { 'name': '', 'url_weather_forecast_15_days': '', 'url_hourly_forecast': '', 'country': '', 'url_country': '', }
    );
    const { lat, lng } = valueCordenates;
    const latitude = `${lat},${lng}`;
    const [loading, setLoading] = useState(false);


    let key_Latitude = '';
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            apiCity
                .get(key_Latitude + latitude)
                .then((response) => setCityValue(response.data))
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [latitude]);


    var cityHome;
    var countryHome;
    var weatherText;
    var weatherNumbMax;
    var weatherNumbMin;
    var weatherHumidity;
    var weatherWind;
    var weatherNumbMaxSeg;
    var weatherNumbMinSeg;
    var weatherNumbMaxTerc;
    var weatherNumbMinTerc;
    var weatherNumbMaxQuart;
    var weatherNumbMinQuart;
    var weatherNumbMaxQuint;
    var weatherNumbMinQuint;
    var weatherNumbMaxSext;
    var weatherNumbMinSext;
    var weatherNumbMaxSab;
    var weatherNumbMinSab;

    if (showModal == true) {

        cityHome = city.locality?.name;
        countryHome = city.locality?.country;
        weatherText = city.day1?.text;
        weatherNumbMax = city.day1?.temperature_max;
        weatherNumbMin = city.day1?.temperature_min;
        weatherHumidity = city.day1?.humidity;
        weatherWind = city.day1?.wind;
        weatherNumbMaxSeg = city.day2?.temperature_max;
        weatherNumbMinSeg = city.day2?.temperature_min;
        weatherNumbMaxTerc = city.day3?.temperature_max;
        weatherNumbMinTerc = city.day3?.temperature_min;
        weatherNumbMaxQuart = city.day4?.temperature_max;
        weatherNumbMinQuart = city.day4?.temperature_min;
        weatherNumbMaxQuint = city.day5?.temperature_max;
        weatherNumbMinQuint = city.day5?.temperature_min;
        weatherNumbMaxSext = city.day6?.temperature_max;
        weatherNumbMinSext = city.day6?.temperature_min;
        weatherNumbMaxSab = city.day7?.temperature_max;
        weatherNumbMinSab = city.day7?.temperature_min;
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '50%',
            bottom: '0',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'url("./assets/backgroundModal.jpg") no-repeat bottom right fixed',
        },
    };



    return (
        <Modal
            isOpen={showModal}
            style={customStyles}
        >
            <>
                <SkeletonTheme color="orange" highlightColor="white">
                    <S.ModalContent>
                        <div className='divContent'>
                            <div className='divTittle'>
                                {loading ? <Skeleton count={1} animation="wave" /> :
                                    <h4>
                                        {cityHome}, {countryHome}
                                    </h4>
                                }
                            </div>
                            <div className='divButton'>
                                <button onClick={() => setShowModal(prev => !prev)}>
                                    <img className='imgclose' src='./assets/cancel.png' alt='Close Button' width='19px' height='19px' />
                                </button>
                            </div>

                            <div className='divPropsTempCenter'>
                                {loading ? <Skeleton count={1} animation="wave" width='500px' height='30px' /> :
                                    <h1> {weatherNumbMax}°C {weatherText}</h1>
                                }
                            </div>

                            {loading ? <Skeleton count={2} variant="rect" width={350} height={40} wrapper='center' /> :
                                <div className='divPropsTemp'>
                                    <div>
                                        <img src='./assets/down-arrow.png' alt='Minimum Temperature' width='18px' height='18px' /><h2>{weatherNumbMin}°</h2>
                                        <img src='./assets/up-arrow.png' alt='Maximum Temperature' width='18px' height='18px' /><h2>{weatherNumbMax}°</h2>
                                        <h4 />
                                        <h3>Sensação 19°C</h3><img src='./assets/termometro.png' alt='thermometer' width='25px' height='25px' />
                                    </div>
                                </div>
                            }
                            {loading ? <Skeleton count={1} variant="rect" width={350} height={40} wrapper='center' /> :
                                <div className='divPropsTemp'>
                                    <div>
                                        <img src='./assets/vento.png' alt='Wind' width='23px' height='23px' />  <h3>Vento {weatherWind} km/hr</h3>
                                        <h4 />
                                        <h3>{weatherHumidity}%</h3><img src='./assets/humidade.png' alt='Rain' width='23px' height='23px' />
                                    </div>
                                </div>
                            }

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
                            {loading ? <Skeleton count={1} animation="wave" width={650} wrapper='center' height={40} /> :
                                <div className='divDaysFooter'>
                                    <div className='divPropsTempFooterSeg'>
                                        <h3>{weatherNumbMinSeg}°</h3> <h3>{weatherNumbMaxSeg}°</h3><h4 />
                                    </div>
                                    <div className='divPropsTempFooterTerc'>
                                        <h3>{weatherNumbMinTerc}°</h3> <h3>{weatherNumbMaxTerc}°</h3><h4 />
                                    </div>
                                    <div className='divPropsTempFooterQuart'>
                                        <h3>{weatherNumbMinQuart}°</h3> <h3>{weatherNumbMaxQuart}°</h3><h4 />
                                    </div>
                                    <div className='divPropsTempFooterQuint'>
                                        <h3>{weatherNumbMinQuint}°</h3> <h3>{weatherNumbMaxQuint}°</h3><h4 />
                                    </div>
                                    <div className='divPropsTempFooterSext'>
                                        <h3>{weatherNumbMinSext}°</h3> <h3>{weatherNumbMaxSext}°</h3><h4 />
                                    </div>
                                    <div className='divPropsTempFooterSab'>
                                        <h3>{weatherNumbMinSab}°</h3> <h3>{weatherNumbMaxSab}°</h3><h4 />
                                    </div>
                                    <div className='divPropsTempFooterDom'>
                                        <h3>{weatherNumbMin}°</h3> <h3>{weatherNumbMax}°</h3>
                                    </div>
                                </div>
                            }
                        </div>
                    </S.ModalContent>
                </SkeletonTheme>
            </>

        </Modal>

    );
}


export default ModalRoot;