import './container.css'

function Container() {

    return (
        <div className="container">

            <div className="nav">
                <button id="menuToggle"><i class='bx bx-menu'></i></button>
                <div className="search">
                <i class='bx bx-search' ></i>
                <input type="text" placeholder="research" />
                </div>
                <button>Search</button>
            </div>

            <div className="main">
                <div className="content">
                    <div className="header">
                        <h4>Comunidades para você <span>300</span></h4>
                        <p>Aqui comunidades que combinam com você</p>
                    </div>

                    <div className="Comunit-cards">

                        <div className="card">
                            <div className="card-header">
                                <div className="comunit-info">
                                    <i class='bx bx-chat'></i>
                                <div>
                                <h5>WWF-Brasil</h5>
                                <a href="/">Agricultores orgânicos</a>
                                <p>Encontro da CSA Brasília</p>
                                </div>
                            </div>
                            <i class='bx bx-bookmark' ></i>
                        </div>
                        <div className="card-desc">
                        O funcionamento da CSA é simples: 
                        por meio de uma cota fixa mensal, os co-agricultores recebem uma 
                        caixa semanal ou quinzenal de produtos agrícolas, 
                        como frutas, verduras, legumes, ovos, leite 
                        e o que mais estiver combinado com seu agricultor.
                        </div>
                    </div>

                    <div className="card">
                            <div className="card-header">
                                <div className="comunit-info">
                                    <i class='bx bx-chat'></i>
                                <div>
                                <h5>Syngenta</h5>
                                <a href="/">Agricultores orgânicos</a>
                                <p>Encontro da CSA Brasília</p>
                                </div>
                            </div>
                            <i class='bx bx-bookmark' ></i>
                        </div>
                        <div className="card-desc">
                        Você já ouviu falar em êxodo rural? 
                        Esse é o nome dado ao processo de migração em massa decorrente da 
                        industrialização acelerada, em que parte da população se mudou do campo para a 
                        cidade – e parte das comunidades rurais se tornaram comunidades urbanas 
                        em decorrência da transformação de suas zonas de habitação.
                        </div>
                    </div>

                    <div className="card">
                            <div className="card-header">
                                <div className="comunit-info">
                                    <i class='bx bx-chat'></i>
                                <div>
                                <h5>CSA</h5>
                                <a href="/">Agricultores orgânicos</a>
                                <p>Encontro da CSA Brasília</p>
                                </div>
                            </div>
                            <i class='bx bx-bookmark' ></i>
                        </div>
                        <div className="card-desc">
                        O funcionamento da CSA é simples: 
                        por meio de uma cota fixa mensal, os co-agricultores recebem uma 
                        caixa semanal ou quinzenal de produtos agrícolas, 
                        como frutas, verduras, legumes, ovos, leite 
                        e o que mais estiver combinado com seu agricultor.
                        </div>
                    </div>

                    <div className="card">
                            <div className="card-header">
                                <div className="comunit-info">
                                    <i class='bx bx-chat'></i>
                                <div>
                                <h5>ManejeBem</h5>
                                <a href="/">Agricultores orgânicos</a>
                                <p>Encontro da CSA Brasília</p>
                                </div>
                            </div>
                            <i class='bx bx-bookmark' ></i>
                        </div>
                        <div className="card-desc">
                        O funcionamento da CSA é simples: 
                        por meio de uma cota fixa mensal, os co-agricultores recebem uma 
                        caixa semanal ou quinzenal de produtos agrícolas, 
                        como frutas, verduras, legumes, ovos, leite 
                        e o que mais estiver combinado com seu agricultor.
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </div>

    );
}

export default Container