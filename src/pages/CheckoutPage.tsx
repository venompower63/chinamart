import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { ArrowLeft, CreditCard, Truck, Check } from 'lucide-react'

export default function CheckoutPage() {
  const { items, subtotal, buyerCommission, total, clearCart } = useCart()

  const { showToast } = useToast()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    city: '',
    street: '',
    house: '',
    apartment: '',
    postalCode: '',
    deliveryMethod: 'standard',
    paymentMethod: 'card'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order creation
    await new Promise(resolve => setTimeout(resolve, 1500))

    const order = {
      id: `ORD-${Date.now()}`,
      items: items,
      total: total,
      buyerCommission: buyerCommission,
      createdAt: new Date().toISOString(),
      status: 'pending',
      address: `${formData.city}, ${formData.street}, д. ${formData.house}${formData.apartment ? ', кв. ' + formData.apartment : ''}`
    }

    // Save order
    const orders = JSON.parse(localStorage.getItem('chinamart_orders') || '[]')
    orders.unshift(order)
    localStorage.setItem('chinamart_orders', JSON.stringify(orders))

    clearCart()
    setIsSubmitting(false)
    showToast('success', 'Заказ успешно оформлен!')
    navigate('/orders')
  }

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="empty-checkout">
            <h2>Ваша корзина пуста</h2>
            <Link to="/catalog" className="btn btn-primary">Перейти в каталог</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <Link to="/cart" className="back-link">
          <ArrowLeft size={20} />
          Вернуться в корзину
        </Link>

        <h1>Оформление заказа</h1>

        {/* Steps */}
        <div className="checkout-steps">
          <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <span className="step-number">{step > 1 ? <Check size={16} /> : '1'}</span>
            <span className="step-label">Адрес</span>
          </div>
          <div className="step-line" />
          <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <span className="step-number">{step > 2 ? <Check size={16} /> : '2'}</span>
            <span className="step-label">Доставка</span>
          </div>
          <div className="step-line" />
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <span className="step-number">3</span>
            <span className="step-label">Оплата</span>
          </div>
        </div>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            {/* Step 1: Address */}
            <div className={`form-section ${step === 1 ? 'active' : ''}`}>
              <h2>Адрес доставки</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Город *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                    placeholder="Москва"
                  />
                </div>
                <div className="form-group">
                  <label>Почтовый индекс *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.postalCode}
                    onChange={e => setFormData({...formData, postalCode: e.target.value})}
                    placeholder="123456"
                  />
                </div>
                <div className="form-group full">
                  <label>Улица *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.street}
                    onChange={e => setFormData({...formData, street: e.target.value})}
                    placeholder="ул. Примерная"
                  />
                </div>
                <div className="form-group">
                  <label>Дом *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.house}
                    onChange={e => setFormData({...formData, house: e.target.value})}
                    placeholder="1"
                  />
                </div>
                <div className="form-group">
                  <label>Квартира</label>
                  <input 
                    type="text" 
                    value={formData.apartment}
                    onChange={e => setFormData({...formData, apartment: e.target.value})}
                    placeholder="101"
                  />
                </div>
              </div>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => setStep(2)}
              >
                Продолжить
              </button>
            </div>

            {/* Step 2: Delivery */}
            <div className={`form-section ${step === 2 ? 'active' : ''}`}>
              <h2>Способ доставки</h2>
              <div className="delivery-options">
                <label className={`delivery-option ${formData.deliveryMethod === 'standard' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="delivery" 
                    value="standard"
                    checked={formData.deliveryMethod === 'standard'}
                    onChange={e => setFormData({...formData, deliveryMethod: e.target.value})}
                  />
                  <div className="option-content">
                    <Truck size={24} />
                    <div>
                      <strong>Стандартная доставка</strong>
                      <p>10-14 рабочих дней</p>
                    </div>
                  </div>
                  <span className="option-price">Бесплатно</span>
                </label>
                <label className={`delivery-option ${formData.deliveryMethod === 'express' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="delivery" 
                    value="express"
                    checked={formData.deliveryMethod === 'express'}
                    onChange={e => setFormData({...formData, deliveryMethod: e.target.value})}
                  />
                  <div className="option-content">
                    <Truck size={24} />
                    <div>
                      <strong>Экспресс-доставка</strong>
                      <p>5-7 рабочих дней</p>
                    </div>
                  </div>
                  <span className="option-price">+500 ₽</span>
                </label>
              </div>
              <div className="form-buttons">
                <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                  Назад
                </button>
                <button type="button" className="btn btn-primary" onClick={() => setStep(3)}>
                  Продолжить
                </button>
              </div>
            </div>

            {/* Step 3: Payment */}
            <div className={`form-section ${step === 3 ? 'active' : ''}`}>
              <h2>Способ оплаты</h2>
              <div className="payment-options">
                <label className={`payment-option ${formData.paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={e => setFormData({...formData, paymentMethod: e.target.value})}
                  />
                  <div className="option-content">
                    <CreditCard size={24} />
                    <div>
                      <strong>Банковская карта</strong>
                      <p>Visa, Mastercard, МИР</p>
                    </div>
                  </div>
                </label>
                <label className={`payment-option ${formData.paymentMethod === 'balance' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="balance"
                    checked={formData.paymentMethod === 'balance'}
                    onChange={e => setFormData({...formData, paymentMethod: e.target.value})}
                  />
                  <div className="option-content">
                    <CreditCard size={24} />
                    <div>
                      <strong>Баланс кошелька</strong>
                      <p>Доступно: 0 ₽</p>
                    </div>
                  </div>
                </label>
              </div>
              <div className="form-buttons">
                <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>
                  Назад
                </button>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Оформляем...' : `Оплатить ${(total + (formData.deliveryMethod === 'express' ? 500 : 0)).toLocaleString('ru-RU')} ₽`}
                </button>
              </div>
            </div>
          </form>

          {/* Order Summary */}
          <div className="order-summary">
            <h2>Ваш заказ</h2>
            <div className="summary-items">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="summary-item">
                  <img src={product.images[0]} alt={product.title} />
                  <div className="item-info">
                    <span className="item-name">{product.title}</span>
                    <span className="item-qty">×{quantity}</span>
                  </div>
                  <span className="item-price">
                    {(product.price * quantity).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              ))}
            </div>
            <div className="summary-totals">
              <div className="summary-row">
                <span>Товары</span>
                <span>{subtotal.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="summary-row">
                <span>Комиссия (2%)</span>
                <span>{buyerCommission.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="summary-row">
                <span>Доставка</span>
                <span>{formData.deliveryMethod === 'express' ? '500 ₽' : 'Бесплатно'}</span>
              </div>
              <div className="summary-row total">
                <span>Итого</span>
                <span>{(total + (formData.deliveryMethod === 'express' ? 500 : 0)).toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .checkout-page {
          padding: 24px 0 60px;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-medium);
          margin-bottom: 24px;
          transition: color 0.2s;
        }
        .back-link:hover {
          color: var(--primary);
        }
        .checkout-page h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .checkout-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }
        .step {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-light);
        }
        .step.active {
          color: var(--primary);
        }
        .step.completed {
          color: var(--success);
        }
        .step-number {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
        }
        .step.active .step-number {
          background: var(--primary);
          color: white;
        }
        .step.completed .step-number {
          background: var(--success);
          color: white;
        }
        .step-label {
          font-weight: 500;
        }
        .step-line {
          width: 60px;
          height: 2px;
          background: var(--border);
        }
        .checkout-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 32px;
          align-items: start;
        }
        .checkout-form {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 32px;
        }
        .form-section {
          display: none;
        }
        .form-section.active {
          display: block;
        }
        .form-section h2 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 32px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group.full {
          grid-column: 1 / -1;
        }
        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
        }
        .form-group input {
          padding: 14px 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 15px;
          transition: all 0.2s;
        }
        .form-group input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .delivery-options,
        .payment-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        .delivery-option,
        .payment-option {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border: 2px solid var(--border);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s;
        }
        .delivery-option:hover,
        .payment-option:hover {
          border-color: var(--primary);
        }
        .delivery-option.selected,
        .payment-option.selected {
          border-color: var(--primary);
          background: rgba(230, 57, 70, 0.05);
        }
        .delivery-option input,
        .payment-option input {
          display: none;
        }
        .option-content {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
        }
        .option-content svg {
          color: var(--secondary);
        }
        .option-content strong {
          display: block;
          font-weight: 600;
          color: var(--text-dark);
        }
        .option-content p {
          font-size: 13px;
          color: var(--text-light);
          margin: 0;
        }
        .option-price {
          font-weight: 600;
          color: var(--success);
        }
        .form-buttons {
          display: flex;
          gap: 12px;
        }
        .btn {
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 15px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover:not(:disabled) {
          background: var(--primary-dark);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .btn-secondary {
          background: transparent;
          color: var(--text-medium);
          border: 2px solid var(--border);
        }
        .btn-secondary:hover {
          border-color: var(--text-medium);
        }
        .order-summary {
          position: sticky;
          top: 96px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
        }
        .order-summary h2 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .summary-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 20px;
          max-height: 300px;
          overflow-y: auto;
        }
        .summary-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .summary-item img {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .summary-item .item-info {
          flex: 1;
          min-width: 0;
        }
        .item-name {
          display: block;
          font-size: 13px;
          color: var(--text-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .item-qty {
          font-size: 12px;
          color: var(--text-light);
        }
        .item-price {
          font-weight: 600;
          font-size: 14px;
        }
        .summary-totals {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--text-medium);
        }
        .summary-row.total {
          padding-top: 16px;
          border-top: 1px solid var(--border);
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
        }
        .summary-row.total span:last-child {
          color: var(--primary);
        }
        .empty-checkout {
          text-align: center;
          padding: 80px 20px;
        }
        .empty-checkout h2 {
          margin-bottom: 24px;
        }
        @media (max-width: 992px) {
          .checkout-layout {
            grid-template-columns: 1fr;
          }
          .order-summary {
            position: static;
            order: -1;
          }
          .checkout-steps {
            flex-wrap: wrap;
          }
          .step-line {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full {
            grid-column: 1;
          }
        }
      `}</style>
    </div>
  )
}
