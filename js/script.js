const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".fact, " +
    ".timeline-item, " +
    ".skill-card, " +
    ".project-card, " +
    ".learning-item, " +
    ".contact-content"
);


revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                // Stop observing after animation runs
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


const projectLinks = document.querySelectorAll(
    ".project-link"
);


projectLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const href = link.getAttribute("href");

        /*
         * Kalau link masih "#",
         * jangan pindah ke bagian atas halaman.
         */

        if (!href || href === "#") {

            event.preventDefault();

            alert(
                "Link project ini belum tersedia."
            );

        }

    });

});

projectLinks.forEach((link) => {

    const href = link.getAttribute("href");

    if (
        href &&
        (
            href.startsWith("https://") ||
            href.startsWith("http://")
        )
    ) {

        link.setAttribute("target", "_blank");
        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    }

});


console.log(
    "Welcome to Anggita's portfolio"
);