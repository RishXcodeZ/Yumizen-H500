function scrollToContact(){
    const contactSection = document.getElementsByClassName('contact-us');
    if(contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const button= document.getElementById('btn');
    if(button) {
        button.addEventListener('click', scrollToContact);
    }
    else {
        console.error('Button not found');
    }
});