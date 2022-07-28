import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Step } from '../types/Step';


interface StepperState {
    steps: Step[];
}

const initialState: StepperState = {
    steps: [
        { step: 1, completed: true, active: true },
        { step: 2, completed: false, active: false },
        { step: 3, completed: false, active: false },
        { step: 4, completed: false, active: false },
    ]
}

export const StepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        setStep: (state: StepperState, action: PayloadAction<Step>) => {
            const { step, completed, active } = action.payload;
            const steps = state.steps.map(s => {
                if (s.step === step) {
                    return { ...s, completed, active };
                }
                return s;
            });
            return { ...state, steps };
        },
        nextStep: (state: StepperState, action: PayloadAction<Step>) => {
            let index = state.steps.findIndex((i) => i.step === action.payload.step);
            if (index != -1) {
                state.steps[index] = { ...action.payload }
            }
        },

    },
});

export const { setStep } = StepSlice.actions;
export default StepSlice;
