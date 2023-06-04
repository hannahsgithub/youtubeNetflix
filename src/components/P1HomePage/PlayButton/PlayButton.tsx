import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './PlayButton.module.css';
import { Polygon1Icon } from './Polygon1Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 10:1713 */
export const PlayButton: FC<Props> = memo(function PlayButton(props = {}) {
  return (
    <div className={`${resets.programResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle6}></div>
      <div className={classes.polygon1}>
        <Polygon1Icon className={classes.icon} />
      </div>
      <div className={classes.watch}>Watch</div>
    </div>
  );
});
