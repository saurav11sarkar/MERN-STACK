export default function Singers({ singers }) {
    console.log(singers)
    return (
        <div>
            <h3>Singer: {singers.name}</h3>
            <p>age: {singers.age}</p>
        </div>
    )
}