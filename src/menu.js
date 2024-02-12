export default function Menu(){
    const menuDiv=document.createElement('div');
    const beveragesDiv=document.createElement('div');
    beveragesDiv.classList.add('menu-heading');
    beveragesDiv.innerHTML="<ul><li>Coffee 20Rs</li><li>Tea 15Rs</li><li>Water 10Rs</liv></ul>";
    const sidesDiv=document.createElement('div');
    sidesDiv.classList.add('menu-heading');
    sidesDiv.innerHTML="<ul><li>Toast and Jam 80Rs</li><li>Frest Fruit 40Rs</li></ul>";
    const mainDiv=document.createElement('div');
    mainDiv.classList.add('menu-heading');
    mainDiv.innerHTML="<ul><li>Rajma Chawal 100Rs</li><li>Curry Chawal 100Rs</li></ul>";
    menuDiv.append(beveragesDiv,sidesDiv,mainDiv);
    return menuDiv;
}