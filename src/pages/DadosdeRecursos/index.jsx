import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar';

import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, plugins, scales } from 'chart.js';
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
  );


ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend);


function Dashbord() {

    const relatorio = () => {
        alert(`Você baixou o relatorio`)
    }

    const data = {
        labels: ['João Silva', 'Ana Souza', 'Carlos Lima'],
        datasets: [
            {
                label: 'Produtividade (%)',
                data: [30,20,35],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            }
        ],
    };

    const dataLine = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Set', 'Oct', 'Nov', 'Dez'],
        datasets: [
          {
            label: 'Lucro',
            data: [30, 53, 65, 41, 44, 65, 55, 45, 33, 30, 32, 40],
            fill: true,
            backgroundColor: ['rgba(75,192,192,0.2)'],
            borderColor: ['rgba(75,192,192,1)']
          },
          {
            label: 'Lucro Esperado',
            data: [33, 25, 35, 51, 54, 76, 65, 45, 43, 30, 22, 37],
            fill: false,
            borderColor: ['#742774']
          }
        ]
      };

    const opitionsLine = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Lucro Data (2024)'
            },
        },
        scales: {
            y: {
                beginAtZero: true
            },
        },
    };
    
    const opitions = {
        responsive: true,
        plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Produtividades dos agricultores',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
    };

    return (
        <>
  
      
        <Navbar />
        
    <div>
        <header className='NomeDaPagina'>
            <h1>Dados de Recursos</h1>
        </header>

    <div className="columns">
        <main className="content">
            <section id='resumo'>
                <h2>Resumo de dados</h2>
            <div className='card'>
                <p>Total de agricultores: 200</p>
                <p>Quantidade de Recursos sustentaveis: 120</p>
                <p>Média de produtividade: 25%</p>
            </div>
            </section>

            <section id='graficos'>
                <h2>Graficos</h2>
            <div className='card'>
                <Bar data={data} options={opitions} />
            </div>
            </section>

            <section id='tabela'>
                <h2>Tabela de Dados</h2>
                <div className='card'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome do Agricultor</th>
                                <th>Região</th>
                                <th>Recurso Sustentavel Utilizado</th>
                                <th>Produtividade (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>João Silva</td>
                                <td>Nordeste</td>
                                <td>Adubo Organico</td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td>Ana Souza</td>
                                <td>Centro-Oeste</td>
                                <td>Irrigação Sustentável</td>
                                <td>20%</td>
                            </tr>
                            <tr>
                                <td>Carlos Lima</td>
                                <td>Sudeste</td>
                                <td>Energia Solar</td>
                                <td>35%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id='relatorios'>
                <h2>Relatorios</h2>
                <div className='card'>
                    <p>Aqui você pode baixar ou vizualizar relatorios detalhados 
                        sobre a produtividade agricula semestral</p>

                    <button onClick={relatorio}>Baixar Relatorio</button>
                </div>
            </section>
        </main>

        <main className="content">
            <section id='resumo'>
                <h2>Resumo de dados</h2>
            <div className='card'>
                <p>Safras do primeiro semestre 2024</p>
                <p>Lucro da Safra: R$ 1,5 mil por hectare</p>
                <p>importações: 7,5%</p>
            </div>
            </section>

            <section id='graficos'>
                <h2>Graficos</h2>
            <div className='card'>
                <Line data={dataLine} options={opitionsLine}/>
            </div>
            </section>

            <section id='tabela'>
                <h2>Tabela de Dados</h2>
                <div className='card'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome do Produto</th>
                                <th>tipo de Solo</th>
                                <th>Tempo da Safra</th>
                                <th>Peso da Safra (T)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Soja</td>
                                <td>Mato Grosso</td>
                                <td>120 dias</td>
                                <td>2.5 a 3.5 toneladas por hectare</td>
                            </tr>
                            <tr>
                                <td>Milho</td>
                                <td>Mato Grosso</td>
                                <td>100 dias</td>
                                <td>4 a 7 toneladas por hectare</td>
                            </tr>
                            <tr>
                                <td>Café</td>
                                <td>Sudeste</td>
                                <td>dois anos e meio</td>
                                <td>20 a 35 sacas (60 kg) por hectare</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
        </div>

    
    </div>
  
        </>
    )
}

export default Dashbord