
export default class JWT {
    private readonly tokenString:string
    private readonly headerFieldName:string = "X-AUTH-TOKEN"

    constructor(tokenString:string) {
      this.tokenString = tokenString
    }

    public getTokenString():string {
        return this.tokenString;
    }

    public getHeaderFieldName():string {
        return this.headerFieldName
    }

}

