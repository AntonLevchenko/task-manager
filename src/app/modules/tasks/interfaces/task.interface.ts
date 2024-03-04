import { TaskState } from '../enums/task-state.enum';

export interface Task {
  id: string;
  name: string;
  description: string;
  createDate: Date;
  editDate: Date;
  status: TaskState;
  assignedUserId: string | null;
}
