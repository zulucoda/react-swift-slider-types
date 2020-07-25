import React from 'react';
import {arrayOf, exact, string, number, bool} from 'prop-types';

export type SliderItem = {
    id: string;
    src: string;
};

export type SliderProps = {
    data: SliderItem[];
    height?: number;
    interval?: number;
    activeDotColor?: string;
    dotColor?: string;
    showDots?: boolean;
    enableNextAndPrev?: boolean;
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
