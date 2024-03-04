import { Task } from '../modules/tasks/interfaces/task.interface';
import { TaskState } from '../modules/tasks/enums/task-state.enum';

export const MOCK_TASKS_DATA: Task[]  = [
  {
    id: '1',
    name: 'Task name 1',
    description: 'Task description 1',
    createDate: new Date(1709383446183),
    editDate: new Date(1709383446183),
    status: TaskState.InQueue,
    assignedUserId: null
  }
]
