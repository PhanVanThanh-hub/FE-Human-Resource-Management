import axiosClient from "./axiosClient";

const groupApi = {
    async getAll() {
        const response = await axiosClient.get('getGroup/')
        return {
            ...response,
             
        }
     },
    
    

}

export default groupApi