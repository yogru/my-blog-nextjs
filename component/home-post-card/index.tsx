import react from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent';
import Box from "@material-ui/core/Box"

export interface Props {}

function HomePostCard(props:Props){
    const classes = useStyles()

    return (
        <Card className={classes.root} >
            <CardContent>
                <Box className={classes.cardContentBox}>
                    <Box className={classes.cardContentItem} mt={2} bgcolor={"black"} >
                        1111111111111
                    </Box>

                    <Box className={classes.cardContentItem} mt={1} bgcolor={"green"}>
                        22222222222222
                    </Box>

                    <Box className={classes.cardContentItem} mt={1} mb={2} bgcolor={"yellow"}>
                        3333333333333333
                    </Box>

                </Box>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles({
    root: {
        width:"100%"
    },
    cardContentBox:{
        display:"flex",
        flexDirection:"column",
    },
    cardContentItem:{
        minHeight:"3rem"
    }
});

export default HomePostCard