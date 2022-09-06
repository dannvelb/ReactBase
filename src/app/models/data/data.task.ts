import { ArrayConst } from "../../const/const";
import { TStoreAction } from "./data.store";

export class TaskItemClass {
  description: string;
  id: number;
  name: string;
  order: number;
  status: TStatusTask;
}

export const actionsTasksStatus: any = {
  NEW: "New",
  PROGRESS: "In progress",
  REVIEW: "In review",
  DONE: "Done",
};

export type TStatusTask = "New" | "In progress" | "In review" | "Done";

export class StateTaskClass {
  new: Array<TaskItemClass> = ArrayConst.empty;
  progress: Array<TaskItemClass> = ArrayConst.empty;
  review: Array<TaskItemClass> = ArrayConst.empty;
  done: Array<TaskItemClass> = ArrayConst.empty;
}

export type TTaskSetAllAction = Omit<TStoreAction, "payload"> & {
  payload: StateTaskClass;
};

export type TTaskCreatePayload = {
  name: string;
  description: string;
};


export type TTaskUpdateStatusPayload = {
  id: number;
  task: TaskItemClass;
};

export type TTaskUpdateStatusAction = Omit<TStoreAction, "payload"> & {
  payload: TTaskUpdateStatusPayload;
};
