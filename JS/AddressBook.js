class Contact{
    constructor(name,email,mobile){
        this.name=name;
        this.email=email;
        this.mobile=mobile;
    }
}
let counter=0;
let list = [];
let variable = "eachContactSummary";
function load(){
    var newcontact = new Contact("Chandermani Arora","chandermani@technovert.com","+91 9292929292");
    list.push(newcontact);
    var newcontact = new Contact("Shashi Pagadala","vijay@technovert.com","+91 9292929292");
    list.push(newcontact);
    var newcontact = new Contact("Praveen Battula","vijay@technovert.com","+91 9292929292");
    list.push(newcontact);
    var newcontact = new Contact("Vijay Yalamanchili","vijay@technovert.com","+91 9292929292");
    list.push(newcontact);
    for(let i=0;i<list.length;i++){
        displaySummary(list[i],i);
    }
}
function displaySummary(contact,i){
    let div = document.createElement("div");
    div.className = variable;
    div.id=variable+i;
    div.setAttribute('onclick','a(this.id)');
    div.innerHTML="<h1 class='Name'>"+contact.name+"</h1><p class='Mail'>"+contact.email+"</p><p class='Mobile'>"+contact.mobile+"</p>"
    document.getElementById("summary").appendChild(div);
}
function a(id){
    //document.getElementById(id).className=variable+" active";
    document.getElementsByClassName('contactInfo')[0].style.display="block";
    var i = id[id.length-1];
    document.getElementById('detailedName').innerHTML=list[i].name;
    document.getElementById('detailedEmail').innerHTML=list[i].email;
    document.getElementById('detailedMobile').innerHTML=list[i].mobile;
}