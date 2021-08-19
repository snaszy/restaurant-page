import Background from './images/background.jpg';

const loadHome = () => {
    const navDiv = document.getElementById('content');

    const homeDiv = document.createElement('div');
    homeDiv.id = 'home-content';
    homeDiv.src = Background;
    navDiv.appendChild(homeDiv);

    const homeTitle = document.createElement('h2');
    homeTitle.textContent = 'Welcome to indedible eats';
    homeDiv.appendChild(homeTitle);

    const homeText = document.createElement('p');
    homeText.textContent = 'All the food you could ever want. But none of it you could ever eat. Choose between our options of plastic or paper.'
    homeDiv.appendChild(homeText);
};

export { loadHome };