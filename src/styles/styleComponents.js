import styled from 'styled-components'

export const Li = styled.li`
    list-style-type: none;
    ${({ licontato }) => licontato && licontato}

    a {
        ${(props) => props.acontato ? props.acontato : "text-decoration: none; color: #13204C;"} 
    }
  
  svg{
        font-size: 25px;
    }

`

export const ButtonSaberMais = styled.button`
    background-color: ${(props) => props.backgroundcolor ?  "#6CC9B8" : "#13204C"};
    width: 185px;
    height: 75.29px;
    border-radius: 40px; 
    border: none;
    font-family: "Poppins-SemiBold";
    font-size: 20px;
    color: white;

    @media (max-width:1210px){
        width: 150px;
        height: 50px;
        font-size: 15px;
    }
`

export const DivCards = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        height: 470px;
        border-radius: 30px;
        box-shadow: 3px 3px 20px 2px #00000040;
        
    h3{
        padding: 15px 0 10px 0;
        font-family: "Poppins-SemiBold";
        font-weight: 600;
        font-size: 24px;
        color: #13204C;
    }

    p{
        font-family: "Poppins-Regular";
        font-weight: bold;
        font-size: 13px;
        text-align: center;
        padding-bottom: 20px;
        width: ${(props) => {
            if(props.card == "pLandingPage"){
                return "350px"
            }else if(props.card == "pLinkBio"){
               return "323px"
            }else{
                return "355px"
            }
        }};
    }

    img{
        width: 400px;
        height: 258px;
    }

    @media (max-width:1250px){
        width: 287.66px;
        height: 338px;

        h3{
            font-size: 18px;
            padding: 7px 0;
        }

        p{
            font-size: 9px;
            padding-bottom: 13px;
            width: ${(props) => {
                if(props.card == "pLandingPage"){
                    return "251.7px"
                }else if(props.card == "pLinkBio"){
                    return "222px"
                }else{
                    return "249px"
                }
            }};
        }

        img{
            width: 288.38px;
            height: 185.54px;
        }
    }
`

export const TopicosBen = styled.div`
    display: flex;
    width: 600px;
    height: 192px;
    justify-content: center;
    align-items: center;
    gap: 20px;


h3{
    font-family: "Poppins-semibold";
    font-size: 128px;
    color: #6CC9B8;
}

div:first-child{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 192px;
}

div:last-child{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
}

h4{
    font-family: "Poppins-semibold";
    font-size: 32px;
    color: white;
}

p{
    font-family: "Poppins-semibold";
    font-size: 16px;
    color: white;
    width: 450px;
    padding-bottom: 20px;
}

    @media (max-width:1250px){
        height: 120px;
        width: 330px;
        gap: 10px;

        div:first-child{
            height: 120px;
        }

        div:last-child{
            width: 284px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
        }   

        h3{
            font-size: 80px;
            height: 120px;
            overflow-y: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        h4{
            font-size: 18px;
            padding-bottom: 3px;
        }

        p{
            font-size: 8px;
            width: 246px;
            padding-bottom: 10px;
        }
    }
`

export const TextBeneficios = styled.div`
    padding-right: 50px;

    @media (max-width:1250px){
        padding: 0;
    }

`

export const BtnAcessarProjeto = styled.button`
    width: 220px;
    height: 35px;
    border-radius: 40px;   
    border: none;
    background-color: #13204C;
    color: white;
    font-family: "Poppins-SemiBold";
    font-size: 13px;

    @media (max-width:1250px){
        width: 157.85px;
        height: 25.11px;
        border-radius: 30px;
        font-size: 10px;
    }
`

export const FAQ = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 446px;
    height: 80px;
    border-radius: 40px;
    border: 1px solid #6CC9B8;
    box-shadow: 3px 3px 20px 0px #00000040;
    margin:0 0 30px 70px;

p {
    width: 285px;
    font-family: "Poppins-Regular";
    font-size: 20px;
    color: #13204C;
    padding-left: 26px;
}

svg{
    font-size: 33px;
    padding-right: 24px;
}

@media (max-width:1250px){
        width: 320px;
        height: 61px;
        border-radius: 30px;
        margin:0 0 19px 0;
    }

    p{
        width: 260px;
        padding-left: 20px;
        font-size: 12px;
    }

    svg{
        font-size: 30px;
        padding-right: 20px;
    }
`

export const FooterTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


h2{
    font-family: "Poppins-Bold";
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin: 37px 0 15px 0;
}

p{
    font-family: "Poppins-Medium";
    font-size: 24px;
    width: 810px;
    color: #F2F2F2;
    margin-bottom: 28px;
    text-align: center;
}

hr{
    width: 1243.03px;
    margin: 48px 0 31px 0;
    border: 1px solid #FFFFFF
}

@media (max-width:1250px){

    h2{
        font-size: 20px;
        margin: 23px 0 5px 0;
    }

    p{
        font-size: 10px;
        width: 338px;
        margin-bottom: 15px;
    }

    hr{
        width: 300px;
        margin: 25px 0 15px 0;
    }
}

`

export const FooterBottom = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 40px;

    h3{
        font-family: "Poppins-Medium";
        font-weight: 500;
        font-size: 24px;
        color: white;
        line-height: 36px;
        margin-bottom: 8px;
    }

    div:first-child ul  li{
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: "Poppins-Medium";
        font-weight: 500;
        font-size: 16px;
        list-style-type: none;
        color: white;
        margin-bottom: 10px;
    }

    div:first-child ul  li svg{
        font-size: 21px;
    }
    
    div:last-child ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div:last-child ul  li svg{
        font-size: 28px;
        color: white;
    }

    @media (max-width:1250px){
        justify-content: center;
        gap: 35px;

        h3{
            font-size: 18px;
        }

        div:first-child ul  li{
        gap: 8px;
        font-size: 10px;
        margin-bottom: 10px;
    }

    div:first-child ul  li svg{
        font-size: 15px;
    }

    div:last-child ul  li svg{
        font-size: 20px;
    }
    }
`