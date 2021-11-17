import React from 'react'
import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    test('debe de mostrar <GifGridItem /> correctamente', () => {
        
         const wrapper = shallow( <GifGridItem />);

        expect( wrapper ).toMatchSnapshot();

    })
    
})
