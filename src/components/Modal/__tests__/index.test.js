import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}
const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
    // baseline
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    });

    // snapshot test
    it('matches snapshot DOM node structure', () => {
        // arrange
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
        // assert
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('click event', () => {
    it('calls onClose handler', () => {
        // arrange (render)
        const { getByText } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);

        // act: simulate click event
        fireEvent.click(getByText('Close this modal'));

        // assert (expect matcher)
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})