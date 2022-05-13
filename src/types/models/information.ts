export interface InformationProps{
    id:number;
    first_name:string;
    last_name:string;
    date_of_birth:any;
    earnings:number;
    ethnicity:string;
    full_time:boolean;
    join_date:any;
    location:string;
    role:string;
    sex:boolean;
    email:string;
    phone:string;
    avatar:any;
    group:any;
    slug?:string;
}

export interface GroupProps{
    id?:number;
    name_group:string;
}

export interface RoleProps{
    id?:number;
    title:string;
}

export interface PayrollProps{
    id?:number;
    name:string;
    salary:number;
    date:string;
}