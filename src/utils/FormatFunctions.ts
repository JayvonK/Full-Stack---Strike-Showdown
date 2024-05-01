export const locationFormat = (locArr: string[]) => {
  let newArr: string[] = [];
  locArr.forEach((loc, idx) => {
    if (loc.trim() !== "") {
      newArr.push(" " + locArr[idx]);
    }
  });

  if(newArr.length !==0 && newArr[newArr.length - 1].includes(",")){
    newArr[newArr.length - 1] = newArr[newArr.length - 1].replace(',', "");
  }
  return newArr.join();
};

export const averageStatFormat = (avg: string) => {
  return avg.split("Avg")[0];
};

export const timeFormat = (time: string) => {
  let hour = Number(time.substring(0, 2));
  let minutes = (time.substring(3));
  let newHour = '';
  if(hour > 12){
    newHour = (hour - 12).toString();
  }else {
    newHour = hour.toString();
  }
  let amOrPm = hour > 12 ? 'pm' : 'am'

  return newHour + ":" + minutes + " " + amOrPm;
}
