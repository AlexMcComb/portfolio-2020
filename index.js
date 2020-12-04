const startIntersectionObserver = () => {
    const features = document.querySelectorAll('.feature');

    const observer = new IntersectionObserver(sections => {
        sections.forEach(section => {
            if (section.intersectionRatio > 0.5) {
                section.target.classList.add('show-feature');
            } else {
                section.target.classList.remove('show-feature');
            }
        });
    }, { threshold: 0.5 });

    features.forEach(feature => observer.observe(feature))
}

startIntersectionObserver();


