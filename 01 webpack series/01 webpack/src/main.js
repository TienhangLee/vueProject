// 1.使用commonjs的模塊化規範
const {add,mul} = require('./mathUtils.js')

console.log(add(20,30));
console.log(mul(20,30));

// 2. 使用ES6的模塊化規範
import {name, age, height} from "./info";

console.log(name);
console.log(age);
console.log(height);

//3. 依賴 ＣＳＳ文件
//require('./css/normal.css')