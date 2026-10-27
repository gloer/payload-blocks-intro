import { Block, slugField } from "payload";

export const HeroBannerBlock: Block = {
    slug: "hero-banner-block",
    interfaceName: "HeroBannerBlock",
    labels: {
        singular: "Hero banner block",
        plural: "Hero banner blocks",
    },
    fields: [
        { name: "title", type: "text", label: "Tittel", required: true },        
        slugField(),
    ],
}