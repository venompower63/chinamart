import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products as allProducts, categories } from "../data/mockData";
import ProductCard from "../components/ProductCard";
import type { Product } from "../context/CartContext";
import { Grid, List } from "lucide-react";

export default function CatalogPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [filteredProducts, setFilteredProducts] =
		useState<Product[]>(allProducts);
	const [sortBy, setSortBy] = useState("popular");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

	const categoryParam = searchParams.get("category") || "";
	const searchParam = searchParams.get("search") || "";
	const minPrice = parseInt(searchParams.get("minPrice") || "0");
	const maxPrice = parseInt(searchParams.get("maxPrice") || "999999");

	useEffect(() => {
		let result = [...allProducts];

		// Filter by category
		if (categoryParam) {
			result = result.filter((p) => p.category === categoryParam);
		}

		// Filter by search
		if (searchParam) {
			const q = searchParam.toLowerCase();
			result = result.filter(
				(p) =>
					p.title.toLowerCase().includes(q) ||
					p.description.toLowerCase().includes(q),
			);
		}

		// Filter by price
		result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

		// Sort
		switch (sortBy) {
			case "price-asc":
				result.sort((a, b) => a.price - b.price);
				break;
			case "price-desc":
				result.sort((a, b) => b.price - a.price);
				break;
			case "rating":
				result.sort((a, b) => b.rating - a.rating);
				break;
			case "new":
				result.sort(
					(a, b) =>
						new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
				);
				break;
			default:
				result.sort((a, b) => b.salesCount - a.salesCount);
		}

		setFilteredProducts(result);
	}, [categoryParam, searchParam, sortBy, minPrice, maxPrice]);

	const activeCategory = categories.find((c) => c.id === categoryParam);

	return (
		<div className="catalog-page">
			<div className="container">
				{/* Breadcrumbs */}
				<nav className="breadcrumbs">
					<a href="/">Главная</a>
					<span>/</span>
					<span>{activeCategory?.name || "Каталог"}</span>
				</nav>

				<div className="catalog-header">
					<h1>
						{searchParam
							? `Результаты поиска: "${searchParam}"`
							: activeCategory?.name || "Все товары"}
					</h1>
					<p>Найдено {filteredProducts.length} товаров</p>
				</div>

				<div className="catalog-layout">
					{/* Filters Sidebar */}
					<aside className="filters-sidebar">
						<div className="filter-section">
							<h3>Категории</h3>
							<div className="filter-options">
								<label
									className={`filter-option ${!categoryParam ? "active" : ""}`}
								>
									<input
										type="radio"
										name="category"
										checked={!categoryParam}
										onChange={() => setSearchParams({})}
									/>
									Все категории
								</label>
								{categories.map((cat) => (
									<label
										key={cat.id}
										className={`filter-option ${categoryParam === cat.id ? "active" : ""}`}
									>
										<input
											type="radio"
											name="category"
											checked={categoryParam === cat.id}
											onChange={() => setSearchParams({ category: cat.id })}
										/>
										{cat.icon} {cat.name}
									</label>
								))}
							</div>
						</div>

						<div className="filter-section">
							<h3>Цена</h3>
							<div className="price-range">
								<input
									type="number"
									placeholder="От"
									value={minPrice || ""}
									onChange={(e) =>
										setSearchParams((prev) => {
											const newParams = new URLSearchParams(prev);
											if (e.target.value) {
												newParams.set("minPrice", e.target.value);
											} else {
												newParams.delete("minPrice");
											}
											return newParams;
										})
									}
								/>
								<span>—</span>
								<input
									type="number"
									placeholder="До"
									value={maxPrice < 999999 ? maxPrice : ""}
									onChange={(e) =>
										setSearchParams((prev) => {
											const newParams = new URLSearchParams(prev);
											if (e.target.value) {
												newParams.set("maxPrice", e.target.value);
											} else {
												newParams.delete("maxPrice");
											}
											return newParams;
										})
									}
								/>
							</div>
						</div>
					</aside>

					{/* Products */}
					<div className="products-section">
						<div className="products-toolbar">
							<div className="sort-select">
								<label>Сортировка:</label>
								<select
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
								>
									<option value="popular">По популярности</option>
									<option value="price-asc">Сначала дешевле</option>
									<option value="price-desc">Сначала дороже</option>
									<option value="rating">По рейтингу</option>
									<option value="new">Сначала новые</option>
								</select>
							</div>

							<div className="view-toggle">
								<button
									className={viewMode === "grid" ? "active" : ""}
									onClick={() => setViewMode("grid")}
								>
									<Grid size={20} />
								</button>
								<button
									className={viewMode === "list" ? "active" : ""}
									onClick={() => setViewMode("list")}
								>
									<List size={20} />
								</button>
							</div>
						</div>

						{filteredProducts.length > 0 ? (
							<div className={`products-${viewMode}`}>
								{filteredProducts.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						) : (
							<div className="empty-state">
								<p>Товары не найдены</p>
								<button onClick={() => setSearchParams({})}>
									Сбросить фильтры
								</button>
							</div>
						)}
					</div>
				</div>
			</div>

			<style>{`
        .catalog-page {
          padding: 24px 0 60px;
        }
        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-light);
          margin-bottom: 24px;
        }
        .breadcrumbs a {
          color: var(--text-light);
        }
        .breadcrumbs a:hover {
          color: var(--primary);
        }
        .catalog-header {
          margin-bottom: 32px;
        }
        .catalog-header h1 {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .catalog-header p {
          color: var(--text-light);
        }
        .catalog-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 32px;
        }
        .filters-sidebar {
          position: sticky;
          top: 96px;
          height: fit-content;
        }
        .filter-section {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid var(--border);
        }
        .filter-section h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 16px;
        }
        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .filter-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
          color: var(--text-medium);
        }
        .filter-option:hover {
          background: var(--bg-light);
        }
        .filter-option.active {
          background: rgba(230, 57, 70, 0.1);
          color: var(--primary);
        }
        .filter-option input {
          display: none;
        }
        .price-range {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .price-range input {
          flex: 1;
          padding: 10px 12px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 14px;
        }
        .price-range input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .price-range span {
          color: var(--text-light);
        }
        .products-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }
        .sort-select {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .sort-select label {
          font-size: 14px;
          color: var(--text-medium);
        }
        .sort-select select {
          padding: 10px 36px 10px 14px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 14px;
          background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234a4a68' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 12px center;
          appearance: none;
          cursor: pointer;
        }
        .sort-select select:focus {
          outline: none;
          border-color: var(--primary);
        }
        .view-toggle {
          display: flex;
          gap: 4px;
          background: var(--bg-light);
          padding: 4px;
          border-radius: var(--radius-sm);
        }
        .view-toggle button {
          padding: 8px 12px;
          background: transparent;
          border-radius: 6px;
          color: var(--text-light);
          transition: all 0.2s;
        }
        .view-toggle button:hover {
          color: var(--text-dark);
        }
        .view-toggle button.active {
          background: white;
          color: var(--primary);
          box-shadow: var(--shadow-sm);
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .products-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .products-list .product-card {
          display: grid;
          grid-template-columns: 200px 1fr;
        }
        .products-list .product-image {
          aspect-ratio: 1;
        }
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          background: var(--bg-light);
          border-radius: var(--radius-md);
        }
        .empty-state p {
          font-size: 18px;
          color: var(--text-medium);
          margin-bottom: 16px;
        }
        .empty-state button {
          padding: 12px 24px;
          background: var(--primary);
          color: white;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }
        @media (max-width: 992px) {
          .catalog-layout {
            grid-template-columns: 1fr;
          }
          .filters-sidebar {
            position: static;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
          }
          .filter-section {
            flex: 1;
            min-width: 200px;
            margin-bottom: 0;
          }
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .catalog-header h1 {
            font-size: 24px;
          }
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .products-toolbar {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }
          .sort-select {
            justify-content: space-between;
          }
          .sort-select select {
            flex: 1;
          }
        }
      `}</style>
		</div>
	);
}
