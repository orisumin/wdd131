let menuBtn = document.querySelector(".menu-btn");
console.log(menuBtn)
menuBtn.addEventListener("click",handleMenuClick);

function handleMenuClick(event){
        //grab the nav tag and toggle .hide class on nav tag
    let nav = document.querySelector("nav");
        //navBar.setAttribute("class",".hide")
    nav.classList.toggle("hide");

    //toggle animation
    menuBtn.classList.toggle("change");
    }