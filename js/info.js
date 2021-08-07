function getCurrentDate()
{
    return ((new Date()).toDateString().substr(3));
}
function getStart()
{
    let dateElm = document.getElementById("date");
    dateElm.innerHTML =`Date:&nbsp;&nbsp;&nbsp;&nbsp;${getCurrentDate()}` ;
}
