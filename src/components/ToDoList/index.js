import React, { useState,useRef,useEffect } from "react";
import {
  AddToCompleted,
  AddToImp,
  Updatetask,
  DeleteTask,
  UpdateDue,
} from "../../redux/ToDoTask/Actions";
import {
  ToDoContainer,
  ToDoHeading,
  Icon,
  TaskContainer,
  Strikedheading,
  UpdateTask,
  ImportantTodo,
  DueContainer,
  TaskDatePickerContainer,
  StyledFontAwesomeIcon,
  DateSec,
  DateView,
} from "./style";
import { useDispatch } from "react-redux";
import useToggler from "../../hooks/useToggler";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  faCheck,
  faPencilAlt,
  faTrashAlt,
  faStar,
  faCalendarAlt,
  faCheckCircle,
} from "@fortawesome/fontawesome-free-solid";
import fontawesome from "@fortawesome/fontawesome";

fontawesome.library.add(
  faCheck,
  faPencilAlt,
  faTrashAlt,
  faStar,
  faCalendarAlt
);

function ToDoList(props) {
  const [update, setUpdate] = useState(false);
  const [task, setTask] = useState(props.task.todo);
  const [showDD, handler] = useToggler();
  const inputRef = useRef()
  let dispatch = useDispatch();

  useEffect(()=>{
    if(update){
      inputRef.current.focus()
    }
  },[task,update])

  function updateOnChangeHander(e){
    setTask(e.target.value);
  }

  function updateOnKeyPresshandler(e){
    if (e.key === "Enter") {
      setUpdate((prev) => !prev);
      e.stopPropagation();
      dispatch(Updatetask(task, props.task.id));
    }
  }

  function calendarHandler(date){
    handler();
    if (date) {
      dispatch(UpdateDue(props.task.id, date));
    }
  }
  

  let date =
    props.task.due &&
    props.task.due.getDate() +
      " " +
      props.task.due.toLocaleString("default", { month: "short" });
  let Due = () => (
    <DueContainer>
      {!update ? (
        !props.task.completed ? (
          props?.task?.important ? (
            <ImportantTodo>{props.task.todo}</ImportantTodo>
          ) : (
            <ToDoHeading>{props.task.todo}</ToDoHeading>
          )
        ) : (
          <Strikedheading>
            {props.task.todo}{" "}
            <StyledFontAwesomeIcon icon={faCheckCircle} color="green" />
          </Strikedheading>
        )
      ) : (
        <UpdateTask
          ref={inputRef}
          value={task}
          onChange={updateOnChangeHander}
          onKeyPress={updateOnKeyPresshandler}
        ></UpdateTask>
      )}
      <DateView>
        <Icon onClick={() => handler()}>
          <StyledFontAwesomeIcon icon={faCalendarAlt} color="blue" />
        </Icon>
        <DateSec>{date}</DateSec>
      </DateView>
      {showDD && (
        <TaskDatePickerContainer>
          <Calendar
            selected={props.task.due}
            onChange={calendarHandler}
          />
        </TaskDatePickerContainer>
      )}
    </DueContainer>
  );

  let Task = () => (
    <TaskContainer>
      <Icon onClick={() => dispatch(AddToCompleted(props.task.id))}>
        <StyledFontAwesomeIcon
          icon={faCheck}
          color={`${props.task.completed ? "green" : "black"}`}
        />
      </Icon>
      <Icon onClick={() => setUpdate(prev => {
        return !prev
      })}>
        <StyledFontAwesomeIcon icon={faPencilAlt} color="black" />
      </Icon>
      <Icon onClick={() => dispatch(AddToImp(props.task.id))}>
        <StyledFontAwesomeIcon
          icon={faStar}
          color={`${props.task.important ? "gold" : "black"}`}
        />
      </Icon>
      <Icon onClick={() => dispatch(DeleteTask(props.task.id))}>
        <StyledFontAwesomeIcon icon={faTrashAlt} color="red" />
      </Icon>
    </TaskContainer>
  );

  return (
    <ToDoContainer>
      <Due />
      <Task />
    </ToDoContainer>
  );
}

export default ToDoList;
