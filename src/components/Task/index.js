import React,{useState} from "react"
import {
  TaskSection,
  TaskInput,
  TaskInputContainer,
  TaskIcons,
  Para,
  DatePickerContainer,
  StyledCalendar,
  DtSec,
  Icon
} from "./styles"
import useToggler from "../../hooks/useToggler"
import {useDispatch,useSelector} from "react-redux"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {AddTask,AddToImportantFromMain,AddToPlannedFromMain} from "../../redux/ToDoTask/Actions"
import { faCalendarAlt, faPlus} from "@fortawesome/fontawesome-free-solid"




function Task({task,setTask,inputRef}) {

  const [showDD,handler] = useToggler();
  const [startDate, setStartDate] = useState("");
  let {mainSection} = useSelector(state=> state)
  let dispatch = useDispatch()
  const date = startDate && startDate.getDate() + " " + startDate.toLocaleString("default",{month:"long"});

  function taskInputHandler(e){
    if(e.key==="Enter"){
      if(task){
        if(mainSection==="Planned"){
          dispatch(AddToPlannedFromMain(task,startDate))
        }                
        else if(mainSection==="Important"){
          dispatch(AddToImportantFromMain(task,startDate))
        } 
        else if(mainSection==="My Day"){
          const myDate = startDate ? startDate : new Date()
          dispatch(AddTask(task,myDate))
        }
        else{
          dispatch(AddTask(task,startDate))
        }
        setTask("")
        setStartDate("")  
      }
    }
  }

  function taskHandler(e){
    setTask(e.target.value)
  }

  function calendarHandler(date){
    handler()
    setStartDate(date)                   
  }

  function paraHandler(){
    if(task){
      dispatch(AddTask(task))
      setTask("")
    }    
  }

  return (
    <TaskSection>
      <TaskInputContainer>
        <TaskInput 
          ref={inputRef} 
          placeholder='Add task' 
          value={task}
          onKeyPress={taskInputHandler}
          onChange={taskHandler}>
        </TaskInput>
        <TaskIcons>
          <Icon onClick={()=> handler()}>
            <FontAwesomeIcon icon={faCalendarAlt} /> <DtSec>{date}</DtSec>
          </Icon>
          {showDD && 
              <DatePickerContainer>
                <StyledCalendar
                  onChange={calendarHandler}
                >
                </StyledCalendar>
              </DatePickerContainer>
          }
          <Para onClick={paraHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </Para>
        </TaskIcons>
      </TaskInputContainer>
    </TaskSection>
  )
}

export default Task