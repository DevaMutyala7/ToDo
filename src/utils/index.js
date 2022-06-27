import { ADD_TO_TASK, ADD_PLAN_FROM_MAIN, ADD_IMP_FROM_MAIN } from "../consts"

function filterTasks(obj,id,keychanger,value){
  return obj.tasks.map(item=> {
    if(item.id===id){
      if(value || value===""){
        item[keychanger] = value
        if(keychanger==="due"){
          if(item.due && !item.planned){
            item.planned = !item.planned
          }
        }
      }
      else{
        item[keychanger] = !item[keychanger]
      }
    }
    return item
  })
}

function createTask(action,state,identifier){
  switch(identifier){
  case ADD_TO_TASK:
    return [...state.tasks,{
      id: state.tasks.length+1,
      todo: action.value,
      completed:false,
      important: false,
      planned: action.due ? true : false,
      due: action.due ? action.due : ""
    }]
  case ADD_PLAN_FROM_MAIN:
    return [...state.tasks,{
      id: state.tasks.length+1,
      todo: action.val,
      completed:false,
      important: false,
      planned: true,
      due: action.due ? action.due : new Date()
    }]
  case ADD_IMP_FROM_MAIN:
    return [...state.tasks,{
      id: state.tasks.length+1,
      todo: action.value,
      completed:false,
      important: true,
      planned: action.due ? true : false,
      due: action.due
    }]
  }
}

export {createTask, filterTasks}
