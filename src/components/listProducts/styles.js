import styled from 'styled-components'

export const Container = styled.div`
        margin-top:40px ;
        display:flex ;
        flex-direction:column ;
        justify-content:space-evenly ;
        align-items: center;
        img{
        width:275px ;
        height:200px ;
        border-radius:6px ;
    }
    @media (min-width:768px){
       img{ width:290px ;}
       flex-direction:row ;
    }
    @media (max-width:300px){
        img{width: 260px;}
    }

`
export const ContentList = styled.div`
    width:370px ;
    background-color:grey ;
    border-radius:6px ;
    
    section{
        
        padding:15px ;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    p{
        font-weight:bold ;
    }
    @media (min-width:768px){
        width:700px ;
        
    }
    @media (max-width:300px){
        width:275px ;
        
    }

`

export const ContentTotal = styled.div`
        width: 350px ;
        height:200px ;
        margin-left:10px ;
        background-color:grey ;
        border-radius:6px ;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding:10px ;
        margin-top:20px ;
            div{
                display:flex ;
                justify-content: space-between;
                margin: 20px;
            }
            h2{
                margin-bottom:15px ;
                margin-top:10px ;
            }
            button{
                margin-top:10px ;
            height:20px ;
            border-radius:8px ;
            border:none ;
            background-color:#212125 ;     
             }
             @media (min-width:768px){
                margin-top:0px ;
                 } 
                 @media (max-width:300px){
                    width:270px ;
                }
`
export const TitleCard = styled.div`
    height:30px ;
    display:flex ;
    align-items: center;
    justify-content: space-between;
    padding:15px ;
    border-bottom: 1px solid #212125;

`