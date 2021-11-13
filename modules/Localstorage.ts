// 서버사이드 렌더링 할 때, window 객체 없을 수 있으니, 그런 오류 처리를 위해 래핑함
// 또한  하나의 키 값으로 사용하기 쉽게
// https://velog.io/@0307kwon/JWT%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C-localStorage-vs-cookie


export interface Localstorage {
    set(data:string):string
    get():string
    getKey():string
    clear():void
}

export default class LocalStorageImp implements Localstorage{

    private readonly key:string

    constructor(key:string) {
       this.key = key
    }

    public get(): string | null {

        try {
            const val =  window.localStorage.getItem(this.key)
            if(val === "undefined")
                return null
            return val
        }catch (e){
            return null
        }
        //
        // if (typeof window !== 'undefined') {
        //     const val =  window.localStorage.getItem(this.key)
        //     console.log("value.11..",val)
        //     if(typeof val !== 'undefined')return val
        //     return null
        // }
        // return null
    }

    public clear(){
        this.set("")
    }

    public set(data:string):string {
        const old =  this.get()

        if(typeof window!=='undefined'){
            window.localStorage.setItem(this.key,data)
        }
        return old;
    }

    public getKey(): string {
        return this.key
    }

}


