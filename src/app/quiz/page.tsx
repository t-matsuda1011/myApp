import * as React from 'react';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

export default function Page() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <AccountCircleTwoToneIcon />
        <Button variant='contained' disableElevation>
          HELLO
        </Button>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
          <TextField />
        </Box>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        This is test card
      </Typography>
      <Typography variant="h5" component="div">
        a{bull}i{bull}u{bull}e{bull}o
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>japanese</Typography>
      <Typography variant="body2">
        日本語です
        <br />
        {'"あいうえお"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">ボタンです</Button>
    </CardActions>
  </React.Fragment>
);