import { useEffect,useState } from "react"

//函数里最好不要该百年传入的对象本身
export const isFalsy = (value: any)=> value === 0 ? false :!value
export const cleanObject = (object:object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    //@ts-ignore
    const value = result[key]

    if(isFalsy(value)){
      //@ts-ignore
      delete result[key]
    }
  })
}

export const useMount = (callback:()=>void) =>{
  useEffect(()=>{
    callback()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
}

export const useDebounce = (value:any ,delay:number) => {
  const [debouncedValue,setDebouncedVlue] = useState(value)

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDebouncedVlue(value)
    },delay)
    return () => clearTimeout(timeout)
  },[value,delay])
  return debouncedValue
}