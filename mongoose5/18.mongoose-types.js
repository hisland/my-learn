const mongoose = require('mongoose')
const Schema = mongoose.Schema

console.log('ObjectId', mongoose.ObjectId === mongoose.Schema.Types.ObjectId)
console.log('Mixed', mongoose.Mixed === mongoose.Schema.Types.Mixed)

// js 原始对象
// console.log(Boolean)
// console.log(String)
// console.log(Number)
// console.log(Date)
// console.log(Buffer)
// console.log(Map)
// console.log(Array)

// 下面4种相同
const Any1 = new Schema({ any: {} })
const Any2 = new Schema({ any: Object })
const Any3 = new Schema({ any: Schema.Types.Mixed })
const Any4 = new Schema({ any: mongoose.Mixed })
