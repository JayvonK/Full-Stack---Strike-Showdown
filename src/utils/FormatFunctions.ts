import { IUserPosts } from "@/interfaces/Interfaces";

export const locationFormat = (locArr: string[]) => {
  let newArr: string[] = [];
  locArr.forEach((loc, idx) => {
    if (loc.trim() !== "") {
      newArr.push(" " + locArr[idx]);
    }
  });

  if (newArr.length !== 0 && newArr[newArr.length - 1].includes(",")) {
    newArr[newArr.length - 1] = newArr[newArr.length - 1].replace(",", "");
  }
  return newArr.join();
};

export const averageStatFormat = (avg: string) => {
  return avg.split("Avg")[0];
};

export const timeFormat = (time: string) => {
  let hour = Number(time.substring(0, 2));
  let minutes = time.substring(3);
  let newHour = "";
  if (hour > 12) {
    newHour = (hour - 12).toString();
  } else {
    newHour = hour.toString();
  }
  let amOrPm = hour > 12 ? "pm" : "am";

  if (newHour.length === 1) {
    newHour = "0" + newHour;
  }

  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }

  console.log(time);
  return newHour + ":" + minutes + " " + amOrPm;
};

export const editMatchLocationArr = (location: string) => {
  if (location.includes(",")) {
    let locationArr = location.split(",");
    if (locationArr.length === 2) {
      return [locationArr[0], locationArr[1], ""];
    } else {
      return locationArr;
    }
  } else if (location === "Open to any locations") {
    return ["", "", ""];
  } else {
    return [location, "", ""];
  }
};

export const convertToDate = (date: string) => {
  let dateArr = date.split("/");

  let month = Number(dateArr[0]) - 1;
  let day = Number(dateArr[1]);
  let year = Number(dateArr[2]) + 2000;

  return new Date(year, month, day);
};

export const convertTimeBack = (time: string) => {
  let initTimeArr = time.split("-");
  initTimeArr.forEach((t, idx) => {
    if (t.includes("pm")) {
      let arr = t.split(":");
      let newHour = Number(arr[0]) + 12;
      let newMinute = arr[1].substring(0, 2);
      initTimeArr[idx] = newHour.toString() + ":" + newMinute + " pm";
    }
  });
  let timeArr = initTimeArr.join("-").split("-");
  let newTimeArr: string[] = [];
  timeArr.forEach((t) => {
    let string1 = t.replaceAll("-", "");
    let string2 = string1.replaceAll("am", "");
    let string3 = string2.replaceAll(" ", "");
    let string4 = string3.replaceAll("pm", "");

    newTimeArr.push(string4);
  });

  return newTimeArr;
};

export const grabUserPosts = (id: number, posts: IUserPosts[]) => {
  let arr: IUserPosts[] = [];
  posts.forEach(post => {
    if(post.userID === id){
      arr.push(post);
    }
  })
  return arr;
}
