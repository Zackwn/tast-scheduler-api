export class Task {
  public readonly id: number

  public name: string
  public description: string

  constructor (props: Omit<Task, 'id'>, id?: number) {
    Object.assign(this, props)

    if (id) {
      this.id = id
    }
  }
}
