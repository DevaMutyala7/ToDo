import styled from "styled-components"
import { TaskInputContainer, TaskIcons, TaskInput, DatePickerContainer, StyledCalendar } from "../Task/styles"
import { Item } from "../Sidebar/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ToDoContainer = styled(TaskInputContainer)`
    box-shadow:none;
    border-bottom:1px solid rgba(0,0,0,0.1);
    padding:2.5px 0px 2.5px 0px;
    margin:0;
    width:calc(100% - 12px);
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:none;
`

export const ToDoHeading = styled.p`
    margin:0;
`

export const Icon = styled(Item)`
    margin:0px ;
`

export const TaskContainer = styled(TaskIcons)`
    margin:0;
    padding:0;
    width:10%;
    align-self:center;
`

export const Strikedheading = styled.p`
    text-decoration-line:line-through;
    margin:0;
    color:gray;
`

export const UpdateTask = styled(TaskInput)`
`
export const ImportantTodo = styled.p`
    font-style:italic;
    margin:0;
`

export const DueContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:space-between;
    position: relative;
    z-index:1;
`

export const TaskDatePickerContainer = styled(DatePickerContainer)`
    left:2px;
    top:50px;
`
export const StyledCal = styled(StyledCalendar)`

`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${(props)=> props.color};
    margin:0;
`

export const DateSec = styled.span`
    margin-left:0px;
`

export const DateView = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:70px;
    margin:5px 0;
`