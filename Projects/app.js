const images = document.getElementById("images").children;
const image = document.querySelector("img");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

var currentSourceCount = 0;

window.onload = function()
{
    image.src = `${images[currentSourceCount].textContent}`;
}

next.onclick = function()
{
    if (currentSourceCount < images.length - 1)
    {
        currentSourceCount++;
        image.src = `${images[currentSourceCount].textContent}`;
    }
    else
    {
        currentSourceCount = 0;
        image.src = `${images[currentSourceCount].textContent}`;
    }
}

prev.onclick = function()
{
    if (currentSourceCount > 0)
    {
        currentSourceCount--;
        image.src = `${images[currentSourceCount].textContent}`;
    }
    else
    {
        currentSourceCount = images.length - 1;
        image.src = `${images[currentSourceCount].textContent}`;
    }
}