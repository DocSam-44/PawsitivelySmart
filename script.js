
// google navbar to make the links more usable on the phone

// connect the link

// look into accessability design for those with colour blindness
// maybe click a button that changes to more accessible colours
// image tag alt to give a screen reader work

// add copyright tag

// add a footer

// testimonials section

// ! works with the html and css code to change the website's colours to better suit those with colour blindness

const button = document.getElementById("colorblind-toggle");

button.addEventListener("click", () => {
    document.body.classList.toggle("colorblind");
});