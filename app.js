var min = 0;
var sec = 0;
var ms = 0;
var min_count = document.getElementById("min");
var sec_count = document.getElementById("sec");
var ms_count = document.getElementById("ms");
var start_btn = document.getElementById("disable");
var interval;

function timmer(){
    ms++;
    ms_count.innerHTML = ms;
    if (ms >= 100)
    {
        sec++;
        sec_count.innerHTML = sec;
        ms = 0;
    }
    else if (sec >= 60)
    {
        min++;
        min_count.innerHTML = min;
        sec = 0;
    }
}

function start()
{
    start_btn.disabled = true;
    interval = setInterval(timmer,10);
    
}
function pause()
{
    clearInterval(interval);
    start_btn.disabled = false;
}
function reset()
{
    min_count.innerText = 0;
    sec_count.innerText = 0;
    ms_count.innerText = 0;
    min = 0;
    sec = 0;
    msec = 0;
    pause();
    start_btn.disabled = false;
}

