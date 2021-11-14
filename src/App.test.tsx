/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { App } from './App';

describe('primer test', () => {
  it('qualquer coisa no IT', () => {
    const { getByText, container, getByTestId, queryByText } = render(<App />);
    const title = getByText('mini test');
    expect(title).toBeTruthy();

    const h1 = container.querySelector("[class*='title']");
    console.log(h1?.innerHTML);

    const btn = getByTestId('custom');
    fireEvent.click(btn);
    // title = getByText('mini test');
    expect(queryByText('mini test')).toBeNull();
  });
});
