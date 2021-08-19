const loadNav = () => {
    
    const navDiv = document.getElementById('content');

    const headerNav = document.createElement('header');
    navDiv.appendChild(headerNav);

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Inedible Eats';
    headerNav.appendChild(headerTitle);

    const mainNav = document.createElement('nav');
    headerNav.appendChild(mainNav);

    const buttonHome = document.createElement('button');
    buttonHome.id = 'home-button';
    buttonHome.textContent = 'Home';
    buttonHome.className = 'active';
    mainNav.appendChild(buttonHome);

    const buttonMenu = document.createElement('button');
    buttonMenu.id = 'menu-button';
    buttonMenu.textContent = 'Menu';
    mainNav.appendChild(buttonMenu);

    const buttonContact = document.createElement('button');
    buttonContact.id = 'contact-button';
    buttonContact.textContent = 'Contact';
    mainNav.appendChild(buttonContact)

}

export { loadNav };