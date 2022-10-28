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
var newcontact = new Contact("Chandermani Arora","chandermani@technovert.com","+91 9292929292","040301231211","http://www.technovert.com","123 now here<br>Some street<br>Madhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Sashi Pagadala","sashi@technovert.com","+91 9985528844","040301231211","http://www.technovert.com","123 now here<br>Some street<br>Madhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Praveen Battula","praveen@technovert.com","+91 9985016232","040301231211","http://www.technovert.com","123 now here<br>Some street<br>Madhapur, Hyderabad 500033");
list.push(newcontact);
var newcontact = new Contact("Vijay Yalamanchili","vijay@technovert.com","+91 9885071216","040301231211","http://www.technovert.com","123 now here<br>Some street<br>Madhapur, Hyderabad 500033");
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
    //document.getElementById(id).className=variable+" active";
    document.getElementsByClassName('contactInfo')[0].style.display="block";
    var i = id[id.length-1];
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