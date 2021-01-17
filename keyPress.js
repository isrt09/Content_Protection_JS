focusInput = function()
{
    document.focus();
};

processKeyEvent = function(eventType, event)
{
    if (window.event)
    {
        event = window.event;    
    }
    if(event.keyCode == 44) 
    {
        alert("Photos are copyright 2011");
        return(false);
    }
}
processKeyUp = function(event)
{
    processKeyEvent("onkeyup", event);
};

processKeyDown = function(event)
{
    processKeyEvent("onkeydown", event);
};

document.onkeyup = processKeyUp;
document.onkeydown = processKeyDown;