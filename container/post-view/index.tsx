import PostViewComponent from '@/component/post-view'
import PostModel from "@/model/PostModel";

import BlogHeaderMenuContainer from "@/container/blog-header-menu";

export interface Props {
  post:PostModel
}

function PostView(props:Props){
    return (
        <PostViewComponent post={props.post} BlogMenu={<BlogHeaderMenuContainer />} />
    )
}

export default PostView