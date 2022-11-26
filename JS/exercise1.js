/* 1. 1-dən 20-ə qədər cüt  ədədləri çap edən proqram tərtib edin.(Mütləq for-dan istifadə edin. For bir-bir artmalıdır.
İf-in içində console(log və ya writeline) istifadə etmək olmaz */
// let a;

// for (i = 2; i <= 40; i++) {
//     if (i % 2 == 0) {
//         a = i++
//     }
//     console.log(a)
// }


/*2. Daxil edilən ədədin sadə ədəd olub olmadığını təyin edən proqram tərtib edin.
Məsələn a=3 cavab sadədir. a=81 cavab - mürəkkəbdir.

Note: bu tapşırıq üçün həmçinin flowchart da yazılmalıdır*/



// for (i = 2; i <= a; i++) {
//     if (a % i === 0) {
//         console.log("murekkeb")
//         break
//     } else {
//         console.log("sadedir")
//         break
//     }
// }

// if (a === 1 || a === 2) {
//     console.log("sade ededdir.")
// } else {
//     for (let i = 2; i < a; i++) {
//         if (a % i === 0) {
//             console.log("sade")
//             break
//         }else{
//             console.log("murekkeb")
//             break
//         }
//     }
// }


// const number = 6;

// let b = false;

// if (number == 1) {
//     console.log("daxil edilen eded 1-den boyuk olmalidir!!");
// }
// else if (number > 1) {
//     for (let i = 2; i < number / 2; i++) {
//         if (number % i == 0) {
//             b = true;
//             break;
//         }
//     }
//     if (b == true) {
//         console.log(`${number} murekkeb ededdir`);
//     }
//     else {
//         console.log(`${number} sade ededdir`)
//     }
// }



/*3. 1-dən 10-a kimi ədədlər dövrü olan for yaradın. Ədədləri çapa verin. Lakin 6-dan sonra ekrana heç bir ədəd yazılmasın və for döngüsündən çıxılsın.*/


/* 2. Daxil edilən ədədin sadə ədəd olub olmadığını təyin edən proqram tərtib edin.
Məsələn a=3 cavab sadədir. a=81 cavab - mürəkkəbdir. */




/*4.Bu gün sinifdə etdiyimiz tapşırığn neçənci qüvvət üstü olduğunu təyin edən proqram yazın.
Məsələn: 2 və 8 daxil etdikdə cavab-3. 3 və 81 daxil etdikdə cavab-4 olsun. */

// let m = 8;
// let n = 2;
// let sum = m;
// let a = 0;

// for (i = m; i >= 1; i--) {
//     sum = sum / n
//     a++
//     if (sum == 1) {
//         console.log(`${m} ededi ${n} ededinin ${a}-ci dereceden quvvetidir`)
//         console.log()
//         break
//     } if (i == 2) {
//         console.log("deyil")
//         break
//     }
// }



// let a;

// for (i = 2; i <= 20; i++) {
//     if (i % 2 != 0) {
//         continue
//     }
//     console.log(i)
// }


let students = ["araz", "sunya", "senan", "eli", "ali"]

let uzunluq = students.length;

for (let i = 0; i <= uzunluq; i++) {
    console.log([i])
}