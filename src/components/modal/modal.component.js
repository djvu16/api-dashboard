//import components


//import styles
import CustomButton from '../custom-button/custom-button.component';
import './modal.styles.scss';


const Modal = (props)=>{
   const {title,message}=props;

   return <div className="modal">
       <header>
           <h3>{title}</h3>
       </header>
       <section>
           <div className="content">
                <p>{message}</p>
           </div>
       </section>
       <footer>
           <CustomButton> 
           OK
           </CustomButton>
       </footer>
   </div>
}

export default Modal;