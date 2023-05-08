import React, { useState } from 'react'
import { Selector, Option, Container } from './Filter.styles'
import { useDispatch } from 'react-redux';
import { SET_FILTER_TYPE, CLEAN_FILTER_TYPE } from '../../pages/redux/actions/filter_actions';
import { GrClear } from 'react-icons/gr'

export default function Filter({ options }) {

    const dispatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState();

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        dispatch({
            type: SET_FILTER_TYPE,
            payload: event.target.value
        })
    };

    const resetFilter = () => {
        setSelectedOption()
        dispatch({
            type: CLEAN_FILTER_TYPE
        })
    }

    return (
        options &&
        <Container>
            <Selector onClick={handleChange}>
                {options.map((option, i) => (
                    <Option key={i} value={option} color={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Option>
                ))}
            </Selector>
            {selectedOption && <GrClear cursor="pointer" onClick={resetFilter} />}
        </Container>

    );
}
