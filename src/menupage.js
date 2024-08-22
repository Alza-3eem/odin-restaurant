function createMenuHeader() {
    const menuHeader = document.createElement("h1")
    menuHeader.textContent = "Our Menu"
    return menuHeader
}

function createMenuContent() {
    const menuContent = document.createElement("div")
    menuContent.classList.add("quote-bg")
    menuContent.innerHTML = `
    <ul>
        <li>Butter Chicken</li>
        <li>Saag Paneer</li>
        <li>Chana Masala</li>
    </ul>
    `
    return menuContent
}

function renderMenuPage() {
    const content = document.getElementById("content")
    if (content) {
        content.innerHTML = '';

        content.appendChild(createMenuHeader());
        content.appendChild(createMenuContent());
    }
}

export default renderMenuPage;