/* 
多态
*/

(() => {
  class Animal {
    name: string
    
    constructor (name: string) {
      this.name = name
    }
  
    run (distance: number=0) {
      console.log(`${this.name} run ${distance}m`)
    }
  
  }
  
  class Snake extends Animal {
    // 重写从父类继承来的方法
    run (distance: number=5) {
      console.log('snake sliding...')
      super.run(distance)
    }
  }
  
  class Horse extends Animal {
    constructor (name: string) {
      // 调用父类型构造方法
      super(name)
    }
  
    // 重写父类型的方法
    run (distance: number=50) {
      console.log('dashing...')
      // 调用父类型的一般方法
      super.run(distance)
    }

    xxx () {

    }
  }

  const o1: Animal = new Animal('o1')
  o1.run()
  const o2: Snake = new Snake('o2')
  o2.run()
  const o3: Horse = new Horse('o3')
  o3.run()

  /* 
  父类引入指向子类对象, 当通过父类引用调用方法, 调用的是子类对象的方法  ==> 多态
  */
  const o4: Animal = new Snake('o4')
  o4.run()
  const o5: Animal = new Horse('o5')
  o5.run()

  // const o6: Horse = new Animal('o6') // 不能让子类型的引用指向父类型的实例



})()