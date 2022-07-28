import { useCallback } from 'react';
import { setStep } from '../slices/stepperSlice';
// import type { RootState } from '@store/types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/types';
import { Step } from '../types/Step';

export const step = (state: RootState) => state.stepper;

export const useStepperActions = () => {
  const dispatch = useAppDispatch();

  return {
    setStep: useCallback((step: Step) => dispatch(setStep(step)), [dispatch]),
    nextStep: useCallback((step: Step) => dispatch(setStep(step)), [dispatch]),
  };
};

export const useStepper = () => {
  return useAppSelector(step);
};
