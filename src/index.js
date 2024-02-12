import component from "./entry";
import about from "./about";
import Menu from "./menu";
import contact from "./contact";
import './styles.css';
const container=document.getElementById('container');
container.innerHTML="";
container.append(component());


function componentLogic(){
    const buttons=document.querySelectorAll('button');
    buttons.forEach((button)=>{
        button.addEventListener('click',useLogic);
    })
}

function useLogic(e){
    const container=document.getElementById('container');
    if(e.target)
    if(e.target.id==="Menu"){
        container.innerHTML="";
        container.append(Menu());
    }
    if(e.target.id==="Home"){
        container.innerHTML="";
        container.append(component());
    }
    if(e.target.id==="Contact"){
        container.innerHTML="";
        container.append(contact());
    }
    if(e.target.id==="About"){
        container.innerHTML="";
        container.append(about());
    }
}
componentLogic();