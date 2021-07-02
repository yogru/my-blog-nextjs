
export interface UserStore {


    /**
     *  현재 로그인한 사용자의 아이디 가져온다.
     */
    getCurrentUserId: ()=>number
}

export default class UserStoreImp implements UserStore{


    public getCurrentUserId(): number {
        // stub 상태..
        return 1;
    }


}

