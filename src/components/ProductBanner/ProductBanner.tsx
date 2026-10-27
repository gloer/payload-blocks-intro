import "./ProductBanner.css";


export type ProductBannerProps = {
    title: string;
    subtitle: string;
}

export default function ProductBanner({ title, subtitle }: ProductBannerProps) {
    return (
        <article className="product-banner">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </article>
    );
}