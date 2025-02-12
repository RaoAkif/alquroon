document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute("href"));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height if necessary
                    behavior: "smooth"
                });
            }
        });
    });

    // Dynamic text animation
    const dynamicText = document.querySelector(".dynamic-text");
    const words = ["Story", "Book", "Legacy"];
    let index = 0;
    
    setInterval(() => {
        dynamicText.textContent = words[index];
        index = (index + 1) % words.length;
    }, 2000);

    // Book carousel population
    const carouselTrack = document.querySelector(".carousel-track");

    // Book data array (extendable for future books)
    const bookData = [
        { 
            title: "Mufasir-e-Quran Sheikh Ismail Haqqi", 
            desc: "A detailed account of the life and contributions of Sheikh Ismail Haqqi.",
            cover: "./images/book-covers/book1.png"
        },
        { 
            title: "Jog Katha by Owais Qarni", 
            desc: "An insightful exploration of spiritual and philosophical themes by Owais Qarni.",
            cover: "./images/book-covers/book2.png"
        },
        { 
            title: "Talismaat-e-Ghalib", 
            desc: "A mystical interpretation of Ghalib’s poetry, blending thought, passion, and depth.",
            cover: "./images/book-covers/book3.png"
        },
        { 
            title: "Mufasir-e-Quran Sheikh Ismail Haqqi", 
            desc: "A detailed account of the life and contributions of Sheikh Ismail Haqqi.",
            cover: "./images/book-covers/book1.png"
        },
        { 
            title: "Jog Katha by Owais Qarni", 
            desc: "An insightful exploration of spiritual and philosophical themes by Owais Qarni.",
            cover: "./images/book-covers/book2.png"
        },
        { 
            title: "Talismaat-e-Ghalib", 
            desc: "A mystical interpretation of Ghalib’s poetry, blending thought, passion, and depth.",
            cover: "./images/book-covers/book3.png"
        },
    ];

    function createBookItem(book) {
        const workItem = document.createElement("div");
        workItem.classList.add("work-item");
        workItem.innerHTML = `
            <img src="${book.cover}" alt="Book Cover">
        `;
        return workItem;
    }

    function populateCarousel() {
        carouselTrack.innerHTML = ""; // Clear existing items before adding new ones
        
        bookData.forEach(book => {
            carouselTrack.appendChild(createBookItem(book));
        });
    }

    populateCarousel();
});
