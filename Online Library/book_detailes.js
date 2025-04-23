document.addEventListener('DOMContentLoaded', () => {
    const borrowBtn = document.getElementById('borrowBtn');
    const statusEl  = document.getElementById('status');
    const bookTitle = document.querySelector('.book-title').innerText.trim();
  
    // Load borrowed array from localStorage
    const borrowed = JSON.parse(localStorage.getItem('borrowedBooks') || '[]');
  
    // If this book is already borrowed, mark it Un‑Available
    if (borrowed.includes(bookTitle)) {
      statusEl.innerText = 'Un‑Available';
      statusEl.classList.remove('available');
      statusEl.classList.add('unavailable');
      borrowBtn.disabled = true;
    }
  
    borrowBtn.addEventListener('click', () => {
      // Only allow borrow if currently Available
      if (statusEl.innerText === 'Available') {
        // Ask the user to confirm
        const ok = window.confirm(`Are you sure you want to borrow "${bookTitle}"?`);
        if (!ok) return;   // if they hit Cancel, do nothing
  
        // 1) Change status text + styling
        statusEl.innerText = 'Un‑Available';
        statusEl.classList.remove('available');
        statusEl.classList.add('unavailable');
  
        // 2) Disable the button
        borrowBtn.disabled = true;
  
        // 3) Persist the borrowed book
        if (!borrowed.includes(bookTitle)) {
          borrowed.push(bookTitle);
          localStorage.setItem('borrowedBooks', JSON.stringify(borrowed));
        }
      }
    });
  });
  