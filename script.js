
// connect the link
    // * I decided not to connect my survey submission button to anything because I didn't feel comfortable signing up for anything or connecting it to any of my personal accounts since this is a public github page and it's for school

// testimonials section
    // * I decided not to add a testimonials section because i didn't think it would be a good idea to bother my clients for a school project. When I make a proper website in the future I will add some.

// ! works with the html and css code to change the website's colours to better suit those with colour blindness

const button = document.getElementById("colourblind");

button.addEventListener("click", () => {
    document.body.classList.toggle("colorblind");
});