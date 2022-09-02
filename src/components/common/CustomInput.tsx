import styled from 'styled-components'

export function CustomComponent(component: any) {
  return styled(component)`
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
    -webkit-appearance: none;
    touch-action: manipulation;
    text-overflow: ellipsis;
    width: 100%;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    resize: none;

    &:focus {
        outline: none;
        box-shadow: ${({ theme }) => theme.primary} 0 0 0 2px;
    }
    
    `
}
export const CustomInput = CustomComponent('input')
export const CustomTextArea = CustomComponent('textarea')

// used when there is an error and the input is inside a flex container
export const CustomInputDiv = styled.div`
display: flex;
flex-direction: column;
gap: 0;
align-items: flex-start;
width: 100%;

`
