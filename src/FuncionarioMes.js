import React, {useState} from 'react';

function FuncionarioMes ({codigoFuncionario,nome, foto})
{

    
    

        const[likes, totalLikes] = useState(0);

        const ChamarBotao = () => {
       
            totalLikes(likes + 1);
           
        
        }

        const DisclikeButton = () => {
       
            totalLikes(likes - 1);
           
        
        }

        

    
    return (
        <div>
            { //Exibir Foto
            <img src={foto}/>
            }
            { //Codigo Funcionario
                <h2>Matrícula: {codigoFuncionario}</h2>
            }
            {
                <h3>Nome: {nome}</h3>
            }
            
            {
                <button onClick={ChamarBotao}>Like</button>
            }

            {
                <button onClick={DisclikeButton}>Dislike</button>
            }

            {
                <p>Total de Curtidas {likes}</p>
                
            }
          
        </div>
    );

}

export default FuncionarioMes;