import luxon ,{DateTime, Settings} from 'luxon'

export interface DateWrapper {
    getDateString(format:string):string
}


const local = DateTime.local()
const rezoned = local.setZone("Asia/Seoul", { keepLocalTime: true })


export default class DateWrapperImp implements DateWrapper{

    private readonly date_:string

    constructor(d:string) {
        this.date_ = d
    }

    public getDateString(format:string):string{
        const date = DateTime.fromISO(this.date_)
        return date.setZone("Asia/Seoul").toFormat(format)
    }


}
