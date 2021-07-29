import { useEffect, useState } from 'react';

export const useIsImgLoaded = (src: string) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const img = new Image();
        const handler = () => setIsLoaded(true);
        img.src = src;
        img.addEventListener('load', handler, false);

        return () => img.removeEventListener('load', handler);
    }, [src]);
    return isLoaded;
};
