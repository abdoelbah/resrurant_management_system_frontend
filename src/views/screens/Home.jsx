import { useEffect, useState } from 'react'
import BarChart from '../../components/home/charts/BarChart'
import axios from 'axios'
const API_URL = import.meta.env.VITE_URL
function Home() {

  const [vendorsCount,setVendorsCount] = useState(null)
  const [users,setUsers] = useState(null)

  const GetVendors = async () => {
    try {
      const res = await axios.get(`${API_URL}/admin/list-vendors`);
      console.log("vendors", res, res.data);
      if (res.status === 200) {
        setVendorsCount(res.data.length);
      }
    } catch (error) {
      console.log("error while fetching vendors", error);
    }
  };

  const GetUsers = async () =>{
    try {
      const res = await axios.get(`${API_URL}/customer/users`);
      console.log("vendors", res, res.data);
      if (res.status === 200) {
        setUsers(res.data.length);
      }
    } catch (error) {
      console.log("error while fetching vendors", error);
    }
  }

  useEffect(()=>{
    GetVendors()
    GetUsers()
  },[])
  return (
    <>
<div className='w-full'>
  {vendorsCount}
<BarChart vendors={vendorsCount} users={users} items={0}/>

</div>

    </>
  )
}

export default Home