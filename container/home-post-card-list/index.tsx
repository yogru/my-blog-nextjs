import HomePostCardList from "@/component/post-card-list";
import PostModel from "@/model/PostModel";

export interface Props{
    posts: PostModel []
}

function HomePostCardListContainer(props:Props){
    return (
        <HomePostCardList  posts={props.posts}/>
    )
}

export default HomePostCardListContainer