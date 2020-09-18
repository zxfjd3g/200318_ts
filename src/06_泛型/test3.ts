/* 
类泛型
*/

(() => {
  class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
  }
  
  let myGenericNumber = new GenericNumber<number>()
  myGenericNumber.zeroValue = 12
  myGenericNumber.add = function (x: number, y: number) {
    return this.zeroValue + x + y
  }
  
  console.log(myGenericNumber.add(2, 3))
  
  
  let myGenericString = new GenericNumber<string>()
  myGenericString.zeroValue = 'abc'
  myGenericString.add = function(x, y) { 
    return x + y
  }
  
  console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
})()