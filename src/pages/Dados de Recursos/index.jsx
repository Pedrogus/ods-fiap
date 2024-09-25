import React from 'react';
import './Dashbord.css';
import Navbar from '../../components/Navbar';

import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';



ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


function Dashbord() {

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
    
    const opitions = {
        responsive: true,
        plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Produtividade dos Pequenos Agricultores',
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
    <body>
      
        <Navbar />
    <div className='container'>
        <main className="content">
            <section id='resumo'>
                <h2>Resumo de dados</h2>
            <div className='card'>
                <p>Total de agricultores: 200</p>
                <p>Quantidade de Recursos sustentaveis: 120</p>
                <p>Média de produtividade: 25%</p>
            </div>
            </section>

            <section id='gradicos'>
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
                        sobre a produtividade agricula anual</p>
                    <button>Baixar Relatorio</button>
                </div>
            </section>
        </main>
    </div>
    </body>
        </>
    )
}

export default Dashbord