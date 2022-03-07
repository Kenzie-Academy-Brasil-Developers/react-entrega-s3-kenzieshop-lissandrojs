import styled from 'styled-components'


export const Container = styled.div` 
    display: flex;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #6a6767;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

`
export const Content = styled.div`
    display:flex ;


`

export const IconHeader = styled.div`
    margin-right:25px ;
    display: flex;
    svg{
        margin-right:8px ;
    }
    
    span{
        background-color: blue;
    height: 16px;
    border-radius: 100%;
    width: 17px;
    text-align: center;
    position: relative;
    bottom: 6px;
    right: 14px;
    }

`