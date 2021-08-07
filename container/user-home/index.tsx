import Box from "@material-ui/core/Box"

import UserHomeComponents from '@/component/user-home'
import BlogHeaderMenuContainer from "@/container/blog-header-menu";
import {useRootStore} from "@/mobx-store/RootStore";

export interface Props {

}


function UserHome(props:Props){

    const rootStore = useRootStore()



    return (
        <UserHomeComponents  BlogMenu={<BlogHeaderMenuContainer />} />
    )
}


export default UserHome