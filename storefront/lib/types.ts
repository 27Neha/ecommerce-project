export interface MoneyAmount {
    amount: number;
    currency_code: string;
}

export interface ProductOptionValue {
    id: string;
    value: string;
}

export interface ProductOption {
    id: string;
    title: string;
    values: ProductOptionValue[];
}

export interface VariantOptionValue {
    option_id: string;
    value: string;
}

export interface ProductVariant {
    id: string;
    title: string;
    sku?: string;
    inventory_quantity?: number;
    prices?: MoneyAmount[];
    options?: VariantOptionValue[];
    calculated_price?: {
        calculated_amount: number;
        currency_code: string;
        original_amount?: number;
    };
}

export interface ProductImage {
    id: string;
    url: string;
}

export interface ProductCategory {
    id: string;
    name: string;
    handle: string;
}

export interface Product {
    id: string;
    title: string;
    handle: string;
    description?: string;
    thumbnail?: string;
    images?: ProductImage[];
    variants?: ProductVariant[];
    options?: ProductOption[];
    categories?: ProductCategory[];
}

export interface CartLineItem {
    variantId: string;
    quantity: number;
    title: string;
    price: number;
    image?: string;
}
