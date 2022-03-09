import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup);

describe('Contact form component', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm></ContactForm>);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm></ContactForm>);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('text content is accurate', () => {
    it('form has a title', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    });

    it('form button is submit', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})