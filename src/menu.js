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

    const menuPaperDiv = document.createElement('div');
    menuPaperDiv.className = 'menu-container';
    menuPaperDiv.id = 'paper'
    menuPaperDiv.src = Paper;
    menuItems.appendChild(menuPaperDiv);

    const menuPaperItem = document.createElement('div');
    menuPaperItem.className = 'menu-item';
    menuPaperItem.id = 'menu-paper-item';
    menuPaperDiv.appendChild(menuPaperItem);

    const menuPaperName = document.createElement('h3');
    menuPaperName.id = 'menu-paper-name';
    menuPaperName.textContent = 'Paper';
    menuPaperItem.appendChild(menuPaperName);

    const menuPaperPrice = document.createElement('p');
    menuPaperPrice.id = 'paper-price';
    menuPaperPrice.textContent = '$20.00';
    menuPaperItem.appendChild(menuPaperPrice);

    const menuPlasticDiv = document.createElement('div');
    menuPlasticDiv.className = 'menu-container';
    menuPlasticDiv.id = 'plastic'
    menuPlasticDiv.src = Plastic;
    menuItems.appendChild(menuPlasticDiv);
    
    const menuPlasticItem = document.createElement('div');
    menuPlasticItem.className = 'menu-item';
    menuPlasticItem.id = 'menu-plastic-item';
    menuPlasticDiv.appendChild(menuPlasticItem);

    const menuPlasticName = document.createElement('h3');
    menuPlasticName.id = 'menu-plastic-name';
    menuPlasticName.textContent = 'Plastic';
    menuPlasticItem.appendChild(menuPlasticName);

    const menuPlasticPrice = document.createElement('p');
    menuPlasticPrice.id = 'plastic-price';
    menuPlasticPrice.textContent = '$20.00';
    menuPlasticItem.appendChild(menuPlasticPrice);
};

export { loadMenu };