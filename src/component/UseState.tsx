import { useState } from "react";
import Button from "./Button";

function UseState() {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("");

  return (
    <div>
        <div className='border rounded p-4 m-4'>
            <h1>Số lượng: {count} </h1>
            <Button color="green" onClick={() => {setCount(count+1)}}>Tăng </Button>
            <Button color="red" onClick={() => {setCount(count-1)}}>Giảm </Button>
            <Button onClick={() => {setCount(0)}}>Reset </Button>
        </div>
        <div className='border rounded p-4 m-4'>
            <h1>{text}</h1>
            <input className="border rounded-2xl" type="text" 
                    value={text}
                    onChange={(e) => {setText(e.target.value)}}/>
        </div>
    </div>
  )
}

export default UseState;