import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import styles from "../styles/Footer.module.css"


function Footer(){
    return(
        <div className={styles.div_footer}>
           <ul>
                <li><a href='https://www.instagram.com/victorflorentino52/'><FaInstagram className={styles.icon}/></a></li>
                <li><a href='https://github.com/victorFlorentino12'><AiFillGithub className={styles.icon}/></a></li>
                <li><a href='https://www.linkedin.com/in/victor-florentino-06a462196/'><GrLinkedin className={styles.icon}/></a></li>
           </ul>
           <p>victor.florentino.almeida@gmail.com</p>
           <p>Victor Florentino @ 2023</p>
        </div>
    )
}
export default Footer;
