import React from 'react';
import Button from '@material-ui/core/Button';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

import './index.scss';

export default () => {
    // const [points, setPoints] = useGlobalState('points');

    return (
        <div className="navigation-container">
            <div onClick={{}
                // () => setPoints(points - 1)
                }>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Add comment
      </Button>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<ThreeSixtyIcon />}
                >
                    Next video
      </Button>
            </div>

        </div>
    )
}