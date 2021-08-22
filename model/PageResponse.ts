import Pageable from "@/model/Pageable";

export default class PageResponse<T>{
    contents: T []
    pageRequest:Pageable
    totalPage:number
    isNextPage:boolean
}