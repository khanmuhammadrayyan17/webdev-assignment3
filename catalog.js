let url = 'https://assignment3.rohanhussain.com/api/books/26100216'

async function list() {
    const response = await fetch(url);
    const list = await response.json();
    console.log(list.result.books);
    let ul = document.getElementById('books-list');
    ul.innerHTML=""; 
    for (let i = 0; i < list.result.books.length; i++)
    {
        let img = document.createElement('img');
        img.setAttribute('src',list.result.books[i].coverImageUrl);
        img.setAttribute('height','360px')
        img.setAttribute('width','240px')
        let title = document.createElement('p');
        title.innerText = list.result.books[i].title;
        let li = document.createElement('li');
        li.appendChild(img);
        li.appendChild(title);
        ul.appendChild(li);
    }
}

function add() {
    let form = document.getElementById('form');
    form.addEventListener('submit', async (event)=>{
        event.preventDefault();
        await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": document.getElementById('book').value,
                "author": document.getElementById('name').value,
                "coverImageUrl": document.getElementById('img').value,
                "price": Number(document.getElementById('price').value)
            })
        })
        list();
    });
}

function menu()
{
    let menu = document.getElementById('browse');
    let open = 0;
    menu.addEventListener('click',()=>{
        let sidebar = document.getElementById('side-bar');
        if(open === 0)
        {
            sidebar.classList.toggle("animate");
            menu.setAttribute('class','fa-solid fa-arrow-left')
            open = 1;
        }
        else
        {
            sidebar.classList.toggle("animate");
            menu.setAttribute('class','fa-solid fa-bars')
            open = 0;
        }
    })

}

let open = 0;
document.querySelector('.fa-solid.fa-caret-down').addEventListener('click',()=>{
    let booksList = document.getElementById('books-list');
    if(open === 0)
    {
        booksList.style.height = booksList.scrollHeight + 'px';
        document.querySelector('.fa-solid.fa-caret-down').style.transform = 'rotate(180deg)';
        open = 1;
    }
    else
    {
        document.querySelector('.fa-solid.fa-caret-down').style.transform = 'rotate(0deg)';
        booksList.style.height = '0px';
        open = 0;
    }
})

add();
list();
menu();