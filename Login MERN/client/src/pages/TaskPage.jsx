import { useAuth } from "../context/AuthContext"

const TaskPage = () => {

  const { user } = useAuth();
  console.log(user)

  return (
    <div>
      TASKS
    </div>
  )
}

export default TaskPage