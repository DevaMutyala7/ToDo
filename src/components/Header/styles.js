import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const Container = styled.div`
    background: #0377fc;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:.5em;
`

export const SearchContainer = styled.div`
    width:30%;
    position:relative;
`

export const Navbar = styled.nav`

`

export const UnorderedList = styled.ul`
    list-style:none;
`

export const ListItem = styled.li`
    margin:0;
    cursor:pointer;
`

export const Title = styled.h1`
    color:white ;
    margin:0;
`

export const Input = styled.input`
    width:100%;
    margin:auto ;
    border-style:none;
    border-radius:5px;
    placeholder: ${(props)=> props.placeholder};
    outline:none;
    padding: 5px 0 5px 25px;
`

export const StyledFaIcon = styled(FontAwesomeIcon)`
    position:absolute;
    top:5px;
    left:5px;
    color:grey;
`