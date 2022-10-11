import React,{useEffect,useState} from 'react'


const Sample = () => {
    const initiailsate = 0
    const [count,setCount] = useState(initiailsate)

    const onClickHandler = () =>{
        setCount(count+1)
    }
        useEffect(() => {
            // console.log(count)
            document.title=" clicked " + count + " times "
         },[count])

  return (
    <div>
        <center>
        <h1>count {count} times</h1>
        <button onClick={onClickHandler}>change</button>
        </center>
    </div>
  )
}

export default Sample