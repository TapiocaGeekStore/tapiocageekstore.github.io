
                    
                  
                    // Dados dos produtos simulando um banco de dados cósmico
                    const produtos = [
                        { id: 1, nome: "Minifigures", desc: "Aumenta o nivvel de endorfina toda vez que adquirir um para sua coleção", preco: 20, imagem: "img/minifiguregeek.png" },
                        { id: 2, nome: "Camiseta Geek", desc: "Defesa máxima contra modinha", preco: 50, imagem:"img/imgCamisa.png" },
                        { id: 3, nome: "Chaveiros", desc: "Rastreia itens perdidos", preco: 20, imagem: "img/chaveiromlf.png" },
                        { id: 4, nome: "Miniaturas de Veículos", desc: "A principal frota de sua coleção, aumentá-la é necessario", preco: 50, imagem: "img/miniaturaveic.png" },
                        { id: 5, nome: "Action Figures", desc: "Troféu do Colecionador, aumenta inspiração ao representar referências heróicas", preco: 200, imagem: "img/actionfiguresite.png" },
                        { id: 6, nome: "Stikers", desc: "Adciona suas skills à seus utencílios", preco: 1, imagem: "img/stikers.png" },
                        { id: 7, nome: "Caneca Geek", desc: "Aumenta o nivél de cafeína da tripulação", preco: 30, imagem: "img/canecageek.png" },
                        { id: 8, nome: "Placa Geek", desc: "Diminui o risco de acidentes com a coleção", preco: 15, imagem: "img/placageek.png" }

                    ];
            
                    let carrinho = [];
            
                    // Função para renderizar os cards na tela de forma limpa
                    function renderizarProdutos() {
                        const vitrine = document.getElementById('vitrine-produtos');
                        vitrine.innerHTML = '';
            
                        produtos.forEach(prod => {
                            const card = document.createElement('div');
                            card.className = 'card';
                            card.innerHTML = `
                                <div>
                                    <div class="card-img">
                                        <img src="${prod.imagem}" alt="${prod.nome}" class="img/minifigure.png">
                                    </div>
                                    <div class="card-title">${prod.nome}</div>
                                    <div class="card-desc">${prod.desc}</div>
                                </div>
                                <div class="card-footer">
                                    <span class="price">${prod.preco} CC</span>
                                    <button class="btn-add" onclick="adicionarAoCarrinho(${prod.id})">Adquirir</button>
                                </div>
                            `;
                            vitrine.appendChild(card);
                        });
                    }
            
                    // Função interativa para adicionar itens ao carrinho
                    function adicionarAoCarrinho(id) {
                        const produto = produtos.find(p => p.id === id);
                        carrinho.push(produto);
                        atualizarCarrinho();
                    }
            
                    // Atualiza a interface do Computador de Bordo (Carrinho)
                    function atualizarCarrinho() {
                        const lista = document.getElementById('carrinho-lista');
                        const totalTxt = document.getElementById('total-preco');
                        
                        if (carrinho.length === 0) {
                            lista.innerHTML = `<p style="color: #64748b; font-size: 0.85rem; text-align: center; margin-top: 20px;">Nenhum item na órbita de compra.</p>`;
                            totalTxt.innerText = "0.00 CRÉDITOS";
                            return;
                        }
                        lista.innerHTML = '';
                    let total = 0;

                    carrinho.forEach(item => {
                        total += item.preco;
                        const div = document.createElement('div');
                        div.className = 'item-carrinho';
                        div.innerHTML = `
                            <span>${item.nome}</span>
                            <span>${item.preco} CC</span>
                        `;
                        lista.appendChild(div);
                    });

                    totalTxt.innerText = `${total}.00 CRÉDITOS`;
                }

                // Ação final do botão de checkout
                function finalizarMissao() {
                    if(carrinho.length === 0) {
                        alert("Seu módulo de carga está vazio. Adicione suprimentos antes de decolar!");
                        return;
                    }
                    alert("Missão iniciada! Seus créditos foram debitados e os produtos estão sendo teleportados para sua nave.");
                    carrinho = [];
                    atualizarCarrinho();
                }

                // Inicializa a página
                renderizarProdutos();
            