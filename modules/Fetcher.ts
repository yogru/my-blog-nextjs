import fetch from 'isomorphic-unfetch'
import JWT from "@/modules/JWT";


export interface Fetcher {
    post<T,U>(url:string, data:T ,isSetJwt:boolean ):Promise<U>
    get<T, U>(url: string, params: any, isSetJwt: boolean):Promise<Response>
    put<T,U>(url:string, data:T, isSetJwt:boolean):Promise<U>
    del<T,U>(url:string, params:any, isSetJwt:boolean):Promise<U>
}


class FetcherImp implements Fetcher {


    private setHeaderJwt(r:RequestInit):RequestInit{
        if(JWT.isValidToken()) {
            r.headers[JWT.headerFieldName] = JWT.getTokenString()
        }

        return r
    }

    private getPostReqInit<T>(data: T, jwt?:boolean):RequestInit{
        const req = {
            headers: {
                'Content-Type': 'application/json',
            },
            method:"POST",
                body:JSON.stringify(data),
        }
        return jwt? this.setHeaderJwt(req): req
    }


    private getPutReqInit<T>(data: T, jwt?:boolean):RequestInit{
        const req = {
            headers: {
                'Content-Type': 'application/json',
            },
            method:"PUT",
            body:JSON.stringify(data),
        }
        return jwt? this.setHeaderJwt(req): req
    }



    private getGetReqInit(jwt?:boolean):RequestInit{
        const req = {
            headers: {
                'Content-Type': 'application/json',
            },
            method:"GET",
        }
        return jwt? this.setHeaderJwt(req): req
    }

    private getDelReqInit(jwt?:boolean):RequestInit{
        const req = {
            headers: {
                'Content-Type': 'application/json',
            },
            method:"DELETE",
        }
        return jwt? this.setHeaderJwt(req): req
    }

    public async get<T, U>(_url: string, params:any = {}, isSetJwt: boolean = true): Promise<Response> {
        let reqInit = this.getGetReqInit(isSetJwt)
        const url = _url+"?"+ new URLSearchParams(params)
        const ret =  await fetch(url,reqInit)
        return ret
    }

    public async post<T, U>(url: string, data: T, isSetJwt:boolean = true): Promise<U> {
        const ret =  await fetch(url,this.getPostReqInit(data,isSetJwt))
        return ret.json()
    }

    public async put<T, U>(url: string, data: T, isSetJwt:boolean = true): Promise<U> {
        return Promise.resolve(undefined);
    }

    public async del<T, U>(url: string, parameter:any={}, isSetJwt:boolean = true): Promise<U> {
        return Promise.resolve(undefined);
    }

}


export default new FetcherImp()
