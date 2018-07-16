function calc(operation)
{
    var num1 = parseInt(document.getElementById("res").value);
     var num2 = parseInt(document.getElementById("res").value);
    var message = " ";
    switch(operation)
        {
            case 'add' :
            message = num1 + "+" + num2+"="+(num1+num2);
                
            case 'sub' :
                message = num1 + "+" + num2+"="+(num1-num2);
            case 'mul' : 
                message = num1 + "+" + num2+"="+(num1*num2);
                
            case 'add' : 
                message = num1 + "+" + num2+"="+(num1*num2);
                
}