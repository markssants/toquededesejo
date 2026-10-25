// Dados e utilitários para o painel de gestão executivo da Toque de Desejo

export const INITIAL_CLIENTS = [
  {
    id: "cli-1",
    initials: "MA",
    name: "Marina Alves",
    since: "12 de abr. de 2025",
    phone: "(11) 97108-7116",
    email: "marina.alves@email.com",
    address: "Rua das Palmeiras, 214 — Moema, São Paulo/SP",
    ordersCount: 4,
    totalSpent: 1240.00,
    tags: ["Cliente VIP", "Óleos Tântricos"],
    avatarColor: "#e11d48"
  },
  {
    id: "cli-2",
    initials: "RN",
    name: "Rafael Nunes",
    since: "08 de jan. de 2026",
    phone: "(11) 99640-1123",
    email: "rafael.nunes@email.com",
    address: "Av. Brasil, 900 — Jardins, São Paulo/SP",
    ordersCount: 2,
    totalSpent: 380.00,
    tags: ["Gosta de Gel", "Entrega Rápida"],
    avatarColor: "#be123c"
  },
  {
    id: "cli-3",
    initials: "CT",
    name: "Camila Torres",
    since: "27 de set. de 2025",
    phone: "(11) 97455-8890",
    email: "camila.torres@email.com",
    address: "Rua Ipê, 45 — Pinheiros, São Paulo/SP",
    ordersCount: 3,
    totalSpent: 720.00,
    tags: ["Cliente VIP", "Perfumes com Feromônios"],
    avatarColor: "#e11d48"
  },
  {
    id: "cli-4",
    initials: "DM",
    name: "Diego Martins",
    since: "15 de jun. de 2025",
    phone: "(11) 98220-3376",
    email: "diego.martins@email.com",
    address: "Rua Aroeira, 132 — Vila Mariana, São Paulo/SP",
    ordersCount: 1,
    totalSpent: 210.00,
    tags: ["Primeira Compra"],
    avatarColor: "#9f1239"
  },
  {
    id: "cli-5",
    initials: "BL",
    name: "Beatriz Lima",
    since: "03 de nov. de 2024",
    phone: "(11) 99012-7788",
    email: "beatriz.lima@email.com",
    address: "Av. Central, 501 — Perdizes, São Paulo/SP",
    ordersCount: 5,
    totalSpent: 1980.00,
    tags: ["Cliente VIP", "Vibradores & Cosméticos"],
    avatarColor: "#e11d48"
  },
  {
    id: "cli-6",
    initials: "LF",
    name: "Lucas Ferreira",
    since: "19 de dez. de 2025",
    phone: "(11) 98567-2210",
    email: "lucas.ferreira@email.com",
    address: "Rua Jasmim, 78 — Campinas/SP",
    ordersCount: 2,
    totalSpent: 640.00,
    tags: ["Sigilo Total", "Retirada"],
    avatarColor: "#be123c"
  }
];

export const INITIAL_ORDERS = [
  {
    id: "PED-2043",
    customerName: "Diego Martins",
    customerPhone: "11982203376",
    customerCity: "São Paulo/SP",
    mainProduct: "Sedenta Molhada + Tantric Apple",
    description: "Gel deslizante neutro + óleo maçã do amor.",
    total: 210.00,
    priority: "Normal",
    status: "Aguardando", // Aguardando, Em análise, Aguardando reposição, Em separação, Pronto p/ entrega, Entregue
    date: "11 de set. de 2026",
    paymentMethod: "Pix",
    notes: "Embalagem 100% neutra sem menção externa."
  },
  {
    id: "PED-2044",
    customerName: "Lucas Ferreira",
    customerPhone: "11985672210",
    customerCity: "Campinas/SP",
    mainProduct: "Phero Aroma Feromônios 15ml",
    description: "Perfume íntimo com feromônios femininos.",
    total: 180.00,
    priority: "Baixa",
    status: "Entregue",
    date: "10 de set. de 2026",
    paymentMethod: "Cartão",
    notes: "Entregue em mãos com discrição."
  },
  {
    id: "PED-2045",
    customerName: "Rafael Nunes",
    customerPhone: "11996401123",
    customerCity: "São Paulo/SP",
    mainProduct: "Kit Sedenta com Glitter + Vela Morango",
    description: "Gel cintilante e vela de massagem beijável.",
    total: 380.00,
    priority: "Alta",
    status: "Em análise",
    date: "10 de set. de 2026",
    paymentMethod: "Pix",
    notes: "Cliente pediu confirmação urgente via WhatsApp."
  },
  {
    id: "PED-2046",
    customerName: "Beatriz Lima",
    customerPhone: "11990127788",
    customerCity: "São Paulo/SP",
    mainProduct: "Rabbit Vibrador Luxo + Gel Térmico",
    description: "Vibrador multivelocidade silicone médico.",
    total: 320.00,
    priority: "Normal",
    status: "Pronto p/ entrega",
    date: "04 de set. de 2026",
    paymentMethod: "Cartão",
    notes: "Pacote discreto selado aguardando motoboy."
  },
  {
    id: "PED-2047",
    customerName: "Camila Torres",
    customerPhone: "11974558890",
    customerCity: "São Paulo/SP",
    mainProduct: "Vibrador Líquido Beijável (2 un)",
    description: "Gel sensação térmica beijável algodão doce.",
    total: 240.00,
    priority: "Normal",
    status: "Aguardando reposição",
    date: "09 de set. de 2026",
    paymentMethod: "Pix",
    notes: "Aguardando chegada do novo lote do fornecedor."
  },
  {
    id: "PED-2048",
    customerName: "Marina Alves",
    customerPhone: "11971087116",
    customerCity: "São Paulo/SP",
    mainProduct: "Kit Sensual Experiência Completa",
    description: "Combo com óleo tântrico, perfume e vibrador.",
    total: 690.00,
    priority: "Alta",
    status: "Em separação",
    date: "08 de set. de 2026",
    paymentMethod: "Pix",
    notes: "Cliente VIP, incluir mimo de amostra grátis."
  }
];

