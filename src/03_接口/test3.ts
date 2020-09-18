/* 
类类型: 实现接口
1. 一个类可以实现多个接口
2. 一个接口可以继承多个接口
*/

// 鸣笛接口
interface Alarm {
  alert (): void // 抽象方法: 未实现的方法
}

// 灯的接口
interface Light {
  lightOn (): void
  lightOff (): void
}

// Alarm的实例类
class Car implements Alarm {
  alert (): void {
    console.log('Car alert()')
  }
}
new Car().alert()

class Car2 implements Alarm, Light {
  alert (): void {
    console.log('Car2 alert()')
  }

  lightOn (): void {
    console.log('Car2 lightOn()')
  }

  lightOff (): void {
    console.log('Car2 lightOff()')
  }
}
const car2 = new Car2()
car2.alert()
car2.lightOff()
car2.lightOn()


interface NewCar2 extends Light, Alarm {
  xxx (): void
}