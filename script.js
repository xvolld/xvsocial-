
document.body.style.overflow = "auto";
// تابع toggleMenu() برای نمایش/مخفی کردن منوی همبرگر
function toggleMen() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display === 'block' ? mobileMenu.style.display = 'none' : mobileMenu.style.display = 'block';
}
