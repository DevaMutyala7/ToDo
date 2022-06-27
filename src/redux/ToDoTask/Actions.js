import {
  ADD_TO_IMP, 
  ADD_TO_PLANNED, 
  ADD_TO_TASKS, 
  ADD_TO_DONE, 
  UPDATE_TASK, 
  DELETE_TASK, 
  UPDATE_DUE, 
  VIEW, 
  ADD_TO_IMP_FROM_MAIN, 
  ADD_TO_PLN_FROM_MAIN, 
  UPDATE_SEARCH_VALUE, 
  TOGGLE_SIDEBAR
} from "./ActionTypes"


export const AddTask = (value,due) =>{
  return {
    type: ADD_TO_TASKS,
    value,
    due
  }
}

export const AddToPlanned = (val,due) =>{
  return {
    type: ADD_TO_PLANNED,
    value:val,
    due
  }
}

export const AddToImp = (id) =>{
  return {
    type: ADD_TO_IMP,
    id
  }
}

export const AddToCompleted = (id) =>{
  return {
    type: ADD_TO_DONE,
    id
  }
}

export const Updatetask = (updatedtask,id) => {
  return {
    type: UPDATE_TASK,
    task:updatedtask,
    id
  }
}

export const DeleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id
  }
}


export const UpdateDue = (id,value) =>{
  return {
    type: UPDATE_DUE,
    id,
    modifiedDue:value
  }
}

export const ChangeView = (value) => {
  return {
    type: VIEW,
    value
  }
}

export const AddToImportantFromMain=(value,due)=>{
  return {
    type: ADD_TO_IMP_FROM_MAIN,
    value,
    due
  }
}

export const AddToPlannedFromMain=(val,due)=>{
  return {
    type: ADD_TO_PLN_FROM_MAIN,
    val,
    due
  }
}

export const UpdateSearchvalue=(val)=>{
  return {
    type:UPDATE_SEARCH_VALUE,
    val
  }
}

export const ToggleSidebar = () =>{
  return {
    type: TOGGLE_SIDEBAR
  }
}