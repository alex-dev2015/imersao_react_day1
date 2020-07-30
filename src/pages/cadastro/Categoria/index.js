import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria(){
  const [categorias, setCategorias] = useState(['Teste']);
  
  const valueInitials = {
    name: '',
    descrption: '',
    color: '#000',
  }
  
  const [nomeDaCategoria, setNomeCategoria] = useState(valueInitials);

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            ...categorias,
            nomeDaCategoria
          ])
        }} >

          <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              placeholder={nomeDaCategoria}
              onChange={function handleSwitch(props){
                  setNomeCategoria(props.target.value);
              }}
            />
          </label>
          </div>
          <div>      
          <label>
            Descrição:
            <textarea
              type="text"
              placeholder={nomeDaCategoria}
              onChange={function handleSwitch(props){
                  setNomeCategoria(props.target.value);
              }}
            />
          </label>
          </div>
          <div>              
          <label>
            Cor:
            <input
              type="color"
              placeholder={nomeDaCategoria}
              onChange={function handleSwitch(props){
                  setNomeCategoria(props.target.value);
              }}
            />
          </label>

          </div>

          <button>Cadastrar</button>
        </form>
        
        <ul>
          {categorias.map((categoria, index) =>{
            return (
              <li key={`${categoria}${index}`}>
                {categoria}
              </li>
            )
          })}
        </ul>
        <Link to="/">
          Ir para a Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria