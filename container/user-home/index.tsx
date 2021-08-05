import Box from "@material-ui/core/Box"

import UserHomeComponents from '@/component/user-home'
import BlogHeaderMenuContainer from "@/container/blog-header-menu";

export interface Props {

}


function UserHome(props:Props){


    return (
        <UserHomeComponents  BlogMenu={<BlogHeaderMenuContainer />} />
    )
}


export default UserHome