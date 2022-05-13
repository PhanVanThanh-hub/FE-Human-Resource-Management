import axiosClient from "./axiosClient";
import StorageKeys from "../constants/storage-keys";

const accessToken = localStorage.getItem(StorageKeys.access)

const groupApi = {
    async getAll() {
        const response = await axiosClient.get('group/', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return {
            ...response,
             
        }
     },
    async addGroup(params:any){
        const response = await axiosClient.post('group/', {params: {
            ...params,
        },
        headers: {
         Authorization: `Bearer ${accessToken}`
     },} )
     console.log("resp:",response)
        return {
            ...response,
             
        }
    }
    
    

}

export default groupApi