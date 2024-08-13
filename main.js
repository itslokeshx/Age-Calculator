function calculateAge() {
    var DateofB = new Date(document.getElementById("inputone").value);
    var DateofC = new Date(document.getElementById("inputtwo").value);

    var Year = DateofC.getFullYear() - DateofB.getFullYear();
    var Month = DateofC.getMonth() - DateofB.getMonth();
    var Day = DateofC.getDate() - DateofB.getDate();

    if (Day < 0) {
        Month--;
        Day += new Date(DateofC.getFullYear(), DateofC.getMonth(), 0).getDate();
    }
    if (Month < 0) {
        Year--;
        Month += 12;
    }

    document.getElementById("output").innerHTML = "You are " + Year + " Years " + Month + " Months " + Day + " Days old";
}
