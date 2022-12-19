const ratings = document.getElementsByName("ratings");
const ratings_form = document.getElementById("ratings-form");
const submitBtn = document.getElementById("submit-btn");
const ratings_card = document.getElementById("ratings-card");
const thankyou_card = document.getElementById("thank-you-card");
const user_rating = document.getElementById("user-rating");

//console.log(ratings_form.action);

ratings.forEach((el) => {
  // console.log(el);
  el.addEventListener("click", function (e) {
    // console.log(e.target.checked);
    let cur_rating = e.target.id.split("-");
    console.log(cur_rating);

    user_rating.innerText = cur_rating[cur_rating.length - 1];
  });
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target.id);
  changeState();
});

function changeState(form) {
  ratings_card.style.visibility = "hidden";
  thankyou_card.style.visibility = "visible";
}

// submitBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(e);
//   if ((e.target.classList = "submit-btn")) {
//     console.log(e.target.innerText);
//   }
// });

// function changeState(form) {
//   console.log(form.action);
//   form.action = "index.html";
// }

// ratings.forEach((el) => {
//   console.log(el);
// });

// console.log(ratings);
// for (let i = 0; i < ratings.length; i++) {
//   console.log(ratings[i]);
//   console.log(ratings[i].checked);
// }

function retrieveRating() {
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i].checked) console.log(ratings[i]);
  }
}
