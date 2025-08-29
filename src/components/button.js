
export default function Button({text, method}){
    return (
        <button onClick={method}>{text}</button>
    )
}