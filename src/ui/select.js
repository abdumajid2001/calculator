import React, {useEffect, useState} from 'react';
import {getLanguage} from "../helper/persistance-storege";

const Select = ({select, setSelect}) => {
    const lang = getLanguage('lang')
    const [options, setOptions] = useState([])


    useEffect(() => {
        if (lang === 'ru') {
            setOptions([
                {name: "т", value: 1000},
                {name: "кг", value: 1},
                {name: "г", value: 0.001},
            ])
        } else {
            setOptions([
                {name: "t", value: 1000},
                {name: "kg", value: 1},
                {name: "g", value: 0.001},
            ])
        }
    }, []);

    return (
        <select
            className={`form-select`}
            value={select}
            onChange={(e) => setSelect(e.target.value)}
        >
            {options.map((option, index) => (<option value={option.value} key={index}>{option.name}</option>))}
        </select>
    );
};

export default Select;