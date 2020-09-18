/* 
继承
*/

class Animal {
  run (distance: number) {
    console.log(`Animal run ${distance}m`)
  }
}

// 定一个Animal的子类
class Dog extends Animal {
  cry () {
    console.log('Dog cry!!!')
  }
}

const dog: Dog = new Dog()
dog.cry()
dog.run(12)