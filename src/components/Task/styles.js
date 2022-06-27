import styled from "styled-components"
import { Input } from "../Header/styles"
import { Item } from "../Sidebar/styles"
import Calendar from "react-calendar"

export const TaskSection = styled.div`
    margin:10px 0;
`

export const TaskInput = styled(Input)`
    padding:8px;
    width:calc(100% - 20px);
    outline:none;
`

export const TaskInputContainer= styled.div`
    padding:15px 10px 5px 10px;
    box-shadow:3px 3px 3px 3px rgba(0,0,0,0.1);
    background:rgba(0,0,0,0.1);
    margin-bottom:20px;
    position:relative;
`

export const TaskIcons = styled.div`
    padding:3px;
    margin:10px 0 0 0;
    display:flex;
    justify-content:space-between;
`


export const DatePickerContainer = styled.div`
    position:absolute;
    top:80px;
    left:35px;
    width:230px;
`

export const StyledCalendar = styled(Calendar)`
    width:100%;
    background:white;
    color:black;
`
export const DtSec = styled.p`
    margin:0;
    margin-left:7px;
`

export const Icon = styled(Item)`
    margin:0px ;
    text-align:center;
`

export const Para = styled.p`
    margin:0;
    margin-left:7px;
    cursor:pointer;
    font-weight:bold;
`