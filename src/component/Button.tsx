import type React from "react"

type PropType = {
    children: React.ReactNode,
    color: string,
    onClick: () => void
}

const renderColor = (color: string): string => {
    switch (color) {
        case 'red':
            return 'bg-red-500 hover:bg-red-600';
        case 'blue':
            return 'bg-blue-500 hover:bg-blue-600';
        case 'green':
            return 'bg-green-500 hover:bg-green-600';
        case 'violet':
            return 'bg-violet-500 hover:bg-violet-600';
        default:
            return 'bg-blue-500 hover:bg-blue-600';
    }
}

function Button(props: PropType) {
  return (
    <div>
        <button onClick={props.onClick} className={`p-4 rounded-2xl text-white cursor-alias ${renderColor(props.color)}`}>
            {props.children}
        </button>
    </div>
  )
}

export default Button