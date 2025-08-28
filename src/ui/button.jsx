export default function Button({text, method}){
    return (
        <button href={method}>{text}</button>
    )
}