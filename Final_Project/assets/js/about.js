var i = 0;
var txt = 'About :';
var speed = 170;

(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter-intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
})();


