// a function is helping to increase the like whenever someone click on it
let likeCounter = 0;

const addLike = (incrementBy) => {
  likeCounter += incrementBy;
  document.getElementById("clickButton").innerText = "HELLO INDIA ";
  console.log(likeCounter);
};

document.getElementById("clickButton").addEventListener("click", () => {
  addLike(1);
});
