import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const TaskInput = () => {

    // let TodoArr = JSON.parse(localStorage.getItem('todo')) || [];
    const [task, setTask]= useState('');
    const dispatch= useDispatch();

    // const [tasks, setTasks]= useState(TodoArr);

    // useEffect(()=>{
    //     localStorage.setItem('todo', JSON.stringify(tasks)
    //     )
    // }, [tasks])

    // const getRandomLightColor = () => {
    //     const randomChannel = () => Math.floor(Math.random() * 156) + 100; // Values between 100 and 255 for light colors
    //     const r = randomChannel();
    //     const g = randomChannel();
    //     const b = randomChannel();
    //     return `rgb(${r}, ${g}, ${b})`;
    // };

    const lightColors = [
        '#98D7E6', 
        '#E46D5F', 
        '#FFC900', 
        '#FF1B5B', 
        '#34D286', 
        '#099DFE', 
        'tomato', 
        '#F24362',//pink
        '#92A4FF', //purple blue
        '#92A4FF', // green blue
        '#FEBA57', //yellow
        '#FDD3E7', //pink
        '#08A497' //blue green
    ];

    const getRandomLightColor = () => {
        const randomIndex = Math.floor(Math.random() * lightColors.length);
        return lightColors[randomIndex];
    };
    
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        // const newTask = { ...task, id: Math.random() };
        // setTasks([...tasks, newTask])
        // setTask({name: '', status: false})
        dispatch(addTodo({id: Math.random(), name: task, completed: false, color: getRandomLightColor()}))
        setTask('')




    }
    return (
        // <Box display={'flex'} flexDirection={'column'}>

        <Box h={'100vh'} w={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Box bg={'white'} borderRadius={'0.7rem'} boxShadow='md'>
                <Box display={'flex'} bg={'pink'} p={'0.4rem'} justifyContent={'space-evenly'} alignItems={'center'} borderRadius={'0.7rem 0.7rem 0 0'}>
                   <NavLink to={'/alltask'}><IoMenu style={{fontSize: '1.8rem', position: 'relative', right: '3rem'}} /></NavLink> 
                    <Text fontSize={'1.8rem'} position={'relative'} right={'2rem'}>TODO APP</Text>
                </Box>
                <form onSubmit={(e)=> handleSubmit(e)} style={{ width: '28rem', height: '10rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '2rem' }}>
                    <Input placeholder='Enter Task Name' onChange={(e)=> setTask(e.target.value)} value={task} size='lg'  />
                    <Button w={'100%'} type='submit' size='lg' colorScheme='yellow'>ADD TASK</Button>
                </form>
            </Box>
        </Box>
        // </Box>
    )
}

export default TaskInput