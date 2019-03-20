import React from 'react';
import Proptypes from 'prop-types';
import star from '../../assets/recursos/assets/icons/filters/star.svg';
import search from '../../assets/recursos/assets/icons/filters/search.svg';
import FilterCard from '../FilterCard';
import RepeatStars from '../RepeatStars';

const FilterContainer = ({ }) => {
    const options = Array.from({ length: 6 }, (v, i) => i);
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <b>{'Filtros'}</b>
                </div>
            </div>
            <FilterCard icon={search} name={'Nombre Del Hotel'} >
                <div className="d-flex justify-content-between mt-3">
                    <input type="text" placeholder="Ingrese el Nombre del Hotel" />
                    <button className="btn btn-primary" type="button">{'Aceptar'}</button>
                </div>
            </FilterCard>
            <FilterCard icon={star} name={'Estrellas'} >
                <div className="d-flex flex-column">
                    {options.map((option, index) =>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="sede" />
                            <label htmlFor="customRadio1">
                                <RepeatStars stars={option} />
                            </label>
                        </div>
                    )}
                </div>
            </FilterCard>
        </div>
    );
}

FilterContainer.propTypes = {
}
export default FilterContainer;