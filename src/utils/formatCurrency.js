const formatCurrency = (num, currency) => {
  const options = { style: "currency", currency: currency };
  const format = new Intl.NumberFormat("col-CO", options).format(num);
  return format;
};

export default formatCurrency;
