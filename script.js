// getting HTML elements
const nav = document.querySelector("nav"),
      toggleBtn = nav.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click" , () =>{
    nav.classList.toggle("open");
  });

function onDrag({movementY}) { 
  const navStyle = window.getComputedStyle(nav), 
        navHeight = parseInt(navStyle.height), 
        windHeight = window.innerHeight;

        nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
        if(navTop > windHeight - navHeight){
          nav.style.top = `${windHeight - navHeight}px`;
        }
      }