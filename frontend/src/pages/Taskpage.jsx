import React, { useState } from 'react'
import TaskHeader from '../components/TaskHeader'
import TaskTable from '../components/TaskTable'
import AddTaskModal from '../components/AddTaskModal'
import EditTaskModal from '../components/EditTaskModal'
import AlertModal from '../components/AlertModal'
import Layout from '../layout'

const Taskpage = () => {

  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);
  const [deleteTaskModalOpen, setDeleteTaskModalOpen] = useState(false);

  return (
    <>
      <AddTaskModal isOpen={addTaskModalOpen} onClose={() => setAddTaskModalOpen(false)} />
      <EditTaskModal isOpen={editTaskModalOpen} onClose={() => setEditTaskModalOpen(false)} />
      <AlertModal isOpen={deleteTaskModalOpen} onClose={() => setDeleteTaskModalOpen(false)} />
      <div className='md:px-4 px-2.5 md:py-4 py-1.5'>
        <TaskHeader setAddModalOpen={setAddTaskModalOpen} />
        <TaskTable setEditModalOpen={setEditTaskModalOpen} setDeleteMoalOpen={setDeleteTaskModalOpen} />
      </div>
    </>
  )
}
export default Layout(Taskpage)