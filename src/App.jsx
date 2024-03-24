import './App.css'

// style-components
import { Header, Main, QuemSomos, NossosServicos, Beneficios, Faqs, Footer } from './styles/styles';

import { Li, ButtonSaberMais, TextBeneficios, FooterTop, FooterBottom} from './styles/styleComponents';

// imagens
import logo from './assets/logo.png'
import imgmain from './assets/imgmain.png'
import imgQuemSomos from './assets/imgQuemSomos.png'
import starbucks from './assets/starbucks.png'
import linkbio from './assets/linknabio.png'
import uxui from './assets/UXUI.png'
import imgBeneficios from './assets/imgbeneficios.png'
import imgFaqs from './assets/imgFaqs.png'

// Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope,FaPhoneAlt, FaInstagram, FaFacebook, FaLinkedin, FaAngleRight} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";


import Cards from './components/Cards'
import TopicosBeneficios from './components/TopicosBeneficios'
import FAQs from './components/FAQs'

function App() {

  return (
    <>
      <Header>
        <div>
            <img src={logo} alt="Logo " />
            <h1>ByteFlow</h1>
        </div>
        <nav>
            <ul>
                <Li><a href="#">Início</a></Li>
                <Li><a href="#">Sobre</a></Li>
                <Li><a href="#">Serviços</a></Li>
                <Li><a href="#">Beneficios</a></Li>
                <Li><a href="#">Dúvidas</a></Li>
                <Li licontato={`background-color: #13204C;
                          width: 140px;
                          height: 40px;
                          border-radius: 20px;
                          text-align: center;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          font-size: 20px;`}
                    acontato="display: flex;
                          align-items: center;
                          color: white;
                          text-decoration: none;">
                    <a href="#">Contato  <FaAngleRight /> </a></Li>
            </ul>
            <button><FiMenu/></button>
        </nav>
      </Header>

      <Main>
        <section>
            <h2>
                Transforme sua visão em <br /> 
                <span>Realidade online</span> com a <br />
                ByteFlow
             </h2>
             <p>Design Web Excepcional e Desenvolvimento de Sites Sob Medida para o Seu Sucesso Online</p>
             <ButtonSaberMais>Saber Mais</ButtonSaberMais>
        </section>
        <img src={imgmain} alt="Imagem do Main" />
      </Main>

      <QuemSomos>
        <div>
            <h1>Quem <span>somos</span></h1>
            <hr />
            <p>A ByteFlow é sua parceira dedicada em criação de sites, design e marketing digital. Nosso compromisso é capacitar empresas a prosperar no ambiente digital em constante evolução. Adotamos uma abordagem colaborativa, focando na excelência e inovação constante. Na ByteFlow, transformamos suas visões em realidade online, oferecendo uma parceria que impulsiona o crescimento e o sucesso a longo prazo. Junte-se a nós para explorar o potencial ilimitado do mundo digital - estamos prontos para criar algo extraordinário juntos.</p>
        </div>
        <img src={imgQuemSomos} alt="imagem quem somos" />
      </QuemSomos>

      <NossosServicos>
        <h2>Nossos Serviços</h2>
        <hr />
        <div>

            <Cards card={"pLandingPage"}
            src={starbucks}
            title={"Landing Page"}
            paragrafo={"Tanto a criação de sites quanto a criação de landing pages são serviços importantes para estabelecer uma presença online eficaz e envolvente, bem como para alcançar objetivos de marketing específicos."}
            />

            <Cards card={"pLinkBio"}
            src={linkbio}
            title={"Link na Bio"}
            paragrafo={`O "link na bio" é uma maneira eficaz de direcionar o tráfego do Instagram para conteúdo externo e de apoiar estratégias de marketing e promoção.`}
            />

            <Cards card={"pUxUi"}
            src={uxui}
            title={"UI&UX Design"}
            paragrafo={"Criar interfaces intuitivas e atraentes que proporcionem uma experiência positiva aos usuários, aumentando a satisfação e a eficácia das soluções tecnológicas desde sites a aplicativos."}
            />

        </div>

        <h2>Tráfego Pago</h2>
        <hr />
        <p>O tráfego relacionado a anúncios online é importante para empresas que desejam aumentar a visibilidade de seus produtos ou serviços na internet e direcionar tráfego qualificado para seus sites ou aplicativos.</p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/c4DbXldEEhM?si=_kDA7h64Pnb9Q1HR" title="YouTube video player"></iframe>
        
      </NossosServicos>

      <Beneficios>
        <h1>Benefícios</h1>
        <hr />

        <div>
            <img src={imgBeneficios} alt="" />
            <TextBeneficios>
                <TopicosBeneficios 
                h3={1} h4={"Aumento nas Conversões"}
                p={"Nossos serviços são projetados para impulsionar as taxas de conversão, ajudando você a alcançar seus objetivos de negócios mais rapidamente."} 
                />

                <TopicosBeneficios 
                h3={2} h4={"Design Profissional"}
                p={"Garantimos que sua presença online e offline seja visualmente impressionante, transmitindo uma imagem de confiabilidade e profissionalismo."} 
                />

                <TopicosBeneficios 
                h3={3} h4={"Experiência de Usuário"}
                p={"Melhoramos a experiência do usuário em seus sites e aplicativos, o que resulta em maior satisfação do cliente e fidelização."} 
                />
                
            </TextBeneficios>

        </div>
      </Beneficios>

      <Faqs>
        <div>
            <h1>Dúvidas frequentes</h1>
            <hr />
            <FAQs pergunta={"Quanto preciso investir para adquirir os seviços?"}/>
            <FAQs pergunta={"Qual o prazo de entrega de um site, link ou design?"}/>
            <FAQs pergunta={"Tenho direito a alterações após a entrega?"}/>
            <FAQs pergunta={"Como funciona o serviço de tráfego pago?"}/>
        </div>
        <img src={imgFaqs} alt="" />
      </Faqs>

      <Footer>
        <FooterTop>
            <h2>Desperte para o digital</h2>
            <p>Transforme sua ideia no extraordinário. Conquiste o online conosco - sua visão, nossa realidade!</p>
            <ButtonSaberMais backgroundcolor="#6CC9B8" >Saber Mais</ButtonSaberMais>
            <hr/>
        </FooterTop>
        <FooterBottom>
          <div>
              <h3>Contatos</h3>
              <ul>
                <li><FaEnvelope/> byteflow30@gmail.com</li>
                <li><FaPhoneAlt/> 3334-9889</li>
                <li><FaLocationDot /> Cascavel - CE</li>
              </ul>
          </div>
          <div>
              <h3>Redes Sociais</h3>
              <ul>
                <li><FaInstagram /></li>
                <li><FaFacebook/></li>
                <li><FaLinkedin/></li>
              </ul>
          </div>
        </FooterBottom>
      </Footer>

    </>
  )
}

export default App
