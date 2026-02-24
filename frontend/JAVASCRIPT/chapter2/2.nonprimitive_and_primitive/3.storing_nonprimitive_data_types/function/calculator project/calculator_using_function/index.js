let num1=Number(prompt("enter your first number"));
let num2=Number(prompt("enter your second number"));
let operator=prompt("Enter operator(+,-,/,*,%)");

if(operator == '+' )
{
   prompt(num1+num2)
}
else if( operator == '-')
{
 prompt(num1-num2)
}
else if( operator == "/")
{
 prompt(num2/num1)
} 
else if( operator == "*")
{
 prompt(num1*num2)
}
else if( operator == "%")
{
 prompt(num1%num2)
}
else
{
    prompt("you are enter wrong operator")
}
