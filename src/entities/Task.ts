export class Task {
  public readonly id: number

  public name: string
  public description: string
  public time: number

  constructor (props: Omit<Task, 'id'>, id?: number) {
    Object.assign(this, props)

    if (id) {
      this.id = id
    }
  }
}
