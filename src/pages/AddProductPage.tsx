import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { ArrowLeft, Plus, Trash2, Image as ImageIcon } from 'lucide-react'
import { categories } from '../data/mockData'

export default function AddProductPage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    stock: '1',
    images: [''],
    characteristics: [{ key: '', value: '' }]
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user || user.role !== 'seller') {
      showToast('error', 'Только продавцы могут добавлять товары')
      return
    }

    setIsSubmitting(true)

    const newProduct = {
      id: id || `prod_${Date.now()}`,
      sellerId: user.id,
      sellerName: user.sellerData?.storeName || user.name,
      title: formData.title,
      description: formData.description,
      price: parseInt(formData.price),
      images: formData.images.filter(Boolean),
      category: formData.category,
      characteristics: formData.characteristics.reduce((acc, char) => {
        if (char.key && char.value) {
          acc[char.key] = char.value
        }
        return acc
      }, {} as Record<string, string>),
      stock: parseInt(formData.stock) || 1,
      rating: 0,
      reviewsCount: 0,
      salesCount: 0,
      createdAt: new Date().toISOString()
    }

    // Save to localStorage
    const storedProducts = JSON.parse(localStorage.getItem('chinamart_products') || '[]')
    if (id) {
      const idx = storedProducts.findIndex((p: { id: string }) => p.id === id)
      if (idx !== -1) {
        storedProducts[idx] = newProduct
      }
    } else {
      storedProducts.push(newProduct)
    }
    localStorage.setItem('chinamart_products', JSON.stringify(storedProducts))

    setIsSubmitting(false)
    showToast('success', id ? 'Товар обновлён' : 'Товар добавлен')
    navigate('/seller')
  }

  const addImage = () => {
    setFormData(prev => ({ ...prev, images: [...prev.images, ''] }))
  }

  const removeImage = (idx: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== idx)
    }))
  }

  const updateImage = (idx: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.map((img, i) => i === idx ? value : img)
    }))
  }

  const addCharacteristic = () => {
    setFormData(prev => ({
      ...prev,
      characteristics: [...prev.characteristics, { key: '', value: '' }]
    }))
  }

  const removeCharacteristic = (idx: number) => {
    setFormData(prev => ({
      ...prev,
      characteristics: prev.characteristics.filter((_, i) => i !== idx)
    }))
  }

  const updateCharacteristic = (idx: number, field: 'key' | 'value', value: string) => {
    setFormData(prev => ({
      ...prev,
      characteristics: prev.characteristics.map((char, i) => 
        i === idx ? { ...char, [field]: value } : char
      )
    }))
  }

  return (
    <div className="add-product-page">
      <div className="container">
        <button onClick={() => navigate('/seller')} className="back-link">
          <ArrowLeft size={20} />
          Назад в кабинет
        </button>

        <h1>{id ? 'Редактирование товара' : 'Добавление товара'}</h1>

        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Основная информация</h2>

            <div className="form-group">
              <label>Название товара *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                placeholder="Например: Беспроводные наушники"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Цена *</label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: e.target.value})}
                  placeholder="1990"
                />
              </div>
              <div className="form-group">
                <label>На складе *</label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.stock}
                  onChange={e => setFormData({...formData, stock: e.target.value})}
                  placeholder="10"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Категория *</label>
              <select
                required
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Выберите категорию</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Описание</label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                placeholder="Подробное описание товара..."
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Фотографии</h2>
            <p className="section-note">URL изображений товара (до 5 штук)</p>

            <div className="images-list">
              {formData.images.map((img, idx) => (
                <div key={idx} className="image-input">
                  <ImageIcon size={20} />
                  <input
                    type="url"
                    value={img}
                    onChange={e => updateImage(idx, e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                  {formData.images.length > 1 && (
                    <button type="button" onClick={() => removeImage(idx)}>
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {formData.images.length < 5 && (
              <button type="button" className="btn-add" onClick={addImage}>
                <Plus size={18} />
                Добавить фото
              </button>
            )}
          </div>

          <div className="form-section">
            <h2>Характеристики</h2>
            <p className="section-note">Дополнительные характеристики товара</p>

            <div className="characteristics-list">
              {formData.characteristics.map((char, idx) => (
                <div key={idx} className="characteristic-input">
                  <input
                    type="text"
                    value={char.key}
                    onChange={e => updateCharacteristic(idx, 'key', e.target.value)}
                    placeholder="Например: Бренд"
                  />
                  <input
                    type="text"
                    value={char.value}
                    onChange={e => updateCharacteristic(idx, 'value', e.target.value)}
                    placeholder="Например: Xiaomi"
                  />
                  {formData.characteristics.length > 1 && (
                    <button type="button" onClick={() => removeCharacteristic(idx)}>
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button type="button" className="btn-add" onClick={addCharacteristic}>
              <Plus size={18} />
              Добавить характеристику
            </button>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/seller')}>
              Отмена
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Сохранение...' : (id ? 'Сохранить изменения' : 'Добавить товар')}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .add-product-page {
          padding: 24px 0 60px;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-medium);
          margin-bottom: 24px;
          background: none;
          font-size: 14px;
        }
        .back-link:hover {
          color: var(--primary);
        }
        .add-product-page h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .product-form {
          max-width: 700px;
        }
        .form-section {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
          margin-bottom: 24px;
        }
        .form-section h2 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .section-note {
          font-size: 13px;
          color: var(--text-light);
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group:last-child {
          margin-bottom: 0;
        }
        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 15px;
          transition: all 0.2s;
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .images-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        .image-input {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .image-input svg {
          color: var(--text-light);
          flex-shrink: 0;
        }
        .image-input input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 14px;
        }
        .image-input button {
          padding: 10px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .image-input button:hover {
          background: var(--primary);
          color: white;
        }
        .btn-add {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .btn-add:hover {
          background: var(--border);
          color: var(--text-dark);
        }
        .characteristics-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        .characteristic-input {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 12px;
          align-items: center;
        }
        .characteristic-input input {
          padding: 12px 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 14px;
        }
        .characteristic-input input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .characteristic-input button {
          padding: 10px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .characteristic-input button:hover {
          background: var(--primary);
          color: white;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
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
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .characteristic-input {
            grid-template-columns: 1fr;
          }
          .characteristic-input input:last-of-type {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
