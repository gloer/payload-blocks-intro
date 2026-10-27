import config from "@payload-config";
import { getPayload } from "payload";
import ProductBanner from "@/components/ProductBanner/ProductBanner";
import ProductBannerGrid from "@/components/ProductBannerGrid/ProductBannerGrid";
import HeroBanner from "@/components/HeroBanner/HeroBanner";


export default async function ProductsPage() {

    const payload = await getPayload({ config });
    const page = await payload.findGlobal({
        slug: "products-page",
    });

    if (!page || !page.layout) {
        throw new Error("Noe gikk galt");
    }

    return (
        <>
            <h1>Products</h1>
            <ProductBannerGrid>
                {
                    page.layout.map(block => {
                        switch (block.blockType) {
                            case "product-banner-block": {
                                return (
                                    <ProductBanner
                                        key={block.id}
                                        title={block.title}
                                        subtitle={block.subtitle}
                                    />
                                );
                            }
                            case "hero-banner-block": {
                                return (
                                    <HeroBanner key={block.id}>
                                        <h1>{block.title}</h1>
                                    </HeroBanner>
                                );
                            }

                            default: {
                                return null;
                            }
                        }
                    })
                }
            </ProductBannerGrid>
        </>
    );
}