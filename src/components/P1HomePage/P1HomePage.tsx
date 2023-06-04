import { useEffect, useState } from 'react';
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

export const P1HomePage: FC<Props> = memo(function P1HomePage(props = {}) {
  const [shrinkTitle, setShrinkTitle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShrinkTitle(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${resets.programResets} ${classes.root}`}>
      <div className={classes.videoContainer}>
        <iframe
          className={classes.youtubeVideo}
          src="https://www.youtube.com/embed/shW9i6k8cB0?autoplay=1&loop=1&playlist=shW9i6k8cB0&mute=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <div className={classes.searchBar}>
        <div className={classes.searchBarContent}>
          <input type="text" className={classes.search} placeholder="Search" />
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
      <a href="https://www.youtube.com/watch?v=shW9i6k8cB0&t=3s&ab_channel=SonyPicturesEntertainment" target="_blank" rel="noopener noreferrer">
        <PlayButton className={classes.playButton} />
      </a>
      <div className={`${classes._subtitle} ${shrinkTitle ? classes.shrink : ''}`}>
        #1 Trending in Canada
      </div>
      <div className={`${classes.title} ${shrinkTitle ? classes.shrink : ''}`}>
        <div className={`${classes.textBlock} ${shrinkTitle ? classes.shrink : ''}`} style={{ fontSize: shrinkTitle ? '14px' : '48px' }}>
          SPIDER-MAN: ACROSS THE SPIDER-VERSE
        </div>
        <div className={`${classes.textBlock2} ${shrinkTitle ? classes.shrink : ''}`}>Official Trailer #2</div>
      </div>
    </div>
  );
});
