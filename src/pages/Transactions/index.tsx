import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { useTransaction } from "../../hooks/useTransaction";
import { SearchForm } from "./components";

import * as S from "./styles";

export const Transactions = () => {
  const { transactions } = useTransaction();

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionContainer>
        <SearchForm />

        <S.TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <S.PriceHighLight variante={transaction.type}>
                      R$ {transaction.price}
                    </S.PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </S.TransactionTable>
      </S.TransactionContainer>
    </div>
  );
};
