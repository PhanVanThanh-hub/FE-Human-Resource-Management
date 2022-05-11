
import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";

const authApi = {
    checkAdmin(data:any){
        const url = 'decentralization/';
        return axiosClient.post(url, data);
    },
    login(data:any) {
        const url = '/api/token/';
        return axiosClient.post(url, data);
    },
    async getUser(params:any) {
        const newParams = { ...params }
        const accessToken = localStorage.getItem(StorageKeys.access)
        const url = `users/`;
        const response = await axiosClient.get(url, {
            params: { ...newParams },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }); 
        return response
    },
    async getProfile(params:any) {
        const data = { ...params }
      
        const accessToken = localStorage.getItem(StorageKeys.access)
        
        const response = await axiosClient.post(`/detail/`, {
            data: { ...data },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return response
    },
    async changeProfile(params:any) {
        const newParams = { ...params }
      
        const accessToken = localStorage.getItem(StorageKeys.access)
        const response = await axiosClient.post(`/changeProfile/`, {
            data: { ...newParams },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return response
    },
    
}

export default authApi