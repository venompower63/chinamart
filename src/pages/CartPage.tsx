import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, buyerCommission, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="cart-page empty">
        <div className="container">
          <div className="empty-cart">
            <ShoppingBag size={80} />
            <h2>Корзина пуста</h2>
            <p>Добавьте товары из каталога, чтобы оформить заказ</p>
            <Link to="/catalog" className="btn btn-primary">Перейти в каталог</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Корзина</h1>

        <div className="cart-layout">
          <div className="cart-items">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="cart-item">
                <Link to={`/product/${product.id}`} className="item-image">
                  <img src={product.images[0]} alt={product.title} />
                </Link>

                <div className="item-details">
                  <Link to={`/product/${product.id}`} className="item-title">
                    {product.title}
                  </Link>
                  <p className="item-seller">Продавец: {product.sellerName}</p>
                </div>

                <div className="item-quantity">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)}>
                      <Minus size={16} />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="item-price">
                  <span className="current">
                    {(product.price * quantity).toLocaleString('ru-RU')} ₽
                  </span>
                  {quantity > 1 && (
                    <span className="unit">
                      {product.price.toLocaleString('ru-RU')} ₽/шт.
                    </span>
                  )}
                </div>

                <button className="item-remove" onClick={() => removeItem(product.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Итого</h2>

            <div className="summary-rows">
              <div className="summary-row">
                <span>Товары ({items.length})</span>
                <span>{subtotal.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="summary-row">
                <span>Комиссия покупателя (2%)</span>
                <span>{buyerCommission.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="summary-row">
                <span>Доставка</span>
                <span className="free">Бесплатно</span>
              </div>
            </div>

            <div className="summary-total">
              <span>К оплате</span>
              <span className="total-value">{total.toLocaleString('ru-RU')} ₽</span>
            </div>

            <Link to="/checkout" className="btn-checkout">
              Оформить заказ
              <ArrowRight size={20} />
            </Link>

            <div className="summary-note">
              <p>💳 Безопасная оплата через escrow-систему</p>
              <p>🛡️ Защита покупателя включена в комиссию</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cart-page {
          padding: 24px 0 60px;
        }
        .cart-page h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
          align-items: start;
        }
        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto auto auto;
          gap: 20px;
          align-items: center;
          padding: 20px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
        }
        .item-image {
          width: 100px;
          height: 100px;
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .item-details {
          min-width: 0;
        }
        .item-title {
          font-weight: 600;
          color: var(--text-dark);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 8px;
        }
        .item-title:hover {
          color: var(--primary);
        }
        .item-seller {
          font-size: 13px;
          color: var(--text-light);
          margin: 0;
        }
        .quantity-controls {
          display: flex;
          align-items: center;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
        }
        .quantity-controls button {
          width: 36px;
          height: 36px;
          background: none;
          color: var(--text-medium);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .quantity-controls button:hover {
          color: var(--primary);
        }
        .quantity-controls span {
          width: 40px;
          text-align: center;
          font-weight: 600;
        }
        .item-price {
          text-align: right;
          min-width: 120px;
        }
        .item-price .current {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
        }
        .item-price .unit {
          font-size: 12px;
          color: var(--text-light);
        }
        .item-remove {
          padding: 10px;
          background: none;
          color: var(--text-light);
          border-radius: var(--radius-sm);
          transition: all 0.2s;
        }
        .item-remove:hover {
          background: rgba(230, 57, 70, 0.1);
          color: var(--primary);
        }
        .cart-summary {
          position: sticky;
          top: 96px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
        }
        .cart-summary h2 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .summary-rows {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 20px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 15px;
        }
        .summary-row span:first-child {
          color: var(--text-medium);
        }
        .summary-row .free {
          color: var(--success);
          font-weight: 500;
        }
        .summary-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .summary-total span:first-child {
          font-size: 16px;
          font-weight: 500;
        }
        .total-value {
          font-size: 28px;
          font-weight: 800;
          color: var(--primary);
        }
        .btn-checkout {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          background: var(--primary);
          color: white;
          border-radius: var(--radius-md);
          font-size: 16px;
          font-weight: 600;
          transition: all 0.2s;
          margin-bottom: 20px;
        }
        .btn-checkout:hover {
          background: var(--primary-dark);
        }
        .summary-note {
          font-size: 13px;
          color: var(--text-light);
        }
        .summary-note p {
          margin: 0 0 8px;
        }
        .empty-cart {
          text-align: center;
          padding: 80px 20px;
        }
        .empty-cart svg {
          color: var(--text-light);
          margin-bottom: 24px;
        }
        .empty-cart h2 {
          font-size: 28px;
          margin-bottom: 12px;
        }
        .empty-cart p {
          color: var(--text-medium);
          margin-bottom: 32px;
        }
        .btn-primary {
          display: inline-block;
          padding: 14px 28px;
          background: var(--primary);
          color: white;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }
        .btn-primary:hover {
          background: var(--primary-dark);
        }
        @media (max-width: 992px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }
          .cart-summary {
            position: static;
          }
          .cart-item {
            grid-template-columns: 80px 1fr;
            gap: 16px;
          }
          .item-quantity,
          .item-price,
          .item-remove {
            grid-column: 2;
          }
          .item-quantity {
            justify-self: start;
          }
          .item-price {
            text-align: left;
          }
          .item-remove {
            justify-self: end;
          }
        }
      `}</style>
    </div>
  )
}
