const loadNavigation = () => {
    
    const contentDiv = document.getElementById('content');

    const headerNav = document.createElement("header");
    contentDiv.appendChild(headerNav);

    const headerTitle = document.createElement('h1')
    headerTitle.textContent = "Inedible Eats"
    createHeader.appendChild(headerTitle);

    const mainNav = document.createElement("nav");
    headerNav.appendChild(mainNav);

    const buttonHome = document.createElement("button");
    buttonHome.setAttribute = ('type', 'button');
    buttonHome.id = "home-button";
    buttonHome.textContent = "Home";
    buttonHome.className = "active";
    mainNav.appendChild(buttonHome);

    const buttonMenu = document.createElement("button");
    buttonMenu.setAttribute = ('type', 'button');
    buttonMenu.id = "menu-button";
    buttonMenu.textContent = "Menu";
    mainNav.appendChild(buttonMenu);

    const buttonContact = document.createElement("button");
    buttonContact.setAttribute = ('type', 'button');
    buttonContact.id = "contact-button";
    buttonContact.textContent = "Contact";
    mainNav.appendChild(buttonContact)
}