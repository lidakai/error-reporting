window.addEventListener("unhandledrejection", (event) => {
  event.preventDefault();
  console.log(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});

window.onunhandledrejection = (event) => {
  event.preventDefault();
  console.log(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
