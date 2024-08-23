import React, { useEffect,useState } from 'react';
import miamiImage from './images/mimi.png'; // Ajustar o caminho se necessário

const FormularioNegociacaoDivida = () => {
  useEffect(() => {
    // Cria a tag <script> para carregar o widget
    const script = document.createElement('script');
    <script src="https://cdn.jsdelivr.net/gh/logspace-ai/langflow-embedded-chat@v1.0.4/dist/build/static/js/bundle.min.js" crossorigin="anonymous"></script>
    script.async = true;
    document.body.appendChild(script);

    // Limpeza: Remove o script ao desmontar o componente
    return () => {
      document.body.removeChild(script);
    };
  }, []); // O array vazio faz com que o useEffect seja executado apenas uma vez ao montar
  
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [valorTotal, setValorTotal] = useState(0);
  const [dataVencimento, setDataVencimento] = useState('');
  const [historicoPagamentos, setHistoricoPagamentos] = useState('');
  const [nomeCredor, setNomeCredor] = useState('');
  const [rendaMensal, setRendaMensal] = useState(0);
  const [outrasDividas, setOutrasDividas] = useState('');
  const [bens, setBens] = useState('');
  const [patrimonio, setPatrimonio] = useState('');
  const [valorParcela, setValorParcela] = useState(0);
  const [formaPagamento, setFormaPagamento] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode integrar com sua API ou serviço backend
    console.log({
      nome,
      cpf,
      dataNascimento,
      endereco,
      contato,
      valorTotal,
      dataVencimento,
      historicoPagamentos,
      nomeCredor,
      rendaMensal,
      outrasDividas,
      bens,
      patrimonio,
      valorParcela,
      formaPagamento,
      frequencia,
      observacoes,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh'   
 }}>
      <img src={miamiImage} alt="Miami" className="mb-4" />
    </div>
      <h1 className="text-3xl font-bold mb-4">Formulário de Negociação de Dívida</h1>
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-2">Informações de Identificação</h2>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
            Nome completo:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpf">
            CPF:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="cpf"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataNascimento">
            Data de nascimento:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(event) => setDataNascimento(event.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endereco">
            Endereço:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="endereco"
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contato">
            Contato:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="contato"
            value={contato}
            onChange={(event) => setContato(event.target.value)}
            required
          />
        </div>

        {/* Detalhes da Dívida */}
        <h2 className="text-2xl font-bold mb-2">Detalhes da Dívida</h2>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="valorTotal">
            Valor total da dívida:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="valorTotal"
            value={valorTotal}
            onChange={(event) => setValorTotal(Number(event.target.value))}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataVencimento">
            Data de vencimento original:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            id="dataVencimento"
            value={dataVencimento}
            onChange={(event) => setDataVencimento(event.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="historicoPagamentos">
            Histórico de pagamentos:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="historicoPagamentos"
            value={historicoPagamentos}
            onChange={(event) => setHistoricoPagamentos(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomeCredor">
            Nome do credor:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="nomeCredor"
            value={nomeCredor}
            onChange={(event) => setNomeCredor(event.target.value)}
            required
          /> 
        </div>

        {/* Situação Financeira do Cliente */}
        <h2 className="text-2xl font-bold mb-2">Situação Financeira do Cliente</h2>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rendaMensal">
            Renda mensal:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="rendaMensal"
            value={rendaMensal}
            onChange={(event) => setRendaMensal(Number(event.target.value))}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="outrasDividas">
            Outras dívidas:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="outrasDividas"
            value={outrasDividas}
            onChange={(event) => setOutrasDividas(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bens">
            Bens:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bens"
            value={bens}
            onChange={(event) => setBens(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patrimonio">
            Patrimônio:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="patrimonio"
            value={patrimonio}
            onChange={(event) => setPatrimonio(event.target.value)}
            required
          ></textarea>
        </div>

        {/* Proposta de Pagamento */}
        <h2 className="text-2xl font-bold mb-2">Proposta de Pagamento</h2>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="valorParcela">
            Valor da parcela:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="valorParcela"
            value={valorParcela}
            onChange={(event) => setValorParcela(Number(event.target.value))}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formaPagamento">
            Forma de pagamento:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="formaPagamento"
            value={formaPagamento}
            onChange={(event) => setFormaPagamento(event.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="boleto">Boleto</option>
            <option value="cartao">Cartão</option>
            <option value="dinheiro">Dinheiro</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="frequencia">
            Frequência:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="frequencia"
            value={frequencia}
            onChange={(event) => setFrequencia(event.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="mensal">Mensal</option>
            <option value="trimestral">Trimestral</option>
            <option value="semestral">Semestral</option>
          </select>
        </div>

        {/* Observações */}
        <h2 className="text-2xl font-bold mb-2">Observações</h2>
        <div className="form-group mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="observacoes"
            value={observacoes}
            onChange={(event) => setObservacoes(event.target.value)}
          ></textarea>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <div>
        <langflow-chat
          window_title="Converse com nosso Consultor"
          flow_id="14a71524-ad4a-44ed-ae2c-7193a1487b3a"
          host_url="http://localhost:7863"
        ></langflow-chat>
      </div>
    </div>
  );
};

export default FormularioNegociacaoDivida;
