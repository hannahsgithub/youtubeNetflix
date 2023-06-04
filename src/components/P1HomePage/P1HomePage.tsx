import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { GroupIcon } from './GroupIcon';
import classes from './P1HomePage.module.css';
import { PlayButton } from './PlayButton/PlayButton';
import { YoutubeLogo } from './YoutubeLogo/YoutubeLogo';

interface Props {
  className?: string;
}
/* @figmaId 13:412 */
export const P1HomePage: FC<Props> = memo(function P1HomePage(props = {}) {
  return (
    <div className={`${resets.programResets} ${classes.root}`}>
      <div className={classes.searchBar}>
        <div className={classes.searchBarContent}>
          <div className={classes.search}>Search</div>
          <div className={classes.oval}></div>
        </div>
      </div>
      <YoutubeLogo
        className={classes.youtubeLogo}
        classes={{ group: classes.group }}
        swap={{
          group: (
            <div className={classes.group}>
              <GroupIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <PlayButton className={classes.playButton} />
      <div className={classes._subtitle}>#1 Trending in Canada </div>
      <div className={classes.title}>
        <div className={classes.textBlock}>SPIDER-MAN: ACROSS THE SPIDER-VERSE</div>
        <div className={classes.textBlock2}>Official Trailer #2 </div>
      </div>
    </div>
  );
});
