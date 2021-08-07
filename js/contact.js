function validateData()
{
    const condition = /^[a-zA-Z]+$/g;
    let name = document.getElementById('name').value.trim();
    let error="";
    if (name.length == 0)
    {
        error +=  "name is required! <br>";
        let div = document.getElementById('nameErrorMes');
        div.innerHTML= error;
        return false;
    }
    else if (!condition.test(name))
    {
        error +=  "the name must be alphabet characters <br>";
        let span = document.getElementById('nameErrorMes');
        span.innerHTML= error;
        return false;
    }
    return true;
}
 function hideRateBox()
 {
    let divRate = document.getElementById("rate");
     while(divRate.firstChild)
     {
        divRate.removeChild(divRate.firstChild);
     }
 }         
function displayRateBox()
{
    let divRate = document.getElementById("rate");
    let rateLabel = document.createElement("label");
    let rateBox = document.createElement("input");
    rateBox.type="text";
    
    rateLabel.innerText ="Enter the hourly rate:";
    divRate.appendChild(rateLabel);
    divRate.appendChild(rateBox);
}