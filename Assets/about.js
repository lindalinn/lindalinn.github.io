var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 70;

(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter-intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
})();


