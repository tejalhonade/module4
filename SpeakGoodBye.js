(function (window) {

var helloSpeaker = {};

var speakWord = "Hello";


// See Lecture 52, part 2
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}


window.helloSpeaker = helloSpeaker;

})(window);
