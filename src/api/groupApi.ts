import axiosClient from "./axiosClient";
import StorageKeys from "../constants/storage-keys";

const accessToken = localStorage.getItem(StorageKeys.access)

const groupApi = {
    async getAll() {
        const response = await axiosClient.get('getGroup/', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return {
            ...response,
             
        }
     },
    
    

}

export default groupApi