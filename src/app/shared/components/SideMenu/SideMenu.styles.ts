import styled from "styled-components";

export const SideMenuWrapper = styled.div`
    background-color: #FFFFFF;
    padding: 50px 35px;
    display: flex;
    flex-direction: column;
`

export const Logo = styled.div`
    font-size: 0;
    margin-bottom: 50px;
`

export const Menu = styled.nav`
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