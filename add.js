// 1.   1 dan 77 gacha o'ylagan sonimni topish

let javob = "";
let taxmin;

while (javob !== "ha") {
  taxmin = Math.floor(Math.random() * 77);

  javob = prompt(`Siz ${taxmin} sonini o‘ylagansizmi? (ha/yo‘q)`);

  if (javob === null || javob === "") {
    alert("Iltimos, ha yoki yo‘q deb javob bering.");
  } else if (javob === "yo`q" || javob === "yoq" || javob === "yo'q") {
    console.log(`Yana bir bor urinib ko'raman`);
  } else if (javob === "ha") {
    alert(`Men siz o‘ylagan ${taxmin} sonini topdim!`);
  } else {
    alert("Faqat 'ha' yoki 'yo‘q' deb javob bering.");
  }
}




// 1    Math.floor, Math.ceil, Math.round yordamida yaxlitlash


let num = Number(prompt("Son kiriting: "));

console.log("Sonning o'zi: ",num);
console.log("Floor: ", Math.floor(num));
console.log("Ceil: ", Math.ceil(num));
console.log("Round: ", Math.round(num));



//2  0 va 10 orasida random son yasab foydalanuvchiga korsatish

let result = Math.floor(Math.random()*10)+1;

console.log("0 dan 10 gacha random natija: ", result);


// 3    null va undefined farqi

let z = null;
let x = undefined;

console.log(z);
console.log(x);


// 4   while yordamida 10 ta 0 va 100 oralig'ida son chiqarish


let min=10;
let max=100
let a=0;
while (a<10){
    let son = Math.floor(Math.random()*(max-min+1))+min;
    console.log("10 va 100 oralig'idagi random natija: ", son);

    a+=1;
}

// 5   kvadratga oshirish

let number1 = Number(prompt("Son kiriting: "));
console.log(Math.pow(number1, 2));


// 6   1 dan 20 gacha toq sonlarni chiqarish


let s=1;
while(s<20){
    console.log(s);
    s+=2

}


// 7    to'g'ri sonni topmaguncha do while islatish


let randSon = Math.floor(Math.random() * 10) + 1;
let inputSon;

do {
  inputSon = Number(prompt("1 dan 10 gacha son kiriting:"));

  if (inputSon !== randSon) {
    alert("Xato! Yana kiriting.");
  }

} while (inputSon !== randSon){

alert("To‘g‘ri topdingiz!");
}



// 8     while yordamida 1 dan 50 gacha 3 ga bo'linadigan sonlarni chiqarish, 21 ga teng bo'lsa to'xtatish


let raqam = 0;

while (raqam<50){
    raqam+=1;

    if (raqam==21 ){
        break;
    }
    else if(raqam%3==0){
        console.log(raqam);
    }

}


// 9    5 ta random son yasash va eng kattasini konsolga chiqarish

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);
let num4 = Math.floor(Math.random() * 100);
let num5 = Math.floor(Math.random() * 100);

console.log("Sonlar: ", num1, num2, num3, num4, num5);



if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
  console.log("Eng katta son: ", num1);
}
else if (num2 > num1 && num2 > num3 && num3 > num4 && num2 > num5) {
  console.log("Eng katta son: ", num2);
}
else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
  console.log("Eng katta son: ", num3);
}
else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
  console.log("Eng katta son: ", num4);
}
else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
  console.log("Eng katta son: ", num5);
}
else{
  console.log("!");

}



// 10     undefined yoki null ni qabul qilmasdan boshqa so'rash ?? bilan



let numx = (prompt("Son kiriting: "));

if (numx === null || numx === "") {
  console.log("Boshqa kiriting!");

} else {
  console.log("to'g'ri");

}





