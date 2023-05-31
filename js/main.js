/* localStorage - shaxsiy,mahalliy ombor*/
/*localStorage.setItem('ism','Navruz')
localStorage.setItem('familiya','Malikov')
localStorage.setItem('yoshi','17')



localStorage['ism'] = 'Islom'
localStorage['familiya'] = 'Muhammadaliyev'
localStorage['yoshi'] = '17'*/
/*localStorage.removeItem('ism')
localStorage.removeItem('familiya')
localStorage.removeItem('yoshi')*/
/*
localStorage.clear()


let uningIsmi = localStorage.getItem('ism')
let uningFamiliyasi = localStorage.getItem('familiya')
let uningYoshi = localStorage.getItem('yoshi')

console.log(uningIsmi,uningFamiliyasi,uningYoshi)*/
/*https requests in JS (JS da https so'rovlar)*/
/*
let sorov = new XMLHttpRequest();

sorov.open('get','https://getty.uz/serverdan/malumot/olish');

sorov.send();


sorov.onload = function (){
    console.log(sorov.responseText)
};*/



/*JSON in JS (JS da ma'lumotlarni JSONlash)*/

/*let jsFile = {'ism':"Navruz",yoshi:18}      /!*JavaScript*!/

let jsonFile = '{"ismi":"Navruz","yoshi":18}' */  /*JSON*/

/*console.log(JSON.stringify(jsFile))*/

/*
console.log(JSON.parse(jsonFile))*/

let sorov = new XMLHttpRequest();
sorov.open('get','jsonFayl.json');
sorov.send();
sorov.onload = function (){
    let byData = JSON.stringify(sorov.responseText)
    console.log(byData.ism,byData.yoshi)
}















