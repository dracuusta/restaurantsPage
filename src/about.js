export default function about(){
    const aboutDiv=document.createElement('div');
    const headingDiv=document.createElement('h2');
    headingDiv.innerText="OUR STORY";
    const headingParaDiv=document.createElement('p');
    headingParaDiv.innerText="Gourmet Haven offers a dining ambiance that is both elegant and welcoming. Designed with your comfort in mind, our dining room invites you to relax and enjoy the pleasures of gourmet cuisine in a warm, inviting atmosphere. Whether you're celebrating a special occasion or simply treating yourself to an exceptional meal, our restaurant is the perfect backdrop for any event.";
    const secondHeadingDiv=document.createElement('h2');
    secondHeadingDiv.innerText="Sustainability Efforts";
    const secondHeadingParaDiv=document.createElement('p');
    secondHeadingParaDiv.innerText="We are dedicated to not just serving delicious food but also to making a positive impact on the environment. Our sustainability efforts include reducing waste, recycling, and composting, as well as supporting local farmers and producers. Dining at Gourmet Haven means supporting a business that cares about the planet";
    const thirdHeadingDiv=document.createElement('h2');
    thirdHeadingDiv.innerText="Join Us";
    const thirdHeadingParaDiv=document.createElement('p');
    thirdHeadingParaDiv.innerText="At Gourmet Haven, every meal is a celebration of life's finest moments. We invite you to join us for an unforgettable dining experience where the art of food and the joy of companionship come together in perfect harmony. Book your table today and discover the magic of Gourmet Haven where every visit is a journey to remember.For reservations, private events, and inquiries, please contact us at [Contact Information]. Follow us on [Social Media Handles] to stay updated on our latest offerings and events. We look forward to welcoming you to Gourmet Haven.";
    aboutDiv.append(headingDiv,headingParaDiv,secondHeadingDiv,secondHeadingParaDiv,thirdHeadingDiv,thirdHeadingParaDiv);
    return aboutDiv;
}