import React from 'react';
import { colorBrandPrimary } from '@uiboost-tokens-course/tokens';

import Card from './card';
import Chip from './chip';
import { IMAGE_PLACEHOLDER_URL } from '../constants/placeholder';

const styles = {
  content: {
    padding: 8,
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  link: {
    display: 'block',
  },
  root: {
    height: 180,
  },
  title: {
    color: colorBrandPrimary,
    fontSize: 24,
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '30% auto',
    columnGap: 0,
    height: '100%',
    width: '100%',
  },
};

const MovieCard = ({ genres, image, officialSite, title }) => (
  <Card style={styles.root}>
    <div style={styles.wrapper}>
      <img
        style={styles.image}
        src={image?.original || IMAGE_PLACEHOLDER_URL}
        alt={title}
      />
      <div style={styles.content}>
        <h1 style={styles.title}>{title}</h1>
        {genres?.map((genre) => (
          <Chip key={genre}>{genre}</Chip>
        ))}
        {officialSite && (
          <a style={styles.link} href={officialSite}>
            Site
          </a>
        )}
      </div>
    </div>
  </Card>
);

export default MovieCard;
