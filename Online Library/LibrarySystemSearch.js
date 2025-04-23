console.log("LibrarySystemSearch");
//// alert box
const showAlertBtn =document.getElementById('showAlert');
const customAlert = document.getElementById('customAlert');
const confirmBtn =document.getElementById('confirm');
const goToList=document.getElementById('GoToList');

let searchInput = document.getElementById('searchInput');
// localStorage.setItem('book1', JSON.stringify({
//     title: 'Harry Potter',
//     author: 'J.K. Rowling',
//     category: 'Fantasy',
// }));
console.log("added to localStorage");

function search(value) {
    if(localStorage.length == 0){
        console.log("empty")
        return;
    }


    let found=false;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(key));
        if (item.title.toLowerCase().includes(value.toLowerCase())) {
            showCustomAlert();
            found = true;
            searchInput.innerHTML='';
            break;
        }
    }
        if(!found ) {
            text =document.getElementById('text').innerHTML='sorry the book is not in stock :(';
            goToList.style.display = 'none';
            showCustomAlert();
        }
    searchInput.value='';
}
function showCustomAlert() {
    customAlert.style.display = 'flex';
}

confirmBtn.addEventListener('click', () => {
    customAlert.style.display = 'none';
});

goToList.addEventListener('click', () => {
    window.open('book_list.html');
});
searchInput.addEventListener('keyup',(e)=>{
    if (e.key === 'Enter') {
        search(searchInput.value);
    }
})


