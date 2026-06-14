import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { User, Mail, Phone, Store, Save } from 'lucide-react'

export default function ProfilePage() {
  const { user, updateUser } = useAuth()
  const { showToast } = useToast()

  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!user) {
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    updateUser({
      name: formData.name,
      phone: formData.phone
    })

    setIsSubmitting(false)
    showToast('success', 'Профиль обновлён')
  }

  return (
    <div className="profile-page">
      <div className="container">
        <h1>Личный кабинет</h1>

        <div className="profile-grid">
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label>
                  <User size={18} />
                  Имя
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Mail size={18} />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="disabled"
                />
              </div>

              <div className="form-group">
                <label>
                  <Phone size={18} />
                  Телефон
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                <Save size={18} />
                {isSubmitting ? 'Сохранение...' : 'Сохранить'}
              </button>
            </form>
          </div>

          {user.role === 'seller' && user.sellerData && (
            <div className="profile-card">
              <h3>
                <Store size={20} />
                Информация о магазине
              </h3>

              <div className="seller-info">
                <div className="info-row">
                  <span>Название</span>
                  <strong>{user.sellerData.storeName || 'Не указано'}</strong>
                </div>
                <div className="info-row">
                  <span>Категория</span>
                  <strong>{user.sellerData.category || 'Не указана'}</strong>
                </div>
                <div className="info-row">
                  <span>Рейтинг</span>
                  <strong>{user.sellerData.rating.toFixed(1)} ★</strong>
                </div>
                <div className="info-row">
                  <span>Продаж</span>
                  <strong>{user.sellerData.salesCount}</strong>
                </div>
                <div className="info-row">
                  <span>Дата регистрации</span>
                  <strong>{new Date(user.sellerData.createdAt).toLocaleDateString('ru-RU')}</strong>
                </div>
              </div>
            </div>
          )}

          <div className="profile-card">
            <h3>Безопасность</h3>
            <button className="btn btn-secondary">Изменить пароль</button>
          </div>
        </div>
      </div>

      <style>{`
        .profile-page {
          padding: 32px 0 60px;
        }
        .profile-page h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .profile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }
        .profile-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
        }
        .profile-card h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .profile-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
        }
        .avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          font-size: 24px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .profile-header h2 {
          font-size: 20px;
          margin-bottom: 4px;
        }
        .profile-header p {
          color: var(--text-light);
          font-size: 14px;
        }
        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
        }
        .form-group label svg {
          color: var(--text-light);
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
        .form-group input.disabled {
          background: var(--bg-light);
          color: var(--text-light);
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
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
          border-color: var(--primary);
          color: var(--primary);
        }
        .seller-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-row span {
          color: var(--text-light);
        }
        .info-row strong {
          color: var(--text-dark);
        }
      `}</style>
    </div>
  )
}
