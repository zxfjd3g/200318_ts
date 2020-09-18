(() => {
  // 命名函数
  function add(x: number, y: string): string {
    return x + y
  }

  // 匿名函数  简写方式
  let myAdd = function(x: number, y: string): string { 
    return x + y;
  }

  console.log(myAdd(2, 'abc'))
  // 完整写法, 但一般都用简写
  let myAdd2: (x1:number, y1: string)=> string = function(x: number, y: string): string { 
    return x + y;
  }


  function buildName(firstName: string='A', lastName?: string): string {
    if (lastName) {
      return firstName + '-' + lastName
    } else {
      return firstName
    }
  }
  
  console.log(buildName('C', 'D'))  // C-D
  console.log(buildName('C')) // C
  console.log(buildName()) // 由于firstName有默认值, 本质也可以不传了

  function info(x: string, ...args: string[]) {
    console.log(x, args)
  }
  info('abc', 'c', 'b', 'a')
})()

;(() => {
  /* 
  函数重载: 函数名相同, 而形参不同的多个函数
  需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加 
  */

  // 重载函数声明  ==> 对函数的函数和返回值进行进一步的限定
  function add (x: string, y: string): string
  function add (x: number, y: number): number

  function add (x: string|number, y: string|number): string|number {
    if (typeof x==='string' && typeof y==='string') {
      return x + y
    } else if (typeof x==='number' && typeof y==='number'){
      return x + y
    }
  }

  // console.log(add('abc', 1))  // error
  console.log(add('abc', 'dd'))
  console.log(add(1, 2))
})()