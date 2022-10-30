class Contact{
    constructor(name,email,mobile,landline,website,address){
        this.name=name;
        this.email=email;
        this.mobile=mobile;
        this.landline=landline;
        this.website=website;
        this.address=address;
    }
}
let counter=0;
let list = [];
let variable = "eachContactSummary";
var newcontact = new Contact("Chandermani Arora","chandermani@technovert.com","+91 9292929292","040301231211","http://www.technovert.com","123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Sashi Pagadala","sashi@technovert.com","+91 9985528844","040301231211","http://www.technovert.com","123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Praveen Battula","praveen@technovert.com","+91 9985016232","040301231211","http://www.technovert.com","123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Vijay Yalamanchili","vijay@technovert.com","+91 9885071216","040301231211","http://www.technovert.com","123 now here\nSome street\nMadhapur, Hyderabad 500033");
list.push(newcontact);
function load(){
    for(let i=0;i<list.length;i++){
        displaySummary(list[i],i);
    }
}
function displaySummary(contact,i){
    let div = document.createElement("div");
    div.className = variable;
    div.id=variable+i;
    div.setAttribute('onclick','displayDetails(this.id)');
    div.innerHTML="<h1 class='Name'>"+contact.name+"</h1><p class='Mail'>"+contact.email+"</p><p class='Mobile'>"+contact.mobile+"</p>"
    document.getElementById("summary").appendChild(div);
}
function displayDetails(id){
    document.getElementById(id).className=variable+" active";
    document.getElementsByClassName('contactInfo')[0].style.display="block";
    document.getElementById('addDetails').style.display="none";
    var i = id[id.length-1];
    for(let j in list){
        if(j!=i && list[j].name!=null){
            document.getElementById(variable+j).className=variable;
        }
    }
    counter=i;
    document.getElementById('detailedName').innerHTML=list[i].name;
    document.getElementById('detailedEmail').innerHTML=list[i].email;
    document.getElementById('detailedMobile').innerHTML=list[i].mobile;
    document.getElementById('detailedLandline').innerHTML=list[i].landline;
    document.getElementById('detailedWebsite').innerHTML=list[i].website;
    document.getElementById('detailedAddress').innerHTML=list[i].address;
}
function deleteDetails(){
    let delname=document.getElementById('detailedName').textContent;
    if(confirm("Are you sure you want to delete "+delname+"'s details")==true){
        for(let i=0;i<list.length;i++){
            if(list[i].name==delname){
                document.getElementById(variable+i).innerHTML=null;
                document.getElementById(variable+i).remove();
                document.getElementsByClassName('contactInfo')[0].style.display="none";
                list[i].name=null;
            }
        }
    }
}
function openForm(){
    document.getElementById('newName').value="";
    document.getElementById('newEmail').value="";
    document.getElementById('newMobile').value="";
    document.getElementById('newLandline').value="";
    document.getElementById('newWebsite').value="";
    document.getElementById('newAddress').value="";
    document.getElementById('addDetails').style.display="block";
    document.getElementsByClassName('contactInfo')[0].style.display="none";
    for(let j in list){
        document.getElementById(variable+j).className=variable;
    }
}
function createContact(){
    if(confirm("Are you sure you want to new contact details")){
        var name = document.getElementById('newName').value;
        var email = document.getElementById('newEmail').value;
        var mobile = document.getElementById('newMobile').value;
        var landline = document.getElementById('newLandline').value;
        var website = document.getElementById('newWebsite').value;
        var address = document.getElementById('newAddress').value;
        contact = new Contact(name,email,mobile,landline,website,address);
        list.push(contact);
        displaySummary(contact,list.length-1);
        document.getElementById("createForm").reset();
        displayDetails(variable+(list.length-1));
    }
}
function editDetails(){
    document.getElementById('addDetails').style.display="block";
    document.getElementsByClassName('contactInfo')[0].style.display="none";
    document.getElementById('createButton').value='Edit';
    document.getElementById('createButton').setAttribute('onclick','editContact()');
    document.getElementById('newName').value = document.getElementById('detailedName').textContent;
    document.getElementById('newEmail').value = document.getElementById('detailedEmail').textContent;
    document.getElementById('newMobile').value = document.getElementById('detailedMobile').textContent;
    document.getElementById('newLandline').value = document.getElementById('detailedLandline').textContent;
    document.getElementById('newWebsite').value = document.getElementById('detailedWebsite').textContent;
    document.getElementById('newAddress').value = document.getElementById('detailedAddress').textContent;
}
function editContact(){
    if(confirm("Are you sure you want to edit "+list[counter].name+"'s details")){
        list[counter].name = document.getElementById('newName').value;
        list[counter].email = document.getElementById('newEmail').value;
        list[counter].mobile = document.getElementById('newMobile').value;
        list[counter].landline = document.getElementById('newLandline').value;
        list[counter].website = document.getElementById('newWebsite').value;
        list[counter].address = document.getElementById('newAddress').value;
        document.getElementById(variable+counter).getElementsByClassName('Name')[0].innerHTML=list[counter].name;
        document.getElementById(variable+counter).getElementsByClassName('Mail')[0].innerHTML=list[counter].email;
        document.getElementById(variable+counter).getElementsByClassName('Mobile')[0].innerHTML=list[counter].mobile;
        displayDetails(variable+counter)
    }
}