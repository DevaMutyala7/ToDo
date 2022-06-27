import React from "react"
import { Container, Litems, UList, ItemLength, DroppedContainer, Icon, StyledFontIcon } from "./styles"
import {useSelector, useDispatch} from "react-redux"
import {ChangeView, ToggleSidebar} from "../../redux/ToDoTask/Actions"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import {faBars, faArrowCircleRight, faSun, faStar, faCalendarAlt, faHome, faCheckCircle} from "@fortawesome/fontawesome-free-solid"

fontawesome.library.add(faBars,faArrowCircleRight,faHome);

function Sidebar() {
  const {tasks,showSidebar} = useSelector(state=> state)
  const dispatch = useDispatch()
  const CompletedLength = tasks.filter(task=> task.completed).length
  const importantLength = tasks.filter(task=> task.important).length
  const plannedLength = tasks.filter(task=> task.planned).length
  const myDaylength = tasks.filter(task=> task.due && task.due.getDay() === new Date().getDay()).length
  const ToggleContainer = showSidebar ? Container : DroppedContainer;

  function Dispatcher(label){
    dispatch(ChangeView(label))
  }

  return (
    <ToggleContainer>  
      <Icon
        onClick={()=> dispatch(ToggleSidebar())}
      >
        <FontAwesomeIcon icon={faBars}/>
      </Icon>
      <UList>
        <Litems onClick={()=> Dispatcher("My Day")}><StyledFontIcon icon={faSun} color="gray"/> My Day <ItemLength>{myDaylength}</ItemLength></Litems>
        <Litems onClick={()=> Dispatcher("Important")}><StyledFontIcon icon={faStar} color="gray"/> Important <ItemLength>{importantLength}</ItemLength></Litems>
        <Litems onClick={()=> Dispatcher("Planned")}><StyledFontIcon icon={faCalendarAlt} color="gray"/> Planned <ItemLength>{plannedLength}</ItemLength></Litems>
        <Litems onClick={()=> Dispatcher("Tasks")}><StyledFontIcon icon={faHome} color="gray"/> Tasks <ItemLength>{tasks.length}</ItemLength></Litems>
        <Litems onClick={()=> Dispatcher("Completed")}><StyledFontIcon icon={faCheckCircle} color="gray"/> Completed <ItemLength>{CompletedLength}</ItemLength></Litems>
      </UList> 
    </ToggleContainer>
  )
}

export default Sidebar



