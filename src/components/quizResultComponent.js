import { Typography, ListItem, ListItemText, Box, List } from "@mui/material";

export function QuizQuestion({ question, answers }) {
    
    return (
        <Box sx={{ marginBottom: '1rem' }}>
            <Typography variant="h6">{question}</Typography>
            <List>
                {answers.map((answer, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            backgroundColor: answer.isCorrect ? '#b2dfdb' : 'inherit',
                        }}
                    >
                        <ListItemText primary={answer.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
