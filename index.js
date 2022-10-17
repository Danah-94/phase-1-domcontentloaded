// Your code goes here

// change the text on the page when DOM content has loaded
document.addEventListener("DOMContentLoaded", function() {
    let p = document.querySelector("#text");
    p.textContent = "This is really cool!";
  });