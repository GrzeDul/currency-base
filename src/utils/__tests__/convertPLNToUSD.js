import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text and not a number', () => {
    expect(convertPLNToUSD('54')).toBe('$15.43');
    expect(convertPLNToUSD('one')).toBeNaN();
    expect(convertPLNToUSD('-2')).toBe('$0.00');
    expect(convertPLNToUSD('')).toBeNaN();
  });
  it('should return NaN if input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return string with text error if input is not a number or string', () => {
    expect(convertPLNToUSD(false)).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function () {})).toBe('Error');
  });
  it('should return $0.00 if input is negative number', () => {
    expect(convertPLNToUSD(-0)).toBe('$0.00');
    expect(convertPLNToUSD(-2)).toBe('$0.00');
    expect(convertPLNToUSD(-50)).toBe('$0.00');
    expect(convertPLNToUSD(-118)).toBe('$0.00');
  });
});
