export const convertPLNToUSD = (PLN) => {
  if (
    typeof PLN === 'string' ||
    typeof PLN === 'number' ||
    typeof PLN === 'undefined'
  ) {
    PLN = parseFloat(PLN, 10);
    if (isNaN(PLN)) {
      return NaN;
    }
    if (PLN <= 0) {
      PLN = 0;
    }
    const PLNtoUSD = PLN / 3.5;

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  } else {
    return 'Error';
  }
};
