

let massiv = [1, 9, 22, 10, 11, 12, 13, 14, 15, 16, 2, 4, 4, 5, 6, 7, 8]
massiv.sort((a, b) => a - b)


let len = massiv.length
let key = 22
let step = Math.floor(massiv.length ** (1 / 2))
let baslangic = 0


while (massiv[step - 1] < key) {//step yazdiq cunki step hemise len-den kicik olur
    baslangic = step;
    step += step;

    if (baslangic == len) {
        console.log("axtarilan element tapilmadi.");

    }
}

while (massiv[baslangic] < key) {
    baslangic++;
}
if (massiv[baslangic] == key) {
    console.log(`axtarilan element ${baslangic}-ci indeksdedir`)
}


