// let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "I"]

// // for (i = 0; i <= countries.length; i++) {
// //     console.log(country[i])
// // }

// //bas herfi C olan olkeler

// // for (i = 0; i < countries.length; i++) {
// //     if (countries[i][0] == "C") {
// //         console.log(countries[i])
// //     }
// // }

// //bas herfleri

// // for (i = 0; i < countries.length; i++) {
// //     console.log(countries[i][0])
// // }

// //3 bas herfleri

// // for (i = 0; i < countries.length; i++) {
// //     console.log(countries[i][0] + countries[i][1] + countries[i][2])
// // }

// //4x4 ulduz

// // for (i = 0; i <= 3; i++) {
// //     for (j = 0; j <= 3; j++) {
// //         console.log("*")
// //     }
// //     console.log("*")
// // }




// // let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// // let operator = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
// // let result = ['0', '1', '4', '9', '16', '25', '36', '49', '64', '81', '100']

// // for ()

// //sozlerin nece simvoldan ibaret oldugu
// // for (i = 0; i < countries.length; i++) {
// //     console.log(`${countries[i]} -- ${countries[i].length}`)
// // }



// /*2. Baş hərfi ilə son hərfi A olan  ölkələrin adını çap edən proqram yazırsınız.

// Cavab konsolda bu şəkildə olmalıdır:

// Albania
// Algeria
// Andorra
// və s. */
// //||

// // for (i = 0; i < countries.length; i++) {
// //     if (countries[i][0] == "A" && countries[i][countries[i].length -1]=="a") {
// //         console.log(countries[i])
// //     }
// // }

// /* sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`

// 3. sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın. */

// let sampleNews = "As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen."
// // let a = 0
// // console.log(sampleNews.length)
// // for (i = 0; i < sampleNews.length - 1; i++) {
// //     if (i == " ") {
// //         a += 1
// //         console.log(a)
// //         break
// //     }else{
// //         console.log("bosluq yoxdur.")
// //     }
// // }

// // let a = 0;
// // for (let i = 0; i < sampleNews.length; i++) {
// //     const bosluq = sampleNews[i];
// //     if (bosluq !== "," && bosluq !== ".") {
// //         continue;
// //     };
// //     a++;
// // };
// // console.log("Cumlede olan vergul ve noqtelerin sayi= ", a)

// //3 bucaq

// // for (i = 0; i <= 8; i++) {
// //     for(j=0;j<=8;j++){
// //         console.log("*")
// //     }
// // }

// // let city =["baki","salam","seher",'saka','adjkad','slkdf','sadjg','ajfshjash']

// // for (i = 0; i < 5; i++) {
// //     if (i % 2 == 0) {
// //         console.log(city[i]+city[i][city[i].length-1])
// //     }
// // }


// // let a = ['Baku', 'London', 'kiev']

// // //elave etmek
// // a.push('Istanbul', 'Paris')

// // a[2] = 'odessa'

// // let b = [];

// // for (i = 0; i <= a.length - 1; i++) {
// //     b += a[i]
// // }
// // console.log(b)


// // for (i = 0; i <= b.length - 1; i++) {
// //     console.log(b)
// //     break;
// // }


// //cem

// let h = [-1, 2, 0, -3, 5]
// let sum = 0;
// for (let i = 0; i < h.length; i++) {
//     sum = sum + h[i];
// }
// console.log('cem= ' + sum)

// let hasil = 1;
// for (let i = 0; i < h.length; i++) {
//     hasil = hasil * h[i];
// }


// if (sum > hasil) {
//     a = sum - hasil
// } else {
//     a = hasil - sum
// }

// console.log('hasil= ' + hasil)
// console.log("ferq= " + a)


// for (let i = 0; i < h.length; i++) {
//     if (h[i] < 0) {
//         console.log(h[i])
//     }
// }
// //birlesdirme
// let l = [-2, 3, 0, 7, 60]

// for (i = 0; i < h.length; i++) {
//     l.push(h[i])
// }
// console.log(l)


// for (let i = 0; i < h.length; i++) {
//     for (let j = 0; j < l.length; j++) {
//         if (h[i] === l[j]) {
//             console.log(h[i])
//         }
//     }
// }



// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// let len = massiv.length
// let key = 16
// let step = Math.floor(massiv.length ** (1 / 2))
// let baslangic = 0


// while (massiv[step - 1] < key) {//step yazdiq cunki step hemise len-den kicik olustep
//     baslangic = step;
//     step += step;

//     if (baslangic == len) {
//         console.log("axtarilan element tapilmadi.");

//     }
// }

// while (massiv[baslangic] < key) {
//     baslangic++;
//     if (baslangic == step) {
//         console.log("tapilmadi!");
//     }
// }
// if (massiv[baslangic] == key) {
//     console.log(`axtarilan element ${baslangic}-ci indeksdedir`)
// }






// let d = `salam sagolun siz necesiz yaxsiliqdi sagolun `
// let a =0
// for (i = 0; i <= d.length; i++){
//     if(d[i]==" "){
//         a++
//     }
// }
// console.log(a)



// let country = ['Andorra','Azerbaijan','Albania','Brazil','Russia']

// for(i=0;i<country.length;i++){
//     if(country[i][0]=="A"||country[i][0]=="a"&& country[0][country.length-1]=="A"||country[0][country.length-1]=="a"){
//         console.log(country[i])
//     }
// }

