/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
function isPrime(num)
{
  flag = true;
  if(num < 2)
    {
      flag = flase;
    }
  for(i = 2;i<Math.sqrt(num); i++)
    {
      if(num % i == 0)
        flag = false;
        break;
    }
  if(flag)
    {
      console.log("is Prime",num);
    }
  else
    {
      console.log("not prime",num)
    }
}
isPrime(789);
isPrime(25);
----------------
for(var i = 1;i <= 20;i++)
  {
    num=i;
   for(var j=1;j<=10;j++)
    {
      console.log(num+ "*" +j+ "="+(num*j));
    }
    console.log("-----------------------------------------------------");
  }
------------------------------
for(var i=5;i >= 1;i++)
  {
    var data="";
    for(var j=1;j <= i;j++)
      {
        data +=j+"  ";
      }
    console.log(data);
  }
for(var  i=0;i <= 3;i++)
  {
    for(var j=0;j <= 3;j++)
      {
        console.log((i+j));
      }
  }
---------------------------------