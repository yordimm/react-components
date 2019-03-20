import React from 'react';
import PropTypes from 'prop-types';
import RepeatStars from '../RepeatStars'
import './styles.css';

const HotelCard = ({ }) => {
    const array = Array.from({ length: 4 }, (v, i) => i);
    return (
        <div className="card">
            <div className="row card-body" >
                <div className="col-lg-4 col-sm-12">
                    <img src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png" className="img-fluid imageHotel" alt="Responsive image" />
                </div>
                <div className="col-lg-5 col-sm-12 my-3 my-lg-0">
                    <p className="text-primary font-weight-bold">Nombre</p>
                    <RepeatStars stars={4} />
                    <div className="d-flex">
                        {array.map((amenitie, index) =>
                            <img className="amenitie mx-1" src="https://image.flaticon.com/icons/png/512/69/69034.png"
                                data-toggle="tooltip" data-placement="top" title="amenitie" />)}
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 priceHotel text-center">
                    <p> Precio por noche por habitación</p>
                    <div className="d-flex align-items-center">
                        <p className="text-warning divisa">ARS</p>
                        <p className="hotelPrice text-warning">863</p>
                    </div>
                    <button className="btn btn-primary w-100 font-weight-bold">Ver Hotel</button>
                </div>
            </div>
        </div>
    );
}

HotelCard.propTypes = {
    //description: PropTypes.string,
    //name: PropTypes.string
}
export default HotelCard;
