console.log("Hello, welcome to my portfolio! ;)");


// elementen die insliden
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));



// scroll to element
document.addEventListener("DOMContentLoaded", () => {
    const scrollToProject = document.getElementById("scrolltoprojecten");
    const projectenButtons = document.getElementsByClassName("projectenButton");

    Array.from(projectenButtons).forEach(button => {
        button.addEventListener("click", () => {
            scrollToProject.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});


// change text
document.getElementById("changetext").textContent="Information Designer";



  