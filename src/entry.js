export default function component(){
    const homeDiv=document.createElement('div');
    const imgDiv=document.createElement('img');
    imgDiv.src="restaurant.jpg";
    imgDiv.setAttribute('id','headerImg');
    imgDiv.style.height="400px";
    imgDiv.style.width="1300px";
    imgDiv.style.padding="80px";
    const headingDiv=document.createElement('heading');
    headingDiv.innerText="Welcome fellow foodies! Bonjour";
    const headingStyles=`padding-bottom: 80px;
    font-size: 20px;`;
    headingDiv.style.cssText=headingStyles;
    headingDiv.style.fontWeight="bold";
    const paraDiv=document.createElement('div');
    paraDiv.style.marginTop="20px";
    paraDiv.innerText=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum soluta explicabo nulla molestias officiis quasi, expedita cum omnis, repellat, tenetur harum aspernatur deleniti aliquam possimus saepe? Quisquam explicabo voluptatum eveniet.";
    homeDiv.append(imgDiv,headingDiv,paraDiv);
    return homeDiv;
}

