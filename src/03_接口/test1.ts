/* 
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
接口类型的对象
    多了或者少了属性是不允许的
    可选属性: ?
    只读属性: readonly
*/

/* 
需求: 创建人的对象, 需要对人的属性进行一定的约束
  id是number类型, 必须有, 只读的
  name是string类型, 必须有
  age是number类型, 必须有
  sex是string类型, 可以没有
*/

(() => {
  // 定义接口
  interface IPerson {
    readonly id: number;  // id是只读取的
    name: string;
    age: number;
    sex?: string; // sex是可以没有的
  }


  let p:  IPerson= {
    id: 2,
    name: 'tom',
    age: 12,
    // sex: '男'
  }

  // p.id = 3

})()