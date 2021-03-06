import {GetServerSidePropsContext, GetServerSideProps} from "next"

import PostView from '@/components/organ/post-view'
import useLocalLogin from "@/hooks/useLogin";
import postRepository from '@/repository/PostRepository'


export interface Props {
  post?:string
}

export default function PostViewPage(props:Props){
    const post = JSON.parse(props.post)
    const isLocalLogin = useLocalLogin()

    return (
        <>
            {
                props.post ?  <PostView post={post} />:
                    "해당 포스트 없음 ㅋㅋ"
            }
        </>

    )
}


export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {

    const id =  context.params['id']
    const postModel = await postRepository.findById(Number(id))
    console.log(id, postModel)

    let props:Props = {post:null}
    if(postModel){
        props.post = JSON.stringify(postModel)
    }

    return {
        props,
    }
}
