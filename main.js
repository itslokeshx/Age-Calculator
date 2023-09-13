
 
function calculateAge(){
    var DateofB = document.getElementById("inputone").value;
    var DateofC = document.getElementById("inputtwo").value;

    var DateofBy = DateofB.slice(0,4);
    var DateofBy =Number(DateofBy);
    var DateofBm = DateofB.slice(5,7);
    var DateofBm =Number(DateofBm);
    var DateofBd =DateofB.slice(8,10);
    var DateofBd =Number(DateofBd);

    var DateofCy = DateofC.slice(0,4);
    var DateofCy =  Number(DateofCy);
    var DateofCm = DateofC.slice(5,7);
    var DateofCm=  Number(DateofCm);
    var DateofCd =DateofC.slice(8,10);
    var DateofCd =Number(DateofCd);
           
    var Year = DateofCy - DateofBy;
    var Month;
    var Day;
    if(DateofCm >= DateofBm){
         Month = DateofCm - DateofBm;
            
         document.getElementById("output").innerHTML = "You are " + Year + " Years " + Month + " Months " + Day + " Days old";
        }
    else if ( DateofCm < DateofBm){
        year = year - 1;
         Month = 12 + (DateofCm - DateofBm);
        
         document.getElementById("output").innerHTML = "You are " + Year + " Years " + Month + " Months " + Day + " Days old";}
    if(DateofCd >= DateofBd){
        Day = DateofCd - DateofBd;
       
        document.getElementById("output").innerHTML = "You are " + Year + " Years " + Month + " Months " + Day + " Days old";}
    else if ( DateofCd < DateofBd){
        //Month = Month - 1;
        Day = 30 + (DateofCd - DateofBd);
   
        document.getElementById("output").innerHTML = "You are " + Year + " Years " + Month + " Months " + Day + " Days old";}
       
   
}
