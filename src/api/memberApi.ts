import axiosClient from "./axiosClient";
import StorageKeys from "../constants/storage-keys";
import { InformationProps } from "../types/models/information";
import { ListResponseFilter } from "../types/models/common";

const memberApi = {
    getAll(params: any): Promise<ListResponseFilter<InformationProps[]>> {
        const accessToken = localStorage.getItem(StorageKeys.access)
        return axiosClient.get('employee_pagination/',
        {
            params: {
            ...params,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
         
     },
    transitionGroup(params:any):Promise<any>{
        const accessToken = localStorage.getItem(StorageKeys.access)
        return axiosClient.post('transition_group/',
        {
            params: {
            ...params,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }


}

export default memberApi