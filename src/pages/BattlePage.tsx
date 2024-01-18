import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';
import BattleApp from '@/features/battle/components/Battle';

const BattlePage = () => (
  <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6">Battle Simulator</Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="md">
      <BattleApp />
    </Container>
  </>
);

export default BattlePage;
