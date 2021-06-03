 const mainmenu = document.getElementById("menuItem");


 const dnav = document.querySelector(".fcontainer");
  const ddnav = document.querySelector(".ffcontainer");
  const scon = document.querySelector(".smallcontainer");
  const navbar = document.querySelector("#menuItem");

window.addEventListener ("scroll", function () {
const navbarHeight = dnav.getBoundingClientRect().height
const scrollHeight = window.pageYOffset


if (scrollHeight > navbarHeight){
   dnav.classList.add("fixed-nav");
   ddnav.classList.add("fixed-nav");
}
else{
  dnav.classList.remove("fixed-nav");
  ddnav.classList.remove("fixed-nav")
}

}
)


window.addEventListener ("scroll", function () {
const sconheight = scon.getBoundingClientRect().height
const scrollHeight = window.pageYOffset 


if (scrollHeight === sconheight){
    navbar.style.visibility = "hidden"
}

else {
  navbar.style.visibility = "hidden"
}
}
)


  function menutoggle(){
      	const menuu = document.querySelector(".menu");

   	if (mainmenu.style.visibility === "visible")
   		{
   		mainmenu.style.visibility = "hidden";

   		}
   		else 
   		{
   			mainmenu.style.visibility = "visible";
   		}

    }





