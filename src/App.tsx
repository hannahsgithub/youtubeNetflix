import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { P1HomePage } from './components/P1HomePage/P1HomePage';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.programResets} ${classes.root}`}>
      <P1HomePage />
    </div>
  );
});
