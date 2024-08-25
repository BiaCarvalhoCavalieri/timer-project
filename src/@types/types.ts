export interface ICycle {
  id: string
  task: string
  minutesAmount: number
  startedDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface NewCycleFormData {
  task: string
  minutesAmount: number
}
