/* 1. ECMAScript 的内置对象 */
let b: Boolean = new Boolean(1)
let n: Number = new Number(true)
let s: String = new String('abc')
let d: Date = new Date()
let r: RegExp = /^1/
let e: Error = new Error('error message')
b = true // 基本类型可以自动转换为对应的包装引用类型
// let bb: boolean = new Boolean(2)  // error  包装引用类型不会自动转换为对应的基本类型

/* DOM/BOM的内置对象 */
/* 
Window
Document
HTMLElement
DocumentFragment
Event
NodeList
*/
const div: HTMLElement = document.getElementById('test')
const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
  console.dir(event.target)
})
const fragment: DocumentFragment = document.createDocumentFragment()