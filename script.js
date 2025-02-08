document.addEventListener("DOMContentLoaded", () => {
    const dynamicText = document.querySelector(".dynamic-text");
    const words = ["Story", "Book", "Legacy"];
    let index = 0;

    setInterval(() => {
        dynamicText.textContent = words[index];
        index = (index + 1) % words.length;
    }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");

    // Dummy API for book covers
    const bookCovers = [
        "https://via.placeholder.com/150x220?text=Book+1",
        "https://via.placeholder.com/150x220?text=Book+2",
        "https://via.placeholder.com/150x220?text=Book+3",
        "https://via.placeholder.com/150x220?text=Book+4",
        "https://via.placeholder.com/150x220?text=Book+5",
        "https://via.placeholder.com/150x220?text=Book+6"
    ];

    const bookData = [
        { title: "The Eternal Saga", desc: "A thrilling fantasy novel that takes readers on an unforgettable journey." },
        { title: "Echoes of Time", desc: "An inspiring memoir reflecting on life's past, present, and future." },
        { title: "The Art of Words", desc: "A comprehensive guide for aspiring writers and storytellers." },
        { title: "Hidden Truths", desc: "A gripping mystery novel that keeps readers on the edge of their seats." },
        { title: "Shadows of Destiny", desc: "A deep dive into the unknown, exploring human fate." },
        { title: "Beyond the Horizon", desc: "A sci-fi adventure that bends the limits of space and time." }
    ];

    // Function to duplicate carousel items for infinite effect
    function populateCarousel() {
        bookData.forEach((book, index) => {
            const workItem = document.createElement("div");
            workItem.classList.add("work-item");

            workItem.innerHTML = `
                <img src="${bookCovers[index % bookCovers.length]}" alt="Book Cover">
                <h3>${book.title}</h3>
                <p>${book.desc}</p>
            `;

            carouselTrack.appendChild(workItem);
        });

        // Duplicate items for seamless scrolling
        bookData.forEach((book, index) => {
            const workItem = document.createElement("div");
            workItem.classList.add("work-item");

            workItem.innerHTML = `
                <img src="${bookCovers[index % bookCovers.length]}" alt="Book Cover">
                <h3>${book.title}</h3>
                <p>${book.desc}</p>
            `;

            carouselTrack.appendChild(workItem);
        });
    }

    populateCarousel();
});
