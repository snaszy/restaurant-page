import { loadNav } from './nav.js'
import { loadHome } from './home.js'
import { loadMenu } from './menu.js'
import { loadContact } from './contact.js'
import './style.css';

const addButtonEvents = () =>{
    buttonHome.addEventListener('click', loadHome());
    buttonMenu.addEventListener('click', loadMenu());
    buttonContact.addEventListener('click', loadContact());
}

loadNav();
loadHome();
addButtonEvents();