import styled from 'styled-components'

export const Container = styled.div`
    margin-top:30px ;
    display:flex; ;
    justify-content: space-evenly;
    width: 90%;
    margin: 30px auto;
    flex-wrap: wrap;
    
`
export const Content = styled.div`
    display: flex;
    flex-direction:column ;
    width:300px ;
    height:300px ;
    background-color: grey ;
    border-radius:6px ;

    button{
        height:28px ;
        border-radius:8px ;
        border:none ;
        background-color:#212125 ;
       
    }
    div{
        display: flex;
        padding: 10px;
        flex-direction: column;
    }
    h3{
        margin: 5px 0;
    }
    span{
        margin-bottom:5px ;
    }
`