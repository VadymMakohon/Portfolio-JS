const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    themeIcon.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
}
themeToggle.addEventListener('click', toggleTheme);
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
}
const progressBars = document.querySelectorAll('.progress-bar');
const observeProgressBars = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.progress');
            progress.style.width = progress.style.width;
        }
    });
}, { threshold: 0.5 });
progressBars.forEach(bar => observeProgressBars.observe(bar));
const timelineItems = document.querySelectorAll('.timeline-item');
const observeTimeline = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.5
});
timelineItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s, transform 0.5s';
    observeTimeline.observe(item);
});