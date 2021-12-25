import { useState, useEffect, useCallback } from 'react';

interface deviceSizeType {
    tablet: number;
    mobile: number;
}

const deviceSize: deviceSizeType = {
    tablet: 768,
    mobile: 576,
};

function useMedia(): string {
    const [device, setDevice] = useState<string>('PC');
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleWindowWidth = useCallback((): void => {
        setWindowWidth(window.innerWidth);
    }, [setWindowWidth]);

    useEffect(() => {
        window.addEventListener('resize', handleWindowWidth);
        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        };
    }, []);

    useEffect(() => {
        const { tablet, mobile } = deviceSize;
        if (windowWidth > tablet && device !== 'PC') setDevice('PC');
        else if (windowWidth <= tablet && windowWidth > 576 && device !== 'tablet')
            setDevice('tablet');
        else if (windowWidth <= mobile && device !== 'mobile') setDevice('mobile');
    }, [windowWidth, device]);

    return device;
}

export default useMedia;
