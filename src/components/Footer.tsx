import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-inner container">
				<div className="footer-grid">
					<div className="footer-brand">
						<Link to="/" className="logo">
							<div className="logo-icon">CH</div>
							<span>ChinaHub</span>
						</Link>
						<p>
							Маркетплейс проверенных товаров из Китая. Прямые поставки от
							надёжных продавцов с гарантией качества и быстрой доставкой.
						</p>
					</div>

					<div className="footer-section">
						<h4>Покупателям</h4>
						<nav className="footer-links">
							<Link to="/catalog">Каталог</Link>
							<Link to="/cart">Корзина</Link>
							<Link to="/orders">Мои заказы</Link>
							<Link to="/register">Регистрация</Link>
						</nav>
					</div>

					<div className="footer-section">
						<h4>Продавцам</h4>
						<nav className="footer-links">
							<Link to="/register">Стать продавцом</Link>
							<Link to="/seller">Кабинет продавца</Link>
							<Link to="/seller/add-product">Добавить товар</Link>
						</nav>
					</div>

					<div className="footer-section">
						<h4>Помощь</h4>
						<nav className="footer-links">
							<a href="#">Как заказать</a>
							<a href="#">Доставка и оплата</a>
							<a href="#">Возврат товара</a>
							<a href="#">Контакты</a>
						</nav>
					</div>
				</div>

				<div className="footer-bottom">
					<p>© 2026 ChinaHub. Все права защищены.</p>
					<div className="footer-socials">
						<a href="#" aria-label="Telegram">
							📱
						</a>
						<a href="#" aria-label="VK">
							💬
						</a>
						<a href="#" aria-label="WhatsApp">
							💬
						</a>
					</div>
				</div>
			</div>

			<style>{`
        .footer {
          background: var(--secondary);
          color: white;
          padding: 60px 0 30px;
          margin-top: auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--primary);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
        }
        .footer-brand p {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          line-height: 1.7;
        }
        .footer-section h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: var(--accent);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-bottom p {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
        }
        .footer-socials a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.2s;
        }
        .footer-socials a:hover {
          background: var(--primary);
          transform: translateY(-2px);
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 24px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
		</footer>
	);
}
