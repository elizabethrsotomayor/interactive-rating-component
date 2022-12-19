const ratings = document.getElementsByName("ratings");
const submitBtn = document.getElementById("submit-btn");
const ratings_card = document.getElementById("ratings-card");
const thankyou_card = document.getElementById("thank-you-card");
const user_rating = document.getElementById("user-rating");

ratings.forEach((el) => {
  el.addEventListener("click", function (e) {
    let ratings_arr = e.target.id.split("-"); // [ratings,y]
    let cur_rating = ratings_arr[cur_rating.length - 1];

    // To set value for "You selected __ out of 5"
    user_rating.innerText = num_value;
    user_rating.value = num_value;
  });
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // If user_rating == undefined then user has not selected a value
  if (user_rating.value == undefined) {
    alert("Please select a value!");
  } else {
    changeState();
  }
});

function changeState(form) {
  ratings_card.style.visibility = "hidden";
  thankyou_card.style.visibility = "visible";
}
