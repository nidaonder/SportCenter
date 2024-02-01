window.addEventListener('scroll', function() {
    let navElement = document.querySelector('#nav-bar');
    if(this.window.scrollY > 0 ) {
        navElement.classList.add('scrolled');
    } else {
        navElement.classList.remove('scrolled');
    }
})