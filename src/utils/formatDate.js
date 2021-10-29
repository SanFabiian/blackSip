const formatIsoTime = (isoTime) => {
  let date = new Date(isoTime);
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  return date.toLocaleDateString("es-ES", options);
};

export default formatIsoTime;
