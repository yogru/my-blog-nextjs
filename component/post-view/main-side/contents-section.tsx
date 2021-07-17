import Box from "@material-ui/core/Box"

export interface Props {

    contents?:string
}


function ContentsSection(props:Props){
    return (
        <Box>
            <div dangerouslySetInnerHTML={{__html:props.contents}}  />
        </Box>
    )
}

export default ContentsSection