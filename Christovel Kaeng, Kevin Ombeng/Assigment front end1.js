

console.log("Assigment Front End ");
console.log("kevin kaeng")

//Javascript string concat
var totn_string = 'Hello';
console.log(totn_string.concat('Hello','front','end'));
console.log(totn_string);   
//digunakan untuk menggabungkan string menjadi satu atau menggabungkan dua parameter yang diteruskan

//Includes
let str = 'JavaScript string includes';
console.log(str.includes('Script'));   
//digunakan untuk melakukan pencarian peda huruf besar atau kecil untuk menentukan apakah satu string dapat ditemukan di dalam string lain

//Length
let sentence = "JavaScript String length";
let len = sentence.length;
console.log(len);    
//Digunakan untuk mencari panjang string tertentu atau mengembalikan jumlah karakter dalam string

//Split
const text = "Javascript string split. Javascript split string. javascript";
let pattern = ".";
let newText = text.split(pattern);
console.log(newText);  
//digunakan untuk Fungsi ini mengubah string menjadi array

//slice
const message = "JavaScript string slice";
// slice the substring from index 0 to 10
let result = message.slice(0, 10);
console.log(result);  
//digunakan untuk mendapatkan bagian dari string atau mengekstrak dan mengembalikan bagian dari string

//substring
let string = "JavaScript string substring";
substr1 = string.substring(0, 1);
console.log(substr1);  
//digunakan untuk mengembalikan bagian tertentu dari string antara indeks awal dan akhir

//toLowerCase
let lowercase_str = str.toLowerCase();
console.log(lowercase_str);
//digunakan untuk mengembalikan string yang dikonversi menjadi huruf kecil

//toUpperCase
const upperMessage = message.toUpperCase();
console.log(upperMessage);               
//digunakan untuk mengembalikan string yang dikonversi menjadi huruf besar

//trim
const newMessage = message.trim();
console.log(newMessage);            
//digunakan untuk menghapus semua spasi putih dari string yang ada di awal atau akhir string, menghilangkan spasi putih dari kedua ujung string

//ValueOf
let strVar1 = new String("JavaScript string valueof");
strVar1.valueOf();                 
//digunakan untuk mengembalikan nilai primitif dari objek String, Hasilnya tetap sama asalkan nilai stringnya sama.