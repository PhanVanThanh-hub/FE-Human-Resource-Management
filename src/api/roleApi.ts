import axiosClient from "./axiosClient";

const roleApi = {
    async getAll() {
        const response = await axiosClient.get('getRole/')
        return {
            ...response,
             
        }
     },
    
    

}

export default roleApi