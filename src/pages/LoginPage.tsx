import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const { login } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await login(formData.email, formData.password)
      showToast('success', 'Добро пожаловать!')
      navigate('/')
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Вход в аккаунт</h1>
          <p>Войдите, чтобы получить доступ к покупкам и продажам</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <Mail size={20} />
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="mail@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Пароль</label>
            <div className="input-wrapper">
              <Lock size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
                placeholder="Введите пароль"
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Вход...' : 'Войти'}
          </button>
        </form>

        <div className="auth-footer">
          <p>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
        </div>
      </div>

      <style>{`
        .auth-page {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }
        .auth-container {
          width: 100%;
          max-width: 420px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 40px;
        }
        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .auth-header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .auth-header p {
          color: var(--text-light);
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .error-message {
          padding: 12px 16px;
          background: rgba(230, 57, 70, 0.1);
          border: 1px solid var(--primary);
          border-radius: var(--radius-sm);
          color: var(--primary);
          font-size: 14px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-wrapper svg:first-child {
          position: absolute;
          left: 14px;
          color: var(--text-light);
        }
        .input-wrapper input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 15px;
          transition: all 0.2s;
        }
        .input-wrapper input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .toggle-password {
          position: absolute;
          right: 14px;
          background: none;
          color: var(--text-light);
          padding: 4px;
        }
        .toggle-password:hover {
          color: var(--text-dark);
        }
        .btn {
          width: 100%;
          padding: 16px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 16px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
          margin-top: 8px;
        }
        .btn-primary:hover:not(:disabled) {
          background: var(--primary-dark);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .auth-footer {
          text-align: center;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }
        .auth-footer p {
          color: var(--text-medium);
        }
        .auth-footer a {
          color: var(--primary);
          font-weight: 500;
        }
        .auth-footer a:hover {
          text-decoration: underline;
        }
        .demo-accounts {
          margin-top: 24px;
          padding: 16px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          text-align: center;
        }
        .demo-accounts p {
          font-size: 13px;
          color: var(--text-light);
          margin-bottom: 12px;
        }
        .demo-list {
          display: flex;
          gap: 8px;
        }
        .demo-list button {
          flex: 1;
          padding: 10px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 13px;
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .demo-list button:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
      `}</style>
    </div>
  )
}
