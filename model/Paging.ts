import {is} from "@babel/types";

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

    constructor(c:T [], pageRequest:PageRequest,totalPage:number,isNextPage:boolean) {
        this.contents = c
        this.pageRequest = pageRequest
        this.totalPage = totalPage
        this.isNextPage = isNextPage
    }
}