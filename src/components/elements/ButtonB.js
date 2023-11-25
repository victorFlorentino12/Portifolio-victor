import styles from './ButtonB.module.css'

function ButtonB({text, link}){
    return(
    <div>
        <a href={link} target='_blank'><button className={styles.btn} target='_blank'>{text}</button></a>
        
    </div>
    )

}
export default ButtonB