/* 
1. 布尔值
2. 数字
3. 字符串
*/

(() => {
  // 1. 布尔值
  let isDone: boolean = false
  isDone = true
  // isDone = 2  // error 不能将类型“number”分配给类型“boolean”
  console.log(isDone)

  // 2. 数字
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  // a1 = true // error

  // 3. 字符串
  let name:string = 'tom'
  name = 'jack'
  // name = 12 // error
  let age:number = 12
  const info = `My name is ${name}, I am ${age} years old!`

  // 4. undefined 和 null   所有其它类型的子类型
  let u: undefined = undefined
  let n: null = null
  name = undefined
  age = null

  // 5. 数组
  const list1: number[] = [1, 2, 3]
  const list2: Array<number> = [2, 3, 4]
  const list3: any[] = [1, 'abc', true]

  // 6. 元组 Tuple 元组类型允许表示一个已知元素数量和类型的数组
  let tuple: [string, number]
  tuple = ['abc', 12] 
  // tuple = ['abc', 12, 12]  // error 

  // 7. 枚举  使用枚举类型可以为一组数值赋予友好的名字
  enum Color {
    Red,
    Yellow,
    Blue
  }
  const myColor: Color = Color.Blue // 2
  console.log(myColor, Color, Color[myColor])
  enum Color2 {
    Red = 3,
    Yellow = 5,
    Blue = 7
  }

  console.log(Color2)

  // 8. any
  let notSure: any = 4
  notSure = 'maybe a string'
  notSure = false // 也可以是个 boolean
  let list: any[] = [1, true, 'free']
  list[1] = 100

  // 9. void 表示没有任何类型
  /* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
  function fn (): void {
    console.log('fn()')
    // return null
    // return undefined
    // return 1 // error
  }

  // 10. object
  function fn2(): object {
    return {}
    // return []
    // return () => {}
    // return undefined
    // return null
    // return 2 // error
  }

 

})()

