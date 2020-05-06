var i = 0;
var txt = 'User Experience Projects';
var speed = 170;

(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
})();