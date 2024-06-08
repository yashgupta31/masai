import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { editTodo } from '../actions'

const Edit = () => {
    const dispatch= useDispatch();

    const {id}= useParams()
    // console.log(id)

    const tasks= useSelector(state=> state.tasks)

    const newTask=tasks.filter((elem)=> {
        return elem.id==id;
    })

    // const tasks = useSelector(state => state.tasks);
    
    // const newTask = tasks.find(elem => elem.id === id);
    // console.log(newTask)
    const [task, setTask]= useState(newTask[0].name)

    // useEffect(() => {
    //     if (newTask) {
    //         setTask(newTask.name);
    //     }
    // }, [newTask]);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(task, id)
        dispatch(editTodo(task, id))
    }
  return (
    <Box h={'100vh'} w={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
    <Box bg={'white'} borderRadius={'0.7rem'} boxShadow='md'>
        <Box display={'flex'} bg={'pink'} p={'0.4rem'} justifyContent={'space-evenly'} alignItems={'center'} borderRadius={'0.7rem 0.7rem 0 0'}>
           <NavLink to={'/alltask'}><IoMenu style={{fontSize: '1.8rem', position: 'relative', right: '3rem'}} /></NavLink> 
            <Text fontSize={'1.8rem'} position={'relative'} right={'2rem'}>EDIT TODO</Text>
        </Box>
        <form onSubmit={(e)=> handleSubmit(e)} style={{ width: '28rem', height: '10rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '2rem' }}>
            <Input placeholder='Enter Task Name'  size='lg'  value={task} onChange={(e)=> setTask(e.target.value)}  />
            <Button w={'100%'} type='submit' size='lg' colorScheme='yellow'>ADD TASK</Button>
        </form>
    </Box>
</Box>
  )
}

export default Edit

// ----------------2nd---------------------
// import { Box, Button, Input, Text } from '@chakra-ui/react'
// import React, { useState, useEffect } from 'react'
// import { IoMenu } from 'react-icons/io5'
// import { useSelector, useDispatch } from 'react-redux'
// import { NavLink, useParams } from 'react-router-dom'
// import { editTodo } from '../actions'

// const Edit = () => {
//     const dispatch = useDispatch();
//     const { id } = useParams();
//     const tasks = useSelector(state => state.tasks);

//     const [task, setTask] = useState('');

//     useEffect(() => {
//         const newTask = tasks.find(elem => elem.id === id);
//         if (newTask) {
//             setTask(newTask.name);
//         }
//     }, [tasks, id]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(editTodo(task, id));
//     }

//     return (
//         <Box h={'100vh'} w={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
//             <Box bg={'white'} borderRadius={'0.7rem'} boxShadow='md'>
//                 <Box display={'flex'} bg={'pink'} p={'0.4rem'} justifyContent={'space-evenly'} alignItems={'center'} borderRadius={'0.7rem 0.7rem 0 0'}>
//                     <NavLink to={'/alltask'}><IoMenu style={{ fontSize: '1.8rem', position: 'relative', right: '3rem' }} /></NavLink>
//                     <Text fontSize={'1.8rem'} position={'relative'} right={'2rem'}>EDIT TODO</Text>
//                 </Box>
//                 <form onSubmit={handleSubmit} style={{ width: '28rem', height: '10rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '2rem' }}>
//                     <Input placeholder='Enter Task Name' size='lg' value={task} onChange={(e) => setTask(e.target.value)} />
//                     <Button w={'100%'} type='submit' size='lg' colorScheme='yellow'>EDIT TASK</Button>
//                 </form>
//             </Box>
//         </Box>
//     )
// }

// export default Edit;

