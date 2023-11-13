import React from 'react'
import Imagem1 from '../../imagens/imagem-problema-1.jpg'
import Imagem2 from '../../imagens/imagem-problema-2.jpeg'
import Imagem3 from '../../imagens/imagem-problema-3.jpg'
import Imagem4 from '../../imagens/gif-impactos.gif'
import Imagem5 from '../../imagens/imagem-solução-1.jpg'
import Imagem6 from '../../imagens/imagem-solução-2.jpeg'
import Imagem7 from '../../imagens/gif-smart-cities-1.gif'
import Imagem8 from '../../imagens/gif-smart-cities-2.gif'
import Imagem9 from '../../imagens/imagem-resultados-1.webp'
import Imagem10 from '../../imagens/imagem-resultados-2.jpg'


function Main() {
    return(
        <main>
                <section className="bg-dark" id="container2">
                    <div className="container">
                        <h2 className="text-white py-4">O PROBLEMA</h2>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 mb-4"><img src={Imagem1}
                                alt="Imagem de via inundada" className="img-fluid text-white"/></div>
                            <div className="col-lg-4 col-md-4 mb-4"><img src={Imagem2}
                                alt="Imagem de vila prejudicada pela chuva" className="img-fluid text-white"/></div>
                            <div className="col-lg-4 col-md-4 mb-4"><img src={Imagem3}
                                alt="Imagem de um senhor em seu bairro alagado" className="img-fluid text-white"/></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 my-4">
                                <p className="text-white">Enchentes são eventos naturais caracterizados pelo aumento significativo
                                    do nível da água em rios, córregos, lagos ou mares, provocando transbordamentos e inundações
                                    em áreas próximas. Geralmente, as enchentes são causadas por chuvas intensas, derretimento
                                    de neve, maremotos, ou mesmo a construção de barragens e represas, que alteram o fluxo
                                    natural da água.
                                    As enchentes podem causar grandes prejuízos materiais, além de colocar em risco a vida de
                                    pessoas e animais, já que muitas vezes as inundações podem ser súbitas e sem aviso prévio.
                                    As principais consequências das enchentes incluem danos a infraestrutura urbana,
                                    deslizamentos de terra, perda de patrimônio, impactos na saúde pública, e interrupção de
                                    serviços básicos como água, energia elétrica e transporte. Por isso, é importante que sejam
                                    tomadas medidas de prevenção, monitoramento e resposta a enchentes para minimizar seus
                                    impactos negativos.</p>
                            </div>
                            <div className="col-lg-6 my-4">
                                <p className="text-white">As enchentes são um problema comum em São Paulo devido ao grande volume de
                                    chuvas que a cidade recebe, muitas vezes em um curto período de tempo. Além disso, a
                                    urbanização desenfreada e o mau planejamento urbano contribuem para o agravamento desse
                                    problema. Quando chove muito, as águas das chuvas não são absorvidas pelo solo e escoam
                                    rapidamente pelas ruas, sobrecarregando os sistemas de drenagem da cidade e causando
                                    alagamentos e inundações.
                                    Ademais, a população paulista paga as consequências da carência de devoção do prefeito e
                                    governadores para essa enorme dificuldade. Pessoas morrem, residências são inundadas,
                                    automóveis são perdidos, entre outros diversos danos que os alagamentos causam.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="container3">
                    <div className="container">
                        <h2 className="py-4">IMPACTOS</h2>
                        <div className="row">
                            <div className="col-lg-6">
                                <p>O problema das inundações em áreas urbanas existe em muitas cidades brasileiras e suas causas
                                    são variadas, acontecimentos como assoreamento do leito dos rios, impermeabilização das
                                    áreas de infiltração na bacia de drenagem e fatores climáticos podem ser causas de
                                    enchentes. Esses problemas acabam gerando diversos tipos de impactos e complicações na vida
                                    dos cidadãos. entre eles estão prejuízos de perdas materiais e humanas, interrupção da
                                    atividade econômica das áreas inundadas (neste caso, comerciantes independentes podem ser
                                    afetados também), contaminação por doenças de veiculação hídrica como leptospirose e cólera,
                                    contaminação da água pela inundação de depósitos de material tóxico, estações de
                                    tratamentos, entre outros.
                                    São acontecimentos que devastam a população de diversas formas, porém, com um controle dessa
                                    situação através de um software, as pessoas terão a possibilidade de se previnirem e
                                    evitarem os prejuízos que as enchentes trazem.
                                </p>
                            </div>
                            <div className="col-lg-6 align-items-center d-flex justify-content-center">
                                <img src={Imagem4} alt="Gif ilustrando impactos das enchentes"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-dark" id="container4">
                    <div className="container">
                        <h2 className="text-white py-4">SOLUÇÃO</h2>
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="text-white">Visando transformar nossa cidade em uma Smart City, o uso da tecnologia é
                                    indispensável para a resolução das enchentes. A tecnologia raz consigo uma sérNameie de
                                    benefícios, como melhora na qualidade de vida, acesso rápido e fácil ao conhecimento,
                                    simplificação da troca de informações e a quebra de várias barreiras da comunicação. Levando
                                    isso em conta, é fato que a tecnologia tem poder para colaborar com o problema das
                                    enchentes.</p>
                            </div>

                            <div className="col-lg-6 col-md-6 mb-4">
                                <img src={Imagem5} alt="Imagem ilustrativa de IA Generativa" className="img-fluid text-white"/>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-4">
                                <img src={Imagem6} alt="Imagem ilustrativa de um software em um computador" className="img-fluid text-white"/>
                            </div>

                            <div className="col-lg-12 my-4">
                                <p className="text-white">Por meio dos nossos estudos, acreditamos que o desenvolvimento de um
                                    software com diferentes funções é a chave para acabar com tal adversidade de
                                    sustentabilidade, sendo suas aplicabilidades :
                                    <ul>
                                        <li className="text-white">
                                            Monitoramento e previsão de enchentes: reuniria informações sobre o clima, condições
                                            hidrológicas e outros fatores pertinentes para prever a probabilidade de enchentes em
                                            regiões específicas.
                                        </li>

                                        <li className="text-white">
                                            Mapeamento de áreas de risco: as áreas em risco de inundação podem ser mapeadas, além de
                                            identificar as zonas de risco e permitir a implementação de estratégias de evacuação e
                                            backup.
                                        </li>

                                        <li className="text-white">
                                            Gerenciamento de emergências: pode-se oferecer ferramentas para o gerenciamento de
                                            emergências, tais como sistemas de alerta de usuários, redes para compartilhar
                                            informações em tempo real entre equipes de resgate, programas para monitorar as
                                            circunstâncias daqueles que são afetados e a reação a crises.
                                        </li>

                                        <li className="text-white">
                                            Simulação de cenários: ajudaria na simulação de situações de inundação, permitindo que
                                            os usuários avaliem várias opções de resposta e decidam o melhor curso de ação com maior
                                            conhecimento.
                                        </li>

                                        <li className="text-white">
                                            Coleta de dados pós-evento: auxilia na coleta de dados sobre os efeitos das enchentes,
                                            tais como detalhes sobre danos à propriedade, os efeitos sobre as pessoas impactadas e
                                            as despesas econômicas.
                                        </li>
                                    </ul>

                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="container5">
                    <div className="container">
                        <h2 className="py-4">SMART CITIES</h2>
                        <div className="row">

                            <div className="col-lg-6">
                                <img src={Imagem7} alt="Gif de uma smart city"/>
                                    <p className="p-4">O objetivo principal das Smart Cities é melhorar a qualidade de vida dos
                                        moradores, promover o desenvolvimento econômico e social da cidade, além de torná-la mais
                                        eficiente e sustentável. A implementação de soluções tecnológicas em cidades inteligentes
                                        visa aprimorar diversos aspectos do cotidiano urbano, como o transporte público, o
                                        gerenciamento de resíduos, a segurança pública e a preservação do meio ambiente, dentre
                                        outros.</p>
                            </div>
                            <div className="col-lg-6">
                                <p className="p-4">As Smart Cities, ou cidades inteligentes em português, buscam melhorar a
                                    qualidade de vida dos cidadãos, otimizar a gestão dos recursos e infraestrutura urbana, além
                                    de promover o desenvolvimento sustentável. Para isso, utilizam tecnologias como sensores,
                                    internet das coisas (IoT), big data, inteligência artificial e sistemas de informação para
                                    coletar e analisar dados em tempo real.
                                    Essas soluções tecnológicas podem ser aplicadas em diversas áreas, como mobilidade urbana,
                                    segurança pública, eficiência energética, gestão de resíduos, saúde, educação e outras. Por
                                    meio da coleta de dados em tempo real, as autoridades e gestores podem tomar decisões mais
                                    informadas e eficientes, contribuindo para a criação de um ambiente urbano mais sustentável,
                                    conectado e eficiente.</p>
                                <img src={Imagem8} alt="Gif ilustrando benefícios de uma smart city"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-dark" id="container6">
                    <div className="container">
                        <h2 className="text-white py-4">RESULTADOS</h2>
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="text-white">
                                    Com a implementação da solução citada anteriormente, esperam-se resultados perfeitamente
                                    positivos, como:
                                    <ul>
                                        <li className="text-white">
                                            Com o monitoriamento e previsão de enchentes, seus usuários usuários podem receber
                                            avisos antecipados e minimizar os danos, tomando medidas preventivas baseadas nestes
                                            dados.
                                        </li>
                                        <li className="text-white">
                                            Com o mapeamento de áreas de risco, será possível observar áreas remotas que sofrem
                                            muito com enchentes e evitar obras e construções no futuro, evitando a perda de lares e
                                            bens preciosos.
                                        </li>

                                        <li className="text-white">
                                            Com o gerenciamento de emergências, pode ser evitado maiores consequências para os
                                            habitantes que já se encontram em um cenário de alagamento e inundação, evitando ao
                                            máximo danos físicos para os usuários.
                                        </li>

                                        <li className="text-white">
                                            Com a simulação de cenários, as pessoas que vivem em áreas de risco saberão exatamente o
                                            que fazer quando encontrarem-se em situações de perigo real.
                                        </li>

                                        <li className="text-white">
                                            Com a coleta de dados pós-evento, estas informações poderão ser usadas para melhorar os
                                            planos de reação e diminuir os efeitos das enchentes no futuro.
                                        </li>
                                    </ul>

                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6 mb-4">
                                <img src={Imagem9} alt="Imagem de uma cidade" className="img-fluid text-white"/>
                            </div>

                            <div className="col-lg-6 col-md-6 mb-4">
                                <img src={Imagem10} alt="Imagem ilustrando o funcionamento de uma smart city" className="img-fluid text-white"/>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
    )
}

export default Main
                