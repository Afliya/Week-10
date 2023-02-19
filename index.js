//Практическое задание 1.
function showX(x) {
  return x;
}
console.log(showX("Я учу JavaScript!"));

//Практическое задание 2.
let image1 = document.getElementById("image1");

function getPicture() {
  image1.src =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-flowers-star-flower-1648071187.jpg";
  image1.alt = "purple flower";
}

function getPicture2() {
  image1.src =
    "https://www.thespruce.com/thmb/c3znkzZgMeuvzBy4wH13jVllfUo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-hero-b10becb169064cc4b3c7967adc1b22e1.jpg";
  image1.alt = "pink flower";
}

//***** Задание под звездочкой**
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    message = "Yes";
  } else {
    message = "No";
  }
  return message;
}
console.log(isLeapYear(2000));
