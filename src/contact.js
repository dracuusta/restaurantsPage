export default function contact(){
    const contactDiv=document.createElement('div');
    const headingDiv=document.createElement('h2');
    headingDiv.innerText="Contact Us";
    const headingParaDiv=document.createElement('p');
    headingParaDiv.innerText="At Gourmet Haven, your dining experience and satisfaction are our top priorities. Whether you have a question about our menu, wish to make a reservation, or want to plan a special event, our team is here to assist you. Below you'll find all the ways you can get in touch with us. We look forward to hearing from you!";
    const secondHeadingDiv=document.createElement('h2');
    secondHeadingDiv.innerText="Reservation Enquiries";
    const secondHeadingParaDiv=document.createElement('p');
    secondHeadingParaDiv.innerText="For table reservations, please use our online booking system or call us directly at";
    const thirdHeadingDiv=document.createElement('h2');
    thirdHeadingDiv.innerText="Visit Us";
    const thirdHeadingParaDiv=document.createElement('p');
    thirdHeadingParaDiv.innerText="Stay connected with Gourmet Haven and be the first to know about our latest dishes, special events, and exclusive offers:";
    contactDiv.append(headingDiv,headingParaDiv,secondHeadingDiv,secondHeadingParaDiv,thirdHeadingDiv,thirdHeadingParaDiv);
    return contactDiv;
}