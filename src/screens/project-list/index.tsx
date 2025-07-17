import { List } from "./list"
import { useEffect ,useState} from "react"
import { SearchPanel } from "./search-panel"
import { useMount } from "utils"
import { useDebounce } from "utils"
import * as qs from "qs"
import React from 'react';

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
  const [users,setUsers] = useState([]);

    const [param,setParam] =useState({
      name:'',
      personId:''
    })
  const [list,setList] = useState([])
    const debouncedParam = useDebounce(param,500)
    const queryString = qs.stringify(debouncedParam, {
      skipNulls: true, // 跳过 null/undefined
      arrayFormat: "comma" // 数组格式化为 "tags=前端,后端"
    });
  useEffect(()=>{
    fetch(`${apiUrl}/projects?${queryString}`).then(async response => {
      if(response.ok){
        setList(await response.json())
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[debouncedParam])

  useMount(()=>{
    fetch(`${apiUrl}/users`).then(async response => {
      if(response.ok){
        setUsers(await response.json())
      }
    })
  })
  return <div>
    <SearchPanel param = {param} setParam = {setParam} users = {users}/>
    <List list = {list} users = {users}/>
  </div>
}