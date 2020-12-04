
const preloader = () => {
	if (document.querySelector) {
		document.querySelector(".header-container").style.background = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(./images/header.jpg)";
	}
}

const addLoadEvent = (preloader) => {
	const oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = preloader;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			preloader();
		}
	}
}

addLoadEvent(preloader);

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


