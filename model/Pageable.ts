
export default class Pageable {

    public perPage:number
    public pageNumber:number

    constructor(pageNumber:number = 0,perPage:number = 10) {
       this.pageNumber = pageNumber
       this.perPage = perPage
    }

    //
    // public static get( paegNumber:number = 0,perPage:number = 10 ):Pageable{
    //     let ret= new Pageable()
    //     ret.perPage = perPage
    //     ret.pageNumber = paegNumber
    //     return ret
    // }
}