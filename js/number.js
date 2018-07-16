function checkPrime(){
    num=getUserInput();
    flag = true;
    
    if(num < 2){
        flag = false;
    }
    
    for(i = 2;i <= Math.sqrt(num); i++){
      if(num % i == 0){
        flag = false;
        break;
      }
    }
    if(flag){
            showResult(" given number is : " +num+ " Prime");
    }
    else{ 
            showResult("given number is : " +num+ "not a Prime");
    }
}
function factorial(){
    num = getUserInput();
    var res = 1;
    for(var i = 2; i <= num; i++){
        res *= i;
    }
    showResult("Factorial of "+num+" is "+res);
}
function factors(){
    num = getUserInput();
    var output = " ";
    for(var i = 1;i <= num; i++)
        {
            if(num % i == 0)
                {
                    output += i+ " ";
                }
        }
    showResult("Factors of "+num+" is :"+output);
}
function fibonacci()
{
  num=getUserInput();
    var output="";
    if(num == 1)
        {
        output += "0";
        }    
    else  if(num == 2)
        {
            output += "0 1";
        }
    else{
          var a = 0,b =1 ;  
         output += "0 1";
       for(var i = 1;i <= num;i++)
        {
            c = a + b;
            output += " "+c;
            a = b;
            b = c;
        }
    }
    showResult("Fibbonacci series of:"+num+" is : "+output);
}
function reverse(){
    num = getUserInput();
    var rev = 0,rem;
    while(num != 0)
        {
            rem = num % 10;
            rev = rev * 10 + rem;
            num = Math.floor(num / 10);
        }
    
   showResult("reverse of number is : "+rev);
    
}
function sumofdigits()
{
    num = getUserInput();
    var sum = 0 ;
    while(num != 0)
        {
            sum += num % 10;
            num =Math.floor(num /10);
        }
    showResult("sum of  digits is : "+sum);
}
function palindrome(){
    num = getUserInput();
    var rev = 0,rem;
    var num1 = num;
    while(num != 0)
        {
            rem = num % 10;
            rev = rev * 10 + rem;
            num = Math.floor(num / 10);
        }
    if(num1 == rev)
    {
       showResult("entered no is palindrome");
    }
    else
        {
         showResult("entered no is not a palindrome");
        }
    }
function sumofsingledigits(){
 num = getUserInput;
    var sum = num;
    while(num < 9)
        {
            sum = Math.floor(num / 10 )+  num % 10;
            num = sum;
        }
   showResult("sum of digits" +sum); 
} 



function getUserInput(){
    num = document.getElementById("num").value;
    return num;
}
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"</h4>";
}