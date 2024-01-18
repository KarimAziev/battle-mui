import { Box, Button, Slide, Typography } from '@mui/material';
import { useEffect, useReducer } from 'react';
import BattleAnimation from '@/features/battle/components/BattleAnimation';
import {
  battleReducer,
  battleActions,
  initialState,
} from '@/features/battle/battleSlice';

const Battle = () => {
  const [state, dispatch] = useReducer(battleReducer, initialState);

  useEffect(() => {
    let countdownTimer: NodeJS.Timeout | null = null;

    if (state.countdown > 0) {
      countdownTimer = setTimeout(() => {
        dispatch(battleActions.tickBattle());
      }, 1000);
    } else if (state.countdown === 0 && !state.isBattleRunning) {
      dispatch(battleActions.runBattle());
    }

    return () => {
      if (countdownTimer) {
        clearTimeout(countdownTimer);
      }
    };
  }, [state.countdown, state.isBattleRunning]);

  const handleStartBattle = () => {
    dispatch(battleActions.startBattle());
  };

  const handleBattleEnd = () => {
    const outcome = Math.random() < 0.5 ? 'Victory' : 'Defeat';
    dispatch(battleActions.endBattle(outcome));
  };

  return (
    <Box sx={{ textAlign: 'center', paddingTop: '2rem' }}>
      <Slide direction="down" in={!state.isBattleRunning}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {state.battleOutcome ||
              (state.countdown < 0 && 'Welcome to the Battle Simulator')}
          </Typography>
          <Button
            variant="contained"
            onClick={handleStartBattle}
            disabled={state.countdown > 0}
          >
            Start Battle
          </Button>
          {state.countdown > 0 && (
            <Typography variant="h2" sx={{ marginTop: 4 }}>
              {state.countdown}
            </Typography>
          )}
        </Box>
      </Slide>
      {state.isBattleRunning && (
        <BattleAnimation onBattleEnd={handleBattleEnd} />
      )}
    </Box>
  );
};

export default Battle;
