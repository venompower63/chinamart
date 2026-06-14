import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products as allProducts, categories } from "../data/mockData";
import ProductCard from "../components/ProductCard";
import type { Product } from "../context/CartContext";
import { Grid, List, Filter, X, ChevronDown } from "lucide-react";

export default function CatalogPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [filteredProducts, setFilteredProducts] =
		useState<Product[]>(allProducts);
	const [sortBy, setSortBy] = useState("popular");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [showFilters, setShowFilters] = useState(false);

	const categoryParam = searchParams.get("category") || "";
	const searchParam = searchParams.get("search") || "";
	const minPrice = parseInt(searchParams.get("minPrice") || "0");
	const maxPrice = parseInt(searchParams.get("maxPrice") || "999999");

	useEffect(() => {
		let result = [...allProducts];

		if (categoryParam) {
			result = result.filter((p) => p.category === categoryParam);
		}

		if (searchParam) {
			const q = searchParam.toLowerCase();
			result = result.filter(
				(p) =>
					p.title.toLowerCase().includes(q) ||
					p.description.toLowerCase().includes(q),
			);
		}

		result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

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

	const updateFilter = (key: string, value: string) => {
		const newParams = new URLSearchParams(searchParams);
		if (value) {
			newParams.set(key, value);
		} else {
			newParams.delete(key);
		}
		setSearchParams(newParams);
	};

	const clearFilters = () => {
		setSearchParams({});
		setShowFilters(false);
	};

	const hasActiveFilters = categoryParam || minPrice > 0 || maxPrice < 999999;

	return (
		<div className="catalog-page">
			{/* Breadcrumbs */}
			<nav className="breadcrumbs">
				<a href="/">Главная</a>
				<span>/</span>
				<span>{activeCategory?.name || "Каталог"}</span>
			</nav>

			<div className="catalog-header">
				<h1>
					{searchParam
						? `Поиск: "${searchParam}"`
						: activeCategory?.name || "Каталог"}
				</h1>
				<p>{filteredProducts.length} товаров</p>
			</div>

			{/* Toolbar */}
			<div className="catalog-toolbar">
				<button
					className={`filter-toggle ${showFilters ? "active" : ""}`}
					onClick={() => setShowFilters(!showFilters)}
				>
					<Filter size={16} />
					Фильтры
					{hasActiveFilters && <span className="filter-badge" />}
				</button>

				<div className="sort-select">
					<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
						<option value="popular">По популярности</option>
						<option value="price-asc">Дешевле</option>
						<option value="price-desc">Дороже</option>
						<option value="rating">По рейтингу</option>
						<option value="new">Новые</option>
					</select>
					<ChevronDown size={16} className="select-arrow" />
				</div>

				<div className="view-toggle">
					<button
						className={viewMode === "grid" ? "active" : ""}
						onClick={() => setViewMode("grid")}
					>
						<Grid size={18} />
					</button>
					<button
						className={viewMode === "list" ? "active" : ""}
						onClick={() => setViewMode("list")}
					>
						<List size={18} />
					</button>
				</div>
			</div>

			{/* Active Filters Tags */}
			{hasActiveFilters && (
				<div className="active-filters">
					{categoryParam && (
						<button
							className="filter-tag"
							onClick={() => updateFilter("category", "")}
						>
							{activeCategory?.icon} {activeCategory?.name}
							<X size={14} />
						</button>
					)}
					<button className="filter-tag clear" onClick={clearFilters}>
						Сбросить всё
					</button>
				</div>
			)}

			{/* Filters Panel */}
			{showFilters && (
				<div className="filters-panel">
					<div className="filter-group">
						<h3>Категории</h3>
						<div className="category-chips">
							<button
								className={`chip ${!categoryParam ? "active" : ""}`}
								onClick={() => updateFilter("category", "")}
							>
								Все
							</button>
							{categories.map((cat) => (
								<button
									key={cat.id}
									className={`chip ${categoryParam === cat.id ? "active" : ""}`}
									onClick={() => updateFilter("category", cat.id)}
								>
									{cat.icon} {cat.name}
								</button>
							))}
						</div>
					</div>

					<div className="filter-group">
						<h3>Цена</h3>
						<div className="price-inputs">
							<input
								type="number"
								placeholder="От"
								value={minPrice || ""}
								onChange={(e) => updateFilter("minPrice", e.target.value)}
							/>
							<span>—</span>
							<input
								type="number"
								placeholder="До"
								value={maxPrice < 999999 ? maxPrice : ""}
								onChange={(e) => updateFilter("maxPrice", e.target.value)}
							/>
						</div>
					</div>
				</div>
			)}

			{/* Products Grid */}
			{filteredProducts.length > 0 ? (
				<div className={`products-${viewMode}`}>
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			) : (
				<div className="empty-state">
					<p>Товары не найдены</p>
					<button onClick={clearFilters}>Сбросить фильтры</button>
				</div>
			)}

			<style>{`
				.catalog-page {
					padding: 16px;
					width: 100%;
					max-width: 100%;
					overflow-x: hidden;
				}
				.catalog-page * {
					max-width: 100%;
					box-sizing: border-box;
				}
				.breadcrumbs {
					display: flex;
					align-items: center;
					gap: 8px;
					font-size: 13px;
					color: var(--text-light);
					margin-bottom: 12px;
					flex-wrap: wrap;
				}
				.breadcrumbs a {
					color: var(--text-light);
				}
				.catalog-header {
					margin-bottom: 16px;
				}
				.catalog-header h1 {
					font-size: 24px;
					font-weight: 700;
					color: var(--text-dark);
					margin-bottom: 4px;
				}
				.catalog-header p {
					font-size: 14px;
					color: var(--text-light);
				}
				.catalog-toolbar {
					display: flex;
					align-items: center;
					gap: 12px;
					margin-bottom: 16px;
					flex-wrap: wrap;
				}
				.filter-toggle {
					display: flex;
					align-items: center;
					gap: 6px;
					padding: 8px 14px;
					background: var(--bg-light);
					border: 1px solid var(--border);
					border-radius: 20px;
					font-size: 14px;
					font-weight: 500;
					color: var(--text-medium);
					position: relative;
				}
				.filter-toggle.active {
					background: rgba(230, 57, 70, 0.1);
					border-color: var(--primary);
					color: var(--primary);
				}
				.filter-badge {
					width: 8px;
					height: 8px;
					background: var(--primary);
					border-radius: 50%;
					position: absolute;
					top: 4px;
					right: 4px;
				}
				.sort-select {
					position: relative;
					flex: 1;
					min-width: 140px;
				}
				.sort-select select {
					width: 100%;
					padding: 8px 32px 8px 12px;
					border: 1px solid var(--border);
					border-radius: 20px;
					font-size: 14px;
					background: white;
					appearance: none;
					cursor: pointer;
				}
				.select-arrow {
					position: absolute;
					right: 12px;
					top: 50%;
					transform: translateY(-50%);
					color: var(--text-light);
					pointer-events: none;
				}
				.view-toggle {
					display: flex;
					gap: 4px;
					background: var(--bg-light);
					padding: 4px;
					border-radius: 20px;
				}
				.view-toggle button {
					padding: 8px 10px;
					background: transparent;
					border-radius: 16px;
					color: var(--text-light);
				}
				.view-toggle button.active {
					background: white;
					color: var(--primary);
					box-shadow: var(--shadow-sm);
				}
				.active-filters {
					display: flex;
					flex-wrap: wrap;
					gap: 8px;
					margin-bottom: 16px;
				}
				.filter-tag {
					display: flex;
					align-items: center;
					gap: 6px;
					padding: 6px 12px;
					background: rgba(230, 57, 70, 0.1);
					border: none;
					border-radius: 16px;
					font-size: 13px;
					color: var(--primary);
				}
				.filter-tag.clear {
					background: var(--bg-light);
					color: var(--text-medium);
				}
				.filters-panel {
					background: var(--bg-light);
					border-radius: 16px;
					padding: 16px;
					margin-bottom: 16px;
				}
				.filter-group {
					margin-bottom: 16px;
				}
				.filter-group:last-child {
					margin-bottom: 0;
				}
				.filter-group h3 {
					font-size: 14px;
					font-weight: 600;
					color: var(--text-dark);
					margin-bottom: 12px;
				}
				.category-chips {
					display: flex;
					flex-wrap: wrap;
					gap: 8px;
				}
				.chip {
					padding: 6px 12px;
					background: white;
					border: 1px solid var(--border);
					border-radius: 16px;
					font-size: 13px;
					color: var(--text-medium);
					white-space: nowrap;
				}
				.chip.active {
					background: var(--primary);
					border-color: var(--primary);
					color: white;
				}
				.price-inputs {
					display: flex;
					align-items: center;
					gap: 12px;
				}
				.price-inputs input {
					flex: 1;
					padding: 10px 12px;
					border: 1px solid var(--border);
					border-radius: 12px;
					font-size: 14px;
				}
				.price-inputs span {
					color: var(--text-light);
				}
				.products-grid {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					gap: 12px;
				}
				.products-list {
					display: flex;
					flex-direction: column;
					gap: 12px;
				}
				.empty-state {
					text-align: center;
					padding: 48px 20px;
					background: var(--bg-light);
					border-radius: 16px;
				}
				.empty-state p {
					font-size: 16px;
					color: var(--text-medium);
					margin-bottom: 16px;
				}
				.empty-state button {
					padding: 12px 24px;
					background: var(--primary);
					color: white;
					border-radius: 12px;
					font-weight: 600;
				}

				@media (min-width: 768px) {
					.catalog-page {
						padding: 24px;
					}
					.products-grid {
						grid-template-columns: repeat(3, 1fr);
						gap: 20px;
					}
					.catalog-toolbar {
						justify-content: space-between;
					}
					.sort-select {
						flex: none;
						min-width: 180px;
					}
				}
				@media (min-width: 992px) {
					.products-grid {
						grid-template-columns: repeat(4, 1fr);
					}
					.catalog-layout-desktop {
						display: grid;
						grid-template-columns: 260px 1fr;
						gap: 32px;
					}
				}
			`}</style>
		</div>
	);
}
