function myFunction() {
    
    const input = document.querySelector('#myInput');
    const filter = input.value.toUpperCase();
    const ul = document.querySelector('#myUL');
    const li = ul.getElementsByTagName('li');

    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = "none"
        };
    }
}