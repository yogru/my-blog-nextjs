import fetch from 'isomorphic-unfetch'
import exp from "constants";
import JWT from "@/modules/JWT";


export interface Fetcher {
    setJwt(jwt:JWT):void
    getJwt():JWT
    post<T,U>(url:string, data:T):Promise<U>
    get<T,U>(url:string,parameter:any):Promise<U>
    put<T,U>(url:string,data:T):Promise<U>
    del<T,U>(url:string,parameter:any):Promise<U>
}


// get도 body에 데이터 보낼 수 있으나 일반적이지 않아서 제외
type BodyMethodType = "POST" | "PUT"
type ParamMethodType = "GET" | "DELETE"
type MethodType = BodyMethodType | ParamMethodType


class ReqInit {
    private requestInit:RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    public getRequestInit():RequestInit {
        return this.requestInit
    }

    public setHeader(headerName:string, value:string):this{
        this.requestInit.headers[headerName] = value
        return this
    }

    public getHeader(headerName):string {
        return this.requestInit.headers[headerName]
    }


    public setData<T>(data:T):this{
        this.requestInit.body = JSON.stringify(data)
        return this
    }

    public setMethod(methodType:MethodType):this{
        this.requestInit.method = methodType
        return this
    }

}


class FetcherImp implements Fetcher {

    // jwtToken 관련 래핑 클래스 만들까??
    private jwt:JWT


    constructor() {
        this.jwt = null
    }

    public getJwt(): JWT {
        return this.jwt
    }
    public setJwt(jwt: JWT): this {
        this.jwt = jwt
        return this
    }

    public async del<T, U>(url: string, parameter:any): Promise<U> {
        return Promise.resolve(undefined);
    }

    public async get<T, U>(url: string, parameter:any): Promise<U> {
        let reqInit = this.setToken(new ReqInit()).
                            setMethod("GET").
                            getRequestInit()
        const ret =  await fetch(url,reqInit)
        reqInit = null // gc 최적화
        return ret.json()
    }

    private setToken(req:ReqInit):ReqInit{
        if(this.jwt){

          req.setHeader(
              this.jwt.getHeaderFieldName(),
              this.jwt.getTokenString()
          )
        }
        return req
    }

    public async post<T, U>(url: string, data: T): Promise<U> {
        let reqInit = this.setToken(new ReqInit()).
                            setData(data).
                            setMethod("POST").
                            getRequestInit()

        const ret =  await fetch(url,reqInit)
        reqInit = null // gc 최적화
        return ret.json()
    }

    public async put<T, U>(url: string, data: T): Promise<U> {
        return Promise.resolve(undefined);
    }

}


export default new FetcherImp()
