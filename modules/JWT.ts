import jwtDecode from 'jwt-decode'
import UserModel from "@/model/UserModel";
import LocalStorageImp ,{Localstorage} from "@/modules/Localstorage";

export default class JWT {
    public static readonly headerFieldName:string = "X-AUTH-TOKEN"
    private static readonly localStorage:Localstorage = new LocalStorageImp(JWT.headerFieldName)

    public static getTokenString(): string | null {
       return  JWT.localStorage.get()
    }

    public static isValidToken():boolean {
       const decode = JWT.getDecode()
        if(decode)return true
        return false
    }

    public static saveLocalStorage(token:string){
        JWT.localStorage.set(token)
    }

    public static clear(){
        JWT.localStorage.clear()
    }

    public static getDecode():any{
        const token = JWT.localStorage.get()
        if(token === null ){
            return null
        }
        return jwtDecode(token)
    }
}

