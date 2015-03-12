function MenuChoice()
{
    if (document.getElementById("DropdownMenu").value == "Before")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
    }
    else if (document.getElementById("DropdownMenu").value == "After")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
    }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
    }
    
    
    
}