import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const BookNow = styled(Link)`
    background: #214448;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big}) => big ? '16px 40px' : '14px 24px'};
    color: ${({ primary }) => (primary ? '#fff' : '#000')};
    font-size: ${({ big}) => big ? '20px' : '14px'};
    font-weight: bold;
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 9999;

    &:hover{
        transform: translateY(-2px);
        color: ${({ primary }) => (primary ? '#fff' : '#fff')};
        background: #000;
    }
`