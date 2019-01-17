var circle = document.getElementsByClassName("circle");
var text = document.getElementsByClassName("text");

var currActive = 0;

function def() {
// Defines any default setup needing to be done

    circle[currActive].style.boxShadow = "0px 1px 20px 8px inset rgba(255,207,186,1)";
    circle[currActive].style.backgroundColor = "rgba(255,207,186, 1)";
    text[currActive].style.color = "white";
}




function hold(order) {
    //Responsible for user interaction with the buttons

    if(order != currActive) {
        circle[currActive].style.boxShadow = "0px 1px 20px 8px inset rgba(255,207,186,.2)";
        circle[currActive].style.backgroundColor = "white";
        text[currActive].style.color = "black";

        circle[order].style.boxShadow = "0px 1px 20px 8px inset rgba(255,207,186,1)";
        circle[order].style.backgroundColor = "rgba(255,207,186, 1)";
        text[order].style.color = "white";

        currActive = order;
    }

    circle[order].style.boxShadow = "0px 1px 20px 8px inset rgba(255,207,186,1)";
    circle[order].style.backgroundColor = "rgba(255,207,186, 1)";

    console.log(text);

    text[order].style.color = "white";
}