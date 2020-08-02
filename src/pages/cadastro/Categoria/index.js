import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';





function CadastroCategoria(){
  const valueInitials = {
    name: '',
    descrption: '',
    color: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valueInitials);
  
  

  function setValue(chave, value) {
    setValues({
      ...values,
      [chave]: value,
    })
  }

  function handleSwitch(props){
      setValue(
      props.target.getAttribute('name'),
      props.target.value);
  }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.name}</h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            ...categorias,
            values
          ])

          setValues(valueInitials)
        }} >

          <FormField 
            label="Nome da Categoria:"
            type="text"
            name="name"
            value={values.name}
            onChange={handleSwitch}
          />
          
          <div>      
            <label>
              Descrição:
              <textarea
                type="text"
                placeholder={values.descrption}
                name="name"
                onChange={handleSwitch}
              />
            </label>
          </div>

          <FormField 
            label="Cor: "
            type="color"
            name="color"
            value={values.color}
            onChange={handleSwitch}
          />
          
            {/* <div>              
                <label>
                  Cor:
                  <input
                    type="color"
                    placeholder={values.color}
                    name="color"
                    onChange={handleSwitch}
                  />
                </label>

            </div> */}

          <button>Cadastrar</button>
        </form>
        
        <ul>
          {categorias.map((categoria, index) =>{
            return (
              <li key={`${categoria}${index}`}>
                {categoria.name}
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