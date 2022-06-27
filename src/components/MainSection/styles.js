import styled from "styled-components"
import { Item } from "../Sidebar/styles"
import { TaskIcons } from "../Task/styles";

export const HeaderSection = styled.section`
    display:flex;
    align-items:center;
`
export const Title = styled.h2`
    margin:0;
`

export const DateSec = styled.p`
    margin:0;
    margin-left:7px;
`

export const Container = styled.div`
    width:100%;
    padding:15px 10px 5px 10px;
    display:flex;
    flex-direction:column;
`

export const Icon = styled(Item)`
    margin:0px ;
    text-align:center;
`


export const ToDoContainer = styled.div`
    background:rgba(0,0,0,0.1);
    position:relative;
    box-shadow:none;
    border-bottom:1px solid rgba(0,0,0,0.1);
    padding:10px 10px 10px 10px;
    margin:0;
    margin-bottom:20px;
    width:calc(100% - 12px);
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const ToDoHeading = styled.p`
    margin:0;
`
export const TaskContainer = styled(TaskIcons)`
    margin:0;
    padding:0;
    width:10%;
    align-self:center;
`
export const TodoListContainer = styled.div`
    height: calc(100vh - ${props=> props.isSearchOrCompleted ? 160 : 270 }px);
    margin-top:${props=> props.isSearchOrCompleted ? 30 : 0}px;
    overflow-x:hidden;
    overflow-y: scroll;
`

export const Message = styled.h3`
    text-align:center;
    font-weight:900;
    color:gray;
`

export const TitleWrapper = styled.div`
    display:flex ;
    flex-direction:column;
    margin-left:5px;
    padding:0px;
`