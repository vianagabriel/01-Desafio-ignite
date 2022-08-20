import { useState } from 'react';
import { Item } from '../../types/item';
import styles from './styles.module.css';
import btnDelete from '../../assets/btnDelete.svg';



interface Props {
    item: Item,
    onDelete: (id: number) =>  void;   
    isChecked: boolean,
    onChangeDone: (taskId: number) => void; 
}

export function Checked({ item , onDelete, isChecked, onChangeDone}: Props) {
    
    

    
    
    return (
        <div>


            <div className={styles.check}>
                <div>

                <input 
                  type="checkbox" 
                  checked={isChecked} 
                  onChange={() => onChangeDone(item.id)} 
    
                  />
                <label className={isChecked === true ? `${styles.checkCompleted}` : ''}>{item.name}</label>
                </div>

                 <img onClick={() => onDelete(item.id)}  src={btnDelete} alt="botão de deletar tarefa" />
            </div>

        </div>
    )
}
    
    
 
    
