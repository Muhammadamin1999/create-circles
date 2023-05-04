// Use DOMContentLoaded to be fired when page loaded add function that run all functions
//create Circle function with prooperties width,height,size,color
// parameters should get default values then add random value for size, color and animation time 
//for initial circle create it and attach it to the create function with appendChild
// create randomColor() function
// create randomSize() function betwen 150 and 20
// create randomTime() function between 20s and 10s
// add "mousemove" event and in the event function check if firstcreated circle is available and position it
// then use click event with event function check if circle available  set size color and time of
// privious circle and create new and remove old 
// else previous circle should be created using createCircle function


document.addEventListener("DOMContentLoaded", function () {
    let attachedCircle = createCircle();

    function createCircle(x = window.innerWidth / 2, y = window.innerHeight / 2, size = randomSize(), color = randomColor(), time = randomTime()) {
        let circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.width = size + "px";
        circle.style.height = size + "px";
        circle.style.background = color;
        circle.style.animationDuration = time + "s"
        circle.style.left = x - size / 2 + "px";
        circle.style.top = y - size / 2 + "px";
        document.body.appendChild(circle);
        return circle;
    }

    function randomColor() {
        return (
            "rgb(" +
            Math.floor(Math.random() * 256) +
            ", " +
            Math.floor(Math.random() * 256) +
            ", " +
            Math.floor(Math.random() * 256) +
            ")"
        );
    } 

    function randomSize() {
        return Math.floor(Math.random() * (150 - 20)) + 20;
    }
    function randomTime(){
        return Math.floor(Math.random()*(20 - 10) + 10)
    }
    document.addEventListener("mousemove", function (event) {
        if (attachedCircle) {
            attachedCircle.style.left = event.clientX - attachedCircle.offsetWidth / 2 + "px";
            attachedCircle.style.top = event.clientY - attachedCircle.offsetHeight / 2 + "px";
        }
    });

    document.addEventListener("click", function (event) {
        if (attachedCircle) {
            let color = attachedCircle.style.backgroundColor;
            let size = attachedCircle.offsetWidth;
            let time = attachedCircle.style.animationDuration;
            createCircle(event.clientX, event.clientY, size, color, time);
            attachedCircle.remove();
        }
        attachedCircle = createCircle(event.clientX, event.clientY, randomSize(), randomColor(), randomTime());
    });
});
