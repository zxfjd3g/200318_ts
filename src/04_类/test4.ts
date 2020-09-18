/* 
访问修饰符: 用来描述类内部的属性/方法的可访问性
  public: 默认值, 公开的外部也可以访问
  private: 只能类内部可以访问
  protected: 类内部和子类可以访问
*/

(() => {
  class Animal {
    static count: number = 1
    readonly name: string // 只读的, 只能赋值一次
    
    public constructor (name: string) {
      this.name = name
    }
  
    public run (distance: number=0) {
      console.log(`${this.name} run ${distance}m`)
    }
  
  }
  
  class Snake extends Animal {

    protected age: number = 12
    private sex: string = '男'

    // 重写从父类继承来的方法
    run (distance: number=5) {
      console.log('snake sliding...')
      super.run(distance)
    }
  }
  
  class WhiteSnake extends Snake {
    run () {
      console.log(this.age) // 受保护的属性子类也可见
      // console.log(this.sex) // 私有的属性只有所在的类才可见
    }
  }

  console.log(new Snake('xx').name)
  // console.log(new Snake('xx').age) // 受保护在外部不可见
  // console.log(new Snake('xx').sex) // 受保护在外部不可见

  console.log(new Animal('a').name)
  // new Animal('a').name = 'tom' 
  
  Animal.count = 3


})()

;(()=> {
  /* 
  抽象类
    不能创建实例对象, 只有实现类才能创建实例
    可以包含未实现的抽象方法
  */

  abstract class Animal {

    abstract cry ()

    run () {
      console.log('run()')
    }
  }

  class Dog extends Animal {
    cry () {
      console.log(' Dog cry()')
    }
  }

  // 必须创建实现类的实例, 不能创建抽象类的实例
  const dog = new Dog()
  dog.cry()
  dog.run()
}) ()