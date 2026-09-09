const buttons=document.querySelectorAll(".filter-button")
const menuitems=document.querySelectorAll(".menu-item")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const catageory=button.getAttribute("data-catageory")
        menuitems.forEach((item)=>{
            if(catageory==="all" || catageory===item.getAttribute("data-catageory")){
                item.style.display="block"
            }else{
                item.style.display="none"
            }
        })
    })
})