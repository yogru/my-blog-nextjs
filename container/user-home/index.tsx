import Box from "@material-ui/core/Box"
import {useEffect} from "react";

import UserHomeComponents from '@/component/user-home'
import BlogHeaderMenuContainer from "@/container/blog-header-menu";
import {useRootStore} from "@/mobx-store/RootStore";
import UserModel from "@/model/UserModel";

export interface Props {
   user:UserModel
}


function UserHome(props:Props){

    const rootStore = useRootStore()


    return (
        <UserHomeComponents
            user={props.user}
            BlogMenu={<BlogHeaderMenuContainer />}
            onChangeTag={(tag:string)=>console.log(tag)}
            onEndScroll={async ()=>console.log("end..")}
         />
    )
}


export default UserHome