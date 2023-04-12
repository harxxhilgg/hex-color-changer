const color = document.querySelector(".color");

// it's a button
const section = document.getElementById('changeClr');

changeClr.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    section.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});