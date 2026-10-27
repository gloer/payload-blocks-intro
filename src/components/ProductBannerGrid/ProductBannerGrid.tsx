import "./ProductBannerGrid.css";

export type ProductBannerGridProps = {
    children: React.ReactNode;
};

export default function ProductBannerGrid({ children }: ProductBannerGridProps) {
    return (
        <section className="product-banner-grid">
            {children}
        </section>
    )
}