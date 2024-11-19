//first
let firstName = "Iliyas";
let lastName = "Nyssanbek";
let age = 20;
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`)

//second
let city="Астана";
console.log("Я родом из города "+ city);

//third
const password = prompt("Your password is")
let hasAccess = true;
alert(password);
if(password.length>0){
    console.log("Your password is "+hasAccess)
}
else{
    console.log("Your password is "+ false)
}

//fourth
let isMember = false;
let r = isMember.toString();
console.log(r);
console.log(typeof r);

//fifth
let cardItems = 0;
let is = Boolean(cardItems);
console.log(is);

//sixth
let averageScore = 89.75695;
let round = averageScore.toFixed(1);
console.log(round);

//seventh
let greetingMessage = "      Приветствуем вас в мире программирования!        ";
let withoutspace = greetingMessage.trim();
let up = withoutspace.toUpperCase();
if(withoutspace.startsWith("Приветствуем")){
    console.log(true)
}
else{
    console.log(false);
}