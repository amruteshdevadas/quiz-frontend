import { Grid, Paper, Typography } from '@material-ui/core';

export function Results({ results }) {

    return (
        <Grid container spacing={3}>
            {results.map((result) => (
                <Grid item xs={12} key={result.id}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h6" gutterBottom>
                            Question: {result.question}
                        </Typography>
                        <Typography variant="body1">
                            Your answer: {result.user_answer}
                        </Typography>
                        <Typography variant="body1">
                            Correct answer: {result.correct_answer}
                        </Typography>
                        <Typography
                            variant="body1"
                            color={result.is_correct ? 'primary' : 'error'}
                        >
                            {result.is_correct ? 'Correct!' : 'Incorrect!'}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}
