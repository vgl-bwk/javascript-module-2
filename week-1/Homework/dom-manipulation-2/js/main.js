const jumbotron = document.querySelector('.jumbotron');
const donateBtn = document.querySelector('.buttons .btn-primary')
const volunteerBtn = document.querySelector('.buttons .btn-secondary')


const blueBtn = document.querySelector('#blueBtn').addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#588fbd"
    donateBtn.style.backgroundColor = "#ffa500"
    volunteerBtn.style.backgroundColor ="black"
    volunteerBtn.style.color = "white"
})

const orangeBtn = document.querySelector('#orangeBtn').addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#f0ad4e"
    donateBtn.style.backgroundColor = "#5751fd"
    volunteerBtn.style.backgroundColor = "#31b0d5"
    volunteerBtn.style.color = "white"
})

const greenBtn = document.querySelector('#greenBtn').addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#87ca8a"
    donateBtn.style.backgroundColor = "black"
    volunteerBtn.style.backgroundColor = "#8c9c08"
})

const inputEmail = document.querySelector('#exampleInputEmail1');
const inputName = document.querySelector('#example-text-input');
const inputAbout = document.querySelector("#exampleTextarea");
const SubmitBtn = document.querySelector("form button");

function validateInfo(e){
    e.preventDefault()
    if (
      inputEmail.value.trim().length === 0 ||
      inputEmail.value.trim().includes("@") === false
    ) {
      inputEmail.style.backgroundColor = "red";
    } if (inputName.value.trim().length === 0) {
      inputName.style.backgroundColor = "red";
    } if (inputAbout.value.trim().length === 0) {
      inputAbout.style.backgroundColor = "red";
    } else {
      alert("Thank you for filling out the form");
      inputEmail.value = "";
      inputName.value = "";
      inputAbout.value = "";
    }
  }

  SubmitBtn.addEventListener("click", validateInfo);