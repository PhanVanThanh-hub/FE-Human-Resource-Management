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
     async getEmployeeSalary(params:any) {
        var qs = require('qs');
        const response = await axiosClient.get('employee_salary/', {
            params: {
                ...params,
            },
            paramsSerializer:  (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        })
        return {
            ...response,
            maxItem: 10,
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
    getEmployeeDetail(slug:any) {
        const url = `/employee/${slug}/`;
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
        const newParams = { ...params }
       
        const accessToken = localStorage.getItem(StorageKeys.access)
        const url = `employee/`;
        const response = await axiosClient.post(url,newParams, {
                
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }); 
      return response
    },
    async getPayrollDetail(slug:any){
        const url = `payroll/${slug}/`;
        const response= await axiosClient.get(url,{
            headers: {
             Authorization: `Bearer ${accessToken}`
         },});
         return response
    },
    async getPayroll(params:any){
        const url = `payroll/`;
        const response= await axiosClient.get(url,{
            params:{...params},
            headers: {
             Authorization: `Bearer ${accessToken}`
         },});
         return response
    },
    

}

export default employeeApi