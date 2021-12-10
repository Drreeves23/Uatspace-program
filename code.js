
function play() {		<This is to run the command>
var die1 = 5			<This is a defanition to give the command a dice function and the value to it.
var die2 = 2

var sum = die1+die2		<This is the run command to run the program> 
document.write("Die 1 = " + die1)
document.write("<br/>")
document.write("Die 2 = " + die2)
document.write("<br/>")
document.write("Sum = " + sum)
document.write("<br/>")			<This is the out put of the code and what its told to do>
if (sum == 7 || sum == 11)		<This is the if this then this command>
{ document.write("CRAPS - you lose")
document.write("<br/>")
}
else if (die1== die2 && die1%2 == 0)
{
document.write("DOUBLES - you win")
document.write("<br/>")
}

}
document.write("Simple Craps")
document.write("<br/>")
play()