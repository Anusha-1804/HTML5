const para = document.getElementByTagName('p')
const num = document.getElementById('number')

let count = 0;
function incr ()
{
    if(count<25)
    {
        count++
        if (count % 2==0)
        {
            document.getElementById("number").innerHTML ="The Number is Even:" +count
            para[0].textContact = count
            para[1].textContent = "Incremented"
        }
        else
        {
            document.getElementById("number").innerHTML = "The Number is Odd:" +count
            para[0].textContact = count
            para[1].textContact = "Incremented"
        }
    }
    else
    {
        alert("Maximum limit reached! we can't increase the count more than 25")
    }
}
function decr ()
{
    if(count>0)
    {
        count--
        if(count % 2 == 0)
        {
            document.getElementById("number").innerHTML = "The number is Even:" +count
            para[0].textContact = count
            para[1].textContact = "Decrementd"
        }
        else
        {
            document.getElementById("number").innerHTML = "The number is Odd:" +count
            para[0].textContact = count
            para[1].textContact = "Decremented"
        }
    }
    else
    {
        alert("Minimum limit reached! we can't decrease the count less than 0")
    }  
}
function reset()
{
    count = 0;
    para[0].tectContact = count
    para[1].textContact=" "
}


//   console.log(incr())
//   function isEven(number)
//   {
//        if(number % 2 === 0)
//        {
//              return true;
//        }
//        else
//        {
//              return false;
//        }
//   }