export const format = (inputDate) => {
    let day, month, year;
  
    day = `${inputDate.getDate() < 10 ? "0" : ""}${inputDate.getDate()}`;
    month = `${(inputDate.getMonth() + 1) < 10 ? "0" : ""}${inputDate.getMonth() + 1}`;
    year = inputDate.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