export const MONTHLY_REPORTS = [
  { month: "Mar/2026", orders: 42, revenue: 12400, costs: 4200, profit: 8200, margin: "66%" },
  { month: "Abr/2026", orders: 48, revenue: 14100, costs: 4800, profit: 9300, margin: "66%" },
  { month: "Mai/2026", orders: 45, revenue: 13250, costs: 4500, profit: 8750, margin: "66%" },
  { month: "Jun/2026", orders: 57, revenue: 16800, costs: 5600, profit: 11200, margin: "67%" },
  { month: "Jul/2026", orders: 52, revenue: 15600, costs: 5100, profit: 10500, margin: "67%" },
  { month: "Ago/2026", orders: 61, revenue: 18300, costs: 6100, profit: 12200, margin: "67%" },
  { month: "Set/2026", orders: 33, revenue: 9800, costs: 3200, profit: 6600, margin: "67%" }
];

export const CATEGORY_REVENUE = [
  { name: "Lubrificantes & Deslizantes", value: 34200, percent: 85, color: "#e11d48" },
  { name: "Perfumes Íntimos (Feromônios)", value: 24800, percent: 62, color: "#ff0055" },
  { name: "Óleos para Massagem Tântrica", value: 18400, percent: 46, color: "#fb7185" },
  { name: "Vibradores & Acessórios", value: 14200, percent: 35, color: "#be123c" },
  { name: "Velas & Cosméticos Beijáveis", value: 8650, percent: 22, color: "#9f1239" }
];

export const QUICK_MESSAGE_TEMPLATES = [
  {
    id: "pix-confirm",
    title: "1. Confirmação de Pedido + Chave Pix",
    text: `Olá, [Nome]! ✨ Aqui é da Toque de Desejo.\nRecebemos o seu pedido #[NumeroPedido] com muito carinho!\n\n📦 Resumo: [Itens]\n💰 Total com desconto Pix: [ValorTotal]\n\n🔑 Chave Pix: 11999999999\nFavorecido: Toque de Desejo Boutique\n\nAssim que confirmar o envio do comprovante, preparamos sua embalagem 100% neutra e sigilosa imediatamente! 🤫🖤`
  },
  {
    id: "shipped-pkg",
    title: "2. Pacote Discreto Enviado + Rastreio",
    text: `Oie, [Nome]! Passando para avisar que seu pacote da Toque de Desejo já está a caminho! 🚚💨\n\n🔒 Embalagem externa 100% neutra sem qualquer menção aos produtos.\nCódigo de rastreio / entrega: [Rastreio]\n\nQualquer dúvida, pode me chamar aqui! Momentos incríveis para você! ✨💋`
  },
  {
    id: "after-sale",
    title: "3. Pós-Venda Carinhoso (Feedback)",
    text: `Olá, [Nome]! Tudo bem com você? 🥰\nPassando para saber se deu tudo certo com a entrega dos seus produtos da Toque de Desejo.\n\nEsperamos de coração que sua experiência tenha sido maravilhosa! Se precisar de dicas de uso ou quiser conhecer outras novidades, estou sempre à disposição. 🌹✨`
  },
  {
    id: "vip-offer",
    title: "4. Novidade Especial para Clientes VIP",
    text: `Olá, [Nome]! 🖤\nComo você é uma das nossas clientes mais queridas, vim te avisar em primeira mão: acabamos de receber reposição dos itens mais pedidos!\n\nQuer dar uma olhadinha no catálogo antes de divulgarmos no Instagram? Só me responder aqui! 🌹`
  }
];

const ORDERS_KEY = "toque_crm_orders_v3";
const CLIENTS_KEY = "toque_crm_clients_v2";

export function getStoredOrders() {
  if (typeof window === "undefined") return INITIAL_ORDERS;
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(INITIAL_ORDERS));
      return INITIAL_ORDERS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_ORDERS;
  }
}

export function saveStoredOrders(orders) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  } catch (e) {}
}

export function getStoredClients() {
  if (typeof window === "undefined") return INITIAL_CLIENTS;
  try {
    const raw = localStorage.getItem(CLIENTS_KEY);
    if (!raw) {
      localStorage.setItem(CLIENTS_KEY, JSON.stringify(INITIAL_CLIENTS));
      return INITIAL_CLIENTS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_CLIENTS;
  }
}

export function saveStoredClients(clients) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CLIENTS_KEY, JSON.stringify(clients));
  } catch (e) {}
}
