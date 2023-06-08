import { Email, Item, Span, A } from 'react-html-email';
import { renderEmail } from 'react-html-email';

const FactureEmail = ({ user, productCartItem, totalPrice, totalQty }) => (
    <Email title="Invoice" style={{ fontFamily: 'Helvetica' }}>
      <Item>
        <Span>Dear {user.firstName} {user.lastName},</Span>
      </Item>
      <Item>
        <Span>You have received an invoice. Please find the details below:</Span>
      </Item>
      <Item>
        <Span>Client: {user.firstName} {user.lastName}</Span>
      </Item>
      <Item>
        <Span>Email: {user.email}</Span>
      </Item>
      {/* Add more customer details here */}
      <Item>
        <h4>Invoice Items:</h4>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {productCartItem.map((el) => (
              <tr key={el._id}>
                <td>{el.name}</td>
                <td>{el.category}</td>
                <td>{el.price} dh</td>
                <td>{el.qty}</td>
                <td>{el.total} dh</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Quantity: {totalQty}</p>
        <p>Total Price: {totalPrice} dh</p>
      </Item>
      <Item>
        <Span>Please let us know if you have any questions or concerns.</Span>
      </Item>
      <Item>
        <Span>Best regards,</Span>
      </Item>
      <Item>
        <Span>Your Name</Span>
      </Item>
    </Email>
  );
  
 export  default  FactureEmail;