import styles from './Cards.module.css'
import ButtonB from './ButtonB'


function Cards({title, src_img, text, link, site}){

    return(
        
        <div className={styles.cards}>
            <a href={site} target='_blank'><img src={src_img}/></a>
            
                 <div className={styles.info}>          
                 <h2>{title}</h2>
                 <p><strong>Tecnologia: </strong>{text}</p>
                 <ButtonB text={'Acesse o repositório'} link={link}/>        
             </div>       
        </div>
    )
}
export default Cards;