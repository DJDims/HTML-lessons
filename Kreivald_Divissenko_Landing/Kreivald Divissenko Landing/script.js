setInterval(remove, 10);

function remove(){
    if(window.innerWidth*0.6184971098265895953757225433526 <= 428) {
        document.getElementById("pilot").src = "Images/Plane in clouds.png";
        document.getElementById("pilot").style.width = String(window.innerWidth)+"px";
        
    }
    else{
        document.getElementById("pilot").src = "Images/asideright.png";
        document.getElementById("pilot").style.width = "17.03125%";
    }
}