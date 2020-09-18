/* 
类的基本使用
*/
(() => {
  class Greeter {
    // 属性声明
    message: string

    // 构造方法
    constructor (message: string) {
      this.message = message
    }

    // 一般方法
    greet (): string {
      return 'hello ' + this.message
    }
  }

  const greeter = new Greeter('word')
  console.log(greeter.greet())

})()