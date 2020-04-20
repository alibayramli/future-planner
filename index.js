function getDate() {
  let date = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = date;
  setTimeout(getDate, 1000);
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
