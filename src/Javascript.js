function updateTime() {
  /* Los Angles */
  let firstCityElement = document.querySelector("#first-city");
  let firstCityDateElement = firstCityElement.querySelector(".date");
  let firstCityTimeElement = firstCityElement.querySelector(".time");
  let firstCityTime = moment().tz("America/Los_Angeles");
  firstCityDateElement.innerHTML = firstCityTime.format("MMMM Do YYYY");
  firstCityTimeElement.innerHTML = firstCityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  /* Sydney */
  let secondCityElement = document.querySelector("#second-city");
  let secondCityDateElement = secondCityElement.querySelector(".date");
  let secondCityTimeElement = secondCityElement.querySelector(".time");
  let secondCityTime = moment().tz("Australia/Sydney");
  secondCityDateElement.innerHTML = secondCityTime.format("MMMM Do YYYY");
  secondCityTimeElement.innerHTML = secondCityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
