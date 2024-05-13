import React from 'react';
import { StyledFooter } from './styles';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <StyledFooter>
            <p>&copy; {currentYear} Moveo Skills. All rights reserved.</p>
        </StyledFooter>
    );
};

export default Footer;
