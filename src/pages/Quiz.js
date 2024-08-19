import React, { useState } from 'react';
import TopAppBar from '../components/AppBar';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@mui/material';

const testObj = [
    {
        question: 'Who is known as the "Father of English Literature"?',
        a: 'William Shakespeare',
        b: 'Geoffrey Chaucer',
        c: 'John Milton',
        d: 'Edmund Spenser',
        correct: 0
    },
    {
        question: 'Who is known as the "Father of English Literature"?',
        a: 'William Shakespeare',
        b: 'Geoffrey Chaucer',
        c: 'John Milton',
        d: 'Edmund Spenser',
        correct: 0
    },
    {
        question: 'Who is known as the "Father of English Literature"?',
        a: 'William Shakespeare',
        b: 'Geoffrey Chaucer',
        c: 'John Milton',
        d: 'Edmund Spenser',
        correct: 0
    },
    {
        question: 'Who is known as the "Father of English Literature"?',
        a: 'William Shakespeare',
        b: 'Geoffrey Chaucer',
        c: 'John Milton',
        d: 'Edmund Spenser',
        correct: 0
    },
]

/*
    renders a component representing a single quiz question
    params:
        onClick: updates Quiz state with current selection
        question: a string representing the question
        answers: an array of 4 strings representing possible answers
        correct: an index (0 <= idx <= 3) representing the correct answer
*/
const QuestionBox = ({ onClick, question, answers, correct }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
    const handleSelection = (event) => {
      setSelectedAnswer(parseInt(event.target.value));
      onClick(event.target.value);
    };
    
    return (
      <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: '8px', width: '800px', margin: 'auto' }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography variant="h6">{question}</Typography>
          </FormLabel>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={selectedAnswer}
            onChange={handleSelection}
          >
            {answers.map((answer, index) => (
              <FormControlLabel 
                key={index} 
                value={index} 
                control={<Radio />} 
                label={answer} 
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };

const ScoreDisplay = ({score}) => {
    if(score === -1) {
        return null
    }

    const colour = score < 80 ? score < 50 ? 'red' : 'orange' : 'green';

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '6px', borderRadius: 1, backgroundColor: colour, }}>
          <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', marginRight: 1 }}>
            Score:
          </Typography>
          <Typography variant="body1" sx={{ color: 'white'}}>
            {score}%
          </Typography>
        </Box>
      );
}

/*
    quiz represented as an array of current answers (-1, 0, 1, 2, 3)
        -1 means no answer yet
    compare answers to submitted object on form submission
*/
export default function Quiz() {
    const [answers, setAnswers] = useState(Array(testObj.length).fill(-1))
    const [score, setScore] = useState(-1);

    const onAnswer = (objIdx, answerIdx) => {
        const newAnswers = [...answers]
        newAnswers[objIdx] = answerIdx
        setAnswers(newAnswers)
    }

    const onSubmit = () => {    
        //calculate percentage correct on this quiz
        let total = 0

        for(let i = 0; i < answers.length; i++){
            const ansOne = answers[i]
            const ansTwo = testObj[i].correct

            total += ansOne == ansTwo ? 1 : 0
        }

        setScore((total/answers.length) * 100);
    }

    return (
        <main>
            <TopAppBar />
            <Typography variant='h2' sx={{textAlign:'center', paddingTop: '32px'}}>
                Shakespeare Quiz: Do you know your themes?
            </Typography>
            <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '32px',
                gap: '32px'
                }}>
                    {testObj.map((e, idx) => {
                        return (
                            <QuestionBox onClick={(answerIdx) => onAnswer(idx, answerIdx)} question={e.question} answers={[e.a, e.b, e.c, e.d]} correct={e.correct}/>
                        )
                    })}
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom:'32px', gap: '16px'}}>
                    <Button variant="contained" onClick={onSubmit}>
                        Submit
                    </Button>
                    <ScoreDisplay score={score} />
                </Box>
            </Box>
        </main>
    );
}