const ball = document.getElementById("ball");
const smoke = document.getElementById("smoke");
const sound = document.getElementById("smokeSound");

const results = [
  "ballwithtext1.png",
  "ballwithtext2.png",
  "ballwithtext3.png",
  "ballwithtext4.png",
  "ballwithtext5.png",
  "ballwithtext6.png"
];

let showingResult = false;

ball.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();

  // show smoke
  smoke.style.opacity = 1;

  setTimeout(() => {
    if (!showingResult) {
      // random crystal ball
      const randomBall = results[Math.floor(Math.random() * results.length)];
      ball.src = randomBall;
      showingResult = true;
    } else {
      // go back to normal
      ball.src = "ball.jpg";
      showingResult = false;
    }
  }, 500);

  // hide smoke after 1s
  setTimeout(() => {
    smoke.style.opacity = 0;
  }, 1000);
});
