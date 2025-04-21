

// const books = [
//     { title: 'To Kill', author: 'Harper Lee', category: 'fiction' },
// ];
//
// localStorage.setItem('books', JSON.stringify(books));


function getBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        return JSON.parse(storedBooks);
    } else {
        return [
            { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'fiction' },
            { title: 'Sapiens', author: 'Yuval Noah Harari', category: 'nonfiction' },];
    }
}

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const categorySelect = document.getElementById('categoryFilter');
const filterForm = document.getElementById('filterForm');
const tbody = document.getElementById('tbody');

// Original book data
let allBooks = getBooksFromLocalStorage();

// Filtering form handler
// filterForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const titleFilter = titleInput.value.toLowerCase();
//     const authorFilter = authorInput.value.toLowerCase();
//     const categoryFilter = categorySelect.value;
//
//     const filteredBooks = allBooks.filter(book => {
//         const MTitle = book.title.toLowerCase().includes(titleFilter);
//         const MAuthor = book.author.toLowerCase().includes(authorFilter);
//         const MCategory = categoryFilter === '' || book.category === categoryFilter;
//         return MTitle && MAuthor && MCategory;
//     });
//
//     showBooks(filteredBooks);
// });
filterForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const titleFilter = titleInput.value.toLowerCase();
    const authorFilter = authorInput.value.toLowerCase();
    const categoryFilter = categorySelect.value;

    let filteredBooks=[];

    for (let i=0;i<allBooks.length;i++) {
        const book=allBooks[i];
        const bookTitle=book.title.toLowerCase();
        const bookAuthor=book.author.toLowerCase();
        const bookCategory=book.category;

        if(bookTitle.includes(titleFilter) && bookAuthor.includes(authorFilter)&&(categoryFilter=='' ||bookCategory ==categoryFilter)){
            filteredBooks.push(book)
        }
    }
    showBooks(filteredBooks);
});


function showBooks(bookList) {
    tbody.innerHTML = '';

    if (bookList.length>0) {
    bookList.forEach((book, index) => {
        const row = `<tr>
            <td>${index+1}</td>
            <td>
              <a href="bookdetails.html" target="_blank" style="color: white; text-decoration: none; font-size: larger">
                ${book.title}
              </a>
            </td>
            <td>${book.author}</td>
            <td>${book.category}</td>
        </tr>`;
        tbody.innerHTML += row;
    });}
    else{
        alert(` Sorry,The book is not in stock`);}
    titleInput.value = '';
    authorInput.value = '';
    categorySelect.value = '';
}
