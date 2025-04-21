let searchInput = document.getElementById('searchInput');
//localStorage.setItem('book1', 'harry potter');
function search(value) {
    if(localStorage.length == 0){
        console.log("clear")
        return;
    }
    let found=false;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = localStorage.getItem(key);
        if (item.toLowerCase().includes(value.toLowerCase())) {
            alert("Book is Found in the system ,you can check the book list");
            found = true;
            searchInput.innerHTML='';
            break;
        }
    }
        if(!found ) {
            alert("sorry the book is not in stock");
        }
    searchInput.value='';
}
