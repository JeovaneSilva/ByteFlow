import styled from 'styled-components'

export const Header = styled.header`
    width: 100vw;
    height: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: -4px 4px 8px 0px #00000040;

    div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  
  div img{
    width: 68px;
    height: 75px;
    margin-left: 4rem;
  }

  div h1{
    font-family: 'RacingSansOne-Regular';
    font-size: 36px;
    font-weight: 400;
  }

  nav{
    margin-right: 4rem;
    font-family: "Poppins-SemiBold";
    font-size: 20px;
  }
  
  nav ul{
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  button{
    display: none;
  }

  @media(max-width:1100px){
      height: 65px;

    div{
      gap: 5px;
    }

    div img{
      width: 30px;
      height: 37px;
      margin-left: 1.5rem;
    }

    div h1{
      font-size: 20px;
    }

    nav{
      margin-right: 1.5rem;
    }

    nav ul{
    display: none;
    }

    button{
      display: block;
      background-color: transparent;
      border: none;
    }

    svg{
      font-size: 30px;
    }
  }

  `

export const Main = styled.main`
    width: 100vw;
    display: flex;
    justify-content: space-between;


    section{
        margin: 6rem 0 4rem 4rem;
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
    }

    h2{
        font-family: "Poppins-ExtraBold";
        font-size: 40px;
    }

    span{
        color: #6CC9B8;
    }

    p{
        max-width: 600px;
        font-family: "Poppins-Regular";
        font-size: 20px;
        color: #13204C;
    }

    img{
        margin: 3rem 0; 
        width: 700px;
        height: 415.75px;
    }

    @media (max-width:1210px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
    

    section{
        margin: 54px 0 42px 0;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    h2{
      font-size: 24px;
    }

    p{
      font-size: 16px;
      width: 250px;
    }

    img{
      width: 360px;
      height: 210px;
      margin: 0;
    }
  }
`

export const QuemSomos = styled.section`
    width: 100vw;
    background-color: #13204C;
    display: flex;
    justify-content: space-between;

    div{
        margin: 7rem 0 4rem 6rem;
    }

    h1{
        font-family: "Poppins-Regular";
        font-weight: 400;
        font-size: 40px;
        color: white;
        margin-bottom: 10px;
    }

    hr{
        border-style: solid;
        border-color: #6CC9B8;
        border-width: 3px 0 0 0;
        width: 95px;
        position: absolute;
    }

    span{
        font-family: "Poppins-SemiBold";
        font-weight: 600;
    }


    p{
        font-family: "Poppins-SemiBold";
        font-weight: 600;
        font-size: 20px;
        margin-top: 4rem;
        max-width: 431px;
        color: white;
        text-align: left;
        line-height: 30px;
    }

    img{
        margin: 4rem 5rem 4rem 0;
        width: 600px;
        height: 621.71px;
        border-radius: 50px; 
    }

    @media (max-width:1250px){
      flex-direction: column;
      justify-content: center;
      align-items: center;

      div{
        margin: 36px 0 100px 0;
      }
    
      h1{
        font-size: 25px;
      }

      hr{
        width: 60px;
      }

      p{
        font-size: 14px;
        width: 320px;
        line-height: 21px;
      }

      img{
        display: none;
      }
    }

`

export const NossosServicos = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   > div{
        width: 100vw;
        height: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
    }

    h2{
        font-family: "Poppins-SemiBold";
        font-weight: 600;
        font-size: 40px;
        color: #13204C;
        text-align: center;
        padding: 3rem 0 1rem 0;
    }

    hr{
        border-style: solid;
        border-color: #6CC9B8;
        border-width: 2px 0 0 0;
        width: 400px;
        padding-bottom: 2rem;
    }

    > p{
        width: 1225px;
        font-family: "Poppins-Regular";
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        color: #13204C;
        padding-bottom: 3rem;
    }

    iframe{
        border-radius: 20px;
        margin-bottom: 6rem;
        box-shadow: 3px 3px 20px 2px #00000040;
    }

    @media (max-width:1250px){
      > div{
        flex-direction: column;
        height: 1100px;
      }

      h2{
        font-size: 32px;
        padding-top: 38px;
      }

      hr{
        width: 300px;
        padding: 0;
      }

      > p{
        width: 240px;
        font-size: 15px;
        padding-top: 26px;
      }

      iframe{
        width: 317px;
        height: 210px;
        margin-bottom: 43px;
        border: 1px solid #6CC9B8
      }
    }
`

export const Beneficios = styled.section`
    width: 100vw;
    background-color: #13204C;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;

  h1{
    padding: 25px 0 15px 0;
    font-family: "Poppins-semibold";
    font-size: 40px;
    color: white;
}

  hr{
    border-style: solid;
    border-color: #6CC9B8;
    border-width: 2px 0 0 0;
    width: 400px;
    padding-bottom: 3rem;
}


> div{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

img{
    width: 632px;
    height: 582px;
    border-radius: 40px;
    margin-left: 70px;
}

@media (max-width:1250px){
  padding-bottom: 30px;

  > div{
    justify-content: center;
    align-items: center;
  }

  img{
    display: none;
  }

  h1{
    padding: 25px 0 15px 0;
    font-size: 32px;
  }

  hr{
    width: 300px;
    padding-bottom: 20px;
  }

}


`

export const Faqs = styled.section`
    width: 100vw;
    display: flex;
    justify-content: space-between;


> div{
    width: 540px;
    margin-bottom: 50px;
}

h1{
    font-family: "Poppins-Regular";
    font-size: 40px;
    font-weight: 400;
    color: #13204C;
    margin: 90px 0 10px 96px;
}

hr{
    border-style: solid;
    border-color: #6CC9B8;
    border-width: 3px 0 0 0;
    width: 95px;
    margin: 0 0 62px 96px;
}

img{
    width: 650px;
    height: 520px;
    margin: 128px 93px 0 0;
}

@media (max-width:1250px){
  justify-content: center;
  align-items: center;

  > div{
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  }

  h1{
    font-size: 25px;
    margin: 30px 0 10px 0;
    width: 320px;
  }

  hr{
    width: 60px;
    margin: 0 260px 35px 0;
  }

  img{
    display: none;
  }
}
`

export const Footer = styled.footer`
    width: 100vw;
    background-color: #13204C;
    display: flex;
    flex-direction: column;
    align-items: center;
`


