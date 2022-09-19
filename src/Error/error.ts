window.addEventListener("error", (event) => {
  event.preventDefault();
  console.log(event);
});

window.onerror = (event) => {
  console.log(event);
};
