let products = {
    data: [
        // All Books
        {
            title: "Introduction to Algorithms",
            author: "Thomas H. Cormen",
            subject: "Textbooks",
            date: "2022-01-31",
            image: "img/algorithms.jpg",

        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            subject: "Programming",
            date: "2021-04-10",
            image: "img/pragmatic_programmer.jpg",

        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            subject: "Literature",
            date: "2021-03-10",
            image: "img/gatsby.jpg",

        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            subject: "Self-Help",
            date: "2020-10-09",
            image: "img/atomic_habits.jpg",
        },
        {
            title: "1984",
            author: "George Orwell",
            subject: "Fiction",
            date: "2022-05-10",
            image: "img/1984.jpeg",
        },
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            subject: "Science",
            date: "2020-08-20",
            image: "img/brief_history.jpg",
        },
        {
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            subject: "History",
            date: "2021-07-13",
            image: "img/sapiens.jpg",
        },

        // Textbooks
        {
            title: "Artificial Intelligence: A Modern Approach",
            author: "Stuart Russell",
            subject: "Textbooks",
            date: "2021-02-15",
            image: "img/ai_textbook.jpg",
        },
        {
            title: "Modern Operating Systems",
            author: "Andrew S. Tanenbaum",
            subject: "Textbooks",
            date: "2021-09-07",
            image: "img/os.jpg",
        },
        {
            title: "The Art of Computer Programming",
            author: "Donald E. Knuth",
            subject: "Textbooks",
            date: "2020-11-02",
            image: "img/art_computing.jpg",
        },
        {
            title: "Database Systems: The Complete Book",
            author: "Hector Garcia-Molina",
            subject: "Textbooks",
            date: "2022-04-20",
            image: "img/database_systems.jpg",
        },
        {
            title: "Discrete Mathematics and Its Applications",
            author: "Kenneth H. Rosen",
            subject: "Textbooks",
            date: "2021-03-10",
            image: "img/discrete_math.jpg",
        },
        {
            title: "Introduction to the Theory of Computation",
            author: "Michael Sipser",
            subject: "Textbooks",
            date: "2022-01-12",
            image: "img/computation_theory.jpg",
        },
        {
            title: "Principles of Compiler Design",
            author: "Aho, Lam, Sethi, Ullman",
            subject: "Textbooks",
            date: "2020-12-19",
            image: "img/compiler_design.jpg",
        },

        // Programming
        {
            title: "Clean Code",
            author: "Robert C. Martin",
            subject: "Programming",
            date: "2021-06-10",
            image: "img/clean_code.jpg",
        },
        {
            title: "The C Programming Language",
            author: "Brian W. Kernighan, Dennis M. Ritchie",
            subject: "Programming",
            date: "2022-05-22",
            image: "img/c_programming.jpg",
        },
        {
            title: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            subject: "Programming",
            date: "2020-06-18",
            image: "img/js_good_parts.jpg",
        },
        {
            title: "Python Programming: An Introduction to Computer Science",
            author: "John Zelle",
            subject: "Programming",
            date: "2022-02-11",
            image: "img/python_intro.jpg",
        },
        {
            title: "Learning JavaScript Design Patterns",
            author: "Addy Osmani",
            subject: "Programming",
            date: "2021-01-17",
            image: "img/js_patterns.jpg",
        },
        {
            title: "The Rust Programming Language",
            author: "Steve Klabnik",
            subject: "Programming",
            date: "2021-04-30",
            image: "img/rust_programming.jpg",
        },
        {
            title: "Programming Pearls",
            author: "Jon Bentley",
            subject: "Programming",
            date: "2020-09-25",
            image: "img/programming_pearls.jpg",
        },

        // Literature
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            subject: "Literature",
            date: "2021-03-17",
            image: "img/pride_prejudice.jpg",
        },
        {
            title: "Crime and Punishment",
            author: "Fyodor Dostoevsky",
            subject: "Literature",
            date: "2021-06-07",
            image: "img/crime_punishment.jpg",
        },
        {
            title: "Moby-Dick",
            author: "Herman Melville",
            subject: "Literature",
            date: "2022-01-23",
            image: "img/moby_dick.jpg",
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            subject: "Literature",
            date: "2021-08-15",
            image: "img/catcher_rye.jpg",
        },
        {
            title: "The Picture of Dorian Gray",
            author: "Oscar Wilde",
            subject: "Literature",
            date: "2021-09-05",
            image: "img/dorian_gray.jpg",
        },
        {
            title: "Frankenstein",
            author: "Mary Shelley",
            subject: "Literature",
            date: "2022-03-10",
            image: "img/frankenstein.jpg",
        },
        {
            title: "The Brothers Karamazov",
            author: "Fyodor Dostoevsky",
            subject: "Literature",
            date: "2020-12-12",
            image: "img/brothers_karamazov.jpg",
        },

        // Self-Help
        {
            title: "The 7 Habits of Highly Effective People",
            author: "Stephen R. Covey",
            subject: "Self-Help",
            date: "2021-01-22",
            image: "img/7_habits.jpg",
        },
        {
            title: "The Power of Now",
            author: "Eckhart Tolle",
            subject: "Self-Help",
            date: "2020-09-15",
            image: "img/power_of_now.jpg",
        },
        {
            title: "The Subtle Art of Not Giving a F*ck",
            author: "Mark Manson",
            subject: "Self-Help",
            date: "2022-04-08",
            image: "img/subtle_art.jpg",
        },
        {
            title: "You Are a Badass",
            author: "Jen Sincero",
            subject: "Self-Help",
            date: "2021-03-17",
            image: "img/badass.jpg",
        },
        {
            title: "The Life-Changing Magic of Tidying Up",
            author: "Marie Kondo",
            subject: "Self-Help",
            date: "2022-05-02",
            image: "img/magic_tidying.jpg",
        },
        {
            title: "The Four Agreements",
            author: "Don Miguel Ruiz",
            subject: "Self-Help",
            date: "2021-10-11",
            image: "img/four_agreements.jpg",
        },
        {
            title: "The Miracle Morning",
            author: "Hal Elrod",
            subject: "Self-Help",
            date: "2020-11-25",
            image: "img/miracle_morning.jpg",
        },

        // Fiction
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            subject: "Fiction",
            date: "2021-01-15",
            image: "img/hobbit.jpg",
        },
        {
            title: "The Hunger Games",
            author: "Suzanne Collins",
            subject: "Fiction",
            date: "2021-06-12",
            image: "img/hunger_games.jpg",
        },
        {
            title: "The Night Circus",
            author: "Erin Morgenstern",
            subject: "Fiction",
            date: "2021-03-23",
            image: "img/night_circus.jpg",
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
            subject: "Fiction",
            date: "2022-07-09",
            image: "img/harry_potter.jpg",
        },
        {
            title: "The Fault in Our Stars",
            author: "John Green",
            subject: "Fiction",
            date: "2020-06-05",
            image: "img/fault_in_our_stars.jpg",
        },
        {
            title: "The Book Thief",
            author: "Markus Zusak",
            subject: "Fiction",
            date: "2021-11-22",
            image: "img/book_thief.jpg",
        },
        {
            title: "The Girl on the Train",
            author: "Paula Hawkins",
            subject: "Fiction",
            date: "2022-02-14",
            image: "img/girl_on_train.jpg",
        },
    ]
};

