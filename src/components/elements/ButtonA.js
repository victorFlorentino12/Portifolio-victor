import styles from './ButtonA.module.css'

function ButtonA({text, link}){
    return(
    <div>
        <a href={link} target='_blank'><button className={styles.btn} >{text}</button></a>
        
    </div>
    )

}
export default ButtonA