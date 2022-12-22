import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '639a4f48633f4f078658a81c',
    'table': '3',
    'status': 'DONE',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1671040028719-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 1,
        '_id': '639a4f48633f4f078658a81d'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1671043945868-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '639a4f48633f4f078658a81d'
      },

    ],
  }
];

export function Orders() {
  return(
    <Container>
      <OrdersBoard
        icon="🕔"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em Produção"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
