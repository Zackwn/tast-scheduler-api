export class Task {
  public readonly id: number

  public name: string
  public description: string
  public time: number
  public isScheduled: boolean

  constructor (props: Omit<Task, 'id' | 'isScheduled'>, id?: number) {
    Object.assign(this, props)

    if (id) {
      this.id = id
    }
  }
}
