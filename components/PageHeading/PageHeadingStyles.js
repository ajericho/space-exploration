import styled from 'styled-components'

export const PageHeadingStyle = styled.h5`
    color:${props => props.theme.white};
    font-weight:400;

    @media (max-width: ${props => props.theme.device.mobile}) {
        text-align:center;

        }

    .number {
        opacity:.25;
        margin-right:20px;
    }

`
