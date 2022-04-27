/*Elements*/

const imageFrame = document.querySelector("#frame");
const playBack = document.querySelector('#playBack');
const goBack = document.querySelector('#goBack');
const stop = document.querySelector('#stop');
const forward = document.querySelector('#forward');
const play = document.querySelector('#play')

const img1 = "https://images.unsplash.com/photo-1650710690675-4372920a299e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const img2 = "https://images.unsplash.com/photo-1650594122465-7608fcd64620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80";
const img3 = "https://images.unsplash.com/photo-1650727667601-e4c3c05fb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const img4 = "https://images.unsplash.com/photo-1650665930712-d9f9eb576915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";
const img5 = "https://images.unsplash.com/photo-1650759247932-594e6ec18b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80";

const presentation =[img1, img2, img3, img4, img5];
let index = 0

const displayImage = () => {
imageFrame.style.backgroundImage = `url(${presentation[index]})`
};

const moveForward = () => {
  if (index >= presentation.length - 1) {
    index = 0;
  } else {
    index++;
  }
  displayImage();
};

forward.addEventListener("click", () => {
  moveForward();
});

const moveBack = () => {
  if (index === 0) {
    index = presentation.length - 1;
  } else {
    index--;
  }
  displayImage();
};

goBack.addEventListener("click", () => {
  moveBack();
});

const playIt = () => {
  interval = setInterval(moveForward, 1000);
};

const reversePlay = () => {
  interval = setInterval(moveBack, 1000);
};

const stopPlay = () => {
  clearInterval(interval);
};

playBack.addEventListener("click", () => {
  reversePlay();
  backButton.setAttribute("disabled", true);
  forwardButton.setAttribute("disabled", true);
  autoForwardBtn.setAttribute("disabled", true);
});

play.addEventListener("click", () => {
    playIt();
    backButton.setAttribute("disabled", true);
    forwardButton.setAttribute("disabled", true);
    autoBackBtn.setAttribute("disabled", true);
});

stop.addEventListener("click", () => {
    stopPlay();
    backButton.removeAttribute("disabled");
    forwardButton.removeAttribute("disabled");
    autoForwardBtn.removeAttribute("disabled");
    autoBackBtn.removeAttribute("disabled");
});

displayImage();