
const initialState= {
    tasks: JSON.parse(localStorage.getItem('tasks'))|| []
}

console.log(initialState)

const taskReducer=(state= initialState, action)=>{
    switch(action.type){
    case "ADD_TODO":
      // eslint-disable-next-line no-case-declarations
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };

      case "DELETE_TODO":
        // eslint-disable-next-line no-case-declarations
        const updated= state.tasks.filter((elem)=>{
            return elem.id !== action.payload;
        })
        localStorage.setItem('tasks', JSON.stringify(updated));
        return {...state, tasks: updated}

        case "COMPLETED_TODO":
        // eslint-disable-next-line no-case-declarations
        const statusUpdated= state.tasks.map((elem)=>(
            elem.id=== action.payload.id? {...elem, completed: action.payload.status}: elem
        ))
        localStorage.setItem('tasks', JSON.stringify(statusUpdated));
        return {...state, tasks: statusUpdated}

        // case "EDIT_TODO":
        // // eslint-disable-next-line no-case-declarations
        // const edited= state.tasks.map((elem)=>(
        //     elem.id=== action.payload.id? {...elem, name: action.payload.name}: elem
        // ))
        // // console.log(edited)
        // localStorage.setItem('tasks', JSON.stringify(edited));
        // // console.log(action.payload.name, action.payload.id)
        // return {...state, tasks: edited}

        case "EDIT_TODO":
            // eslint-disable-next-line no-case-declarations
            const edited = state.tasks.map(elem =>
                elem.id === action.payload.id ? { ...elem, name: action.payload.name } : elem
            );
            localStorage.setItem('tasks', JSON.stringify(edited));
            return { ...state, tasks: edited };

       
      default:
            return state;
    }
}


export default taskReducer