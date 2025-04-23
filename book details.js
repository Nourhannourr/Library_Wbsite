

// window.addEventListener("DOMContentLoaded", () => {
//     const params = new URLSearchParams(window.location.search);
//     const bookId = params.get("id");
//     if (!bookId) return;
  
//     const books = JSON.parse(localStorage.getItem("books") || "[]");
//     const book = books.find(b => b.id === bookId);
//     if (!book) return;

//     document.getElementById("book-cover").src = book.image;
//     document.getElementById("book-title").textContent = book.name;
//     document.getElementById("book-author").textContent = book.author;
//     document.getElementById("book-summary").textContent = book.description;
//     document.getElementById("book-genre").textContent = book.category;
//   });
  
//   document.querySelector(".edit-btn").addEventListener("click", function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const bookId = urlParams.get("id");
//     if (bookId) {
//       localStorage.setItem("editBookId", bookId);
//       window.location.href = "book_form.html";
//     }
//   });
  
//   document.querySelector(".delete-btn").addEventListener("click", function () {
//     const confirmDelete = confirm("Are you sure you want to delete this book?");
//     if (!confirmDelete) return;
  
//     const urlParams = new URLSearchParams(window.location.search);
//     const bookId = urlParams.get("id");
//     if (bookId) {
//       let books = JSON.parse(localStorage.getItem("books") || "[]");
//       books = books.filter(b => b.id !== bookId);
//       localStorage.setItem("books", JSON.stringify(books));
//       alert("Book deleted successfully");
//       window.location.href = "book_list.html";
//     }
//   });


//   document.addEventListener("DOMContentLoaded", () => {
//     const bookDetailsContainer = document.getElementById("bookDetailsContainer");
//     const books = JSON.parse(localStorage.getItem("books")) || [];

//     // لو مفيش كتب، نخفي الـ div
//     if (books.length === 0) {
//         bookDetailsContainer.style.display = "none";
//         return;
//     }

//     books.forEach((book, index) => {
//         const bookCard = document.createElement("div");
//         bookCard.className = "book-card";
//         bookCard.innerHTML = `
//             <img src="${book.cover}" alt="Book Cover" />
//             <h3>${book.title}</h3>
//             <p>by<strong>Author:</strong> ${book.author}</p>
//             <p><strong>Category:</strong> ${book.category}</p>
//             <p><strong>Description:</strong> ${book.description}</p>
//             <button onclick="borrowBook(${index})">Borrow</button>
//         `;
//         bookDetailsContainer.appendChild(bookCard);
//     });
// });



window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");
    if (!bookId) return;

    const books = JSON.parse(localStorage.getItem("books") || "[]");
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById("book-cover").src = book.image;
    document.getElementById("book-title").textContent = book.name;
    document.getElementById("book-author").textContent = book.author;
    document.getElementById("book-summary").textContent = book.description;
    document.getElementById("book-genre").textContent = book.category;
});

document.querySelector(".edit-btn").addEventListener("click", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get("id");
    if (bookId) {
        localStorage.setItem("editBookId", bookId);
        window.location.href = "book_form.html";
    }
});

document.querySelector(".delete-icon-btn").addEventListener("click", function () {
    const confirmDelete = confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get("id");
    if (bookId) {
        let books = JSON.parse(localStorage.getItem("books") || "[]");
        books = books.filter(b => b.id !== bookId);
        localStorage.setItem("books", JSON.stringify(books));
        alert("Book deleted successfully");
        window.location.href = "book_list.html";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const bookDetailsContainer = document.getElementById("bookDetailsContainer");
    const books = JSON.parse(localStorage.getItem("books")) || [];

    if (books.length === 0) {
        bookDetailsContainer.style.display = "none";
        return;
    }

    books.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.innerHTML = `
            <img src="${book.image}" alt="Book Cover" class="book-cover" />
            <h3>${book.name}</h3>
            <p><strong>Author:</strong>by ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Description:</strong> ${book.description}</p>
            <div class="actions">
                <button class="borrow-btn" onclick="borrowBook(${index})">Borrow</button>
                <button class="delete-icon-btn" onclick="deleteBook('${book.id}')">❌</button>
            </div>
        `;
        bookDetailsContainer.appendChild(bookCard);
    });
});

function deleteBook(bookId) {
    const confirmDelete = confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    let books = JSON.parse(localStorage.getItem("books") || "[]");
    books = books.filter(b => b.id !== bookId);
    localStorage.setItem("books", JSON.stringify(books));
    alert("Book deleted successfully");
    window.location.href = "book_list.html";
}
