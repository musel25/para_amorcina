const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector(".image-3");
const imageFour= document.querySelector(".image-4");
const imageFive = document.querySelector(".image-5");
const imageSix = document.querySelector(".image-6");
const imageSeven = document.querySelector(".image-7");
const imageEight = document.querySelector(".image-8");

const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

const retro_text = document.querySelector(".retro-text");


function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
  retro_text.textContent = "YAAAYYYYY!!!!!";
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageThree.classList.add("hide");
  imageFour.classList.add("hide");
  imageFive.classList.add("hide");
  imageTwo.classList.remove("hide");
  imageSix.classList.remove("hide");
  imageSeven.classList.remove("hide");
  imageEight.classList.remove("hide");

});
