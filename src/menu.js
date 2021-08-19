import Paper from './images/paper.jpg';
import Plastic from './images/plastic.jpg';

const loadMenu = () => {
    const navDiv = document.getElementById('content');

    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu-content';
    navDiv.appendChild(menuDiv);

    const menuItems = document.createElement('div');
    menuItems.id = 'menu-items';
    menuDiv.appendChild(menuItems);

    const menuPaper = document.createElement('div');
    menuPaper.id = 'menu-paper';
    menuPaper.src = Paper;
    menuPaper.textContent = 'Paper'
    menuItems.appendChild(menuPaper);

    const menuPlastic = document.createElement('div');
    menuPlastic.id = 'menu-plastic';
    menuPlastic.src = Plastic;
    menuPlastic.textContent = 'Plastic'
    menuItems.appendChild(menuPlastic);
};

export { loadMenu };