import React, { useEffect, useState, memo } from 'react';
import { useSelector } from 'react-redux';

import { getArray, getSize } from '../../redux/app/selectors';
import { StyledVisualization, StyledVisualizationItem } from './StyledVisualization';

const Visualization: React.FC = () => {
    const size = useSelector(getSize);
    const values = useSelector(getArray);
    const [height, setHeight] = useState(300);

    useEffect(() => {
        const handleResize = () => {
            const isMobileView = window.innerWidth < 600;
            setHeight(Math.min(window.innerHeight - (isMobileView ? 200 : 150), 600));
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <StyledVisualization>
            {values.map((value) => {
                let backgroundColor = 'rgba(66, 134, 244, 0.8)';
                if (value.isSorted) {
                    backgroundColor = '#008000';
                } else if(value.isCurrentlySorted) {
                    backgroundColor = 'rgba(169, 92, 232, 0.8)';
                }

                return (
                    <StyledVisualizationItem
                        style={{
                            width: `${100 / size}%`,
                            height: `${(height / 100) * value.number}px`,
                            backgroundColor,
                        }}
                        key={value.key}
                    />
                );
            })}
        </StyledVisualization>
    );
};

export default memo(Visualization);
