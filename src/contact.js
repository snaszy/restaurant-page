import { map } from './images/gmap.jpeg'

const loadContact = () => {
    const navDiv = document.getElementById('content');

    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact-content';
    navDiv.appendChild(contactDiv);

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contactDiv.appendChild(contactTitle);

    const contactText = document.createElement('p');
    contactText.textContent = 'Call us at 1-800-Ine-Eats'
    contactDiv.appendChild(contactText);

    const contactEmail = document.createElement('p');
    contactEmail.textContent = 'info@inedibleeats.com'
    contactDiv.appendChild(contactEmail);

    const location = document.createElement('div');
    location.id = 'map';
    location.src = map;
    contactDiv.appendChild(location)

};

export { loadContact };