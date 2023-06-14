const customerName = document.getElementById("customer-name");
const checkInDate = document.getElementById("check-in-date");
const totalDays = document.getElementById("total-days");
const totalPerson = document.getElementById("total-person");
const amenities = document.getElementById("amenities");
const advanceAmount = document.getElementById("advance-amount");

const form = document.getElementById("form");

const validate = () => {};

form.addEventListener("submit", (e) => {
  var customerNameVal = customerName.value;
  var checkInDateVal = checkInDate.value;
  var totalDaysVal = totalDays.value;
  var totalPersonVal = totalPerson.value;
  var amenitiesVal = amenities.value;
  var advanceAmountVal = advanceAmount.value;
  const info = {
    customerNameVal,
    checkInDateVal,
    totalDaysVal,
    totalPersonVal,
    amenitiesVal,
    advanceAmountVal,
  };
  localStorage.setItem("customer-details", JSON.stringify(info));
});
