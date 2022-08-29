export const format = (inputDate) => {
  if(!inputDate) return;
    let day, month, year;
  
    day = `${inputDate.getDate() < 10 ? "0" : ""}${inputDate.getDate()}`;
    month = `${(inputDate.getMonth() + 1) < 10 ? "0" : ""}${inputDate.getMonth() + 1}`;
    year = inputDate.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
