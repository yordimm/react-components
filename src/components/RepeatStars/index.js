import React from 'react';
import PropTypes from 'prop-types';
import star from '../../assets/recursos/assets/icons/filters/star.svg';
import Star from '../../assets/recursos/assets/icons/filters/star.svg';
import './styles.css';

const RepeatStars = ({ stars }) => {
    const array = Array.from({ length: stars }, (v, i) => i);
    return (
        <div>
            {
                array.length === 0 ?
                    <b> {'Todas las estrellas'}</b> :
                    <div className="d-flex">
                        {array.map((item, index) =>
                                <svg width="20" height="20" key={index}>
                                    <image xlinkHref={star} width="20" height="20" />
                                </svg>
                            )}
                    </div>
            }
        </div>
    )
}
RepeatStars.propTypes = {
    stars: PropTypes.number
}

export default RepeatStars;