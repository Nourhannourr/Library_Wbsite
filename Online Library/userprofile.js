document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('borrowedBooksContainer');

  // Load borrowedBooks[] from localStorage (set by bookdetails.html)
  let borrowed = JSON.parse(localStorage.getItem('borrowedBooks') || '[]');

  function renderList() {
    container.innerHTML = '';
    if (borrowed.length === 0) {
      const p = document.createElement('p');
      p.textContent = 'No books borrowed yet.';
      container.appendChild(p);
      return;
    }

    borrowed.forEach((title, idx) => {
      // create card
      const card = document.createElement('div');
      card.className = 'book-card';

      // Title
      const h3 = document.createElement('h3');
      h3.textContent = title;
      card.appendChild(h3);

      // Return button
      const btn = document.createElement('button');
      btn.className = 'return-btn';
      btn.textContent = 'Return Book';  
      btn.addEventListener('click', () => {
        ok = window.confirm(`Are you sure you want to return "${title}"?`);
        if(!ok)
            return;
        // Remove from array
        borrowed.splice(idx, 1);
        localStorage.setItem('borrowedBooks', JSON.stringify(borrowed));
        // Re-render
        renderList();
      });
      card.appendChild(btn);

      container.appendChild(card);
    });
  }

  renderList();
});
