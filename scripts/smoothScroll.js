// Can be used to smoothly scroll the element on which it is called into the visible area of the browser window.
export default function smoothScroll(element) {
  return document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });
}
