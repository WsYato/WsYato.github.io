const sources = document.getElementsByClassName("source");
const currentSource = document.getElementById("currentsource");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

var currentSourceCount = 0;

window.onload = function()
{
    Enable();
}

next.onclick = function()
{
    Disable();

    if (currentSourceCount < sources.length - 1)
        currentSourceCount++;
    else
        currentSourceCount = 0;

    Enable();
}

prev.onclick = function()
{
    Disable();

    if (currentSourceCount > 0)
        currentSourceCount--;
    else
        currentSourceCount = sources.length - 1;

    Enable();
}

function Disable()
{
    sources[currentSourceCount].style.display = "none";
}

function Enable()
{
    sources[currentSourceCount].style.display = "block";
    currentSource.innerHTML = `${currentSourceCount + 1}/${sources.length}`;
}