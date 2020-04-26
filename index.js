function getDate() {
  let date = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = date;
  setTimeout(getDate, 1000);
  return date;
}
getDate();
function getImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => {
      let imgageSrc = document.getElementById("randpic");
      imgageSrc.src = res.message;
    })
    .catch(() => console.log("error"));
}
getImage();
function timePicker() {
  const time_picker_element = document.querySelector(".time-picker");
  const hr_element = document.querySelector(".time-picker .hour .hr");
  const min_element = document.querySelector(".time-picker .minute .min");
  const hr_up = document.querySelector(".time-picker .hour .hr-up");
  const hr_down = document.querySelector(".time-picker .hour .hr-down");
  const min_up = document.querySelector(".time-picker .minute .min-up");
  const min_down = document.querySelector(".time-picker .minute .min-down");
  const errorMsg = document.querySelector(".error");
  let d = new Date();
  let hour = d.getHours();
  let minute = d.getMinutes();
  setTime();
  hr_up.addEventListener("click", hour_up);
  hr_down.addEventListener("click", hour_down);
  min_up.addEventListener("click", minute_up);
  min_down.addEventListener("click", minute_down);
  function hour_up() {
    if (hour <= 22) {
      hour += 1;
      errorMsg.style.display = "none";
    } else {
      errorMsg.style.display = "block";
    }
    setTime();
  }
  function hour_down() {
    if (hour > d.getHours()) {
      hour--;
      errorMsg.style.display = "none";
    } else {
      errorMsg.style.display = "block";
    }
    setTime();
  }
  function minute_up() {
    minute += 10;
    errorMsg.style.display = "none";
    if (minute > 59) {
      if (d.getHours !== hour) {
        minute = 0;
        if (hour <= 22) {
          hour += 1;
          errorMsg.style.display = "none";
        }
      }
    }
    setTime();
  }
  function minute_down() {
    if (hour === d.getHours() && minute - 10 <= d.getMinutes()) {
      errorMsg.style.display = "block";
    } else {
      minute -= 10;
      errorMsg.style.display = "none";
      if (minute < 0) {
        minute = 50;
        if (hour > d.getHours()) {
          hour--;
          errorMsg.style.display = "none";
        }
      }
    }
    setTime();
  }
  function setTime() {
    hr_element.value = formatTime(hour);
    min_element.value = formatTime(minute);
    time_picker_element.dataset.time =
      formatTime(hour) + ":" + formatTime(minute);
  }
  function formatTime(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }
}
timePicker();
