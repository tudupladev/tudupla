import { Paper, Typography, Box } from '@mui/material';
import theme from 'muiTheme';
import { TeamCardProp } from './types';

const TeamCard = ({ member }: TeamCardProp) => {
  return (
    <Box mb="5rem">
      <img src={member.img} alt={member.name} width="200" height="200" />

      <Paper
        sx={{
          marginTop: '-2rem',
          position: 'absolute',
          padding: '1rem',
          marginLeft: '1rem',
          borderRadius: 0,
        }}
        elevation={3}
      >
        <Typography textAlign="center" fontWeight="bold">
          {member.name.toUpperCase()}
        </Typography>
        <Typography
          variant="caption"
          fontWeight="bold"
          textAlign="center"
          color={theme.palette.primary.main}
        >
          {member.position}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {member.tel}
        </Typography>
      </Paper>
    </Box>
  );
};

export default TeamCard;
