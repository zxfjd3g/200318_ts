(() => {
  // 没有泛型约束
function fn <T>(x: T): void {
  // console.log(x.length)  // error
}

interface LengthWise {
  length: number
}

function fn2 <T extends LengthWise>(t: T): void {
  console.log(t.length)  // error
}

fn2('abc')
// fn2(123) // error number没有length

})()