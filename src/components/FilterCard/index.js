import React from 'react';
import PropTypes from 'prop-types';

const FilterCard = ({ icon, name, children }) => {
    return (
        <div className="card p-3">
            <div className=" d-flex justify-content-between align-items-center">
                <svg width="25" height="25"  >
                    <image xlinkHref={icon} width="20" height="20" />
                </svg>
                <b className="text-primary flex-grow-1 ml-1">{name}</b>
                <i className="fas fa-sort-up align-self-end text-primary"></i>
            </div>
            {children}
        </div>
    );
}

FilterCard.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string
}
export default FilterCard;