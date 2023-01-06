import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static target = "menu"
  connect() {
    console.log("hello from navbar")
  }

  menuDeroulant() {
    var x = document.getElementById("myTopnav");
    if (x.className === "content-navbar") {
      x.className += " responsive";
    } else {
      x.className = "content-navbar";
    }
  }
}
