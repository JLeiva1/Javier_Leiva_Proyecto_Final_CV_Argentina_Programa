/*Modo oscuro*/
let modo=document.getElementById("modoVis")

modo.addEventListener ("click", function(){
    if (modo.className.includes("fa-sun")){
        modo.className= "fa-moon";
        modo.title="Modo oscuro activo";
        dayNightColor('--color-1','#D6D3E7');
        dayNightColor('--color-2','#5A5972');
        dayNightColor('--color-3','rgb(255, 182, 47)');
        dayNightColor('--color-pagina','#302D3E');
        dayNightColor('--color-texto','darkgray');
        dayNight("Icons/night.png");
        
    } else {
        modo.className="fa-sun";
        modo.title="Modo claro activo";
        dayNightColor('--color-1', '#A9E7F8');
        dayNightColor('--color-2', '#c2a0a0');
        dayNightColor('--color-3', '#d86060');
        dayNightColor('--color-pagina', 'white');
        dayNightColor('--color-texto', 'black');
        dayNight("Icons/sun.png");
    }
})

function dayNight (lightNight) {
    document.querySelector("#dayNight").setAttribute("src",lightNight);
};

const dayNightColor = (lightNight,lightNight2) => {
    document.documentElement.style.setProperty(lightNight, lightNight2);
}