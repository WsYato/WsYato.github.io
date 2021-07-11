const body = document.getElementById("body");
const gotoTop = document.getElementById("totop");
const toggleContact = document.getElementById("togglecontact");
const contactMe = document.getElementById("contactme");

var gotoTopEnabled = false;
var contactOpen = false;

window.onscroll = function()
{
    if (gotoTopEnabled && window.scrollY <= 0)
    {
        gotoTop.style.display = "none";
        gotoTopEnabled = false;
    }
    else if (!gotoTopEnabled && window.scrollY > 0)
    {
        gotoTop.style.display = "inline-block";
        gotoTopEnabled = true;
    }
}

gotoTop.onclick = function()
{
    body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

toggleContact.onclick = function()
{
    if (contactOpen)
    {
        contactMe.style.right = "-17.5em";
        contactOpen = false;

        return;
    }

    contactMe.style.right = "0";
    contactOpen = true;
}