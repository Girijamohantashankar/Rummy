 window.onload = function() {
    const sportLink = document.querySelector('a[href="#sport"]');
    sportLink.parentElement.classList.add('active');
    document.getElementById('sport').style.display = 'block';
}
document.querySelectorAll('.navbar li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetContent = document.getElementById(targetId);
        document.querySelectorAll('#content > div').forEach(function(div) {
            div.style.display = 'none';
        });
        document.querySelectorAll('.navbar li').forEach(function(item) {
            item.classList.remove('active');
        });
        targetContent.style.display = 'block';
        this.parentElement.classList.add('active');
    });
});




