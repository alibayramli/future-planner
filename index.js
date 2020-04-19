function getDate() {
  let date = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = date;
  setTimeout(getDate, 1000);
}
getDate();
