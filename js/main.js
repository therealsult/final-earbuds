(() => {

  // hamburger menu 

  let button = document.querySelector("#button");
  let burgerCon = document.querySelector("#burger-con");


  function hamburgerMenu() {
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
  };
  

  button.addEventListener("click", hamburgerMenu, false);	








    //SCROLL ANIMATION STUFF
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 238; 

    const images = []; 

    const buds = {
      frame: 0
    }

    for(let i=0; i<frameCount; i++) {
      const img = new Image();
      img.src = `images/scroller/scroll-revealer${(i+1).toString().padStart(4, '0')}.png`;
      images.push(img);
    }

    //Greensock handling
    gsap.to(buds, {
      frame: 237,
      snap: "frame",
      scrollTrigger: {
          trigger: "#scr-animation",
          pin: true,
          scrub: 1,
          start: "top top"
      },
      onUpdate: render
    })

    

  
    function render () {
  
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);

    }
  
    images[0].addEventListener("onload", render);








// model viewer 


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

  







    
// scoll animation 

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