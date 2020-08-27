let authorManager=new AuthorManager();

function addAuthor(){
    let id=$("#id").val(); //get value from the text box
    let name=$("#name").val(); //get value from the text box
    let biography=$("#biography").val(); //get value from the text box
    let author=new Author(id,name,biography);

    authorManager.addAuthor(author);
    updateList();
}

function updateList(){
    let authors=$("#authors");
    authors.empty();

    for(let author of authorManager.getAll()){
        let li=`<li>${author.name}</li>`;
        authors.append(li);
    }

    
}

updateList();