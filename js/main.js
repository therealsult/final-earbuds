(() => {
// scroller 
const canvas = document.querySelector("#explode-view");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const frameCount = 238; //how many still frames do we have

const images = [] //array to hold all of our images

//lets create an object called bugs to hold the current frame
const buds = {
  frame: 0
};

//lets run a for loop to populate our images array
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  //Since the image number is an integer, we’ll need to turn it in to a string and use
  img.src = `images/scroll-revealer${(i+1).toString().padStart(4, '0')}.png`;
  images.push(img);
}
//console.table(images);

//images go from 0-449

//we are not actually animating a DOM element, but rather an object, which contains
//a frame count, as the user scrolls we increase the value by one
//we tell green sock there is a total number of 449 frames to cycle through so it knows when to stop
//The way that greenSock and scrolling works is through using decimals, so we have to use the built in snap feature
//and pass the frame property so that it snaps to a whole value, instead of 0.085 we get 1

gsap.to(buds, {
  frame: 238,
  snap: "frame",
  scrollTrigger: {
    trigger: "#explode-view",
    // scrub: true,
    pin: true,
    scrub: 1,
    start: "top top",
    // end: "+=100%",
    markers: true
  },
  onUpdate: render, //onUpdate part of GS
})
//console.log("frameCount:" + frameCount);

//when first image is loaded in array, call the render function, otherwise we have a blank canvas

images[0].addEventListener("onload", render);

function render() {
  // wipe the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  //draw a new frame, using canvas drawImage() method, position 0,0.
  console.log(buds.frame);
  console.log(images[buds.frame]);
  context.drawImage(images[buds.frame], 0, 0); 
}









  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  tl = gsap.timeline({
    defaults: {
      duration:1,
      ease: "expo.inOut"
    }
  });

const infoBoxes = [
  {
    title: "Comfortable EarBud Tips",
    text: "Comfortable ear bud tips are typically made from various materials designed to provide a comfortable and secure fit and are crucial to provinding the best sound quality. Paper Thin Tech EarBuds offer many different ear bud tips made of different material. We offer memory foam, gel, silicone, velur or cloth and our in house secert hybrid material for you to choose from.",
    image: "ri-headphone-line",
  },

  {
      title: "Super Fast Charging",
      text: "Our Paper Thin Tech EarBuds are capable of charging at super fast speed rates handeling up to 60w charging pulgs. They will charge from 20% to 90% in 15 minutes guaranteed. ",
      image: "ri-battery-2-charge-fill",
  },

  {
      title: "24 Karat",
      text: "Our top of the line model ear buds inculde 2 grams of 24 karat gold on each bud. This model is produced to provide comfort and while enhancing your look at the same time.",
      image: "ri-vip-diamond-fill",
  },

  {
      title: "High Quality Components ",
      text: "All Paper Thin Tech Ear Buds use real gold for components to provide the best listening experince. Gold plated drivers, connectors and speaker housing provide exeptional quality.",
      image: "ri-hq-fill",
  }
]

  //functions

  tl.to(".slide-1", { width: 0 }).to("#introduction", { height: 0 });

  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index+1}`);


      //HOTSPOT TITLE
      const hotspotName = document.createElement("h3");
      hotspotName.textContent = infoBox.title;
        
      //IMAGE ICON
      const hotspotImg = document.createElement("i");
      hotspotImg.classList.add("ri-3x", infoBox.image);

      //HOTSPOT TEXT
      const hotspotDesc = document.createElement("p");
      hotspotDesc.textContent = infoBox.text;


      selected.appendChild(hotspotName);
      selected.appendChild(hotspotImg);
      selected.appendChild(hotspotDesc);
    });
  }

  loadInfo();


  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

  



  // hamburger menu 

  let button = document.querySelector("#button");
  let burgerCon = document.querySelector("#burger-con");



  function hamburgerMenu() {
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
  };


  button.addEventListener("click", hamburgerMenu, false);	



// intro

var s = skrollr.init();






  // xray-slider

  (function(){
    "use strict";


var imageCon = document.querySelector('#imageCon'),
    drag = document.querySelector('.image-drag'),
    left = document.querySelector('.image-left'),
    dragging = false,
    min = 0,
    max = imageCon.offsetWidth;

function onDown() {
  dragging = true;
}

function onUp() {
  dragging = false;
}

function onMove(event) {
  if(dragging===true) {
    var x = event.clientX - imageCon.getBoundingClientRect().left;
    console.log(event.clientX);
    console.log(imageCon.getBoundingClientRect().left);

    if(x < min) { 
      x = min;    
    }
   else if(x > max) { 
      x = max-4; 
    }
    drag.style.left = x + 'px';
    left.style.width = x + 'px';
  }
}

drag.addEventListener('mousedown', onDown, false); 
document.body.addEventListener('mouseup', onUp, false);
document.body.addEventListener('mousemove', onMove, false);

})();





})();