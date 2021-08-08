import {isEmail} from 'class-validator'


class ValidatorWrapper {
    public static isEmail(str: string): boolean {
       return isEmail(str)
    }
}


export default ValidatorWrapper