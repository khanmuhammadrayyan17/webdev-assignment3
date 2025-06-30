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

async function list() {
    let form = document.getElementById('form');
    form.addEventListener('submit', async (event)=>{
        event.preventDefault();
        let search = document.getElementById('book').value
        let url = `https://assignment3.rohanhussain.com/api/books/26100216/search?query=${search}`;
        const response = await fetch(url);
        const list = await response.json();
        console.log(list);
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
        })
}

list();
menu();