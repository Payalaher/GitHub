var swiper = new Swiper(".mySwiper", {
    slidesPerView: 15,
    spaceBetween: 20,
    freeMode: true,
    loop:true,
    keyboard:{
        enabled:true,
    },
    mousewheel:true,

    breakpoints:{
      320:{
        slidesPerView:4,
      }
    ,
    425:{
      slidesPerView:4,

    },
    768:{
      slidesPerView:6,
    },
    1024:{
      slidesPerView:15,
    }
    }

  });





var menuButton = document.querySelector('.menuButton');
console.log(menuButton);

var sidebar = document.querySelector('.left-home');
console.log(sidebar);


var smallSidebar = document.querySelector('.small-side-navbar');
console.log(smallSidebar);

var rightDiv = document.querySelector('.right-home');
console.log(rightDiv);




menuButton.addEventListener('click', function () {
   
  sidebar.classList.toggle('hide-sidebar');
  smallSidebar.classList.toggle('show-small-sidebar');
  
    if(sidebar.classList.contains('hide-sidebar')) {
        rightDiv.style.width = '100%';
    } else {
        rightDiv.style.width = '85%';
    }
});  