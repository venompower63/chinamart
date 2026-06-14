import { Link } from "react-router-dom";
import { Heart, Check } from "lucide-react";
import type { Product } from "../context/CartContext";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const { addItem, isInCart } = useCart();
	const { showToast } = useToast();
	const inCart = isInCart(product.id);

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (product.stock > 0) {
			addItem(product, 1);
			showToast("success", "Товар добавлен в корзину");
		}
	};

	const badgeLabels: Record<string, string> = {
		sale: `-${Math.round((1 - product.price / (product.oldPrice || product.price)) * 100)}%`,
		hit: "Хит",
		new: "Новинка",
	};

	return (
		<Link to={`/product/${product.id}`} className="product-card">
			<div className="product-image">
				<img src={product.images[0]} alt={product.title} />
				{product.badge && (
					<span className={`product-badge badge-${product.badge}`}>
						{badgeLabels[product.badge]}
					</span>
				)}
				<button
					className={`wishlist-btn ${inCart ? "in-cart" : ""}`}
					onClick={handleAddToCart}
					title={inCart ? "В корзине" : "В избранное"}
				>
					{inCart ? <Check size={18} /> : <Heart size={18} />}
				</button>
			</div>

			<div className="product-info">
				<div className="product-seller">
					<span className="seller-avatar">{product.sellerName[0]}</span>
					<span className="seller-name">{product.sellerName}</span>
				</div>

				<h3 className="product-title">{product.title}</h3>

				<div className="product-rating">
					<span className="rating-stars">
						{"★".repeat(Math.round(product.rating))}
					</span>
					<span className="rating-count">
						({product.reviewsCount.toLocaleString()})
					</span>
				</div>

				<div className="product-price">
					<span className="price-current">
						{product.price.toLocaleString("ru-RU")} ₽
					</span>
					{product.oldPrice && (
						<span className="price-old">
							{product.oldPrice.toLocaleString("ru-RU")} ₽
						</span>
					)}
				</div>

				<div className="product-footer">
					<span className="product-sales">
						{product.salesCount.toLocaleString()} sold
					</span>
					<span className="product-delivery">5-7 дней</span>
				</div>
			</div>

			<style>{`
        .product-card {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border);
          transition: all 0.3s;
          display: block;
          width: 100%;
          max-width: 100%;
        }
        .product-card * {
          max-width: 100%;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .product-image {
          position: relative;
          aspect-ratio: 1;
          background: var(--bg-light);
          overflow: hidden;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        .product-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: white;
        }
        .badge-sale {
          background: var(--primary);
        }
        .badge-hit {
          background: var(--accent);
        }
        .badge-new {
          background: var(--success);
        }
        .wishlist-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-light);
          transition: all 0.2s;
          border: none;
        }
        .wishlist-btn:hover {
          color: var(--primary);
          transform: scale(1.1);
        }
        .wishlist-btn.in-cart {
          background: var(--success);
          color: white;
        }
        .product-info {
          padding: 16px;
        }
        .product-seller {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .seller-avatar {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--secondary);
          color: white;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .seller-name {
          font-size: 12px;
          color: var(--text-light);
        }
        .product-title {
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 8px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 14px;
        }
        .product-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }
        .rating-stars {
          color: var(--accent);
          font-size: 14px;
        }
        .rating-count {
          font-size: 13px;
          color: var(--text-light);
        }
        .product-price {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 12px;
        }
        .price-current {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary);
        }
        .price-old {
          font-size: 14px;
          color: var(--text-light);
          text-decoration: line-through;
        }
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid var(--border);
          font-size: 13px;
        }
        .product-sales {
          color: var(--text-light);
        }
        .product-delivery {
          color: var(--success);
          font-weight: 500;
        }
      `}</style>
		</Link>
	);
}
