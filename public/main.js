let sseconds = 0, seconds = 0, minutes = 0, hours = 0;
let running = false, interval = null;
let display = document.getElementById("display");
let startStop = document.getElementById("startStop");
let reset = document.getElementById("reset");
let laps = document.getElementById("laps");
let lapsDisplay = document.getElementById("lapsDisplay");

//stopwatch functionality
function stopwatch() 
{
	sseconds++;
	if(sseconds == 100)
	{
		sseconds = 0;
		seconds++;
		if(seconds / 60 == 1)
		{
			seconds = 0;
			minutes++;
			if(minutes / 60 == 1)
			{
				minutes = 0;
				hours++;
			}
		}
    }
    
    //to put the zeroes in front if its a single digit    
    function frontZero(x, y) 
	{
		if(x < 10)
		{
			y = "0" + x.toString();
		}
		else
		{
			y = x;
		}
		return y;
	}
	let displaySSeconds = 0, displaySeconds = 0, displayMinutes = 0, displayHours = 0;
	let finalSSeconds = frontZero(sseconds, displaySSeconds);
	let finalSeconds = frontZero(seconds, displaySeconds);
	let finalMinutes = frontZero(minutes, displayMinutes);
	let finalHours = frontZero(hours, displayHours);
	display.innerHTML = finalHours + ":" + finalMinutes + ":" + finalSeconds + ":" + finalSSeconds;
}
function clickStartStop() //when the startStop button is clicked
{
	if(running == false)
	{
		interval = window.setInterval(stopwatch, 1);
		startStop.innerHTML = "STOP";
		running = true;
	}
	else
	{
		window.clearInterval(interval);
		startStop.innerHTML = "START";
		running = false;
	}
}
//when the reset button is clicked
function clickReset() 
{
	sseconds = 0;
	seconds = 0;
	hours = 0;
	minutes = 0;
	display.innerHTML = "00:00:00:00"
	if(running == true)
	{
		window.clearInterval(interval);
		running = false;
	}
	startStop.innerHTML = "START";
	lapsDisplay.innerHTML = null;
}
function clickLaps() //when the laps button is clicked
{
	lapsDisplay.innerHTML += " " + display.innerHTML + "<br>";
}
//actions below
startStop.onclick = clickStartStop;
reset.onclick = clickReset;
laps.onclick = clickLaps;
