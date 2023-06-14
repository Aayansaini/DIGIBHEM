const customerName = document.getElementById("customer-name");
const checkInDate = document.getElementById("check-in-date");
const totalDays = document.getElementById("total-days");
const totalPerson = document.getElementById("total-person");
const amenities = document.getElementById("amenities");
const advanceAmount = document.getElementById("advance-amount");

const customerDetails = JSON.parse(localStorage.getItem("customer-details"));

const {
  customerNameVal,
  checkInDateVal,
  totalDaysVal,
  totalPersonVal,
  amenitiesVal,
  advanceAmountVal,
} = customerDetails;

customerName.innerText = customerNameVal;
checkInDate.innerText = checkInDateVal;
totalDays.innerText = totalDaysVal;
totalPerson.innerText = totalPersonVal;
amenities.innerText = amenitiesVal;
advanceAmount.innerText = advanceAmountVal;
