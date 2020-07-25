import React from 'react';
import {arrayOf, exact, string, number, bool} from 'prop-types';

type SliderList = {
    id: string;
    src: string;
};

type SliderProps = {
    data: SliderList[];
    height: number;
    interval: number;
    activeDotColor: string;
    dotColor: string;
    showDots: boolean;
    enableNextAndPrev: boolean;
};

export const Slider = (sliderProps: SliderProps) => {
    return <div>Swift - Slider</div>
}
Slider.defaultProps = {
    data: [],
    height: 450,
    activeDotColor: '#e8784e',
    interval: 5000,
    dotColor: '#909192',
    showDots: true,
    enableNextAndPrev: true,
};

Slider.propTypes = {
    data: arrayOf(
        exact({
            id: string.isRequired,
            src: string.isRequired,
        }),
    ).isRequired,
    height: number,
    interval: number,
    activeDotColor: string,
    dotColor: string,
    showDots: bool,
    enableNextAndPrev: bool,
};

export default Slider;
