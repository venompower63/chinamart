import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { Product } from "../context/CartContext";
import { products as mockProducts } from "../data/mockData";
import {
	Plus,
	Package,
	ShoppingCart,
	Star,
	TrendingUp,
	Edit2,
	Trash2,
} from "lucide-react";

interface Order {
	id: string;
	items: { product: Product; quantity: number }[];
	total: number;
	status: string;
	createdAt: string;
	buyerName: string;
}

export default function SellerDashboard() {
	const { user } = useAuth();
	const navigate = useNavigate();
	const [products, setProducts] = useState<Product[]>([]);
	const [orders, setOrders] = useState<Order[]>([]);
	const [activeTab, setActiveTab] = useState("products");

	useEffect(() => {
		if (!user || user.role !== "seller") {
			navigate("/");
			return;
		}

		// Load seller's products
		const storedProducts = localStorage.getItem("chinamart_products");
		const allProducts = storedProducts
			? [...mockProducts, ...JSON.parse(storedProducts)]
			: mockProducts;
		const sellerProducts = allProducts.filter(
			(p) =>
				p.sellerId === user.id || p.sellerName === user.sellerData?.storeName,
		);
		setProducts(sellerProducts);

		// Load seller's orders
		const storedOrders = JSON.parse(
			localStorage.getItem("chinamart_orders") || "[]",
		);
		const sellerOrders = storedOrders.filter((order: Order) =>
			order.items.some((item) =>
				sellerProducts.some((p) => p.id === item.product.id),
			),
		);
		setOrders(sellerOrders);
	}, [user, navigate]);

	const deleteProduct = (productId: string) => {
		setProducts((prev) => prev.filter((p) => p.id !== productId));
		showToast("success", "Товар удалён");
	};

	const totalSales = orders.reduce(
		(sum, order) =>
			sum +
			order.items
				.filter((item) => products.some((p) => p.id === item.product.id))
				.reduce((s, item) => s + item.product.price * item.quantity, 0),
		0,
	);

	const sellerRevenue = Math.round(totalSales * 0.95);

	const formatStatus = (status: string) => {
		const statuses: Record<string, { label: string; color: string }> = {
			pending: { label: "Новый", color: "blue" },
			processing: { label: "В обработке", color: "orange" },
			shipped: { label: "Отправлен", color: "purple" },
			delivered: { label: "Доставлен", color: "green" },
		};
		return statuses[status] || { label: status, color: "gray" };
	};

	if (!user || user.role !== "seller") {
		return null;
	}

	return (
		<div className="seller-dashboard">
			<div className="container">
				<div className="dashboard-header">
					<div>
						<h1>Кабинет продавца</h1>
						<p>{user.sellerData?.storeName || "Ваш магазин"}</p>
					</div>
					<Link to="/seller/add-product" className="btn btn-primary">
						<Plus size={20} />
						Добавить товар
					</Link>
				</div>

				{/* Stats */}
				<div className="stats-grid">
					<div className="stat-card">
						<div className="stat-icon">
							<Package size={24} />
						</div>
						<div className="stat-info">
							<span className="stat-value">{products.length}</span>
							<span className="stat-label">Товаров</span>
						</div>
					</div>
					<div className="stat-card">
						<div className="stat-icon">
							<ShoppingCart size={24} />
						</div>
						<div className="stat-info">
							<span className="stat-value">{orders.length}</span>
							<span className="stat-label">Заказов</span>
						</div>
					</div>
					<div className="stat-card">
						<div className="stat-icon">
							<TrendingUp size={24} />
						</div>
						<div className="stat-info">
							<span className="stat-value">
								{totalSales.toLocaleString("ru-RU")} ₽
							</span>
							<span className="stat-label">Продаж</span>
						</div>
					</div>
					<div className="stat-card highlight">
						<div className="stat-icon">
							<Star size={24} />
						</div>
						<div className="stat-info">
							<span className="stat-value">
								{sellerRevenue.toLocaleString("ru-RU")} ₽
							</span>
							<span className="stat-label">Выручка (≈95%)</span>
						</div>
					</div>
				</div>

				{/* Tabs */}
				<div className="tabs">
					<button
						className={`tab ${activeTab === "products" ? "active" : ""}`}
						onClick={() => setActiveTab("products")}
					>
						<Package size={20} />
						Товары
					</button>
					<button
						className={`tab ${activeTab === "orders" ? "active" : ""}`}
						onClick={() => setActiveTab("orders")}
					>
						<ShoppingCart size={20} />
						Заказы
					</button>
				</div>

				{/* Products Tab */}
				{activeTab === "products" && (
					<div className="tab-content">
						{products.length > 0 ? (
							<div className="products-table">
								<div className="table-header">
									<span>Товар</span>
									<span>Цена</span>
									<span>На складе</span>
									<span>Продано</span>
									<span>Действия</span>
								</div>
								{products.map((product) => (
									<div key={product.id} className="table-row">
										<div className="product-cell">
											<img src={product.images[0]} alt={product.title} />
											<span>{product.title}</span>
										</div>
										<span className="price">
											{product.price.toLocaleString("ru-RU")} ₽
										</span>
										<span>{product.stock} шт.</span>
										<span>{product.salesCount}</span>
										<div className="actions">
											<button
												onClick={() =>
													navigate(`/seller/edit-product/${product.id}`)
												}
											>
												<Edit2 size={16} />
											</button>
											<button onClick={() => deleteProduct(product.id)}>
												<Trash2 size={16} />
											</button>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="empty-state">
								<Package size={60} />
								<h3>У вас пока нет товаров</h3>
								<p>Добавьте первый товар, чтобы начать продавать</p>
								<Link to="/seller/add-product" className="btn btn-primary">
									<Plus size={20} />
									Добавить товар
								</Link>
							</div>
						)}
					</div>
				)}

				{/* Orders Tab */}
				{activeTab === "orders" && (
					<div className="tab-content">
						{orders.length > 0 ? (
							<div className="orders-list">
								{orders.map((order) => (
									<div key={order.id} className="order-card">
										<div className="order-header">
											<div>
												<strong>{order.id}</strong>
												<span className="order-date">
													{new Date(order.createdAt).toLocaleDateString(
														"ru-RU",
													)}
												</span>
											</div>
											<span
												className={`status ${formatStatus(order.status).color}`}
											>
												{formatStatus(order.status).label}
											</span>
										</div>
										<div className="order-items">
											{order.items
												.filter((item) =>
													products.some((p) => p.id === item.product.id),
												)
												.map((item) => (
													<div key={item.product.id} className="order-item">
														<img
															src={item.product.images[0]}
															alt={item.product.title}
														/>
														<div>
															<span className="item-title">
																{item.product.title}
															</span>
															<span className="item-qty">×{item.quantity}</span>
														</div>
														<span className="item-price">
															{(
																item.product.price * item.quantity
															).toLocaleString("ru-RU")}{" "}
															₽
														</span>
													</div>
												))}
										</div>
										<div className="order-footer">
											<span className="order-total">
												Итого:{" "}
												{order.items
													.filter((item) =>
														products.some((p) => p.id === item.product.id),
													)
													.reduce(
														(s, item) => s + item.product.price * item.quantity,
														0,
													)
													.toLocaleString("ru-RU")}{" "}
												₽
											</span>
											<span className="order-revenue">
												Ваша выручка:{" "}
												{Math.round(
													order.items
														.filter((item) =>
															products.some((p) => p.id === item.product.id),
														)
														.reduce(
															(s, item) =>
																s + item.product.price * item.quantity,
															0,
														) * 0.95,
												).toLocaleString("ru-RU")}{" "}
												₽
											</span>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="empty-state">
								<ShoppingCart size={60} />
								<h3>Заказов пока нет</h3>
								<p>Ожидайте, когда покупатели сделают заказы</p>
							</div>
						)}
					</div>
				)}
			</div>

			<style>{`
        .seller-dashboard {
          padding: 32px 0 60px;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        .dashboard-header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .dashboard-header p {
          color: var(--text-light);
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover {
          background: var(--primary-dark);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        .stat-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .stat-card.highlight {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          border: none;
        }
        .stat-icon {
          width: 48px;
          height: 48px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
        }
        .stat-card.highlight .stat-icon {
          background: rgba(255,255,255,0.2);
          color: white;
        }
        .stat-info {
          display: flex;
          flex-direction: column;
        }
        .stat-value {
          font-size: 24px;
          font-weight: 700;
        }
        .stat-label {
          font-size: 13px;
          color: var(--text-light);
        }
        .stat-card.highlight .stat-label {
          color: rgba(255,255,255,0.8);
        }
        .tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }
        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: var(--radius-sm);
          background: var(--bg-light);
          color: var(--text-medium);
          font-weight: 500;
          transition: all 0.2s;
        }
        .tab:hover {
          background: var(--border);
        }
        .tab.active {
          background: var(--primary);
          color: white;
        }
        .tab-content {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .products-table {
          width: 100%;
        }
        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 120px;
          gap: 16px;
          padding: 16px 24px;
          background: var(--bg-light);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-medium);
        }
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 120px;
          gap: 16px;
          padding: 16px 24px;
          align-items: center;
          border-bottom: 1px solid var(--border);
        }
        .table-row:last-child {
          border-bottom: none;
        }
        .product-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .product-cell img {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .product-cell span {
          font-weight: 500;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .price {
          font-weight: 600;
          color: var(--primary);
        }
        .actions {
          display: flex;
          gap: 8px;
        }
        .actions button {
          padding: 8px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .actions button:hover {
          background: var(--primary);
          color: white;
        }
        .empty-state {
          text-align: center;
          padding: 60px 20px;
        }
        .empty-state svg {
          color: var(--text-light);
          margin-bottom: 16px;
        }
        .empty-state h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }
        .empty-state p {
          color: var(--text-light);
          margin-bottom: 24px;
        }
        .orders-list {
          display: flex;
          flex-direction: column;
        }
        .order-card {
          padding: 20px 24px;
          border-bottom: 1px solid var(--border);
        }
        .order-card:last-child {
          border-bottom: none;
        }
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .order-header strong {
          display: block;
          font-size: 15px;
        }
        .order-date {
          font-size: 13px;
          color: var(--text-light);
        }
        .status {
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
        }
        .status.blue { background: #e3f2fd; color: #1565c0; }
        .status.orange { background: #fff3e0; color: #e65100; }
        .status.purple { background: #f3e5f5; color: #7b1fa2; }
        .status.green { background: #e8f5e9; color: #2e7d32; }
        .order-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        .order-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .order-item img {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .order-item div {
          flex: 1;
        }
        .item-title {
          display: block;
          font-size: 14px;
        }
        .item-qty {
          font-size: 12px;
          color: var(--text-light);
        }
        .item-price {
          font-weight: 600;
        }
        .order-footer {
          display: flex;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }
        .order-total {
          font-weight: 600;
        }
        .order-revenue {
          color: var(--success);
          font-weight: 500;
        }
        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .table-header,
          .table-row {
            grid-template-columns: 2fr 1fr 80px;
          }
          .table-header span:nth-child(3),
          .table-header span:nth-child(4),
          .table-row span:nth-child(3),
          .table-row span:nth-child(4) {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .tabs {
            overflow-x: auto;
          }
          .table-header {
            display: none;
          }
          .table-row {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }
          .product-cell {
            width: 100%;
          }
        }
      `}</style>
		</div>
	);
}

// Add helper function for toast
function showToast(type: string, message: string) {
	const event = new CustomEvent("showToast", { detail: { type, message } });
	window.dispatchEvent(event);
}
