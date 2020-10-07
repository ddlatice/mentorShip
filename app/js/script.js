      //Floating Shaoes
      //get shapes and randomize styles.
      const shapes = document.querySelectorAll('.fa');
      shapes.forEach((shape) => {
        let position = Math.floor(Math.random() * 90) + 1;
        let rotation = Math.floor(Math.random() * 360) + 1;
        let delay = Math.floor(Math.random() * 5) + 1;
        let duration = Math.floor(Math.random() * 10) + 5;
        shape.style.cssText = "left:" + position + "vw; transform: rotate(" + rotation +"deg); animation-delay: " + delay + "s; animation-duration: " + duration + "s;)";

      });


      //Hamburger Menu Toggle

//get Hamburger
const burger = document.querySelector('.header__menu');

//get overlay
const overlay = document.getElementById('overlay');


burger.addEventListener('click', function() {

    console.log('open hamburger menu.')
    //toggle open class

    if(burger.classList.contains('open')) {
        burger.classList.remove('open');
        overlay.style.display = "none";
        
    } else {
        burger.classList.add('open');
        //set overlay to be displayed.
        overlay.style.display = "block";
    }

})

