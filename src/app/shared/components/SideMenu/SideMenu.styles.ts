import styled from "styled-components";

type Props = {
    isOpen: boolean
}

export const SideMenuWrapper = styled.div<Props>`
    background-color: #FFFFFF;
    padding: 50px 35px;
    display: flex;
    flex-direction: column;

    @media (max-width: 980px) {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        background-color: ${(props) => props.isOpen ? '#FFFFFF' : '#FF6C22'};
        cursor: pointer;
        padding: ${(props) => props.isOpen ? '50px 10px' : '0'};
        min-width: ${(props) => props.isOpen ? '280px' : '80px'};
        box-shadow: 0px 0px 18px -1px rgba(0,0,0,0.3);
        z-index: 1;
    }
`

export const Logo = styled.div<Props>`
    font-size: 0;
    margin-bottom: 50px;

    @media (max-width: 980px) {
        display: ${(props) => props.isOpen ? 'block' : 'none'};
    }
`

export const Menu = styled.nav<Props>`
    @media (max-width: 980px) {
        display: ${(props) => props.isOpen ? 'block' : 'none'};
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 13px;

        li {
            line-height: 26px;
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;

            svg {
                position: absolute;
                left: 16px;
                width: 17px;
            }

            a {
                display: flex;
                padding: 16px 40px;
                align-items: center;
                width: 100%;
                max-width: 100%;
                font-family: 'Advent Pro', sans-serif;
                font-weight: 600;
            }
        }
    }
`