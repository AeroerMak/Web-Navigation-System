// Header Content
const headerContent = `
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
`;

// Footer Content
const footerContent = `
    <footer>
        <p>Copyright @2024, <a href='https://aeroer.live/'>Aeroer.Live</a> All Rights Reserved</p>
    </footer>
`;

// Dynamically load the header and footer
document.getElementById("header").innerHTML = headerContent;
document.getElementById("footer").innerHTML = footerContent;
