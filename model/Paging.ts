export class PageRequest {

    public size:number
    public page:number

    constructor(pageNumber:number = 0,perPage:number = 10) {
        this.page = pageNumber
        this.size = perPage
    }
}



export  class PageResponse<T>{
    contents: T []
    pageRequest:PageRequest
    totalPage:number
    isNextPage:boolean
}