/* 
泛型接口
*/
(() => {
  // 定义操作任意数据的CURD泛型接口
  interface IBaseCURD<T> {
    data: T[]
    add (t: T): number
    getById (id: number): T
  }


  class User {
    id?: number
    name: string
    age: number

    constructor (name: string, age: number) {
      this.name = name
      this.age = age
    }
  }

  class UserCRUD implements IBaseCURD<User> {
    data: User[] = []

    add (user: User): number {
      const id = Date.now()
      this.data.push({
        ...user,
        id
      })
      return id
    }

    getById (id: number): User {
      return this.data.find(item => item.id===id)
    }
  }

  const userCURD: UserCRUD = new UserCRUD()
  userCURD.add(new User('tom', 13))
  const id = userCURD.add(new User('tom2', 14))
  console.log(userCURD.data)
  console.log(userCURD.getById(id))

})()