import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, products } from "../data/mockData";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import {
	ShoppingCart,
	Heart,
	Check,
	Minus,
	Plus,
	Star,
	Truck,
	Shield,
	RotateCcw,
} from "lucide-react";

export default function ProductPage() {
	const { id } = useParams<{ id: string }>();
	const product = getProductById(id || "");
	const { addItem, isInCart } = useCart();
	const { showToast } = useToast();
	const [quantity, setQuantity] = useState(1);
	const [activeImage, setActiveImage] = useState(0);

	if (!product) {
		return (
			<div
				className="container"
				style={{ padding: "60px 0", textAlign: "center" }}
			>
				<h2>Товар не найден</h2>
				<Link to="/catalog" className="btn btn-primary">
					Вернуться в каталог
				</Link>
			</div>
		);
	}

	const inCart = isInCart(product.id);

	// Рекомендации: похожие товары из той же категории
	const relatedProducts = products
		.filter((p) => p.category === product.category && p.id !== product.id)
		.slice(0, 4);

	// Рекомендации: часто покупают вместе (случайные товары из разных категорий)
	const frequentlyBoughtTogether = products
		.filter((p) => p.id !== product.id)
		.sort(() => Math.random() - 0.5)
		.slice(0, 4);

	// Рекомендации: популярные товары (по продажам)
	const popularProducts = [...products]
		.filter((p) => p.id !== product.id)
		.sort((a, b) => b.salesCount - a.salesCount)
		.slice(0, 4);

	// Рекомендации: товары того же продавца
	const sameSellerProducts = products
		.filter((p) => p.sellerId === product.sellerId && p.id !== product.id)
		.slice(0, 4);

	const handleAddToCart = () => {
		if (product.stock > 0) {
			addItem(product, quantity);
			showToast("success", `Товар добавлен в корзину (${quantity} шт.)`);
		}
	};

	return (
		<div className="product-page">
			<div className="container">
				{/* Breadcrumbs */}
				<nav className="breadcrumbs">
					<Link to="/">Главная</Link>
					<span>/</span>
					<Link to="/catalog">Каталог</Link>
					<span>/</span>
					<Link to={`/catalog?category=${product.category}`}>
						{product.category}
					</Link>
					<span>/</span>
					<span>{product.title.slice(0, 30)}...</span>
				</nav>

				<div className="product-main">
					{/* Images */}
					<div className="product-images">
						<div className="main-image">
							<img src={product.images[activeImage]} alt={product.title} />
							{product.badge && (
								<span className={`badge badge-${product.badge}`}>
									{product.badge === "sale"
										? `-${Math.round((1 - product.price / (product.oldPrice || product.price)) * 100)}%`
										: product.badge === "hit"
											? "Хит"
											: "Новинка"}
								</span>
							)}
						</div>
						<div className="thumbnail-list">
							{product.images.map((img, idx) => (
								<button
									key={idx}
									className={`thumbnail ${activeImage === idx ? "active" : ""}`}
									onClick={() => setActiveImage(idx)}
								>
									<img src={img} alt={`Thumbnail ${idx + 1}`} />
								</button>
							))}
						</div>
					</div>

					{/* Info */}
					<div className="product-info">
						<div className="product-seller">
							<span className="seller-avatar">{product.sellerName[0]}</span>
							<Link to={`/catalog?seller=${product.sellerId}`}>
								{product.sellerName}
							</Link>
						</div>

						<h1>{product.title}</h1>

						<div className="product-rating">
							<div className="stars">
								{[1, 2, 3, 4, 5].map((i) => (
									<Star
										key={i}
										size={18}
										fill={i <= Math.round(product.rating) ? "#f4a261" : "none"}
										color={i <= Math.round(product.rating) ? "#f4a261" : "#ccc"}
									/>
								))}
							</div>
							<span className="rating-value">{product.rating}</span>
							<span className="rating-count">
								({product.reviewsCount.toLocaleString()} отзывов)
							</span>
							<span className="sales-count">
								• {product.salesCount.toLocaleString()} продано
							</span>
						</div>

						<div className="product-price-section">
							<div className="price">
								<span className="current">
									{product.price.toLocaleString("ru-RU")} ₽
								</span>
								{product.oldPrice && (
									<span className="old">
										{product.oldPrice.toLocaleString("ru-RU")} ₽
									</span>
								)}
							</div>
							<span className="commission-note">
								+2% комиссия покупателя при оплате
							</span>
						</div>

						<div className="product-stock">
							{product.stock > 0 ? (
								<span className="in-stock">
									✓ В наличии ({product.stock} шт.)
								</span>
							) : (
								<span className="out-stock">✕ Нет в наличии</span>
							)}
						</div>

						<div className="quantity-selector">
							<span>Количество:</span>
							<div className="quantity-controls">
								<button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
									<Minus size={16} />
								</button>
								<input
									type="number"
									value={quantity}
									onChange={(e) =>
										setQuantity(Math.max(1, parseInt(e.target.value) || 1))
									}
									min={1}
									max={product.stock}
								/>
								<button
									onClick={() =>
										setQuantity((q) => Math.min(product.stock, q + 1))
									}
								>
									<Plus size={16} />
								</button>
							</div>
						</div>

						<div className="product-actions">
							<button
								className={`btn-add-cart ${inCart ? "in-cart" : ""}`}
								onClick={handleAddToCart}
								disabled={product.stock === 0}
							>
								{inCart ? <Check size={20} /> : <ShoppingCart size={20} />}
								{inCart ? "В корзине" : "В корзину"}
							</button>
							<button className="btn-wishlist">
								<Heart size={20} />
							</button>
						</div>

						<div className="delivery-info">
							<div className="delivery-item">
								<Truck size={20} />
								<div>
									<strong>Доставка</strong>
									<p>5-7 рабочих дней</p>
								</div>
							</div>
							<div className="delivery-item">
								<Shield size={20} />
								<div>
									<strong>Гарантия</strong>
									<p>Защита покупателя</p>
								</div>
							</div>
							<div className="delivery-item">
								<RotateCcw size={20} />
								<div>
									<strong>Возврат</strong>
									<p>14 дней</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Description & Characteristics */}
				<div className="product-details">
					<div className="details-section">
						<h2>Описание</h2>
						<p>{product.description}</p>
					</div>

					<div className="details-section">
						<h2>Характеристики</h2>
						<table className="characteristics">
							<tbody>
								{Object.entries(product.characteristics).map(([key, value]) => (
									<tr key={key}>
										<th>{key}</th>
										<td>{value}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Recommendations */}
				<div className="recommendations">
					{sameSellerProducts.length > 0 && (
						<div className="recommendation-section">
							<div className="recommendation-header">
								<span className="rec-badge">🏪 Другие товары продавца</span>
							</div>
							<div className="recommendation-grid">
								{sameSellerProducts.map((p) => (
									<Link
										key={p.id}
										to={`/product/${p.id}`}
										className="recommendation-card"
									>
										<div className="rec-image">
											<img src={p.images[0]} alt={p.title} />
										</div>
										<div className="rec-info">
											<span className="rec-title">{p.title}</span>
											<div className="rec-footer">
												<span className="rec-price">
													{p.price.toLocaleString("ru-RU")} ₽
												</span>
												<span className="rec-rating">★ {p.rating}</span>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					)}
					{frequentlyBoughtTogether.length > 0 && (
						<div className="recommendation-section">
							<div className="recommendation-header">
								<span className="rec-badge hot">🔥 Часто покупают вместе</span>
							</div>
							<div className="recommendation-grid">
								{frequentlyBoughtTogether.map((p) => (
									<Link
										key={p.id}
										to={`/product/${p.id}`}
										className="recommendation-card"
									>
										<div className="rec-image">
											<img src={p.images[0]} alt={p.title} />
										</div>
										<div className="rec-info">
											<span className="rec-title">{p.title}</span>
											<div className="rec-footer">
												<span className="rec-price">
													{p.price.toLocaleString("ru-RU")} ₽
												</span>
												<span className="rec-rating">★ {p.rating}</span>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					)}
					{relatedProducts.length > 0 && (
						<div className="recommendation-section">
							<div className="recommendation-header">
								<span className="rec-badge">👆 Похожие товары</span>
							</div>
							<div className="recommendation-grid">
								{relatedProducts.map((p) => (
									<Link
										key={p.id}
										to={`/product/${p.id}`}
										className="recommendation-card"
									>
										<div className="rec-image">
											<img src={p.images[0]} alt={p.title} />
										</div>
										<div className="rec-info">
											<span className="rec-title">{p.title}</span>
											<div className="rec-footer">
												<span className="rec-price">
													{p.price.toLocaleString("ru-RU")} ₽
												</span>
												<span className="rec-rating">★ {p.rating}</span>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					)}
					{popularProducts.length > 0 && (
						<div className="recommendation-section">
							<div className="recommendation-header">
								<span className="rec-badge">⭐ Популярные товары</span>
							</div>
							<div className="recommendation-grid">
								{popularProducts.map((p) => (
									<Link
										key={p.id}
										to={`/product/${p.id}`}
										className="recommendation-card"
									>
										<div className="rec-image">
											<img src={p.images[0]} alt={p.title} />
										</div>
										<div className="rec-info">
											<span className="rec-title">{p.title}</span>
											<div className="rec-footer">
												<span className="rec-price">
													{p.price.toLocaleString("ru-RU")} ₽
												</span>
												<span className="rec-rating">★ {p.rating}</span>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</div>

			<style>{`
        .product-page {
          padding: 24px 0 60px;
        }
        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-light);
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .breadcrumbs a {
          color: var(--text-light);
        }
        .breadcrumbs a:hover {
          color: var(--primary);
        }
        .product-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .product-images {
          position: sticky;
          top: 96px;
          height: fit-content;
        }
        .main-image {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--bg-light);
          margin-bottom: 16px;
        }
        .main-image img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
        }
        .badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: white;
        }
        .badge-sale { background: var(--primary); }
        .badge-hit { background: var(--accent); }
        .badge-new { background: var(--success); }
        .thumbnail-list {
          display: flex;
          gap: 12px;
        }
        .thumbnail {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 2px solid var(--border);
          padding: 0;
          background: none;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .thumbnail.active {
          border-color: var(--primary);
        }
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-info {
          padding-top: 8px;
        }
        .product-seller {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          font-size: 14px;
        }
        .seller-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--secondary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .product-seller a {
          color: var(--text-medium);
        }
        .product-seller a:hover {
          color: var(--primary);
        }
        .product-info h1 {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .product-rating {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .stars {
          display: flex;
          gap: 2px;
        }
        .rating-value {
          font-weight: 600;
          color: var(--text-dark);
        }
        .rating-count, .sales-count {
          color: var(--text-light);
          font-size: 14px;
        }
        .product-price-section {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }
        .price {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 8px;
        }
        .price .current {
          font-size: 36px;
          font-weight: 800;
          color: var(--primary);
        }
        .price .old {
          font-size: 20px;
          color: var(--text-light);
          text-decoration: line-through;
        }
        .commission-note {
          font-size: 13px;
          color: var(--text-light);
        }
        .product-stock {
          margin-bottom: 24px;
        }
        .in-stock {
          color: var(--success);
          font-weight: 500;
        }
        .out-stock {
          color: var(--primary);
          font-weight: 500;
        }
        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .quantity-selector > span {
          font-weight: 500;
        }
        .quantity-controls {
          display: flex;
          align-items: center;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
        }
        .quantity-controls button {
          width: 40px;
          height: 40px;
          background: none;
          color: var(--text-medium);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .quantity-controls button:hover {
          color: var(--primary);
        }
        .quantity-controls input {
          width: 60px;
          height: 40px;
          border: none;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
        }
        .quantity-controls input::-webkit-inner-spin-button,
        .quantity-controls input::-webkit-outer-spin-button {
          -webkit-appearance: none;
        }
        .product-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
        }
        .btn-add-cart {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 32px;
          background: var(--primary);
          color: white;
          border-radius: var(--radius-md);
          font-size: 16px;
          font-weight: 600;
          transition: all 0.2s;
        }
        .btn-add-cart:hover:not(:disabled) {
          background: var(--primary-dark);
        }
        .btn-add-cart.in-cart {
          background: var(--success);
        }
        .btn-add-cart:disabled {
          background: var(--text-light);
          cursor: not-allowed;
        }
        .btn-wishlist {
          width: 52px;
          height: 52px;
          border: 2px solid var(--border);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .btn-wishlist:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .delivery-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px;
          background: var(--bg-light);
          border-radius: var(--radius-md);
        }
        .delivery-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .delivery-item svg {
          color: var(--secondary);
          flex-shrink: 0;
        }
        .delivery-item strong {
          display: block;
          font-size: 14px;
          color: var(--text-dark);
        }
        .delivery-item p {
          font-size: 13px;
          color: var(--text-light);
          margin: 0;
        }
        .product-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 60px;
        }
        .details-section {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
        }
        .details-section h2 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--text-dark);
        }
        .details-section p {
          color: var(--text-medium);
          line-height: 1.7;
        }
        .characteristics {
          width: 100%;
          border-collapse: collapse;
        }
        .characteristics tr {
          border-bottom: 1px solid var(--border);
        }
        .characteristics tr:last-child {
          border-bottom: none;
        }
        .characteristics th,
        .characteristics td {
          padding: 12px 0;
          text-align: left;
        }
        .characteristics th {
          width: 40%;
          font-weight: 500;
          color: var(--text-light);
        }
        .characteristics td {
          color: var(--text-dark);
        }
        .recommendations {
          margin-top: 48px;
          padding-top: 48px;
          border-top: 1px solid var(--border);
        }
        .recommendation-section {
          margin-bottom: 40px;
        }
        .recommendation-section:last-child {
          margin-bottom: 0;
        }
        .recommendation-header {
          margin-bottom: 20px;
        }
        .rec-badge {
          display: inline-block;
          padding: 8px 16px;
          background: var(--bg-light);
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-dark);
        }
        .rec-badge.hot {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
        }
        .recommendation-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .recommendation-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all 0.3s;
          display: block;
        }
        .recommendation-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .rec-image {
          aspect-ratio: 1;
          overflow: hidden;
        }
        .rec-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .recommendation-card:hover .rec-image img {
          transform: scale(1.05);
        }
        .rec-info {
          padding: 12px;
        }
        .rec-title {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 8px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 40px;
        }
        .rec-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .rec-price {
          font-weight: 700;
          color: var(--primary);
          font-size: 16px;
        }
        .rec-rating {
          font-size: 13px;
          color: var(--accent);
        }
        @media (max-width: 992px) {
          .product-main {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .product-images {
            position: static;
          }
          .product-details {
            grid-template-columns: 1fr;
          }
          .recommendation-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .product-info h1 {
            font-size: 22px;
          }
          .price .current {
            font-size: 28px;
          }
          .thumbnail {
            width: 60px;
            height: 60px;
          }
          .recommendation-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .rec-title {
            font-size: 13px;
          }
        }
      `}</style>
		</div>
	);
}
