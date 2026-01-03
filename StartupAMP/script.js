let menuiconclick = document.getElementById("menuicon");
let menusbar =document.getElementById("menubar");

menuiconclick.addEventListener("click",()=>{
    menusbar.classList.toggle("open");

    if(menusbar.classList.contains("open"))
    {
     
        menuiconclick.classList.remove("bx-menu")
        menuiconclick.classList.add("bx-x");
    }
    else
    {
        menuiconclick.classList.remove("bx-x")
        menuiconclick.classList.add("bx-menu");
    }
});
