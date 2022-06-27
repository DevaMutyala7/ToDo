import React, { useMemo, useState, useRef, useEffect } from "react"
import {
  HeaderSection,
  DateSec,
  Title,
  Container,
  Icon,
  TodoListContainer,
  Message,
  TitleWrapper
} from "./styles"
import ToDoList  from "../ToDoList/index"
import {useDispatch,useSelector} from "react-redux"
import { ToggleSidebar } from "../../redux/ToDoTask/Actions"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import {faBars, faCalendarAlt, faPlus} from "@fortawesome/fontawesome-free-solid"
import Task from "../Task"

fontawesome.library.add(faBars,faCalendarAlt,faPlus);


function MainSection() {
  const [task,setTask] = useState("")
  let dispatch = useDispatch()
  let {tasks,mainSection,searchValue,showSidebar} = useSelector(state=> state)
  const inputRef = useRef() 

  useEffect(()=>{
    inputRef.current.focus()
  },[task])


  const isSearchOrCompleted=()=>{
    return mainSection==="Search" || mainSection==="Completed"
  }

  let memoizedValue = useMemo(()=>{
    return function GetItemsToDisplay(mainSection){
      let today = new Date()
      switch(mainSection){
      case "My Day":
        return tasks.filter(task=> task.due && task.due.getDate() === today.getDate())
      case "Important":
        return tasks.filter(task=> task.important)
      case "Planned":
        return tasks.filter(task=> task.planned)
      case "Completed":
        return tasks.filter(task=> task.completed)
      case "Search":
        return tasks.filter(task=> searchValue && task.todo.startsWith(searchValue))
      default: 
        return tasks
      }
    }(mainSection)
  },[mainSection,tasks,searchValue]) 


  let Todos = memoizedValue[0] ? memoizedValue.map(task=> {
    return (
      <ToDoList key={task.id} task={task} />
    )
  }) : <Message>Nothing To Show</Message>


  return (
    <Container>
      <HeaderSection>
        {
          !showSidebar && 
          <Icon onClick={()=> dispatch(ToggleSidebar())}>
            <FontAwesomeIcon icon={faBars} />
          </Icon> 
        }
        <TitleWrapper>
          <Title>{mainSection}</Title>
          {mainSection==="My Day" && <DateSec>{new Date().toLocaleString("default",{weekday:"long"})}</DateSec>}
        </TitleWrapper>
      </HeaderSection>
      {
        String(mainSection)!=="Search" &&
        String(mainSection)!=="Completed" &&  
        <Task task={task} setTask={setTask} inputRef={inputRef}/>   
      }
      <TodoListContainer isSearchOrCompleted={isSearchOrCompleted()}>
        { Todos }
      </TodoListContainer> 
    </Container>
  )
}

export default MainSection