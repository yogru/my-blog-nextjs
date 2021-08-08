import {GetServerSideProps, GetServerSidePropsContext} from "next";

import UserHome from '@/container/user-home'
import userRepository from "@/repository/UserRepository";
import ValidatorWrapper from "@/modules/ValidatorWrapper";
import UserModel from "@/model/UserModel";

export interface Props {
  user:UserModel
}


function Home(props:Props){
    console.log(props.user)

    return(
        <UserHome user={props.user} />
    )
}

export default Home




export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {

    function getEmail(context: GetServerSidePropsContext):string{
        const email =  context.params['email']
        if(!email || Array.isArray(email)){
            return null
        }
        return email
    }


    function isRedirection( context: GetServerSidePropsContext){
        const email = getEmail(context)
        if(email){
            if(ValidatorWrapper.isEmail(email)){
                return false
            }
        }
        return {
            redirect:{
                permanent:false,
                destination:"/home"
            }
        }
    }

    const isRedirecting = isRedirection(context);
    if(isRedirecting) return isRedirecting

    const email = getEmail(context)
    const userModel =  await userRepository.getUserByEmail(email)

    let props:Props= {"user":userModel}
    return {
        props,
    }
}
