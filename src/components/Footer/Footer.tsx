import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
`;

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <StyledFooter>
            <p>&copy; {currentYear} Moveo Skills. All rights reserved.</p>
        </StyledFooter>
    );
};

export default Footer;
