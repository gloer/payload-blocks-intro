import { HeroBannerBlock } from "@/blocks/HeroBannerBlock";
import { ProductBannerBlock } from "@/blocks/ProductBannerBlock";
import type { GlobalConfig } from "payload";

export const ProductsPage: GlobalConfig = {
    slug: "products-page",
    label: "produktside",
    access: { 
        read: () => true 
    },
    fields: [
        {
            name: "layout",
            label: "Produktbannere",
            type: "blocks",
            blocks: [ProductBannerBlock, HeroBannerBlock],
        }
    ],
};