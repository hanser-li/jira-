import { List } from "./list"
import { useEffect ,useState} from "react"
import { SearchPanel } from "./search-panel"
import { cleanObject, useMount } from "utils"
import { useDebounce } from "utils"
import React from 'react';
import { useHttp } from "utils/http"

export const ProjectListScreen = () => {
  const [users,setUsers] = useState([]);

    const [param,setParam] =useState({
      name:'',
      personId:''
    })
  const [list,setList] = useState([])
    const debouncedParam = useDebounce(param,500)
  const client = useHttp()
  

  useEffect(()=>{
     // @ts-ignore
    client('projects',{data: cleanObject(debouncedParam)}).then(setList)
  },[debouncedParam]);

  useMount(()=>{
    client('users',{}).then(setUsers)
   
  })
  return (<div>
    <SearchPanel param = {param} setParam = {setParam} users = {users}/>
    <List list = {list} users = {users}/>
  </div>)
}