import styled from "styled-components";
import { ListItem, UnorderedList } from "../Header/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export const UList = styled(UnorderedList)`
    width:100%;
    margin:0;
    padding:0;
`

export const Container = styled.div`
    width:40%;
    background:rgba(0,0,0,0.1);
    height:calc(100vh - 55px);
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    position:relative ;
    margin:auto ;
`

export const DroppedContainer = styled.div`

    display:none ;
`

export const Wrapper = styled.div`
    width:max-content;
`

export const Litems = styled(ListItem)`
    padding:10px;
    width:90%;
    cursor:pointer;
    margin:auto;
    position:relative;
    &:hover{
        background:white;
        *{
            color:black;
        }
    }
`


export const Item = styled.i`
    margin:2px;
    display:flex;
    justify-content:space-between;
    cursor:pointer;
`

export const Icon = styled.h3`
    cursor:pointer;
    position:absolute;
    top:5px;
    right:10px;
` 

export const ItemLength = styled.span`
    position: absolute;
    right:10px;
`
export const StyledFontIcon = styled(FontAwesomeIcon)`
    margin-right:5px;
    color: ${props=> props.color};
`