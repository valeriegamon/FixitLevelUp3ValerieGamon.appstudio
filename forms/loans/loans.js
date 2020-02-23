/*
FixitLevelUp3ValGamon

Level Up Fixits are a complete program that uses any of the concepts and skills you learned in this level.
You will be writing a JS program using appStudio, and will incorporate the use of GitHub branches and master for your work process. 
You will turn in the url of your GitHub master as well as turn in the zipped appStudio project file.

Fixit Requirements

-functions carLoanPayment and homeLoanPayment, both with 3 arguments.
-carLoanPayment returns monthly car payment amount
-homeLoanPayment returns monthly home payment for 15 or 30 years.
-Asks user which loan to calculate and gets 3 data items.
-output in popup using template literals
-program keeps running until user says they want to stop
-in GitHub (2 branches merged into master when done) with url
-Code runs correctly without any errors. 

Scenario: 
You are creating an app for a financial institution to give out free to customers. 
It will provide customers with a way to calculate monthly payments for car loans and home loans given:
a specific amount of the loan, timeframe, and interest rate. 

Assume no down-payments. 

*/


//DECLARE FUNCTIONS
function carLoanPayment(months, principal, rate) {
  return (principal*(rate/12))+(principal/months)
  }


function houseLoanPayment(mon, prin, rat) {
  return (prin*(rat/12))+(prin/mon)
  }

//MAIN CODE


let choice = (prompt('Do you need a home loan calculation, or a car loan calculation? ("Home" or "Car")'));

if (choice == 'Car') {
    let months = Number(prompt('How many months will you be paying off your car?'));
    let principal = Number(prompt('What is the principal amount on your car?'));
    let rate = Number(prompt('What is the yearly interest rate on your car? (Enter in Decimal form): '));

    var monthlyCarPayment = carLoanPayment(months, principal, rate);

    console.log(`Your monthly car payment will be approximately $ ${monthlyCarPayment}.00.`);
    alert(`A car loan for $ ${principal} over ${months} months at yearly interest of  ${rate} would have a monthly payment of $ ${monthlyCarPayment}.`);
    
} else if  (choice == 'Home') {
    let mon = Number(prompt('How many months will you be paying off your house? (15 years = 180 months, 30 years = 360 months)')); 
    let prin = Number(prompt('What is the principal amount on your house?'));
    let rat = Number(prompt('What is the yearly interest rate on your house? (Enter in Decimal form): '));

    var monthlyHousePayment = houseLoanPayment(mon, prin, rat);

    console.log(`Your monthly house payment will be approximately $ ${monthlyHousePayment}.00.`)
    alert(`A home loan for $ ${prin} over ${mon} months at yearly interest of ${rat} would have a monthly payment of $ ${monthlyHousePayment}.`);
  
  } else {
    alert('Sorry, I cannot help you today.');
    }









