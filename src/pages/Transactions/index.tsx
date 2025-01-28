import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import * as S from "./styles";

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionContainer>
        <S.TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighLight variante="income">
                  R$ 12.000,00
                </S.PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <S.PriceHighLight variante="outcome">
                  - R$ 59,00
                </S.PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </S.TransactionTable>
      </S.TransactionContainer>
    </div>
  );
};
