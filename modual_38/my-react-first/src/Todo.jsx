// export default function Todo({ task }) {
//     return (
//         <li>Task : {task}</li>
//     )
// }

// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished : {task}</li>
//     } else {
//         return <li>Work one : {task}</li>
//     }

// }

export default function Todo({ task, isDone }) {
    return (
        <li>{isDone ? 'Finished' : 'work one'} : {task}</li>
    )

}