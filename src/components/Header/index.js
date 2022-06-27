import React, { useEffect, useState } from "react"
import {Container, ListItem, Navbar, UnorderedList, Title, Input, SearchContainer, StyledFaIcon} from "./styles"
import {useDispatch} from "react-redux"
import {ChangeView, UpdateSearchvalue} from "../../redux/ToDoTask/Actions"
import {faSearch} from "@fortawesome/fontawesome-free-solid"

function Header() {
  let dispatch = useDispatch()
  const [input,setInput] = useState("")

  useEffect(()=>{
    dispatch(UpdateSearchvalue(input))
  },[input,dispatch])

  return (
    <Container>
      <Title>To Do</Title>
      <SearchContainer>
        <StyledFaIcon icon={faSearch} />
        <Input 
          value={input} 
          onChange={(e)=> {
            setInput(e.target.value)      
          }}
          onClick={()=>dispatch(ChangeView("Search"))} 
        >
        </Input>
      </SearchContainer>
      <Navbar>
        <UnorderedList>
          <ListItem></ListItem>
        </UnorderedList>
      </Navbar>
    </Container>
  )
}

export default Header