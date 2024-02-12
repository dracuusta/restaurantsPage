const container=document.getElementById('container');

export default function component(){
    const imgDiv=document.createElement('img');
    imgDiv.src="/Users/dracuusta/restaurantsPage/src/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg";
    imgDiv.setAttribute('id','headerImg');
    imgDiv.style.height="400px";
    imgDiv.style.width="1300px";
    imgDiv.style.padding="80px";
    const headingDiv=document.createElement('div');
    headingDiv.innerText="Welcome fellow foodies! Bonjour";
    const paraDiv=document.createElement('div');
    paraDiv.innerText=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum soluta explicabo nulla molestias officiis quasi, expedita cum omnis, repellat, tenetur harum aspernatur deleniti aliquam possimus saepe? Quisquam explicabo voluptatum eveniet.";
    container.append(imgDiv,headingDiv,paraDiv);
}

