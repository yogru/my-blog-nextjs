import PostViewComponent from '@/component/post-view'
import {Post} from "@/model/Post";

import BlogHeaderMenuContainer from "@/container/blog-header-menu";

export interface Props {
  post:Post
}

function PostView(props:Props){
    return (
        <PostViewComponent post={props.post} BlogMenu={<BlogHeaderMenuContainer />} />
    )
}

export default PostView