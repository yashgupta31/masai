import { Box, Button, Heading, IconButton, Switch, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { completedTodo, deleteTodo } from '../actions';
import { IoReturnUpBack } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const TaskList = () => {
    // const [tasks, setTasks] = useState([]);
    // const [newTodo, setNewTodo]= useState();
    const dispatch= useDispatch();
    const tasks= useSelector(state=> state.tasks)
    // console.log(newTodo)
    // const [status, setStatus]= useState(false)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  
  const handleDelete=(id)=>{
    dispatch(deleteTodo(id))
  }

  const handleStatus=(isCompleted, id)=>{
    dispatch(completedTodo(isCompleted, id))
  }

  return (
    <Box bg={'pink'} w={'100vw'} minH={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'start'} pt={'5rem'}>
      <NavLink to={'/'}>
      <IconButton aria-label='Add to friends' icon={<IoReturnUpBack style={{fontSize: '2.3rem'}} />} />
      </NavLink>
        <Box w={'45vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
            {/* -----------------each task------------- */}
            {
                tasks.map((elem, i)=>(
                    <Box bg={elem.color} key={i} mb={'1rem'} w={'33rem'} h={'7rem'}display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'1rem'} borderRadius={8} boxShadow='md'>
        <Box w={'20rem'} >
        <Text fontSize='1.5rem'
        
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'>{elem.name}</Text>
        </Box>
        
        <Box display={'flex'} fontSize={'1.8rem'} alignItems={'center'} w={'10rem'} justifyContent={'space-around'}>
            <Switch size='md' colorScheme='teal' isChecked={elem.completed}  onChange={(e)=> handleStatus(e.target.checked, elem.id)}/>
            {/* isChecked={'false'}  */}
            <NavLink to={`/edit/${elem.id}`}>
            <IconButton aria-label='Add to friends' icon={<MdOutlineEdit />}  />
            </NavLink>
            <IconButton aria-label='Delete' icon={<MdDeleteOutline />} onClick={()=> handleDelete(elem.id)} />
            
            </Box>
        </Box>
                ))
            }
        
        {/* -------------------- */}
        </Box>
    </Box>
  )
}

export default TaskList