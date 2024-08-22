function createAboutHeader() {
    const aboutHeader = document.createElement('h1')
    aboutHeader.textContent = "About The Masala Box"
    return aboutHeader
}

function createAboutContent() {
    const aboutContent = document.createElement('div')
    aboutContent.classList.add("quote-bg")
    aboutContent.textContent = "We first started in a humble kitchen in Costa Rica in 2021. From there, we perfected our recipes over time and eventually got to where we are now!"
    return aboutContent
}

function renderAboutPage() {
    const content = document.getElementById("content")

    if (content) {
        content.innerHTML = '';

        content.appendChild(createAboutHeader())
        content.appendChild(createAboutContent())
    }
}

export default renderAboutPage;