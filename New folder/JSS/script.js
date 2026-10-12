const page1 = document.getElementById('Page1');
const page2 = document.getElementById('Page2');
const page3 = document.getElementById('Page3');
const page4 = document.getElementById('Page4');
const content = document.querySelector('#Content2');

const pages = document.querySelectorAll('.Page');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
}); 

    }, {threshold: 0.1}
);

const Project  = document.querySelector('.Project1');
const ProjectButton = document.querySelector('.TestsButton');

ProjectButton.addEventListener('click', function() {

    page3.scrollIntoView({ behavior: 'smooth' });
});

Project.addEventListener('click', function() {

    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    content.style.display = 'flex';

});

pages.forEach(page => observer.observe(page));


