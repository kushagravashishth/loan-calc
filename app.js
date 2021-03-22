document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

function calculateResults(e) {
  console.log("Calculating...");
  //UI vars
  const UIamount = document.getElementById("amount");
  const UIinterest = document.getElementById("interest");
  const UIyears = document.getElementById("years");
  const UImonthly = document.getElementById("monthly-payment");
  const UItotal = document.getElementById("total-payment");
  const UItotalInterest = document.getElementById("total-interest");

  const principal = parseFloat(UIamount.value);
  const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears.value) * 12;

  //computing monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    UImonthly.value = monthly.toFixed(2);
    UItotal.value = (monthly * calculatedPayments).toFixed(2);
    UItotalInterest.value = (monthly * calculatedPayments - principal).toFixed(
      2
    );
  } else {
    showError("Please check your numbers");
  }

  e.preventDefault();
}
