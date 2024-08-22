function createLogoDiv() {
    const logoDiv = document.createElement('div');
    logoDiv.classList.add("logo")
    return logoDiv
}

function createHeadingOne() {
    const headingOne = document.createElement('h1')
    headingOne.textContent = "The Triangle's new gourmet Indian Food Truck!"
    return headingOne
}

function createQuoteDiv() {
    const quoteDiv = document.createElement('div')
    quoteDiv.innerHTML = `<em>"It's even better than I remember it back in Uttar Pradesh!"</em><br>- A Satisfied Customer`
    quoteDiv.classList.add("quote-bg")
    return quoteDiv
}

function renderHomepage() {
    const content = document.getElementById("content");

    if (content) {
        content.innerHTML = '';

        content.appendChild(createLogoDiv());
        content.appendChild(createHeadingOne());
        content.appendChild(createQuoteDiv());
    }
}

export default renderHomepage;