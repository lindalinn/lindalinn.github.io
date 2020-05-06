var i = 0;
var txt = 'Passion Projects:';
var speed = 100;

(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter-intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
})();
