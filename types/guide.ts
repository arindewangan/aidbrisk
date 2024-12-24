export interface Instruction {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface GuideState {
  instructions: Instruction[];
  isLoading: boolean;
  error: string | null;
}