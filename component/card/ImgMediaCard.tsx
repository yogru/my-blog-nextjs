import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export interface Props {

}
// 이거 안씀..

function ImgMediaCard(props:Props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/images/profile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        개발 중
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        글 내용 글 내용 글 내용 글 내용 글 내용 글 내용
                        글 내용 글 내용 글 내용 글 내용 글 내용 글 내용
                        글 내용 글 내용 글 내용 글 내용 글 내용 글 내용
                        글 내용 글 내용 글 내용 글 내용 글 내용 글 내용
                        글 내용 글 내용 글 내용 글 내용 글 내용 글 내용


                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


export default ImgMediaCard