import styled from "styled-components";

type Props = {
    bgColor: string
}

export const WrapperMain = styled.main<Props>`
    min-height: 100vh;
    max-height: 100%;
    background-color: ${(props) => props.bgColor};

    display: flex;
    justify-content: center;
`