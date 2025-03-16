import axios from 'axios'
import {create} from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const useUserStore = create( persist((set,get) => ({
	user: null,
	token : '',
	login : async (input)=>{
		const rs = await axios.post('http://localhost:8889/login',input )
		set({token : rs.data.token, user: rs.data.user})
		return rs.data
	},
	updateProfilePic : async (url) => {
		const rs = await axios.patch('http://localhost:8889/profile-pic', 
			{ profileImage: url},
			{ headers : { Authorization : `Bearer ${get().token}`}}
		)
		console.log(rs)
		set({user: {...get().user, profileImage: url} })
	},
	logout: () => set({token : '', user: null})
}), {
	name: 'state',
	storage: createJSONStorage( ()=> localStorage )
}))

export default useUserStore