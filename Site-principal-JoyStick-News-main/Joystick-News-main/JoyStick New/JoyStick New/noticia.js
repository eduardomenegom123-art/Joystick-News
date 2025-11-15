const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open_btn');
const openBtnIcon = document.getElementById('open_btn_icon');

openBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        openBtnIcon.classList.remove('fa-chevron-left');
        openBtnIcon.classList.add('fa-chevron-right');
    } else {
        openBtnIcon.classList.remove('fa-chevron-right');
        openBtnIcon.classList.add('fa-chevron-left');
    }
});