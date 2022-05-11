import axiosClient from "./axiosClient";
import StorageKeys from "../constants/storage-keys";

const accessToken = localStorage.getItem(StorageKeys.access)

const employeeApi = {
    
    async getAll() {
        const response = await axiosClient.get('employee/',
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return {
            ...response,
             
        }
     },
     async getManager() {
         const params ={
             role:1
         }
        var qs = require('qs');
        const response = await axiosClient.get('employee/', {
            params: {
                ...params,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            paramsSerializer:  (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            },
        })
        return {
            ...response,
        }
    },
    getEmployeeDetail(id:any) {
        const url = `/employee/${id}/`;
        return axiosClient.get(url,{
            headers: {
             Authorization: `Bearer ${accessToken}`
         },});
    },
    async getEmployeeGroup(idGroup:any) {
        const params ={
            group:idGroup
        }
       var qs = require('qs');
       const response = await axiosClient.get('employee/', {
           params: {
               ...params,
           },
           headers: {
            Authorization: `Bearer ${accessToken}`
        },
           paramsSerializer:  (params) => {
               return qs.stringify(params, { arrayFormat: 'repeat' })
           },
       })
 
       return {
           ...response,
       }
    },
    async addEmployee(params:any) {

        const url = `employee/`;
        const response = await axiosClient.post(url,{params: {
            ...params,
        },
        headers: {
         Authorization: `Bearer ${accessToken}`
     },} ); 
      return response
    },
    

}

export default employeeApi