
// 상수 값 12rem 있다면 이 값에 50퍼 센트 크기 얻을려면 어떻게 해야할까?
// 위와 같은 케이스에 대응하기 위해서 만든 클래스
// readonly 로 읽기 전용으로 만들고
// get 이라는 메서드로 고계함수로 제어하도록
export class CssValue {
    private readonly value:number
    private readonly sizeUint:"em" | "rem" | "%" | "px";
    private passFunc = (n:number)=>n

    constructor(v:number , sizeUnit:"em" | "rem" | "%" | "px"){
        this.value = v
        this.sizeUint = sizeUnit
    }

    public get(f?:(n:number)=>number){
        f = f ? f : this.passFunc
        return f(this.value) + this.sizeUint
    }
}


