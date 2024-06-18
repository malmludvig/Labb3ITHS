"use client"
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';
import '@testing-library/jest-dom'


describe('Counter component', () => {
  test('increments the counter when button is clicked', () => {
    render(<Counter />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const counterText = screen.getByText(/You have clicked this 1 times./i);
    expect(counterText).toBeInTheDocument();
  });
});