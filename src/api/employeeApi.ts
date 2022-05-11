import axiosClient from "./axiosClient";

const employeeApi = {
    async getAll() {
        const response = await axiosClient.get('employee/')
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
            paramsSerializer:  (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            },
        })
        console.log("res:",response)
        return {
            ...response,
        }
    },
    getEmployeeDetail(id:any) {
        const url = `/employee/${id}/`;
        return axiosClient.get(url);
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
        console.log("new:",newParams)
        console.log("newjoin:",typeof newParams.name)
        const url = `employee/`;
        const response = await axiosClient.post(url,newParams ); 
      return response
    },
    

}

export default employeeApi