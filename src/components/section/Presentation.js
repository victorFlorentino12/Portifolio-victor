import styles from '../styles/Presentation.module.css'
import ButtonA from '../elements/ButtonA';
import { useEffect, useState } from 'react';

function Presentation(){

    const [text, setText] = useState('');
    const rotate = ['Victor Florentino', 'Desenvolvedor Front-end'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

   useEffect(()=>{
    const ticker = setInterval(()=>{
        toType()
    }, delta)
    return ()=>{clearInterval(ticker)}
   },[text]) 

   const toType = ()=>{
        let i = loop % rotate.length
        let fullText = rotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText)

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);

        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div id='presetation' className={styles.presentation}>
            <h3><strong>Bem-vindo ao meu Portfólio</strong></h3>
            <h1>Olá, eu sou {text}</h1>
            <p> Olá, meu nome é Victor Florentino e sou um programador front-end.  Tenho experiência em desenvolvimento web utilizando HTML, CSS, JavaScript, React.js e Vue.js. Sou apaixonado por criar interfaces intuitivas e atraentes, buscando sempre proporcionar a melhor experiência para os usuários.Ao longo da minha carreira, tenho trabalhado em projetos desafiadores, aplicando as melhores práticas e acompanhando as últimas tendências do mercado. Estou sempre em busca de novos conhecimentos e aprendizados para  aprimorar minhas habilidades. Se você está procurando um profissional dedicado para o seu  projeto, estou aqui para ajudar. Vamos criar algo incrível juntos!</p>
            <ButtonA text='Conecte-se comigo!!' link="https://www.linkedin.com/in/victor-florentino-06a462196/"/>
           
        </div>
    )
}
export default Presentation;