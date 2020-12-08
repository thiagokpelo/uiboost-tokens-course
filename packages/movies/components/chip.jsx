import React from 'react';
import { borderRadiusPill } from '@uiboost-tokens-course/tokens';

const styles = {
  chip: {
    display: 'inline-flex',
    margin: '4px 0',
    marginRight: 8,
    padding: '4px 12px',
    backgroundColor: '#aaa',
    color: '#fff',
    fontSize: 10,
    lineHeight: 'auto',
    borderRadius: borderRadiusPill,
  },
};

const Chip = ({ children }) => <span style={styles.chip}>{children}</span>;

export default Chip;
