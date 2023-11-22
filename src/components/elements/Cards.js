import styles from './Cards.module.css'
import ButtonB from './ButtonB'



function Cards({title, src_img, text, link}){
    return(
        <div className={styles.cards}>
            <img src={src_img}/>
            <div className={styles.info}>
                <h2>{title}</h2>
                <p><strong>Tecnologia: </strong>{text}</p>
                <ButtonB text={'Acesse o repositório'} link={link}/>
            </div>
          
        </div>
    )
}
export default Cards;