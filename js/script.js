//Get elements from HTML
let elForm = document.querySelector(".add-form");
let elFirstNameInput = document.querySelector(".first-name");
let elLastNameInput = document.querySelector(".last-name");
let elSelect = document.querySelector(".relative-select");
let elPhoneNumber = document.querySelector(".phone-number");

//Get result element
let elAddedContact = document.querySelector(".result-part");

//Contacts array
let contacts = [];


//Push the object from Form to array
let createContactObject = function(name, surname, relation, phone){

  //Put the object to array
   contacts.push({
     name,
     surname,
     relation,
     phone,
   })
}


//Append the array to list
 let appendElementFromContacts = function(){
   for(let i = 0; i < contacts.length; i++){
    let elNewList = document.createElement("li");

    elNewList.setAttribute("class", "mb-3 d-flex flex-column p-3  border border-2 border-primary rounded-2");

     elNewList.innerHTML = `
     <p>
     <span class="text-primary d-inline-block w-25">Name:</span>
      <span>${contacts[i].name}</span>
      </p>
            
    <p>
    <span class="text-primary d-inline-block w-25">Last-name:</span>
     <span>${contacts[i].surname}</span>
     </p>

    <p>
    <span class="text-primary d-inline-block w-25">Relation:</span>
     <span>${contacts[i].relation}</span>
     </p>

    <p>
    <span class="text-primary d-inline-block w-25">Phone number:</span>
     <span>${contacts[i].phone}</span>
     </p>
     `


     elAddedContact.appendChild(elNewList);
   }
 }



//Listen the Form
elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  elAddedContact.innerHTML = "";


  let name = elFirstNameInput.value.trim();
  let surname = elLastNameInput.value.trim();
  let relation = elSelect.value;
  let phone = elPhoneNumber.value.trim();

  createContactObject(name, surname, relation, phone);

  appendElementFromContacts();
})




