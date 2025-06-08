/* --- Global Variables & Basic Reset --- */
:root {
    --primary-color: #2e7bff; /* A vibrant blue for main accents */
    --secondary-color: #343a40; /* Dark text/background */
    --text-color: #555;
    --light-bg: #f5f7f9; /* Soft light background */
    --card-bg: #ffffff;
    --border-light: #e0e0e0;
    --shadow-subtle: rgba(0, 0, 0, 0.08);
    --shadow-medium: rgba(0, 0, 0, 0.15);

    --heading-font: 'Montserrat', sans-serif;
    --body-font: 'Open Sans', sans-serif;
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--body-font);
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--light-bg);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    min-height: 100vh;
    display: flex; /* Use flex to center portfolio container */
    justify-content: center;
    align-items: flex-start; /* Align to top */
    padding: 20px; /* Padding around the whole portfolio */
}

/* --- Portfolio Container (Mimics a single large sheet) --- */
.portfolio-container {
    background-color: var(--card-bg);
    width: 100%;
    max-width: 1000px; /* Fixed max width for the whole portfolio */
    box-shadow: 0 10px 30px var(--shadow-medium);
    border-radius: 15px;
    overflow: hidden; /* Ensures rounded corners are visible */
    padding-bottom: 30px; /* Space at the bottom */
}

/* --- Main Header Section --- */
.main-header {
    background-color: var(--secondary-color);
    color: var(--card-bg);
    padding: 60px 20px 40px; /* Increased padding */
    text-align: center;
    position: relative;
    overflow: hidden;
    border-bottom: 8px solid var(--primary-color); /* Stronger bottom border */
}

.portfolio-title {
    font-family: var(--heading-font);
    font-size: 4.5em; /* Larger title */
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #e0e0e0; /* Lighter color for title */
}

.portfolio-subtitle {
    font-family: var(--body-font);
    font-size: 1.2em;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8);
    margin-top: -10px;
}

/* Decorative stars */
.stars-decoration {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
}

.star {
    position: absolute;
    font-size: 2.5em;
    color: var(--primary-color); /* Star color */
    opacity: 0.7;
    text-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}

.star.left-top { top: 15%; left: 10%; transform: rotate(20deg); }
.star.right-top { top: 10%; right: 10%; transform: rotate(-15deg); }
.star.left-bottom { bottom: 15%; left: 5%; transform: rotate(30deg); }
.star.right-bottom { bottom: 10%; right: 8%; transform: rotate(-25deg); }


/* --- Intro/Hello Section --- */
.intro-section {
    padding: 40px;
    background-color: var(--light-bg); /* Lighter background for this section */
    border-bottom: 1px solid var(--border-light);
}

.intro-content {
    display: flex;
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    gap: 30px; /* Space between flex items */
    align-items: flex-start; /* Align items to the top */
}

.profile-card {
    flex: 0 0 250px; /* Fixed width for profile card */
    background-color: var(--card-bg);
    border-radius: 15px;
    box-shadow: 0 5px 20px var(--shadow-light);
    padding: 30px;
    text-align: center;
    border: 1px solid var(--border-light);
    position: relative;
    overflow: hidden; /* For inner decorations */
    transition: transform 0.3s ease; /* For animation */
}

.profile-card:hover {
    transform: translateY(-5px); /* Subtle lift on hover */
}

.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--primary-color); /* Border around picture */
    box-shadow: 0 0 15px rgba(0, 123, 255, 0.3); /* Glow effect */
    margin-bottom: 20px;
    transition: transform 0.3s ease;
}

.profile-pic:hover {
    transform: scale(1.05); /* Slight zoom on hover */
}

.profile-name {
    font-family: var(--heading-font);
    font-size: 2em;
    color: var(--secondary-color);
    margin-bottom: 5px;
}

.profile-title {
    font-size: 1.1em;
    color: var(--text-color);
    font-weight: 500;
}

/* Decorations from template */
.profile-card::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 40px;
    height: 40px;
    background-color: var(--accent-color); /* Green circle */
    border-radius: 50%;
    opacity: 0.8;
}
.profile-card::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: -15px;
    width: 60px;
    height: 60px;
    border: 3px solid var(--primary-color);
    border-radius: 50%;
    opacity: 0.6;
}
.profile-card .decoration-element {
    position: absolute;
    font-size: 1.5em;
    opacity: 0.6;
}
.profile-card .decoration-element.top-right { top: 20px; right: 20px; color: purple; }
.profile-card .decoration-element.bottom-left { bottom: 20px; left: 20px; color: orange; }


.hello-box {
    flex: 1; /* Takes remaining space */
    min-width: 300px; /* Minimum width before wrapping */
    background-color: var(--card-bg);
    border-radius: 15px;
    box-shadow: 0 5px 20px var(--shadow-light);
    padding: 30px;
    border: 1px solid var(--border-light);
}

.hello-box h3 {
    font-family: var(--heading-font);
    font-size: 2.2em;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.hello-box p {
    font-size: 1.05em;
    line-height: 1.7;
    color: var(--text-color);
}

.contact-box {
    flex-basis: 100%; /* Takes full width below other items */
    background-color: var(--card-bg);
    border-radius: 15px;
    box-shadow: 0 5px 20px var(--shadow-light);
    padding: 30px;
    border: 1px solid var(--border-light);
    margin-top: 20px; /* Space from hello-box */
}

.contact-box h4 {
    font-family: var(--heading-font);
    font-size: 1.8em;
    color: var(--secondary-color);
    margin-bottom: 20px;
    text-align: center;
}

.contact-box p {
    font-size: 1.05em;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: var(--text-color);
}

.contact-box .icon {
    margin-right: 15px;
    color: var(--primary-color);
    font-size: 1.3em;
    width: 25px; /* Fixed width for icons */
    text-align: center;
}

.contact-box a {
    font-weight: 600;
    color: var(--primary-color);
}
.contact-box a:hover {
    color: var(--accent-color);
}


/* --- Main Content Grid (Education, Experience, Software/Skills) --- */
.main-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive columns */
    gap: 30px;
    padding: 40px;
}

