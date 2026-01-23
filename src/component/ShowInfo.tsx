
type PropsType = {
    name: string,
    age: number,
    major: string,
}

function ShowInfo(props: PropsType) {
  return (
    <div className='mx-auto border rounded-2xl p-5 w-100 mb-5 bg-amber-100'>
        <h1>Họ tên: {props.name} </h1>
        <h1>Tuổi: {props.age}</h1>
        <h1>Ngành: {props.major}</h1>
    </div>
  )
}

export default ShowInfo