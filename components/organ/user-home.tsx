import UserHome from '@/components/tissue/user-home'
import {useRootStore} from "@/mobx-store/RootStore";
import UserModel from "@/model/UserModel";

export interface Props {
    user:UserModel
}

export default function OUserHome(props:Props){
    const rootStore = useRootStore()
    return (
        <UserHome
            user={props.user}
            // BlogMenu={<BlogHeaderMenuContainer />}
            onChangeTag={(tag:string)=>console.log(tag)}
            onEndScroll={async ()=>console.log("end..")}
        />
    )
}


