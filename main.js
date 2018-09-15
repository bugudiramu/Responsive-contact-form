const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const form = document.getElementById('form');

openBtn.addEventListener('click', () => {
    form.style.height = "100%";
    openBtn.style.display = "none";

    // form.style.display = "block"
})
closeBtn.addEventListener('click', () => {
    form.style.height = "0%";
    openBtn.style.display = "inline-block";

    // form.style.display = "none"
})