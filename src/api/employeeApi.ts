import axiosClient from "./axiosClient";
import StorageKeys from "../constants/storage-keys";
import { InformationProps ,PayrollProps} from "../types/models/information";
import { ListResponse } from "../types/models/common";
 
const accessToken = localStorage.getItem(StorageKeys.access)
const employeeApi = {
    async getAll1(params: any) {
        const accessToken = localStorage.getItem(StorageKeys.access)
        return axiosClient.get('employee/',
        {
            params: {
            ...params,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    },
    getPayroll(params:any): Promise<ListResponse<PayrollProps[]>>{
        const accessToken = localStorage.getItem(StorageKeys.access)
        const url = `payroll/`;
        const response=  axiosClient.get(url,{
            params:{...params},
            headers: {
             Authorization: `Bearer ${accessToken}`
         },});
         return response
    },
  
    getAll(params: any): Promise<ListResponse<InformationProps[]>> {
        const accessToken = localStorage.getItem(StorageKeys.access)
        return axiosClient.get('employee/',
        {
            params: {
            ...params,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
         
     },
     getAllStaffGroup(params: any): Promise<ListResponse<InformationProps[]>> {
        const accessToken = localStorage.getItem(StorageKeys.access)
        return axiosClient.get('employee_staff/',
        {
            params: {
            ...params,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
         
     },
     getEmployeeSalary(params:any): Promise<ListResponse<InformationProps[]>> {
        const accessToken = localStorage.getItem(StorageKeys.access)
        var qs = require('qs');
        return axiosClient.get('employee_salary/', {
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
        
     },
     getPayrollDetail(slug:any):Promise<ListResponse<PayrollProps[]>> {
        const accessToken = localStorage.getItem(StorageKeys.access)
        const url = `payroll/${slug}/`;
        const response=  axiosClient.get(url,{
            headers: {
             Authorization: `Bearer ${accessToken}`
         },});
         return response
    },
    getPayrollStaff(slug:any):Promise<ListResponse<PayrollProps[]>> {
        const accessToken = localStorage.getItem(StorageKeys.access)
        const url = `staff_payroll/${slug.slug}/`;
        const response=  axiosClient.get(url,{
            headers: {
             Authorization: `Bearer ${accessToken}`
         },});
         return response
    },
    getPayrollStaffPerYear(slug:any):Promise<ListResponse<PayrollProps[]>> {
        console.log("slug:",slug)
        const params={release_year:slug.year}
        const accessToken = localStorage.getItem(StorageKeys.access)
        const url = `staff_payroll/${slug.slug}/`;
        const response=  axiosClient.get(url,{
            params: {
                ...params,
            },
            headers: {
             Authorization: `Bearer ${accessToken}`
         },});
         return response
    },
    getEmployeeDetail(slug:any):Promise<ListResponse<InformationProps>>  {
        const url = `/employee/${slug}/`;
        return axiosClient.get(url,{
            headers: {
             Authorization: `Bearer ${accessToken}`
         },});
    },
    addEmployee(params:any) {
        const newParams = { ...params }
       
        const accessToken = localStorage.getItem(StorageKeys.access)
        const url = `employee/`;
        const response =  axiosClient.post(url,newParams, {
                
            headers: {
               Authorization: `Bearer ${accessToken}`
            }
      }); 
      return response
    },

}

export default employeeApi