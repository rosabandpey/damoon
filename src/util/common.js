const  convertDate= (i) => {
  if (i > 9) {
    return i.toString();
  } else {
    return `0${i.toString()}`;
  }
};

export default convertDate
