var num1,num2,result,oppr;
var textbox=document.getElementById("display");
 function GetValue(num)
   {
   if(textbox.value.length>6)
		alert("Input value limit exceeded");
	else
   textbox.value=textbox.value+num;
  }
 function Getdecim()
   {
   textbox.value=textbox.value+'.';
  }
function GetOperator(opr)
   {
	num1=parseInt(textbox.value);
	textbox.value="";
	oppr=opr;
	}
function EqualTo()
	{
	num2=parseInt(textbox.value);
	switch (oppr)
	{
		case '+':
			result=num1+num2;
			textbox.value=result;
			break;
		case '-':
			result=num1-num2;
			textbox.value=result;
			break;
		case '*':
			result=num1*num2;
			textbox.value=result;
			break;
		case '/':
			result=num1/num2;
			textbox.value=result;
			break;
	}
}
	function clearId()
	{
	document.getElementById('display').value='';
   }