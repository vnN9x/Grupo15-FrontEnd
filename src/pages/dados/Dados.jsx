import React from 'react'
import HomeSideBar from '../../components/homeSidebar/HomeSideBar'
import TopBar from '../../components/TopBar/TopBar'
import './dados.css'

export default function () {
  return (
    <>
        <TopBar/>
        <HomeSideBar/>
        <div className='dados'>
          <span>No Brasil, <span style={{color: 'red', fontWeight: 'bold'}}>4% </span>
          dos resíduos sólidos que poderiam ser reciclados são enviados para esse processo, índice muito abaixo de países de mesma faixa de renda
          e grau de desenvolvimento econômico, como Chile, Argentina, África do Sul e Turquia, que apresentam média de
          <span style={{color: 'yellow', fontWeight: 'bold'}}> 16%</span> de reciclagem, segundo dados da International Solid Waste Association (ISWA).</span>
          <br></br><span>Em relação aos países desenvolvidos, o caminho a percorrer é ainda mais longo. Na Alemanha, por exemplo, o índice de reciclagem alcança <span style={{color: 'green', fontWeight: 'bold'}}>67%</span>.
             “O Brasil está 20 anos atrasado em relação a esses países”, afirmou Silva Filho.</span>
          <br></br><span>Embora o país tenha grande potencial para aumentar a reciclagem, diversos fatores mantêm esses índices estagnados, a começar pela falta de conscientização e de engajamento do consumidor na separação e descarte seletivo de resíduos. Também é preciso destacar a falta de infraestrutura das prefeituras para permitir que esses materiais retornem para o ciclo produtivo, com potencial de recuperação.</span>
          <br></br>
          <span>A pesquisa da Abrelpe sinaliza que iniciativas de coleta seletiva foram registradas em mais de 74% dos municípios brasileiros, mas ainda de forma incipiente em muitos locais, o que reflete na sobrecarga do sistema de destinação final e na extração de recursos naturais, muitos já próximos do esgotamento. O levantamento mostra que quase 1.500 municípios não contam com nenhuma iniciativa de coleta seletiva.</span>
          <br></br><br></br>
          <table>
            <tr>
              <th>Material</th>
              <th>Quantidade (t/ano)</th>
              <th>Quantidade (t/dia)</th>
            </tr>
            <tr>
              <td>Plásticos</td>
              <td>3.856.173,80</td>
              <td>37.962,12</td>
            </tr>
            <tr>
              <td>Papel e papelão</td>
              <td>8.577.631,40</td>
              <td>23.500,36</td>
            </tr>
            <tr>
              <td>Vidro</td>
              <td>2.226.885,08</td>
              <td>6.101,06</td>
            </tr>
            <tr>
              <td>Metais</td>
              <td>1.896.976,18</td>
              <td>5.197,20</td>
            </tr>
            <tr>
              <td>Embalagens multicamadas</td>
              <td>1.154.681,15</td>
              <td>3.163,51</td>
            </tr>
          </table>
          <br></br>
          <span>Fonte: <a target='_blank' href='https://agenciabrasil.ebc.com.br/geral/noticia/2022-06/indice-de-reciclagem-no-brasil-e-de-4-diz-abrelpe#:~:text=De%20acordo%20com%20o%20Panorama,toneladas%20anuais%20de%20res%C3%ADduos%20recicl%C3%A1veis.'>Agência Brasil</a></span>
        </div>
    </>
  )
}
