function updateTime() {
  /* Los Angles */
  let firstCityElement = document.querySelector("#first-city");
  if (firstCityElement) {
    let firstCityDateElement = firstCityElement.querySelector(".date");
    let firstCityTimeElement = firstCityElement.querySelector(".time");
    let firstCityTime = moment().tz("America/Los_Angeles");
    firstCityDateElement.innerHTML = firstCityTime.format("MMMM Do YYYY");
    firstCityTimeElement.innerHTML = firstCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  /* Sydney */
  let secondCityElement = document.querySelector("#second-city");
  if (secondCityElement) {
    let secondCityDateElement = secondCityElement.querySelector(".date");
    let secondCityTimeElement = secondCityElement.querySelector(".time");
    let secondCityTime = moment().tz("Australia/Sydney");
    secondCityDateElement.innerHTML = secondCityTime.format("MMMM Do YYYY");
    secondCityTimeElement.innerHTML = secondCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#options");

citiesSelectElement.addEventListener("change", updateCity);
