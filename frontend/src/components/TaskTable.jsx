import DataTable from 'react-data-table-component';
import { BiSolidEditAlt } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { setCurrentTask } from '../redux/reducers/taskReducer';

const TaskTable = ({ setEditModalOpen, setDeleteMoalOpen }) => {
  const dispatch = useDispatch()
  const handleEdit = (row) => {
    dispatch(setCurrentTask(row))
    setEditModalOpen(true)
  }
  const handleDelete = (row) => {
    dispatch(setCurrentTask(row))
    setDeleteMoalOpen(true)
    console.log(row)
  }
  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Description',
      selector: row => row.description,
    },
    {
      name: "Created At",
      selector: row => row.createdAt
    },
    {
      name: "Status",
      selector: row => row.status
    },
    {
      name: "Actions",
      selector: (row) => <div className='flex items-center gap-1.5 text-2xl'>
        {row.status !== "Completed" && <button className='cursor-pointer' title='Edit' onClick={() => handleEdit(row)}><BiSolidEditAlt className='text-green-600' /></button>}
        <button className='cursor-pointer' title='Delete' onClick={() => handleDelete(row)}><MdDelete className='text-red-600' /></button>
      </div>
    }
  ];
  const data = [
    {
      title: "Task 1",
      description: "I Need to do a task",
      status: "Created",
      createdAt: "2023-07-22"

    },
    {
      title: "Task 2",
      description: "I Need to do a task",
      status: "Completed",
      createdAt: "2023-08-22"

    },
    {
      title: "Task 2",
      description: "I Need to do a task",
      status: "Processing",
      createdAt: "2023-08-22"

    }
  ]
  const customStyles = {
    headCells: {
      style: {
        background: 'black',
        color: 'white',
        fontSize: "18px",
        fontWeight: "semibold"
      },
    },
    cells: {
      style: {
        fontSize: '14.5px'
      },
    },
  };
  return (
    <div className='py-3'>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        responsive
      />
    </div>
  )
}

export default TaskTable