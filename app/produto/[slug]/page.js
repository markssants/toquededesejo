import { Suspense } from "react";
import { INITIAL_PRODUCTS, getProductBySlug } from "@/lib/products";
import ProductDetailClient from "@/components/ProductDetailClient";

// Gerar rotas estáticas durante o build para todos os produtos reais
export async function generateStaticParams() {
  return INITIAL_PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

// SEO dinâmico por produto para compartilhamento em redes sociais e WhatsApp
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug, INITIAL_PRODUCTS);

  if (!product) {
    return {
      title: "Produto | Toque de Desejo",
      description: "Boutique sensual e produtos íntimos com sigilo total.",
    };
  }

  return {
    title: `${product.name} | Toque de Desejo`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Toque de Desejo`,
      description: product.shortDescription,
      images: [
        {
          url: product.images?.[0] || "/img/logo.jpg",
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Toque de Desejo`,
      description: product.shortDescription,
      images: [product.images?.[0] || "/img/logo.jpg"],
    },
  };
}

async function ProductContent({ params }) {
  const { slug } = await params;
  const fallbackProduct = getProductBySlug(slug, INITIAL_PRODUCTS);

  return (
    <ProductDetailClient slug={slug} fallbackProduct={fallbackProduct} />
  );
}

export default function ProductDetailPage({ params }) {
  return (
    <Suspense
      fallback={
        <div
          className="container"
          style={{
            padding: "80px 20px",
            textAlign: "center",
            color: "var(--text-secondary)"
          }}
        >
          Carregando produto...
        </div>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}
