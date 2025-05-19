console.log("i am working")
const filterForm = document.getElementById('filterForm');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const categorySelect = document.getElementById('categoryFilter');
const tbody = document.getElementById('tbody');

filterForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const category = categorySelect.value;
    console.log('Category selected (raw):', category);
    console.log('Category selected:', category);
    

    fetch(`/filter-books/?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&category=${encodeURIComponent(category)}`)
        .then(response => response.json())
        .then(data => {
            const books = data.books;
            tbody.innerHTML = '';

            if (books.length > 0) {
                books.forEach((book, index) => {
                    const row = `<tr>
                        <td>${index + 1}</td>
                        <td><a href="/books/${book.id}/" target="_blank">${book.title}</a></td>
                        <td>${book.author}</td>
                        <td>${book.category}</td>
                    </tr>`;
                    tbody.innerHTML += row;
                });
            } else {
                tbody.innerHTML = `<tr><td colspan="4">Sorry, the book is not in stock.</td></tr>`;
            }
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            tbody.innerHTML = `<tr><td colspan="4">Something went wrong.</td></tr>`;
        });
});

