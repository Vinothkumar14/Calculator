import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  Typography,
  Grid,
  Paper,
} from '@mui/material';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput(input);
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+',
  ];

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Paper elevation={6} sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Calculator
        </Typography>
        <Box
          sx={{
            minHeight: 60,
            bgcolor: '#f0f0f0',
            p: 2,
            mb: 2,
            textAlign: 'right',
            borderRadius: 2,
            fontSize: '1.5rem',
            overflow: 'auto',
          }}
        >
          {input || '0'}
        </Box>
        <Grid container spacing={2}>
          {buttons.map((btn) => (
            <Grid item xs={3} key={btn}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleClick(btn)}
                sx={{
                  fontSize: '1.2rem',
                  py: 2,
                  borderRadius: 2,
                  bgcolor:
                    btn === '='
                      ? 'success.main'
                      : btn === 'C'
                      ? 'error.main'
                      : 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor:
                      btn === '='
                        ? 'success.dark'
                        : btn === 'C'
                        ? 'error.dark'
                        : 'primary.dark',
                  },
                }}
              >
                {btn}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Calculator;
