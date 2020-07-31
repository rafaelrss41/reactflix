import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../componentes/PageDefault';
import FormField from '../../componentes/FormField';

function CadastroCategoria(){

    const valoresIniciais = {
        
            nome: '',
            descricao: '',
            cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        //chave: nome,descriço, bla, bli
        setValues({
            ...values,
            [chave]: valor, //nome; 'valor
        })
    }


    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }



    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infosDoEvento){ 
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>

                <FormField
                    label= "Nome da categoria"
                    type="text"
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

                {/*<div>
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

                {/*<div>
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

                    <button>
                        Cadastrar
                    </button>
                </form>

                <ul>
                    {categorias.map((categoria, indice)=>{
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
                </ul>

                <Link to="/">
                    Ir para Home
                </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;
