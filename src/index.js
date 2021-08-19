import { loadNav } from './nav.js';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import './style.css';

const addButtonEvents = () =>{

    const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', () => {
        clearDOM();
        loadNav();
        loadHome();
        addButtonEvents();
    });
    const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', () => {
        clearDOM();
        loadNav();
        loadMenu();
        addButtonEvents();
    });
    const contactButton = document.getElementById('contact-button');
    contactButton.addEventListener('click', () => {
        clearDOM();
        loadNav();
        loadContact();
        addButtonEvents();
    });
};

const clearDOM = () => {
    const navDiv = document.getElementById('content');
    navDiv.innerHTML = '';
};

const initiatePage = (() => {
    loadNav();
    loadHome();
    addButtonEvents();
})();