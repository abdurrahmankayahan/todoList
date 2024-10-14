import { create } from "zustand";



export type UserType = {

    id?: number,
    name: string,
    eMail: string,
    password?: string
    auth: boolean


}



const useUserstore = create<UserType>((set, get) => ({
    
    name: "",
    eMail: "",
    auth: false,
    
}))

export default useUserstore;