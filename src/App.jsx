import Avatar from "./components/Avatar"
import UploadWidget from "./components/UploadWidget"
import useUserStore from "./stores/userStore"



function App() {
  
  const user = useUserStore(state => state.user)
  const logout = useUserStore(state => state.logout)
  const updateProfilePic = useUserStore(state => state.updateProfilePic)

  return (
    <div className="app-container items-center py-2">
      <div className="text-2xl text-info">{user.username}</div>
      <button className="btn btn-info" onClick={logout}>Logout</button>
      <Avatar imgSrc={user?.profileImage} className='h-40 w-40' />
      <UploadWidget updateProfilePic={updateProfilePic} oldProfilePic={user.profileImage}/>
      <div className="divider"></div>
      <pre className="text-xl w-full">{JSON.stringify(user,null,2)}</pre>
    </div>
  )
}

export default App
