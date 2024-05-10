import React from 'react';

interface IconProps {
    src: string;
    alt: string;
    height: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, height }) => {
    return <img src={src} alt={alt} height={height}/>;
};

export default Icon;