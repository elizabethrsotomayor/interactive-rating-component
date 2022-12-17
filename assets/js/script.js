const ratings = document.getElementsByName("ratings");
const form = document.getElementById("ratings-form");

ratings.forEach((el) => {
  console.log(el);
});

// console.log(ratings);
// for (let i = 0; i < ratings.length; i++) {
//   console.log(ratings[i]);
//   console.log(ratings[i].checked);
// }

const submitBtn = document.getElementById("submit-btn");

// document.getElementById("ratings-form").action = retrieveRating;

// function retrieveRating() {
//   for (let i = 0; i < ratings.length; i++) {
//     if (ratings[i].checked) console.log(ratings[i]);
//   }
// }
