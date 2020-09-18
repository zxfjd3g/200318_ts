 // 11. 联合类型（Union Types）表示取值可以为多种类型中的一种
  /* 
  需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
  */
 function getString(x: number | string): string {
  return x.toString()
}
console.log(getString(123), getString('abc'))


/* 
12. 类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/

/* 
需求2: 定义一个一个函数得到一个数字或字符串值的长度
*/
function getLength(x: number | string): number {
  // return x.length // error number没有length

  // if (x.length) { // error number没有length
  //   return x.length
  // } else {
  //   return x.toString().length
  // }

  if ((<string>x).length) { // error number没有length
    return (x as string).length
  } else {
    return x.toString().length
  }

  /* 
  13. 类型推断
  */
  /* 定义变量时赋值了, 推断为对应的类型 */
  let b9 = 123 // number
  // b9 = 'abc' // error

  /* 定义变量时没有赋值, 推断为any类型 */
  let b10  // any类型
  b10 = 123
  b10 = 'abc'


}