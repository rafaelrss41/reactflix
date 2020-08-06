import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../componentes/PageDefault';
import FormField from '../../componentes/FormField';
import Button from '../../componentes/Button';

function CadastroCategoria() {
  const valoresIniciais = {

    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome,descriço, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome; 'valor
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('No foi possivel paegar aos dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descriçao:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        {/* <div>
                <label>
                    Descriaço:
                    <textarea
                    type="text"
                    value={values.desfcricao}
                    name="descricao"
                    onChange={handleChange}
                    />
                </label>
                </div> */}

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
                <label>
                    Descriaço:
                    <textarea
                    type="text"
                    value={values.desfcricao}
                    name="descricao"
                    onChange={handleChange}
                    />
                </label>
                </div> */}

        <Button>
          Cadastrar
        </Button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