// let eded = 689

// let teklik = eded % 10
// let onluq = ((eded / 10) - teklik) % 10
// console.log(teklik,onluq)


// for (i = 1; i <= 20; i++) {
//     if (i % 2 != 0){
//         continue
//     }else{
//         console.log(i)
//     }
// }

// let a = 40
// let b = 20
// let c = 5

// if (a > b && a > c && b > c) {
//     console.log("artan sira: ", a, b, c)
//     console.log("azalan sira: " , c, b, a)
// } else if (b > a && b > c && c > a) {
//     console.log("artan sira: ", b, c, a)
//     console.log("azalan sira: ", a, c, b)
// } else if (c > a && c > b && b > a) {
//     console.log("artan sira: ", c, b, a)
//     console.log("azalan sira: ", a, b, c)
// }

// if (a > b && a > c && b > c) {
//     console.log(a, b, c)
// }
// else if (a > b && a > c && b < c) {
//     console.log(a, c, b)
// }
// else if (b > a && b > c && a > c) {
//     console.log(b, a, c)
// }
// else if (b > a && b > c && a < c) {
//     console.log(b, c, a)
// }
// else if (c > a && c > b && a < b) {
//     console.log(c, b, a)
// }
// else if (c > a && c > b && a > b) {
//     console.log(c, a, b)
// }



// for (i = 1; i <= 10; i++) {
//     console.log(i)
//     if (i === 6) {
//         break
//     }
// }


// let eded = 987;

// let teklik = eded % 10
// let onluq = ((eded / 10) - teklik / 10) % 10
// let yuzluk = (((eded / 10) - teklik / 10) / 10) - onluq / 10
// console.log(yuzluk + "," + onluq + "," + teklik)

//-------------------------------------------

// let results = [];
// for (let i = 0; i < h.length; i++) {
//     for (j = 0; j < l.length; j++) {

//         if (h[i] == j[i]) {
//             results.push(h[i]);
//             console.log(results[i])
//         }
//     }
// }

// for (let i = 0; i < h.length; i++) {
//     for (let j = 0; j < l.length; j++) {
//         if (h[i] === l[j]) {
//             continue
//             console.log(h[i])
//         }
//     }
// }


// arrayda oxsar olanlari 3cu arraya menimsetmek

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let array2 = [1, 12, 13, 4, 15, 6, 17, 18, 19, 2]
// let array3 = []
// for (i = 0; i < array1.length; i++) {
//     for (j = 0; j < array2.length; j++) {
//         if (array1[i] == array2[j]) {
//             array3.push(array1[i])
//         }
//     }
// }

// console.log(array3)

// en boyuk eded

// let array = [1, 2, 3, 4, 500, 6, 7, 800, 9, 100]
// let a = array[0]
// let indeks
// for (let i = 0; i < array.length; i++) {
//     if (a < array[i]) {
//         indeks = i
//         a = array[i];
//     }
// }

// console.log(`en boyuk eded ${a}-dir ve ${indeks}-ci indeksde yerlesir`)


// en uzun soz

// let array1 = ['salam', 'sagolun', 'siz', 'necesiz']
// let array2 = ['sukur', 'yaxsiliqdi', 'siz', 'necesiz']
// let array3 = []

// for (i = 0; i < array1.length; i++) {
//     for (j = 0; j < array2.length; j++) {
//         if (array1[i] == array2[j]) {
//             array3.push(array1[i])
//         }
//     }
// }

// console.log(array3)

// let array4 = array3[0].length
// console.log(array4)
// for (i = 0; i < array3.length; i++) {
//     if (array4 < array3[i].length) {
//         console.log(array4[i])
//     }
// }

// let numbers = [1, 2, 3, 4, 4, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 2, 6, 7, 8, 1, 1]
// // let numbe= [1, 2, 3, 4, 4, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 2, 6, 7, 8, 1, 1]


// // // tekrarlanan ededleri ekrana cap et
// // // en cox tekrarlanan ededi tap
// let b = numbers
// let c = []

// for (i = 0; i < numbers.length; i++) {
//     for (j = i; j < b.length; j++) {
//         if (i != j && numbers[i] == b[j]) {
//             c.push(numbers[i])
//         }
//     }
// }
// console.log(c)



// insertion sort
// let numbers = [-5, 4, 1, 3, -15, -2, 9, 12, 18]
// for (let i = 1; i < numbers.length; i++) {
//     let j = i - 1
//     let addim = numbers[i]
//     while (j >= 0 && numbers[j] > addim) {
//         numbers[j + 1] = numbers[j]
//         j--
//     }
//     numbers[j + 1] = addim
// }
// console.log(`Insertion sort edilmis array: ${numbers}`)



// let n = prompt("Tribonacci ededinin uzunlugunu daxil edin: ")

// if (n == 0 || n == 1 || n == 2) {
//     alert(0)
// }
// if (n == 3) {
//     alert(1)
// } else (
//     alert(n = n - 1 + n - 2 + n - 3)
// )
// for (let i = 1; i <= n; i++) {
//     alert(n(i) + " ");
// }


// let n = 125481
// let array = [n]
// for (i = 0; i < array.length; i++) {
//     if (array[i] == 1 && array[i] == 5) {
//         continue
//     }
//     console.log(array)
// }
// console.log(array)

// let rengli = document.getElementById("salam")

// function reng() {
//     rengli.style.color = " red";
// }


const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
