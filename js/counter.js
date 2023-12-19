var speed = 2000; // Швидкість анімації (у мілісекундах)

var number_year = 8;
var number_exp = 25;

// Функція для анімації числового значення
function animateValue(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Виклик функції для анімації числового значення
animateValue("number_exp", 0, number_exp, speed);
animateValue("number_year", 0, number_year, speed);
