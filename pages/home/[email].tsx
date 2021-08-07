import UserHome from '@/container/user-home'
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import postRepository from "@/repository/PostRepository";


export interface Props {

}


function Home(props:Props){


    return(
        <UserHome />
    )
}

export default Home




export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {

    const email =  context.params['email']
    let props:Props = {email:null}
    console.log(email)
    return {
        props,
    }
}
