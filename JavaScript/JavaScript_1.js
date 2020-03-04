function weekday() {
    var day = document.getElementById("input_Day").value;
    var day_output;
    switch (day) {
        case "Monday":
            day_output = "Monday is alright.";
            break;
        case "Tuesday":
            day_output = "Tuesday is the second day from Sunday.";
            break;
        case "Wednesday":
            day_output = "Wednesday is hump day.";
            break;
        case "Thursday":
            day_output = "Thursday is sad cause it's not Friday.";
            break;
        case "Friday":
            day_output = "Friday is the day we party!";
            break;
        case "Saturday":
            day_output = "Saturday is the day we party!";
            break;
        case "Sunday":
            day_output = "Sunday is recovery and then mental prep for Monday.";
            break;
        default:
            day_output = "Please enter the day in english starting with a capital letter."
    }
    document.getElementById("output").innerHTML = day_output;
}

function nameChange() {
    var A = document.getElementsByClassName("Name");
    A[1].innerHTML = "Colemen";
}

var tx = document.getElementById("FirstOne");
var gettx = tx.getContext("2d");
gettx.font = "30px Comic Sans";
gettx.strokeText("How you doin'", 70, 70);

var grad = document.getElementById("gradient");
var gradTx = grad.getContext("2d");

var clr = gradTx.createLinearGradient(10, 10, 170, 10);
clr.addColorStop(0, "black");
clr.addColorStop(1, "blue");

gradTx.fillStyle = clr;
gradTx.fillRect(20, 20, 150, 100);