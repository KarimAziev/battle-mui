export interface BattleState {
  isBattleRunning: boolean;
  countdown: number;
  battleOutcome: string | null;
}

export enum BattleActionType {
  START_BATTLE = 'START_BATTLE',
  TICK = 'TICK',
  RUN_BATTLE = 'RUN_BATTLE',
  BATTLE_END = 'BATTLE_END',
}

export interface StartBattleAction {
  type: BattleActionType.START_BATTLE;
}

export interface TickBattleAction {
  type: BattleActionType.TICK;
}

export interface RunBattleAction {
  type: BattleActionType.RUN_BATTLE;
}

export interface EndBattleAction {
  type: BattleActionType.BATTLE_END;
  payload: string;
}

export const startBattle = (): StartBattleAction => ({
  type: BattleActionType.START_BATTLE,
});
export const tickBattle = (): TickBattleAction => ({
  type: BattleActionType.TICK,
});
export const runBattle = (): RunBattleAction => ({
  type: BattleActionType.RUN_BATTLE,
});

export const endBattle = (payload: string): EndBattleAction => ({
  type: BattleActionType.BATTLE_END,
  payload,
});

export const battleActions = {
  startBattle,
  tickBattle,
  endBattle,
  runBattle,
};

export type BattleAction =
  | StartBattleAction
  | TickBattleAction
  | RunBattleAction
  | EndBattleAction;

export const initialState: BattleState = {
  isBattleRunning: false,
  battleOutcome: null,
  countdown: -1,
};

export function battleReducer(
  state: BattleState,
  action: BattleAction,
): BattleState {
  switch (action.type) {
    case BattleActionType.START_BATTLE:
      return { ...state, battleOutcome: null, countdown: 3 };
    case BattleActionType.TICK:
      return { ...state, countdown: state.countdown + -1 };
    case BattleActionType.RUN_BATTLE:
      return { ...state, isBattleRunning: true, countdown: 0 };
    case BattleActionType.BATTLE_END:
      return {
        ...initialState,
        battleOutcome: action.payload,
      };
    default:
      return state;
  }
}
