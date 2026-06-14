import { Link } from "react-router-dom";
import { categories, products } from "../data/mockData";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { Check, TrendingUp, CreditCard, Shield } from "lucide-react";

export default function HomePage() {
	const popularProducts = products.slice(0, 4);

	return (
		<div className="home-page">
			{/* Hero Section */}
			<section className="hero">
				<div className="hero-inner container">
					<div className="hero-content">
						<h1>
							Маркетплейс проверенных товаров из <span>Китая</span>
						</h1>
						<p>
							Прямые поставки от надёжных продавцов. Без посредников — выгодные
							цены для покупателей и широкая аудитория для продавцов.
						</p>

						<div className="hero-buttons">
							<Link to="/catalog" className="btn-hero-primary">
								Начать покупки
							</Link>
							<Link to="/register" className="btn-hero-secondary">
								Стать продавцом
							</Link>
						</div>

						<div className="hero-stats">
							<div className="hero-stat">
								<div className="stat-number">2.5M+</div>
								<div className="stat-label">товаров в каталоге</div>
							</div>
							<div className="hero-stat">
								<div className="stat-number">15 000+</div>
								<div className="stat-label">активных продавцов</div>
							</div>
							<div className="hero-stat">
								<div className="stat-number">98%</div>
								<div className="stat-label">довольных покупателей</div>
							</div>
						</div>
					</div>

					<div className="hero-visual">
						<div className="hero-image">
							<img
								src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
								alt="ChinaHub"
							/>
						</div>
						<div className="floating-card card-1">
							<div className="floating-icon success">
								<Check size={20} />
							</div>
							<div className="floating-text">
								<strong>Заказ доставлен</strong>
								Электроника, 5 дней
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Categories Section */}
			<section className="categories">
				<div className="container">
					<div className="section-header">
						<h2 className="section-title">Категории товаров</h2>
						<p className="section-subtitle">
							Выберите категорию и найдите нужный товар из тысяч предложений
						</p>
					</div>

					<div className="categories-grid">
						{categories.map((cat) => (
							<CategoryCard key={cat.id} category={cat} />
						))}
					</div>
				</div>
			</section>

			{/* Products Section */}
			<section className="products">
				<div className="container">
					<div className="products-header">
						<h2 className="section-title">Популярные товары</h2>
						<Link to="/catalog" className="view-all">
							Смотреть все →
						</Link>
					</div>

					<div className="products-grid">
						{popularProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</div>
			</section>

			{/* Seller Section */}
			<section className="seller-section">
				<div className="seller-inner container">
					<div className="seller-content">
						<h2>
							Станьте продавцом на <span>ChinaHub</span>
						</h2>
						<p>
							Получите доступ к миллионам покупателей. Регистрация бесплатная,
							комиссия только с успешных сделок.
						</p>

						<div className="seller-benefits">
							<div className="seller-benefit">
								<div className="benefit-icon">📊</div>
								<div className="benefit-text">
									<h4>Аналитика продаж</h4>
									<p>
										Отслеживайте статистику и поведение покупателей в реальном
										времени
									</p>
								</div>
							</div>
							<div className="seller-benefit">
								<div className="benefit-icon">🚚</div>
								<div className="benefit-text">
									<h4>Интеграция доставки</h4>
									<p>Автоматическая обработка заказов и отслеживание посылок</p>
								</div>
							</div>
							<div className="seller-benefit">
								<div className="benefit-icon">💳</div>
								<div className="benefit-text">
									<h4>Быстрые выплаты</h4>
									<p>Получите оплату на свой счёт в течение 3 рабочих дней</p>
								</div>
							</div>
						</div>

						<Link to="/register" className="btn btn-primary">
							Узнать больше
						</Link>
					</div>

					<div className="seller-image">
						<img
							src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
							alt="Seller"
						/>
					</div>
				</div>
			</section>

			{/* Commission Section */}
			<section className="commission">
				<div className="container">
					<div className="section-header">
						<h2 className="section-title">Прозрачные комиссии</h2>
						<p className="section-subtitle">
							Никаких скрытых платежей. Платите только за успешные сделки.
						</p>
					</div>

					<div className="commission-cards">
						<div className="commission-card primary">
							<div className="commission-icon">
								<TrendingUp size={32} />
							</div>
							<h3>Комиссия продавца</h3>
							<div className="percent">5%</div>
							<p>
								Взимается с суммы продажи. Чем больше объём — тем ниже процент.
							</p>
						</div>

						<div className="commission-card success">
							<div className="commission-icon">
								<Shield size={32} />
							</div>
							<h3>Комиссия покупателя</h3>
							<div className="percent">2%</div>
							<p>
								Защита покупателя и страхование доставки. Включено в стоимость.
							</p>
						</div>

						<div className="commission-card secondary">
							<div className="commission-icon">
								<CreditCard size={32} />
							</div>
							<h3>Без скрытых платежей</h3>
							<div className="percent">0 ₽</div>
							<p>
								Регистрация, размещение товаров и базовая аналитика — бесплатно.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Trust Section */}
			<section className="trust">
				<div className="container">
					<div className="section-header">
						<h2 className="section-title">Почему выбирают нас</h2>
					</div>

					<div className="trust-grid">
						<div className="trust-item">
							<div className="trust-icon">
								<Check size={24} />
							</div>
							<h4>Проверенные продавцы</h4>
							<p>Верификация каждого магазина перед началом работы</p>
						</div>
						<div className="trust-item">
							<div className="trust-icon">
								<Shield size={24} />
							</div>
							<h4>Безопасные платежи</h4>
							<p>Деньги хранятся на escrow до подтверждения получения</p>
						</div>
						<div className="trust-item">
							<div className="trust-icon">↩️</div>
							<h4>Легкий возврат</h4>
							<p>14 дней на возврат товара без лишних вопросов</p>
						</div>
						<div className="trust-item">
							<div className="trust-icon">💬</div>
							<h4>Поддержка 24/7</h4>
							<p>Отвечаем в течение часа в любое время суток</p>
						</div>
					</div>
				</div>
			</section>

			<style>{`
        /* Hero */
        .hero {
          background: linear-gradient(135deg, #1d3557 0%, #0d1b2a 100%);
          color: white;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(244, 162, 97, 0.15) 0%, transparent 70%);
          border-radius: 50%;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          width: 100%;
          max-width: 100%;
        }
        .hero-content h1 {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .hero-content h1 span {
          color: var(--accent);
        }
        .hero-content p {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 32px;
          max-width: 480px;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .btn-hero-primary {
          background: var(--primary);
          color: white;
          padding: 16px 32px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 16px;
          transition: all 0.25s;
        }
        .btn-hero-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(230, 57, 70, 0.4);
        }
        .btn-hero-secondary {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          color: white;
          padding: 16px 32px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 16px;
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.25s;
        }
        .btn-hero-secondary:hover {
          background: rgba(255,255,255,0.2);
        }
        .hero-stats {
          display: flex;
          gap: 40px;
        }
        .hero-stat {
          text-align: left;
        }
        .stat-number {
          font-size: 36px;
          font-weight: 700;
          color: var(--accent);
        }
        .stat-label {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          margin-top: 4px;
        }
        .hero-visual {
          position: relative;
        }
        .hero-image {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .hero-image img {
          width: 100%;
          display: block;
        }
        .floating-card {
          position: absolute;
          background: white;
          border-radius: var(--radius-md);
          padding: 16px;
          box-shadow: var(--shadow-lg);
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .card-1 {
          bottom: 20%;
          left: -10%;
        }
        .floating-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }
        .floating-icon.success {
          background: #e6f4ea;
          color: var(--success);
        }
        .floating-text {
          font-size: 13px;
        }
        .floating-text strong {
          display: block;
          font-size: 15px;
          margin-bottom: 2px;
        }

        /* Categories */
        .categories {
          padding: 60px 0;
          background: var(--bg-light);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 12px;
        }
        .section-subtitle {
          font-size: 17px;
          color: var(--text-medium);
          max-width: 560px;
          margin: 0 auto;
        }
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 16px;
          width: 100%;
          max-width: 100%;
        }

        /* Products */
        .products {
          padding: 80px 0;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        .products-header .section-title {
          margin-bottom: 0;
        }
        .view-all {
          color: var(--primary);
          font-weight: 600;
          transition: color 0.2s;
        }
        .view-all:hover {
          color: var(--primary-dark);
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 24px;
          width: 100%;
          max-width: 100%;
        }

        /* Seller Section */
        .seller-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .seller-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
          max-width: 100%;
        }
        .seller-content h2 {
          font-size: 40px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .seller-content h2 span {
          color: var(--primary);
        }
        .seller-content p {
          font-size: 17px;
          color: var(--text-medium);
          margin-bottom: 32px;
        }
        .seller-benefits {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }
        .seller-benefit {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
          background: var(--bg-light);
        }
        .benefit-text h4 {
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 4px;
        }
        .benefit-text p {
          font-size: 14px;
          color: var(--text-light);
          margin: 0;
        }
        .btn {
          display: inline-block;
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 15px;
          transition: all 0.25s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
        }
        .seller-image {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .seller-image img {
          width: 100%;
          display: block;
        }

        /* Commission */
        .commission {
          padding: 80px 0;
          background: var(--bg-white);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .commission-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-top: 48px;
          width: 100%;
          max-width: 100%;
        }
        .commission-card {
          background: var(--bg-light);
          border-radius: var(--radius-lg);
          padding: 36px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .commission-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }
        .commission-card.primary::before { background: var(--primary); }
        .commission-card.success::before { background: var(--success); }
        .commission-card.secondary::before { background: var(--secondary); }
        .commission-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin: 0 auto 24px;
        }
        .commission-card.primary .commission-icon {
          background: rgba(230, 57, 70, 0.1);
          color: var(--primary);
        }
        .commission-card.success .commission-icon {
          background: rgba(42, 157, 143, 0.1);
          color: var(--success);
        }
        .commission-card.secondary .commission-icon {
          background: rgba(29, 53, 87, 0.1);
          color: var(--secondary);
        }
        .commission-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .commission-card .percent {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .commission-card.primary .percent { color: var(--primary); }
        .commission-card.success .percent { color: var(--success); }
        .commission-card.secondary .percent { color: var(--secondary); }
        .commission-card p {
          color: var(--text-medium);
          font-size: 15px;
          line-height: 1.6;
        }

        /* Trust */
        .trust {
          padding: 60px 0;
          background: var(--bg-light);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          width: 100%;
          max-width: 100%;
        }
        .trust-item {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          padding: 28px;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .trust-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
          margin: 0 auto 16px;
        }
        .trust-item h4 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 6px;
        }
        .trust-item p {
          font-size: 14px;
          color: var(--text-light);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
          .categories-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
        }
        @media (max-width: 992px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content h1 {
            font-size: 36px;
          }
          .hero-content p {
            margin: 0 auto 32px;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-stats {
            justify-content: center;
          }
          .hero-visual {
            display: none;
          }
          .seller-inner {
            grid-template-columns: 1fr;
          }
          .commission-cards {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
          .trust-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
        @media (max-width: 768px) {
          .hero {
            padding: 48px 0;
          }
          .hero-content h1 {
            font-size: 28px;
          }
          .hero-stats {
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }
          .hero-stat {
            text-align: center;
          }
          .stat-number {
            font-size: 28px;
          }
          .btn-hero-primary, .btn-hero-secondary {
            width: 100%;
            text-align: center;
          }
          .categories {
            padding: 40px 0;
          }
          .section-title {
            font-size: 28px;
          }
          .categories-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 12px;
          }
          .products {
            padding: 48px 0;
          }
          .products-header {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .seller-section {
            padding: 48px 0;
          }
          .seller-content h2 {
            font-size: 28px;
          }
          .commission {
            padding: 48px 0;
          }
          .commission-card {
            padding: 28px 20px;
          }
          .commission-card .percent {
            font-size: 40px;
          }
          .trust {
            padding: 40px 0;
          }
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
		</div>
	);
}
