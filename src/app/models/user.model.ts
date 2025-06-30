export class User {
  // #id: number
  private _id!: number

  name: string
  age: number
  city?: string

  constructor(id: number, name: string, age: number, city?: string) {
    this.id = id,
      this.name = name,
      this.age = age,
      this.city = city
  }

  display(): string {
    return `infos de l'utilisateur : ${this.id}: name: ${this.name}, age: ${this.age}`
  }

  get id() {
    console.log("get id")
    console.log(this._id)
    return this._id
  }

  set id(id: number) {
    console.log("set id")
    this._id = id
  }

}
