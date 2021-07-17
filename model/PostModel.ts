export default class PostModel {
    public id?: number
    public editors: number []
    public title: string
    public body: string
    public tag: string []
    public createAt?: Date
    public updateAt?: Date

    static createByView(title:string, body:string,tag?:string [], editors?: number []):PostModel{
        /**
         *  화면에서 post 만들 때 사용 하는 메서드
         */
        let ret =  new PostModel()
        ret.id = null
        ret.body = body
        ret.title = title
        ret.tag = tag || []
        ret.editors = editors || []
        ret.createAt = null
        ret.updateAt = null
        return ret
    }


}




