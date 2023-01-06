import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}
  function reveal() {
    console.log("im from reveal JS")
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active", "animate__animated", "animate__backInLeft");
      } else {
        reveals[i].classList.remove("active", "animate__animated", "animate__backInLeft");
      }
    }
  }
  window.addEventListener("scroll", reveal);
