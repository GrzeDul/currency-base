export const convertPLNToUSD = (PLN) => {
  if (
    typeof PLN === 'string' ||
    typeof PLN === 'number' ||
    typeof PLN === 'undefined'
  ) {
    let floatPLN = parseFloat(PLN, 10);
    if (isNaN(floatPLN)) {
      return NaN;
    }
    if (floatPLN <= 0) {
      floatPLN = 0;
    }
    const PLNtoUSD = floatPLN / 3.5;

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  } else {
    return 'Error';
  }
};
