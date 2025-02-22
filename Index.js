// a function is helping to increase the like whenever someone click on it
let likeCounter = 0;

const addLike = (incrementBy) => {
  likeCounter += incrementBy;
  document.getElementById("clickButton").innerText = "HELLO INDIA ";
  console.log(likeCounter);
};
// when someone click on the button it will call the addLike function

//addLike(1) is not executed immediately when the script runs.
//Instead, an anonymous arrow function (() => { addLike(1); }) is assigned as the event listener.
//() => { addLike(1); } is an anonymous function (also called a callback function).
//addEventListener("click", callbackFunction) expects a function reference, meaning it won't execute immediately.
//The function is only invoked later, when the event ("click") occurs.

document.getElementById("clickButton").addEventListener("click", () => {
  addLike(1);
});
