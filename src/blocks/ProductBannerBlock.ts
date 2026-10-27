import { Block, slugField } from "payload";

export const ProductBannerBlock: Block = {
    slug: "product-banner-block",
    interfaceName: "ProductBannerBlock",
    labels: {
        singular: "Product banner block",
        plural: "Product banner blocks",
    },
    fields: [
        { name: "title", type: "text", label: "Tittel", required: true },
        { name: "subtitle", type: "text", label: "Undertittel", required: true },
        slugField(),
    ],
}