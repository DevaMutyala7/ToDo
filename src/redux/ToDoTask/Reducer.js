import { 
  ADD_TO_IMP,  
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
import { createTask, filterTasks } from "../../utils"
import { ADD_TO_TASK,ADD_PLAN_FROM_MAIN, ADD_IMP_FROM_MAIN } from "../../consts"

const initialState={
  tasks:[],
  mainSection:"Tasks",
  searchValue:" ",
  showSidebar:false
}


export const Reducer = (state=initialState,action) =>{
  let impTasksList,newTasksList,UpdatedTasks,updatedtasklist,updatedduetask; 
  switch(action.type){
  case ADD_TO_TASKS:
    return {
      ...state,
      tasks:createTask(action,state,ADD_TO_TASK)
    }
  case ADD_TO_IMP:
    impTasksList = filterTasks(state,action.id,"important") 
    return {
      ...state,
      tasks: impTasksList
    }
  case ADD_TO_DONE:
    newTasksList = filterTasks(state,action.id,"completed")
    return {
      ...state,
      tasks: newTasksList
    }
  case UPDATE_TASK:
    UpdatedTasks = filterTasks(state,action.id,"todo",action.task)   
    return {
      ...state,
      tasks: UpdatedTasks
    }
  case DELETE_TASK:
    updatedtasklist = state.tasks.filter(item=> item.id !== action.id)
    return {
      ...state,
      tasks: updatedtasklist
    }
  case UPDATE_DUE:
    updatedduetask = filterTasks(state,action.id,"due",action.modifiedDue)
    return {
      ...state,
      tasks: updatedduetask
    }
  case VIEW:
    return {
      ...state,
      mainSection: action.value
    }
  case ADD_TO_PLN_FROM_MAIN:
    return {
      ...state,
      tasks:createTask(action,state,ADD_PLAN_FROM_MAIN)
    }
  case ADD_TO_IMP_FROM_MAIN:
    return {
      ...state,
      tasks:createTask(action,state,ADD_IMP_FROM_MAIN)
    }
  case UPDATE_SEARCH_VALUE:
    return {
      ...state,
      searchValue: action.val
    }
  case TOGGLE_SIDEBAR:
    return {
      ...state,
      showSidebar: !state.showSidebar
    }
  default:
    return {
      ...state
    }
  }
}