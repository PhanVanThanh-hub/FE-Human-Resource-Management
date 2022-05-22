import axiosClient from "./axiosClient";
import StorageKeys from "../constants/storage-keys";
import { ListResponse } from "../types/models/common";
import { GroupProps } from "../types/models/information";

const groupApi = {
    
    getAll() :Promise<ListResponse<GroupProps[]>>{
        const accessToken = localStorage.getItem(StorageKeys.access)
        const response = axiosClient.get('group/', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return response;
     },
    async addGroup(params:any){
        const newParams = { ...params }
        const accessToken = localStorage.getItem(StorageKeys.access)
        try{
            const response = await axiosClient.post('group/',newParams, {  
                headers: {
                   Authorization: `Bearer ${accessToken}`
                }
            }).catch(function (error) {
                return Promise.reject(error.response.status)
            });
            return true
        }
        catch(error){
            return error;
        }    
    }
    
    

}

export default groupApi