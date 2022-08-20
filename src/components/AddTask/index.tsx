import styles from './styles.module.css';

import { useState, KeyboardEvent } from 'react';

import { Item } from '../../types/item';
import { Checked } from  '../Check';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import empty from '../../assets/Empty.svg';


export function List () {

   const [list, setList] = useState<Item[]>([]);
      


   const [inputText, setInputText] = useState('');


   function addTask(taskName: string){
      let newList = [...list];
      if(inputText !== ''){
         newList.push({
            id: list.length + 1,
            name: taskName,
            done: false,
         });
   
         setList(newList);
         
         setInputText('');

      }
      
   }

  function addTaskWithEnter(e: KeyboardEvent){
    if(e.code === 'Enter' && inputText != ''){
      addTask(inputText)
    }
  }

   const completedTasks = () => {
      const items = list.filter(item => item.done);
      return items.length
   }


   function handleChangeDone(taskId: number){
     const newList = list.map(item => {
      if(item.id === taskId){
         return {
            ...item, 
            done: !item.done
         }
      }
      return item;
     })
     setList(newList);
     
   }
   
  

   function deleteTask( id: number ){
     
    const deleteTask = list.filter(item => {
       return item.id !==  id
    })

     setList(deleteTask);
        

   }

      
      

   return (
      <div className={styles.container}>

         <div className={styles.createTask}>
            <input 
              type="text" 
              placeholder='Adicione uma nova tarefa' 
              value={inputText}
              onChange={e=> setInputText(e.target.value)}
              onKeyDown={addTaskWithEnter}
              />
            <button 
               onClick={() => addTask(inputText)} 
               
               className={styles.button}>
                  Criar 
                  <AiOutlinePlusCircle 
                  size={17} 
                  />
            </button>
         </div>


         <div className={styles.createdTaskAndCompleted}>
            <p className={styles.createdTask}>Tarefas criadas  <span>{list.length}</span></p>
            <p className={styles.completed}>Tarefas concluídas  <span> {completedTasks()} de {list.length}</span></p>
            
         </div>

         { list.length > 0 ? (

         <ul>
            {
               
               list.map((item, id) => (

                  <li key={id}>
                   
                        
                           <Checked 
                              item={item}
                              onDelete={deleteTask}  
                              isChecked={item.done}
                              onChangeDone={handleChangeDone}
                              />
                  
                  </li>
               ))
            }

         </ul>
         ): (
             
            <div>
               <img src={empty} alt="Imagem que sinaliza quando não há nenhuma tarefa!" />
            </div>

         )

         }



      </div>
   )
}


   





