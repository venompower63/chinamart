import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ChevronRight } from "lucide-react";

interface Order {
	id: string;
	items: {
		product: { id: string; title: string; price: number; images: string[] };
		quantity: number;
	}[];
	total: number;
	buyerCommission: number;
	createdAt: string;
	status: string;
	address: string;
}

export default function OrdersPage() {
	const [orders, setOrders] = useState<Order[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedOrders = JSON.parse(
			localStorage.getItem("chinamart_orders") || "[]",
		);
		setOrders(storedOrders);
		setLoading(false);
	}, []);

	const formatStatus = (status: string) => {
		const statuses: Record<string, { label: string; color: string }> = {
			pending: { label: "Ожидает оплаты", color: "blue" },
			processing: { label: "В обработке", color: "orange" },
			shipped: { label: "Отправлен", color: "purple" },
			delivered: { label: "Доставлен", color: "green" },
		};
		return statuses[status] || { label: status, color: "gray" };
	};

	if (loading) {
		return (
			<div className="orders-page">
				<div className="container">
					<h1>Загрузка...</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="orders-page">
			<div className="container">
				<h1>Мои заказы</h1>

				{orders.length > 0 ? (
					<div className="orders-list">
						{orders.map((order) => (
							<div key={order.id} className="order-card">
								<div className="order-header">
									<div className="order-info">
										<span className="order-id">{order.id}</span>
										<span className="order-date">
											{new Date(order.createdAt).toLocaleDateString("ru-RU", {
												day: "numeric",
												month: "long",
												year: "numeric",
											})}
										</span>
									</div>
									<span
										className={`order-status ${formatStatus(order.status).color}`}
									>
										{formatStatus(order.status).label}
									</span>
								</div>

								<div className="order-items">
									{order.items.slice(0, 3).map((item, idx) => (
										<div key={idx} className="order-item">
											<img
												src={item.product.images[0]}
												alt={item.product.title}
											/>
											<div className="item-details">
												<span className="item-title">{item.product.title}</span>
												<span className="item-qty">×{item.quantity}</span>
											</div>
											<span className="item-price">
												{(item.product.price * item.quantity).toLocaleString(
													"ru-RU",
												)}{" "}
												₽
											</span>
										</div>
									))}
									{order.items.length > 3 && (
										<div className="more-items">
											+{order.items.length - 3} товар(ов)
										</div>
									)}
								</div>

								<div className="order-footer">
									<div className="order-total">
										<span>Итого (с комиссией {order.buyerCommission} ₽):</span>
										<strong>{order.total.toLocaleString("ru-RU")} ₽</strong>
									</div>
									<Link to={`/order/${order.id}`} className="order-link">
										Подробнее <ChevronRight size={18} />
									</Link>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="empty-orders">
						<ShoppingBag size={80} />
						<h2>У вас пока нет заказов</h2>
						<p>Оформите первый заказ в нашем каталоге</p>
						<Link to="/catalog" className="btn btn-primary">
							Перейти в каталог
						</Link>
					</div>
				)}
			</div>

			<style>{`
        .orders-page {
          padding: 32px 0 60px;
        }
        .orders-page h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .order-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: var(--bg-light);
          border-bottom: 1px solid var(--border);
        }
        .order-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .order-id {
          font-weight: 600;
          color: var(--text-dark);
        }
        .order-date {
          font-size: 14px;
          color: var(--text-light);
        }
        .order-status {
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
        }
        .order-status.blue { background: #e3f2fd; color: #1565c0; }
        .order-status.orange { background: #fff3e0; color: #e65100; }
        .order-status.purple { background: #f3e5f5; color: #7b1fa2; }
        .order-status.green { background: #e8f5e9; color: #2e7d32; }
        .order-items {
          padding: 20px 24px;
        }
        .order-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
        }
        .order-item:last-of-type {
          border-bottom: none;
        }
        .order-item img {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .item-details {
          flex: 1;
          min-width: 0;
        }
        .item-title {
          display: block;
          font-weight: 500;
          color: var(--text-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 4px;
        }
        .item-qty {
          font-size: 13px;
          color: var(--text-light);
        }
        .item-price {
          font-weight: 600;
          color: var(--text-dark);
        }
        .more-items {
          padding: 12px 0;
          text-align: center;
          font-size: 14px;
          color: var(--text-light);
        }
        .order-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: var(--bg-light);
          border-top: 1px solid var(--border);
        }
        .order-total {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .order-total span {
          font-size: 14px;
          color: var(--text-medium);
        }
        .order-total strong {
          font-size: 18px;
          color: var(--primary);
        }
        .order-link {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--primary);
          font-weight: 500;
          transition: gap 0.2s;
        }
        .order-link:hover {
          gap: 8px;
        }
        .empty-orders {
          text-align: center;
          padding: 80px 20px;
          background: var(--bg-light);
          border-radius: var(--radius-md);
        }
        .empty-orders svg {
          color: var(--text-light);
          margin-bottom: 24px;
        }
        .empty-orders h2 {
          font-size: 24px;
          margin-bottom: 12px;
        }
        .empty-orders p {
          color: var(--text-light);
          margin-bottom: 32px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
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
        .btn-primary:hover {
          background: var(--primary-dark);
        }
        @media (max-width: 768px) {
          .order-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .order-footer {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }
          .order-total {
            justify-content: space-between;
          }
        }
      `}</style>
		</div>
	);
}
