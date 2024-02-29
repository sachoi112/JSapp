const body = document.body;
const firstDiv = document.getElementById("first-div");
const secondDiv = document.getElementById("second-div");
const form = document.querySelector("#login-form");

function paintJangdo() {
  firstDiv.classList.add("jangdo_black");
  body.classList.add("jangdo_yellow");
  secondDiv.classList.add("jangdo_black");
}

paintJangdo();