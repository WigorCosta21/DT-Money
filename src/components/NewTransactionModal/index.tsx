import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import * as S from "./styles";

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <S.CloseButton>
          <X />
        </S.CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <S.TransactionType>
            <S.TransactionTypeButton variante="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </S.TransactionTypeButton>

            <S.TransactionTypeButton variante="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </S.TransactionTypeButton>
          </S.TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
};
