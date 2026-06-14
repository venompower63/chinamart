import { Link } from "react-router-dom";

interface Category {
	id: string;
	name: string;
	icon: string;
	count: number;
	color: string;
}

interface CategoryCardProps {
	category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
	return (
		<Link to={`/catalog?category=${category.id}`} className="category-card">
			<div className="category-icon" style={{ background: category.color }}>
				{category.icon}
			</div>
			<div className="category-name">{category.name}</div>
			<div className="category-count">
				{category.count.toLocaleString("ru-RU")} товаров
			</div>

			<style>{`
        .category-card {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          padding: 24px 16px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s;
          display: block;
        }
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .category-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }
        .category-name {
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 4px;
        }
        .category-count {
          font-size: 13px;
          color: var(--text-light);
        }
        @media (max-width: 768px) {
          .category-card {
            padding: 16px 12px;
          }
          .category-icon {
            width: 48px;
            height: 48px;
            font-size: 22px;
          }
          .category-name {
            font-size: 13px;
          }
          .category-count {
            font-size: 11px;
          }
        }
      `}</style>
		</Link>
	);
}
