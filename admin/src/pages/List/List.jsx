import { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = () => {

  const [list, setList]= useState([]);
  const url = "http://localhost:4000";
  const fetchList = async()=>{
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success){
      setList(response.data.data)
    } else {
      toast.error("Error in fetching list")
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
    </div>
  )
}

export default List
