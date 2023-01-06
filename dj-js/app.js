const colors = ["black", "blue", "red", "yellow", "green", "orange"];

let square = document.getElementById("square");

// mouse over - blue
square.addEventListener("mouseover", mouseOver);
function mouseOver() {
    square.style.backgroundColor = "blue";
}

// mouse out back to black
square.addEventListener("mouseout", mouseout);
function mouseout() {
    square.style.backgroundColor = "black";
}

// mouse down - red
square.addEventListener("mousedown", MouseDown);
function MouseDown() {
    square.style.backgroundColor = "red";
}

// mouse up - yellow
square.addEventListener("mouseup", mouseUp);
function mouseUp() {
    square.style.backgroundColor = "yellow";
}

//dbl click - green
square.addEventListener("dblclick", onDblClick);
function onDblClick() {
    square.style.backgroundColor = "green";
}

//wheel/scroll - orange
square.addEventListener("wheel", onwheel);
function onwheel() {
    square.style.backgroundColor = "orange"
}

// change color of square based on key pressed
document.addEventListener("keypress", (e) => {
    if (e.key === "r") {
        square.style.backgroundColor = "red";
    } else if (e.key === "b") {
        square.style.backgroundColor = "blue";
    } else if (e.key === "o") {
        square.style.backgroundColor = "orange";
    } else if (e.key === "g") {
        square.style.backgroundColor = "green";
    } else if (e.key === "y") {
        square.style.backgroundColor = "yellow";
    }
});

