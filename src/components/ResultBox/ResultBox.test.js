import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
  it('should render component without crash', () => {
    const action = jest.fn();

    // render component
    render(<ResultBox from='PLN' to='USD' amount={100} />);
  });
  const testCases = [
    { amount: '100.00', from: 'PLN', to: 'USD', result: '28.57' },
    { amount: '20.00', from: 'USD', to: 'PLN', result: '70.00' },
    { amount: '200.00', from: 'PLN', to: 'USD', result: '57.14' },
    { amount: '345.00', from: 'USD', to: 'PLN', result: '1,207.50' },
    { amount: '375.00', from: 'USD', to: 'USD', result: '375.00' },
    { amount: '185.00', from: 'PLN', to: 'PLN', result: '185.00' },
  ];

  it('should render proper info about conversion when PLN -> USD', () => {
    for (const test of testCases) {
      // render component
      render(
        <ResultBox
          from={test.from}
          to={test.to}
          amount={parseFloat(test.amount)}
        />
      );
      // find elements
      const result = screen.getByTestId('result-box');
      // check result
      expect(result).toHaveTextContent(
        `${test.from === 'PLN' ? 'PLN ' : '$'}${test.amount} = ${
          test.to === 'PLN' ? 'PLN ' : '$'
        }${test.result}`
      );
      //cleanup
      cleanup();
    }
  });
  const negativeTestCases = [
    { amount: '-100.00', from: 'PLN', to: 'USD' },
    { amount: '-20.00', from: 'USD', to: 'PLN' },
    { amount: '-200.00', from: 'PLN', to: 'USD' },
  ];
  it('should render string : "Wrong value..." if amount is negative', () => {
    for (const test of negativeTestCases) {
      // render component
      render(
        <ResultBox
          from={test.from}
          to={test.to}
          amount={parseFloat(test.amount)}
        />
      );
      // find elements
      const result = screen.getByTestId('result-box');
      // check result
      expect(result).toHaveTextContent('Wrong value...');
      cleanup();
    }
  });
});
