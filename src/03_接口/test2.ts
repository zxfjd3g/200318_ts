/* 
接口可以描述函数类型(参数的类型与返回的类型)
*/

interface ISearchFn {
  (source: string, subStr: string): boolean 
}

const searchFn: ISearchFn = (str, sub) => {
  return str.includes(sub)
}
console.log(searchFn('abcd', 'bc'))
console.log(searchFn('abcd', 'bca'))