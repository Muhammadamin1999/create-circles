document.addEventListener("DOMContentLoaded", function () {
  // functions for elements
  // create circle func random col, random time, random size
  // first circle for cursor
  let firstCircle = createCircle();
  function createCircle(posX , posY , size=createSize(), color= createColor(), time = createTime()) {
    let circleEl = document.createElement("span");
    circleEl.classList.add("circle");
    circleEl.style.width = size + "px";
    circleEl.style.height = size + "px";
    circleEl.style.backgroundColor = color;
    // circleEl.style.animationDuration = time + "s";
    circleEl.style.top = posY - size / 2 + "px";
    circleEl.style.left = posX - size / 2 +"px";
    document.body.appendChild(circleEl);
    return circleEl;
  }
  function createColor() {
    return (
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")"
    );
    // rgb(255,50,34)
  }
  // let test = createColor()
  // console.log(test)
  function createTime() {
    return Math.floor(Math.random() * 10) + 5;
  }
  // let test2 = createTime()
  // console.log(test2)
  function createSize() {
    return Math.floor(Math.random() * 100) + 50;
  }
  // let test3 = createSize()
  // console.log(test3)

  //cursor location
  document.addEventListener("mousemove", function(e){
    firstCircle.style.left = e.clientX - firstCircle.offsetWidth / 2+ "px"
    firstCircle.style.top = e.clientY - firstCircle.offsetHeight / 2 + "px"
   
  })
  document.addEventListener("mouseenter",function(e){
      circleEl.style.display = "none" 
  })
  document.addEventListener("mouseleave",function(e){
    
  })

  // click function done

  document.addEventListener("click", function (e) {
    // first circle attach to cursor then a
    if (firstCircle) {
      let size = firstCircle.offsetWidth;
      let color = firstCircle.style.backgroundColor;
      let time = firstCircle.style.animationDuration;
      createCircle(e.clientX, e.clientY, size, color, time);
      firstCircle.remove();
      console.log(1)
    } 
      firstCircle = createCircle(e.clientX, e.clientY,createSize(),createColor(),createTime());
      console.log(2)
      
    
  });

  // p
});
