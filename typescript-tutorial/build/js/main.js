"use strict";
// let myName: string = 'Jordan';
// let isLoading: boolean;
// let age: number;
// let album: boolean | number; // union type
// let any: any; // any type
// isLoading = true
// age = 42
// album = true
// album = 42
// // tuple
// let myTuple: [string, number, boolean]
// // objects
// type Test = {
//     name?: string,
//     age?: number, // question mark makes it optional
//     favThings: (number | string)[]
// }
//  interface Test2 {
//     name: string,
//     age?: number, // question mark makes it optional
//     favThings: (number | string)[]
// }
// let me: Test = {
//     name: 'jordan',
//     age: 31,
//     favThings: ["red", 21, 'black']
// }
// const greeting = (test: Test) => {
//     return `Hello ${test.name?.toLowerCase}!`
// }
// // enums
// enum Grade {
//     U = 1,
//     D,
//     C,
//     B,
//     A,
// }
// // literal types
// let username: "Jordan" | "Jacob" | "James"
// username= 'Jordan'
// //aliases 
// type stringOrNubmer = string | number
// // functions
// const sum = (a: number, b?: number): number => { // optional paramaters need to come last
//     if (typeof b !== 'undefined'){
//         return a + b
//     } else return a
// }
// const logMsg = (message: any): void => { // void type for functions that don't return anything
//     console.log(message)
// }
// function sub(a: number, b: number): number {
//     return a - b
// }
// type mathFunction = (a: number, b: number) => number // cannot use with default values
// interface mathFunc {
//     (a: number, b: number) : number     // ^^
// }
// let multiply: mathFunction = function(a, b){
//     return a * b
// }
// const total = (...nums: number[]): number => {
//     return nums.reduce((prev, curr) => prev + curr)
// }
// total(1, 2, 3, 4)
// // never type 
// const createError = (errMsg: string): never => {  // never type is for throwing errors or from endless loops 
//     throw new Error(errMsg)
// }
// //
// type One = string
// type Two = string | number
// type Three = 'hello'
// let a: One = 'hello'
// let b = a as Two // less specific
// let c = a as Three //more specific
// DOM
// const myImg = document.getElementById('img') as HTMLImageElement
// myImg.src
// const img = document.querySelector('img')! 
// img.src
// const myDiv = document.getElementById('myDiv') as HTMLDivElement
// let thisYear: string = new Date().getFullYear().toString()
// let dateSpan = document.createElement('span')
// dateSpan.textContent = thisYear
// myDiv.append(thisYear)
//
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
class Coder2 {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        4;
    }
}
const Person = new Coder2('Dave', 'Rock', 42);
