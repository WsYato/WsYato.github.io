const body = document.getElementById("body");
const montageVideo = document.getElementById("montagevideo");

const gotoTop = document.getElementById("totop");
var gotoTopEnabled = false;

const openContact = document.getElementById("opencontact");
const closeContact = document.getElementById("closecontact");
const contactMe = document.getElementById("contactme");
var contactOpen = false;

window.onload = function()
{
    const categories = document.getElementsByClassName("category");

    for (let i = 0; i < categories.length; i++)
        categories[i].style.transform = `rotate(${Math.floor(Math.random() * (3 + 3 + 1)) - 3}deg)`;
}

window.onscroll = function()
{
    if (gotoTopEnabled && window.scrollY <= 0)
    {
        gotoTop.style.display = "none";
        gotoTopEnabled = false;
        
        montageVideo.play();
    }
    else if (!gotoTopEnabled && window.scrollY > 0)
    {
        gotoTop.style.display = "inline-block";
        gotoTopEnabled = true;
        
        montageVideo.pause();
    }
}

gotoTop.onclick = function()
{
    body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

openContact.onclick = function()
{
    if (contactOpen)
    {
        contactMe.style.width = "0";
        contactOpen = false;

        return;
    }

    contactMe.style.width = "20%";
    contactOpen = true;
}

closeContact.onclick = function()
{
    contactMe.style.width = "0";
    contactOpen = false;
}