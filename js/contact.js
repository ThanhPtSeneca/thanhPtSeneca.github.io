function validateData()
{
    const condition = /^[a-zA-Z]+$/g;
    const postalCondition = /^\w{6}$/g;
    let name = document.getElementById('name').value.trim();
    let postalCode = document.getElementById('postalCode').value.replace(/\s/g,'');
    console.log(postalCode);
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
    if (!postalCondition.test(postalCode))
    {
        error +=  "the postal code is invalid <br>";
        let span = document.getElementById('postalError');
        span.innerHTML= error;
        return false;
    }
    let hourlyRate = document.getElementById("hourlyRate");
    console.log(hourlyRate.value);
    if (hourlyRate.value!= undefined)
    {
        const rateCondition =/^\d+\.?\d+$/g;
        if(!rateCondition.test(hourlyRate.value))
        {
            error +=  "The hourly rate is invalid: must be a number <br>";
            let divRateError = document.getElementById("rateError");
            divRateError.innerHTML= error;
            divRateError.style.textAlign ="center";
            divRateError.style.color= "red";
            return false;
        }
        
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
    rateBox.name="hourlyRate";
    rateBox.id="hourlyRate";
    rateBox.placeholder = "Enter the hourly rate"
    rateLabel.innerText ="Hourly rate:";
    divRate.appendChild(rateLabel);
    divRate.appendChild(rateBox);
}