.grid-item {
    background-color: var(--card-bg);
    border-radius: 15px;
    box-shadow: 0 5px 20px var(--shadow-light);
    padding: 30px;
    border: 1px solid var(--border-light);
    transition: transform 0.3s ease;
}

.grid-item:hover {
    transform: translateY(-5px);
}

.grid-item h3 {
    font-family: var(--heading-font);
    font-size: 2em;
    color: var(--primary-color);
    margin-bottom: 25px;
    position: relative;
}

.grid-item h3::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: var(--accent-color);
    margin-top: 10px;
    border-radius: 2px;
}

/* Education Styles */
.edu-item {
    margin-bottom: 20px;
    padding-left: 15px;
    border-left: 3px solid var(--primary-color);
}
.edu-year {
    font-weight: 600;
    color: var(--secondary-color);
    font-size: 0.95em;
    margin-bottom: 5px;
}
.edu-degree {
    font-weight: 700;
    color: var(--text-color);
    font-size: 1.1em;
    margin-bottom: 5px;
}
.edu-uni {
    color: var(--text-color);
    font-size: 0.95em;
}

/* Experience Styles */
.exp-item {
    margin-bottom: 20px;
    padding-left: 15px;
    border-left: 3px solid var(--accent-color);
}
.exp-year {
    font-weight: 600;
    color: var(--secondary-color);
    font-size: 0.95em;
    margin-bottom: 5px;
}
.exp-title {
    font-weight: 700;
    color: var(--text-color);
    font-size: 1.1em;
    margin-bottom: 5px;
}
.exp-company {
    color: var(--text-color);
    font-size: 0.95em;
    margin-bottom: 10px;
}
.exp-description {
    list-style: disc;
    margin-left: 20px;
    color: var(--text-color);
    font-size: 0.95em;
}
.exp-description li {
    margin-bottom: 5px;
}

/* Software & Skills Styles */
.skills-section h4 {
    font-family: var(--heading-font);
    font-size: 1.3em;
    color: var(--secondary-color);
    margin-top: 25px;
    margin-bottom: 15px;
    border-bottom: 1px dashed var(--border-light);
    padding-bottom: 5px;
}

.skill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 25px;
}

.skill-icon-item {
    text-align: center;
    font-size: 0.9em;
    color: var(--text-color);
    width: 80px; /* Fixed width for icon item */
}

.skill-icon-item img {
    width: 48px; /* Icon size */
    height: 48px;
    margin-bottom: 8px;
    transition: transform 0.2s ease;
}
.skill-icon-item img:hover {
    transform: scale(1.1);
}

.personal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.tag {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

.tag:hover {
    background-color: var(--accent-color);
}

/* --- Animation Classes (for JS) --- */
.is-visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
/* Initial state for JS animation */
.intro-section, .main-grid .grid-item {
    opacity: 0;
    transform: translateY(30px);
    transition: none; /* Disable transition initially to prevent flicker */
}

/* --- Responsive Design --- */
@media (max-width: 992px) {
    .portfolio-container {
        max-width: 768px;
    }
    .main-header {
        padding: 40px 20px 30px;
    }
    .portfolio-title {
        font-size: 3.5em;
    }
    .portfolio-subtitle {
        font-size: 1.1em;
    }
    .intro-section {
        padding: 30px;
    }
    .intro-content {
        flex-direction: column; /* Stack profile card and hello box */
        align-items: center; /* Center items when stacked */
    }
    .profile-card {
        flex: none; /* Remove fixed width */
        width: 80%; /* Adjust width for stacked layout */
        max-width: 300px; /* Max width for profile card */
        margin-bottom: 20px; /* Space between card and hello box */
    }
    .hello-box, .contact-box {
        min-width: unset; /* Remove min-width */
        width: 100%; /* Take full width */
    }
    .contact-box {
        margin-top: 30px;
    }
    .main-grid {
        grid-template-columns: 1fr; /* Stack all grid items on smaller screens */
        padding: 30px;
    }
    .grid-item {
        margin-bottom: 20px;
    }
}

@media (max-width: 576px) {
    body {
        padding: 10px;
    }
    .portfolio-container {
        border-radius: 10px;
    }
    .main-header {
        padding: 30px 15px 25px;
    }
    .portfolio-title {
        font-size: 2.5em;
    }
    .portfolio-subtitle {
        font-size: 1em;
    }
    .star {
        font-size: 1.8em;
    }
    .intro-section {
        padding: 20px;
    }
    .profile-card {
        padding: 20px;
    }
    .profile-pic {
        width: 120px;
        height: 120px;
    }
    .profile-name {
        font-size: 1.6em;
    }
    .hello-box, .contact-box {
        padding: 20px;
    }
    .hello-box h3 {
        font-size: 1.8em;
    }
    .contact-box h4 {
        font-size: 1.5em;
    }
    .contact-box p {
        font-size: 0.95em;
    }
    .main-grid {
        padding: 20px;
        gap: 20px;
    }
    .grid-item {
        padding: 20px;
    }
    .grid-item h3 {
        font-size: 1.6em;
    }
    .skill-icon-item {
        width: 70px;
    }
    .skill-icon-item img {
        width: 40px;
        height: 40px;
    }
    .personal-tags .tag {
        font-size: 0.8em;
        padding: 6px 12px;
    }
}
      
