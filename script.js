// var nama = "Dicky";
// console.log(nama);
// var nama = "Bunga";
// console.log(nama);

// let inisal = "Dicky";
// console.log(inisal);
// inisal = "Bunga";
// console.log(inisal);

// let sekolah = "SMK LETRIS"
// let value =20;
// let isSmart = true;
// let object = {
//     type : "value"
// }
// let arr = [sekolah, value]
// var kosong;
// var koosong = undefined;
// let nol =null

// alert ("hallo");
// let konfir = confirm ("Apakah kamu ingin Melanjutkan");

// if (konfir == true){
//     document.write ("selamat datang");
// }else{
//     document.write ("Yahh....");
// }

// let username = prompt ("MASUKAN NAMA ANDA");
// let password = prompt ("MASUKAN PASSWORD ANDA");

// if(username == "Bunga14"){
//     if(password == "123"){
//     }else{
//         alert("password anda tidak cocok")
//     }
// }else {
//     alert("username tidak cocok")
// }

// let x = 10;
// let y = 20;
// console.log(x+y);

let number = parseFloat(prompt("Enter First Number", 0));
let second = parseFloat(prompt("Enter Second Number", 0));
let operator = prompt ("Input Operator (salah satu +,-,*,/):" );

let hasil;
if (operator == '+' )  {
    hasil = number + second
}
if (operator == '-' )  {
    hasil = number - second
}
if (operator == '*' )  {
    hasil = number * second
}
if (operator == '/' )  {
    hasil = number / second
}
     document.writeln(`${number} ${operator} ${second} = ${hasil}`);


