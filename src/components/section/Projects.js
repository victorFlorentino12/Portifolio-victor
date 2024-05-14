import ButtonA from "../elements/ButtonA";
import styles from '../styles/Projects.module.css'
import Cards from "../elements/Cards";
import img_agencia from '../../img/img_agencia.svg'
import img_arquitetura from '../../img/img_arquitetura.svg'
import img_dnc from '../../img/img_dnc.svg'
import img_e_commerce from '../../img/img_e-commerce.svg'
import img_ia from '../../img/img_ia.svg'
import img_task from '../../img/task.svg'

function Projects(){
    return(
        <div id="project" className={styles.projects}>
            <h1>Projetos</h1>
            <Cards src_img={img_e_commerce} title={'Projeto Magic-commerce'} text={'Projeto Front-and, tem como principais tecnologias o javaScript, HTML, CSS e Bootstrap. Onde foi feito um carrinho e um modal inteiramente com javaScript e integrado com uma IA'} link={'https://github.com/victorFlorentino12/e-commerce_harry'} site={'https://e-commerce-harry.netlify.app/store-hp/index.html'}/>
            <Cards src_img={img_dnc} title={'Projeto DNC'} text={'Projeto Front-and, tem como principais tecnologias o javaScript, HTML, CSS. Um projeto proposto pela Escola DNC trabalhando habilidades de design na página'} link={'https://github.com/victorFlorentino12/landing-page-DNC'} site={'https://ladding-page-dnc.netlify.app'}/>
            <Cards src_img={img_agencia} title={'Projeto Agência'} text={'Projeto Front-and, tem como principais tecnologias o javaScript, HTML, CSS. Um projeto com uso da biblioteca slider e totalmente responsivo proposto pela Danki code'} link={'https://github.com/victorFlorentino12/victorFlorentino12-agencia'} site={'https://agencia-bold1.netlify.app/'}/>
            <Cards src_img={img_ia} title={'Projeto IA'} text={'Projeto Front-and, principais tecnologias o javaScript, HTML, CSS e Teachable Machine. Um Projeto que Treina e integra uma IA de reconhecimento facial a uma página Web'} link={'https://github.com/victorFlorentino12/e-commerce_harry/tree/main/site-selecao-das-casas1'} site={'https://e-commerce-harry.netlify.app/site-selecao-das-casas1/'}/>
            <Cards src_img={img_arquitetura} title={'Projeto Arquitetura'} text={'Projeto Front-and, tem como principais tecnologias o javaScript, HTML, CSS e Sheet Monkey. Um Para uma empresa de arquitetura com Planilha Excel Integrada com Formulário '} link={'https://github.com/victorFlorentino12/lannding-page-arquitetura'} site={'https://arquitetura-victor.netlify.app/'}/>
            <Cards src_img={img_task} title={'Task List'} text={'Projeto Front-end de uma lista de tarefas criada com React.js, SCSS, Usando Style Components'} link={'https://github.com/victorFlorentino12/victor_task_list'} site={'https://victor-task-list.vercel.app/'}/>
            <ButtonA text={'Conheça o Portifólio Completo'} link={'https://github.com/victorFlorentino12'}/>
       </div>
    )
}
export default Projects;