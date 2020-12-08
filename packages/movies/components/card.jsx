import React from 'react';
import {
  borderRadiusMedium,
  colorShapeBackground,
  colorShapeBorder,
} from '@uiboost-tokens-course/tokens';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    backgroundColor: colorShapeBackground,
    border: '1px solid',
    borderColor: colorShapeBorder,
    borderRadius: borderRadiusMedium,

    width: '100%',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  },
};

const Card = ({ children, style }) => (
  <div style={{ ...style, ...styles.card }}>{children}</div>
);

export default Card;
