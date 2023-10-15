const form=document.querySelector("form");

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    const Height=parseInt(document.querySelector('#height').value);
    const Weight=parseInt(document.querySelector('#weight').value);
    const bmi=document.querySelector("#results");
    if(Height===''||Height<0||isNaN(Height))
    {
       bmi.innerHTML=`Please give a valid number`;
    }
     else if(Weight===''||Weight<0||isNaN(Weight))
     {
       bmi.innerHTML=`Please give a valid number`;
     }
    else
    {
       let weightMessage=((Weight/(Height*Height))*10000).toFixed(2);
       if(weightMessage<=18)
       {
        bmi.innerHTML=`${weightMessage} Underweight`
       }
       else if(weightMessage>18.5 && weightMessage<=24.9)
       {
        bmi.innerHTML=`${weightMessage} Healthy weight`
       }
       else
       {
        bmi.innerHTML=`${weightMessage}<br>Overweight`
       }
    }
});