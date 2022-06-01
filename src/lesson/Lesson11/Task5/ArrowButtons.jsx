import React from 'react';
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';
import { Button } from 'antd';

import useStyles from './style';

const ArrowButtons = ({ countPage, handlePage }) => {
  const classes = useStyles();

  return (
    <div className={classes.ArrowButtons}>
      <Button
        icon={< LeftCircleTwoTone className={classes.IconArrow} />}
        disabled={countPage === 0}
        shape="circle"
        type="primary"
        onClick={() => handlePage(countPage - 1)}
        className={classes.ButtonArrow}
      >
      </Button>
      <Button
        disabled={countPage >= 2}
        shape="circle"
        type="primary"
        onClick={() => handlePage(countPage + 1)}
        className={classes.ButtonArrow}
        icon={< RightCircleTwoTone className={classes.IconArrow} />}
      >
      </Button>
    </div>
  );
};

export default ArrowButtons;