// Shuffle function to randomly shuffle the books array (Fisher-Yates Shuffle Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Random stock generator function
function generateRandomStock(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate book cards dynamically
function generateBooks() {
    const booksContainer = document.getElementById("Books");
    products.data.forEach((book, index) => {
        // Generate a random stock for each book (e.g., between 1 and 10)
        book.stock = generateRandomStock(1, 50);

        let card = document.createElement("div");
        card.classList.add("card", book.subject, "hide");

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");

        let image = document.createElement("img");
        image.setAttribute("src", book.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);

        let container = document.createElement("div");
        container.classList.add("container");

        let title = document.createElement("h5");
        title.classList.add("title");
        title.innerText = book.title.toUpperCase();
        container.appendChild(title);

        let author = document.createElement("h6");
        author.classList.add("author");
        author.innerText = `Author: ${book.author}`;
        container.appendChild(author);

        let subject = document.createElement("h6");
        subject.classList.add("subject");
        subject.innerText = `Subject: ${book.subject}`;
        container.appendChild(subject);

        let date = document.createElement("h6");
        date.classList.add("date");
        date.innerText = `Date: ${book.date}`;
        container.appendChild(date);

        // Stock quantity (now uses the generated stock)
        let stock = document.createElement("p");
        stock.classList.add("stock");
        stock.innerText = `Stock: ${book.stock}`;
        container.appendChild(stock);

        // Add Borrow button with dynamic behavior
        let borrowButton = document.createElement("button");
        borrowButton.innerText = `Borrow`;
        borrowButton.classList.add("borrow-btn");
        borrowButton.addEventListener("click", () => handleBorrow(book, index, borrowButton, stock));
        container.appendChild(borrowButton);

        card.appendChild(container);
        booksContainer.appendChild(card);
    });
}

// Handle the borrow button click event
function handleBorrow(book, index, borrowButton, stock) {
    if (book.stock > 0) {
        // Prompt the user for how many books they want to borrow
        Swal.fire({
            title: 'How many books do you want to borrow?',
            input: 'number',
            inputAttributes: {
                min: 1,
                max: book.stock,
                step: 1
            },
            showCancelButton: true,
            confirmButtonText: 'Borrow',
            cancelButtonText: 'Cancel',
            inputValidator: (value) => {
                if (!value || value < 1 || value > book.stock) {
                    return 'Please enter a valid number!';
                }
                // Update the stock based on the user input
                book.stock -= value;
                stock.innerText = `Stock: ${book.stock}`;
                borrowButton.innerText = `Borrow`;

                Swal.fire({
                    title: "Book Borrowed Successfully!",
                    text: `You have borrowed ${value} copy(ies) of "${book.title}".`,
                    icon: "success",
                });

                if (book.stock === 0) {
                    borrowButton.innerText = "Out of Stock";
                    stock.classList.add("out-of-stock");
                    borrowButton.classList.add("out-of-stock");
                }
            }
        });
    } else {
        // Show error if no stock is available
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Sorry, "${book.title}" is out of stock!`,
        });
    }
}

// Filter functionality
function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value === "all" || element.classList.contains(value)) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
}

// Search functionality
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.trim();
    let elements = document.querySelectorAll(".title");
    let cards = document.querySelectorAll(".card");
    let found = false;

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
            found = true;
        } else {
            cards[index].classList.add("hide");
        }
    });

    // Show error if no book matches
    if (!found) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No books found matching your search!",
        });
    }
});

// Initialize library
window.onload = () => {
    // Show welcome message only once
    if (!localStorage.getItem('welcomeShown')) {
        Swal.fire({
            title: "Welcome to the Library!",
            text: "Explore and borrow books from our collection.",
            icon: "info",
        }).then(() => {
            localStorage.setItem('welcomeShown', 'true');
        });
    }

    // Shuffle the books data before generating them
    shuffleArray(products.data);

    generateBooks();
    filterProduct("all");
};
