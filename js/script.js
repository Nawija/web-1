document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("#navbar");
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    function addShadow() {
        if (window.scrollY >= 500) {
            nav.classList.add("shadow-bg");
        } else {
            nav.classList.remove("shadow-bg");
        }
    }

    window.addEventListener("scroll", addShadow);

    function addShadoww() {
        nav.classList.toggle('shadow-b')
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))












    nav.addEventListener("click", addShadoww);
});
