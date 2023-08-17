export const IMG_URL="http://192.168.188.46/uploads/programs/"

export const dateFunc = (year, month, day) => {
    return `${year}/${month}/${day}`;
  };


  export const CAMP_TYPE = {
    1:  'کمپ',
    2:'هتل',
    3:'کمپ و هتل',
    4:'کمپ یا هتل'
}
   

export const chooseCapmType = (id) => {
    return CAMP_TYPE[id];
  };