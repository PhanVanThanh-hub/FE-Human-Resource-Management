import axiosClient from "./axiosClient";
import StorageKeys from "../constants/storage-keys";

const accessToken = localStorage.getItem(StorageKeys.access)

const roleApi = {
    async getAll() {
        const response = await axiosClient.get('getRole/',{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return {
            ...response,
             
        }
     },
    
    

}

export default roleApi