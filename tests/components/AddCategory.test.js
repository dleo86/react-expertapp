import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from "enzyme"
import AddCategory from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe de mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = "Hola Mundo";
        input.simulate('change', {
            target: {
                value: value
            }
        });
        expect (wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la información con submit ', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el setCaterogies y limpiar la caja de texto ', () => {
        const value = 'Hola Mundo';
        //1. Simular el inputChange
        wrapper.find('input').simulate('change', {target: {value}});

        //2. Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        //3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();

        //4. el valor del input debe estar en ''
        expect (wrapper.find('input').prop('value')).toBe('');
    })
    
    
})
