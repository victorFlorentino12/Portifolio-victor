import img_js from '../../img/img_js.svg'
import img_html from '../../img/img_html.svg'
import img_css from '../../img/img_css.svg'
import img_react from '../../img/img_react.svg'
import img_vue from '../../img/img_vue.png'
import styles from '../styles/Skills.module.css'

function Skills(){
    return(
        <div id="skills" className={styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div className={styles.image}>
                <img src={img_js}/>
                <img src={img_html}/>
                <img src={img_css}/>
                <img src={img_react}/>
                <img src={img_vue}/>
            </div>
        </div>
    )
}
export default Skills;