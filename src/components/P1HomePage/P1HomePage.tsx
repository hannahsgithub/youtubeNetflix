import { useEffect, useState } from 'react';
import { memo } from 'react';
import type { FC } from 'react';
import axios from 'axios';

import resets from '../_resets.module.css';
import { GroupIcon } from './GroupIcon';
import classes from './P1HomePage.module.css';
import { PlayButton } from './PlayButton/PlayButton';
import { YoutubeLogo } from './YoutubeLogo/YoutubeLogo';

interface Props {
  className?: string;
}

interface Video {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  videoId?: string; // Add videoId property
}

export const P1HomePage: FC<Props> = memo(function P1HomePage(props = {}) {
  const [shrinkTitle, setShrinkTitle] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]); // Update the videos state

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=l-wUKu_V2Lk,l96IgQmXmhM,GPitD0-mkYA,MokxwHbscQ8,vUyC3ohm1pI,My58IZsDVbM,XGayDJEqbQA,Etv-L2JKCWk&key=AIzaSyC5AoCQ8G9bTkFYFg5ukfINjZg1s9EgUqY`
        );
        const videoData = response.data.items;

        const fetchedVideos = videoData.map((item: any) => ({
          title: item.snippet.title,
          thumbnailUrl: item.snippet.thumbnails.maxres.url,
          videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
          videoId: item.id, // Set the videoId property
        }));

        setVideos(fetchedVideos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShrinkTitle(true);
    }, 3000);

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
      <div className={classes.carousel}>
        <div className={classes.carouselVideos}>
          {videos.map((video, index) => (
            <div className={classes.carouselVideo} key={index}>
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnailUrl} alt={video.title} className={classes.videoThumbnail} />
              </a>
              <div className={classes.videoTitleWrapper}>
                <div className={classes.videoTitle}>{video.title}</div>
              </div>
            </div>
          ))}
        </div>
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