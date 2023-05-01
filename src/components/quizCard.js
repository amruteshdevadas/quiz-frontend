
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        display: 'inline-block',
        width: 300,
        margin: 10,
    },
    media: {
        height: 200,
    },
});

export function QuizCard({ name, category, image, score, attempted, quizId }) {
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <Card className={classes.card} onClick={() => navigate(`/quiz-result/${quizId}`)}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Taken by {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Catrgory :{category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Score :{score}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Attempted on {new Date(attempted).toLocaleString()}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}