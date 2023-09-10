import {createContext, useContext, useState} from 'react'

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if(!context){
    throw new Error('useTasks must be used within a TasksProvider')
  }

  return context;
}

export function TasksProvider({ children}){
  const [tasks,setTasks] = useState([]);

  return(
    <TaskContext.Provider value={{ tasks}}>
      { children }
    </TaskContext.Provider>
  )
}