/* 
实现功能: 根据指定的数量 count 和数据 value , 创建一个包含 count 个 value 的数组
*/

// 不使用泛型
(() => {
  function createArray(value: any, count: number): any[]{
    const arr: any[] = []
    for (let index = 0; index < count; index++) {
      arr.push(value)
    }
    return arr
  }
  
  const numberArray = createArray(12.123, 5)  // [3, 3, 3, 3, 3]
  const stringArray = createArray('abc', 5)
  console.log(numberArray[0].toFixed(2), stringArray[0].length)
})();

/* 
使用泛型: 函数泛型
1. 声明泛型类型: 在函数名的右侧
2. 使用泛型类型: 形参/返回值/函数内部的变量都可以引用泛型类型
3. 指定泛型的具体类型: 调用函数时在函数名右侧指定
*/
(() => {
  function createArray<T>(value: T, count: number): T[]{
    const arr: T[] = []
    for (let index = 0; index < count; index++) {
      arr.push(value)
    }
    return arr
  }
  
  const numberArray = createArray<number>(12.123, 5)  // [3, 3, 3, 3, 3]
  const stringArray = createArray<string>('abc', 5)
  console.log(numberArray[0].toFixed(2), stringArray[0].split(''))

  // 包含多个泛型的函数
  function swap <K, V> (a: K, b: V): [K, V] {
    return [a, b]
  }

  const arr = swap<string, number>('abc', 12)
  console.log(arr[0].split(''), arr[1].toFixed())

})();