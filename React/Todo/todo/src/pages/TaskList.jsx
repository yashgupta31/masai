import { Box, Button, Heading, IconButton, Input, Switch, Text, useMediaQuery, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { clearAllTodo, completedTodo, deleteTodo } from '../actions';
import { IoArrowBackSharp } from "react-icons/io5";
import { NavLink, useSearchParams } from 'react-router-dom';
import Edit from './Edit';

const TaskList = () => {
   
  const [isSmallerThan560] = useMediaQuery('(max-width: 560px)');
    const dispatch= useDispatch();
    const tasks= useSelector(state=> state.tasks)
    const toast = useToast()
    const [searchParams, setSearchParams]= useSearchParams();
    const [search, setSearch]= useState(searchParams.get('search')||'');
    // console.log(tasks)
  
    useEffect(()=>{
      setSearchParams({search: search})
    },[search, setSearchParams])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  
  const handleDelete=(id)=>{
    dispatch(deleteTodo(id))
    toast({
      title: 'Task Deleted Successfully!',
      // description: "We've created your account for you.",
      position: 'top',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleStatus=(isCompleted, id)=>{
    dispatch(completedTodo(isCompleted, id))
  }

  const handleClearAll = () => {
    dispatch(clearAllTodo())
}

  // const handleEdit=(item)=>{
  //   setEdit(item);
  //   setFlag(!flag)

    
  // }

  return (
    <Box bg={'#F0F4F3'} w={'100vw'} minH={'100vh'} mt={'-2rem'} display={'flex'} justifyContent={'center'} alignItems={'start'} pt={'3rem'}>
     
        <Box  w={isSmallerThan560? '85%':'45vw'} display={'flex'} flexDirection={'column'}  alignItems={'center'} justifyContent={'space-evenly'}>
            <Box w={isSmallerThan560? '90%':'33rem'} mb={'2rem'}>
            <NavLink to={'/'}>
            <IconButton aria-label='Add to friends' icon={<IoArrowBackSharp style={{fontSize: '2.3rem'}} />} />
      </NavLink>
              <Input placeholder='Search Task...' value={search} onChange={(e)=> setSearch(e.target.value)} bg={'white'} size='lg' boxShadow='md' mt={'1rem'}/>
            </Box>
            {/* -----------------each task------------- */}
            {
              tasks.length>0?
            <>
            <Box height={'32rem'}  w={isSmallerThan560? '90%':'33rem'} overflowY="auto" sx={{
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray.300',
          borderRadius: 'full',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'gray.400',
        },
      }}>
            {
                tasks
                .filter((elem)=>{
                  return elem.name.includes(search);
                })
                .map((elem, i)=>(
                    <Box bg={elem.color} position={'relative'} color={elem.completed ? 'grey': 'white' } transition={'1s'} key={i} mb={'1rem'} w={isSmallerThan560? '100%':'33rem'} h={'7rem'}display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'1rem'} borderRadius={8} boxShadow='md' >
        <Box w={'20rem'} >
        <Text fontSize='1.5rem'
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'>{elem.name}</Text>
        </Box>
        
        <Box  display={'flex'} fontSize={'1.8rem'} alignItems={'center'} w={'10rem'} justifyContent={'space-around'}>
            <Switch size='md' colorScheme='teal' isChecked={elem.completed}  onChange={(e)=> handleStatus(e.target.checked, elem.id)}/>
            {/* isChecked={'false'}  */}
            <NavLink to={`/edit/${elem.id}`}>
            <IconButton aria-label='Edit' icon={<MdOutlineEdit />} />
            </NavLink>

            <NavLink>
            <IconButton aria-label='Delete' icon={<MdDeleteOutline />} onClick={()=> handleDelete(elem.id)} />
            </NavLink>

            </Box>

            <Text  color={'white'} position={'absolute'} right={'1rem'} bottom={'5px'} fontSize='xs'> {elem.date}</Text>
        </Box>
                ))
            }
            </Box>
            
        <Button boxShadow={'md'} colorScheme='tomato' bg={'tomato'} size={'lg'} color={'white'}  w={'33rem'} mt={'1rem'} onClick={handleClearAll}>CLEAR ALL</Button>
        </>: <Heading as='h8'>No Task found...</Heading>}
        </Box>
        
    </Box>
  )
}

export default TaskList