const listItemInput = document.querySelector('#listItemInput')
// console.log(listItemInput)
const UnOrderedlist = document.querySelector('ul')
// console.log(UnOrderedlist)
const submtBtn = document.querySelector('#submit')
// console.log(submtBtn)

// console.log(UnOrderedlist.innerHTML)

function submitHandler(){
    // i created a varaibale let val = ismeh listItemInput.value ko mangwaya
    let val = listItemInput.value
    // const variable banyah aur li ke name se, li meh data dala li ko id di val jo value hogi wahi id hogi
    // h1 mai val input jo hoga woh agye ga
    // 1 div create ki
    // span liya tah 1 line mai agye 
    const li = `
<li id=${val}>
    
    <h1>${val}</h1>
    
    <div>   
        <span class="listButton" id="edit" onclick="editHandler('${val}')">edit</span>
        <span class="listButton" id="delete" onclick="deleteHandler('${val}')">delete</span>
    
    </div>   
</li>`

UnOrderedlist.innerHTML += li
listItemInput.value = ''
}

function editHandler(val){
    console.log(val)
    const li = document.getElementById(val)
    listItemInput.value = li.children[0].textContent
    console.log(listItemInput.value)
    submtBtn.textContent = 'Edit'
    submtBtn.setAttribute('onclick', `newEditHandler('${val}')`)
}


function newEditHandler(val){
    console.log(val)
    const li = document.getElementById(val)
    li.children[0].innerHTML = listItemInput.value
    submtBtn.textContent = 'Submit'
    submtBtn.setAttribute('onclick', 'submitHandler()')
    listItemInput.value = ''

    
}


function deleteHandler(){
    let li = document.getElementById(val)
    UnOrderedlist.removeChild(li)
}