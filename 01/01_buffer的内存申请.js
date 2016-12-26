// Buffer.alloc用于内存的分配，同时会对内存的旧数据进行覆盖，避免安全隐患的产生。

/*const buf1 = Buffer.alloc(10);
console.log(buf1); //<Buffer 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer.alloc(10,'lyt','base64');
console.log(buf2); //<Buffer 97 2b 97 2b 97 2b 97 2b 97 2b>

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);  // <Buffer 08 00 00 00 00 00 00 00 40 ef> // 不一定是什么数据

const buf4 = Buffer.allocUnsafeSlow(10);
console.log(buf4);  //<Buffer 00 00 00 00 00 00 00 00 86 00> // 不一定是什么数据*/

// const bufArr = Buffer.from([1,2,3]);
// console.log(bufArr);  // <Buffer 01 02 03>

// let arrBuf = new ArrayBuffer(12);
// let arr16 = new Uint32Array(arrBuf);
//
// arr16[0] = 600;
//
// let bf = Buffer.from(arr16);
//
// console.log(bf);

/*let arr8 = new Uint8Array(10);

arr8[0] = 1000;

let bf = Buffer.from(arr8);

console.log(bf); // <Buffer e8 00 00 00 00 00 00 00 00 00>*/

/*const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);

buf1[0] = 0x61;

// Prints: auffer
console.log(buf1.toString());

// Prints: buffer
console.log(buf2.toString());
*/

// const buf1 = Buffer.from('this is a tést');
//
// // Prints: this is a tést
// console.log(buf1.toString());
//
// // Prints: this is a tC)st
// console.log(buf1.toString('ascii'));
//
//
// const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');
//
// // Prints: this is a tést
// console.log(buf2.toString());



