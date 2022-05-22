export interface ListResponse<T> {
    data: T[];
}

export interface ListResponseFilter<T> {
    data:{results: T[]};
}