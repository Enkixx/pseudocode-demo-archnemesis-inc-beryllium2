let weekday = new Date().getDay();
let message = [
    "You should not be here henchman!",
    "Don't allow yourself a case of the \"Mondays\". Make sure you take your manditory mood regulators.",
    "Torture Tuesday has come back around. Don't miss you chance to abuse the bottom 5% of last week's workforce.",
    "Any mention of Hump Day is still expressly forbidden for all of peon rank and below. Don't be a Nancy and report you coworkers today!",
    "All hours are important hours. Make sure you aren't next week's Tuesday reward!",
    "Make sure you signout at the end of the workday. <br>Frivolous Friday;<br>Failures foment fatal force<br>Fools flounder feebly",
    "Your lack of sense is disturbing."
];

let empName = prompt("What is your true name, henchman?");

let isLongWeekend = false; //Will query internal calender for holidays
let wkndMessage = "";

let hoursWorked = 34; //Will query HR Database

if (hoursWorked > 35) {
    alert(`We are currently showing ${hoursWorked} hours worked. Any employee found reporting overtime hours will be terminated with extreme prejudice. Be advised.`);
};

if (isLongWeekend) {
    wkndMessage += "Remember that with the long weekend, you are expected to finish all work in same timeframe. Don't be a Nancy!";
};

document.write(`<h3>Good day henchman, ${empName}. ${message[weekday]} ${wkndMessage}</h3>`)