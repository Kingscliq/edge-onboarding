import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import TextField from './components/elements/TextField';
import Button from './components/elements/Button';
import StepperItem from './components/elements/stepper/StepperItem';
import {
  useLocation,
  useMatch,
  useNavigate,
  useRoutes,
  useSearchParams,
} from 'react-router-dom';
import { useStepper } from './hooks/useStepper';
import Welcome from './components/pages/Welcome';
import CreateWorkspace from './components/pages/CreateWorkspace';
import Plan from './components/pages/Plan';
import Finish from './components/pages/Finish';
import Stepper from './components/widget/Stepper';
import Header from './components/header';

const App: React.FC<{}> = () => {
  const navigate = useNavigate();

  const [search] = useSearchParams();

  const queryParams = search.get('step');

  const render = (query: string) => {
    switch (query) {
      case '1':
        return <Welcome />;
      case '2':
        return <CreateWorkspace />;
      case '3':
        return <Plan />;
      case '4':
        return <Finish />;
      default:
        return <Welcome />;
    }
  };

  useEffect(() => {
    console.log(navigate);
  }, [navigate]);

  return (
    <div className="lg:w-[450px] w-full px-4 flex items-center justify-center flex-col mx-auto mt-3 lg:px-0">
      <Header />
      {render(queryParams as string)}
    </div>
  );
};

export default App;
