import './App.css'
import Granpa from './components/Granpa/Granpa'
import HookForm from './components/HookForm/HookForm'
import ReForms from './components/ReForms/ReForms'
import ReuseableFrome from './components/ReuseableForm/ReuseableFrome'
import SimpleFroms from './components/SimpleFroms/SimpleFroms'
import StateFullForm from './components/StateFullForm/StateFullForm'

function App() {

  const hendleSingUpSubmit = (data) => {
    console.log('sing up data', data)
}
  const hendleUpdateProfile = (data) => {
    console.log('updata data', data)
}

  return (
    <>
      {/* <SimpleFroms></SimpleFroms> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <ReForms></ReForms> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableFrome formTitle={'Sing UP'} hendleSubmit={hendleSingUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, esse.</p>
        </div>
      </ReuseableFrome>
      <ReuseableFrome formTitle={'Profile Update'} hendleSubmit={hendleUpdateProfile} submitBtnText='Update'>
      <div>
          <h2>Update Profile</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, esse.</p>
        </div>
      </ReuseableFrome> */}

      <Granpa></Granpa>
    </>
  )
}

export default App
