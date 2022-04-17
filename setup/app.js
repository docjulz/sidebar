const sidebar = document.querySelector('.sidebar');
const slidebarToggle = document.querySelector('.sidebar-toggle');
const closeToggle = document.querySelector('.close-btn');

slidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})
closeToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})

