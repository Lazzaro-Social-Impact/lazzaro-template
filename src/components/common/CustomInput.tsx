import styled from 'styled-components'

export const CustomInput = styled.input`
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    align-self: flex-start;
    box-shadow: ${({ theme }) => theme.primary};
    box-sizing: border-box !important;
    font-family: inherit;
    overflow: visible;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    min-width: 0;
    padding: 9.5px 11px;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all .3s;
    -webkit-appearance: none;
    touch-action: manipulation;
    text-overflow: ellipsis;
    width: 100%;

    &:focus {
        outline: none;
        box-shadow: ${({ theme }) => theme.primary} 0 0 0 2px;
    }

`

// used when there is an error and the input is inside a flex container
export const CustomInputDiv = styled.div`
display: flex;
flex-direction: column;
gap: 0;
width: 100%;

`