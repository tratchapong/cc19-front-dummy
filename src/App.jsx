import { useEffect, useState } from "react"
import Avatar from "./components/Avatar"
import UploadWidget from "./components/UploadWidget"
import useUserStore from "./stores/userStore"

function App() {
  
  const user = useUserStore(state => state.user)
  const [secureURL, setSecureURL] = useState(user.profileImage)

  useEffect( ()=> console.log(secureURL), [secureURL] )
  return (
    <div className="app-container items-center py-2">
      <div className="text-2xl text-info">{user.username}</div>
      <Avatar imgSrc={secureURL} className='h-40 w-40' />
      <UploadWidget setSecureURL={setSecureURL}/>
      <div className="divider"></div>
      <div className="text-xl">{JSON.stringify(user)}</div>
    </div>
  )
}

export default App
