(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/gestao/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GestaoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CatalogContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/CatalogContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gestaoStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gestaoStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-git-2.mjs [app-client] (ecmascript) <export default as FolderGit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.mjs [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.mjs [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const GESTAO_PIN = "2026";
function GestaoPage() {
    _s();
    const { products, updateProduct } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CatalogContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalog"])();
    // Autenticação
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pinInput, setPinInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [authError, setAuthError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Navegação da Sidebar:
    // "dashboard", "clientes", "pedidos", "estoque", "relatorios", "mensagens"
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    // Grupos colapsáveis da Sidebar
    const [gestaoOpen, setGestaoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [financeiroOpen, setFinanceiroOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [comunicacaoOpen, setComunicacaoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Estados dos Dados
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [orderSearch, setOrderSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [orderFilter, setOrderFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Todas");
    const [clientSearch, setClientSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [stockSearch, setStockSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [stockCategoryFilter, setStockCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Todas");
    // Modal Novo Pedido
    const [isNewOrderOpen, setIsNewOrderOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newOrder, setNewOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customerName: "",
        customerPhone: "",
        mainProduct: "",
        description: "",
        total: "",
        priority: "Normal",
        status: "Aguardando",
        notes: ""
    });
    // Modal Novo Cliente
    const [isNewClientOpen, setIsNewClientOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newClient, setNewClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        address: "",
        tag: "Cliente VIP"
    });
    // Feedback Toast
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const showToast = (msg)=>{
        setToast(msg);
        setTimeout(()=>setToast(""), 2800);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GestaoPage.useEffect": ()=>{
            try {
                if (sessionStorage.getItem("toque_gestao_auth") === "true") {
                    setIsAuthenticated(true);
                }
                setOrders((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gestaoStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredOrders"])());
                setClients((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gestaoStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredClients"])());
            } catch (e) {
                console.warn(e);
            }
        }
    }["GestaoPage.useEffect"], []);
    const handleLogin = (e)=>{
        e.preventDefault();
        if (pinInput.trim() === GESTAO_PIN) {
            setIsAuthenticated(true);
            sessionStorage.setItem("toque_gestao_auth", "true");
            setAuthError("");
        } else {
            setAuthError("PIN incorreto. Digite 2026.");
        }
    };
    const handleLogout = ()=>{
        setIsAuthenticated(false);
        sessionStorage.removeItem("toque_gestao_auth");
        setPinInput("");
    };
    // Pedidos Filtrados
    const filteredOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GestaoPage.useMemo[filteredOrders]": ()=>{
            return orders.filter({
                "GestaoPage.useMemo[filteredOrders]": (o)=>{
                    if (orderFilter !== "Todas") {
                        if (orderFilter === "Aguardando" && o.status !== "Aguardando") return false;
                        if (orderFilter === "Em análise" && o.status !== "Em análise") return false;
                        if (orderFilter === "Aguardando reposição" && !o.status.toLowerCase().includes("reposição") && !o.status.toLowerCase().includes("peça")) return false;
                        if (orderFilter === "Em separação" && !o.status.toLowerCase().includes("separação")) return false;
                        if (orderFilter === "Pronto p/ entrega" && !o.status.toLowerCase().includes("pronto")) return false;
                        if (orderFilter === "Entregue" && o.status !== "Entregue") return false;
                    }
                    if (orderSearch.trim()) {
                        const q = orderSearch.toLowerCase();
                        const mId = o.id.toLowerCase().includes(q);
                        const mName = o.customerName.toLowerCase().includes(q);
                        const mProd = o.mainProduct.toLowerCase().includes(q);
                        const mDesc = o.description.toLowerCase().includes(q);
                        if (!mId && !mName && !mProd && !mDesc) return false;
                    }
                    return true;
                }
            }["GestaoPage.useMemo[filteredOrders]"]);
        }
    }["GestaoPage.useMemo[filteredOrders]"], [
        orders,
        orderFilter,
        orderSearch
    ]);
    // Clientes Filtrados
    const filteredClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GestaoPage.useMemo[filteredClients]": ()=>{
            return clients.filter({
                "GestaoPage.useMemo[filteredClients]": (c)=>{
                    if (!clientSearch.trim()) return true;
                    const q = clientSearch.toLowerCase();
                    return c.name.toLowerCase().includes(q) || c.phone.includes(q) || c.email.toLowerCase().includes(q) || c.address.toLowerCase().includes(q);
                }
            }["GestaoPage.useMemo[filteredClients]"]);
        }
    }["GestaoPage.useMemo[filteredClients]"], [
        clients,
        clientSearch
    ]);
    // Estoque Filtrado
    const filteredStock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GestaoPage.useMemo[filteredStock]": ()=>{
            return products.filter({
                "GestaoPage.useMemo[filteredStock]": (p)=>{
                    if (stockCategoryFilter !== "Todas" && p.category !== stockCategoryFilter) {
                        return false;
                    }
                    if (stockSearch.trim()) {
                        const q = stockSearch.toLowerCase();
                        return p.name.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q);
                    }
                    return true;
                }
            }["GestaoPage.useMemo[filteredStock]"]);
        }
    }["GestaoPage.useMemo[filteredStock]"], [
        products,
        stockCategoryFilter,
        stockSearch
    ]);
    // Ações de Salvar
    const handleSaveOrder = (e)=>{
        e.preventDefault();
        if (!newOrder.customerName || !newOrder.mainProduct) return;
        const created = {
            id: `PED-${Math.floor(2000 + Math.random() * 900)}`,
            customerName: newOrder.customerName.trim(),
            customerPhone: newOrder.customerPhone || "11999999999",
            customerCity: "São Paulo/SP",
            mainProduct: newOrder.mainProduct.trim(),
            description: newOrder.description.trim() || "Produto sensual para entrega discreta.",
            total: parseFloat(newOrder.total) || 190.00,
            priority: newOrder.priority,
            status: newOrder.status,
            date: "Hoje",
            paymentMethod: "Pix",
            notes: newOrder.notes.trim() || "Embalagem 100% neutra."
        };
        const updated = [
            created,
            ...orders
        ];
        setOrders(updated);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gestaoStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredOrders"])(updated);
        setIsNewOrderOpen(false);
        setNewOrder({
            customerName: "",
            customerPhone: "",
            mainProduct: "",
            description: "",
            total: "",
            priority: "Normal",
            status: "Aguardando",
            notes: ""
        });
        showToast(`Pedido ${created.id} criado com sucesso!`);
    };
    const handleSaveClient = (e)=>{
        e.preventDefault();
        if (!newClient.name || !newClient.phone) return;
        const names = newClient.name.trim().split(" ");
        const initials = names.length > 1 ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase() : names[0].slice(0, 2).toUpperCase();
        const created = {
            id: `cli-${Date.now()}`,
            initials,
            name: newClient.name.trim(),
            since: "Recente",
            phone: newClient.phone.trim(),
            email: newClient.email.trim() || `${names[0].toLowerCase()}@email.com`,
            address: newClient.address.trim() || "São Paulo/SP",
            ordersCount: 1,
            totalSpent: 180.00,
            tags: [
                newClient.tag
            ],
            avatarColor: "#e11d48"
        };
        const updated = [
            created,
            ...clients
        ];
        setClients(updated);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gestaoStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredClients"])(updated);
        setIsNewClientOpen(false);
        setNewClient({
            name: "",
            phone: "",
            email: "",
            address: "",
            tag: "Cliente VIP"
        });
        showToast(`Cliente ${created.name} cadastrada!`);
    };
    const handleQuickStock = (prod, delta)=>{
        const cur = Number(prod.stock) || 0;
        const next = Math.max(0, cur + delta);
        updateProduct(prod.id, {
            stock: next
        });
        showToast(`Estoque atualizado: ${next} un`);
    };
    const handleOpenWhatsApp = (phone, text)=>{
        const clean = phone.replace(/\D/g, "");
        window.open(`https://wa.me/55${clean}?text=${encodeURIComponent(text)}`, "_blank");
    };
    const handleExportPDF = ()=>{
        window.print();
    };
    // Helper de cor do status
    const getStatusBadge = (status)=>{
        const s = (status || "").toLowerCase();
        if (s.includes("entregue")) {
            return {
                dot: "#22c55e",
                bg: "rgba(34, 197, 94, 0.12)",
                color: "#4ade80",
                text: "• Entregue"
            };
        }
        if (s.includes("pronto")) {
            return {
                dot: "#10b981",
                bg: "rgba(16, 185, 129, 0.12)",
                color: "#34d399",
                text: "• Pronto p/ entrega"
            };
        }
        if (s.includes("análise") || s.includes("analise")) {
            return {
                dot: "#38bdf8",
                bg: "rgba(56, 189, 248, 0.12)",
                color: "#38bdf8",
                text: "• Em análise"
            };
        }
        if (s.includes("separação") || s.includes("separacao") || s.includes("embalando")) {
            return {
                dot: "#a855f7",
                bg: "rgba(168, 85, 247, 0.12)",
                color: "#c084fc",
                text: "• Em separação"
            };
        }
        if (s.includes("reposição") || s.includes("reposicao") || s.includes("peça") || s.includes("estoque")) {
            return {
                dot: "#f59e0b",
                bg: "rgba(245, 158, 11, 0.12)",
                color: "#fbbf24",
                text: "• Aguardando reposição"
            };
        }
        return {
            dot: "#a1a1aa",
            bg: "rgba(161, 161, 170, 0.12)",
            color: "#d4d4d8",
            text: `• ${status}`
        };
    };
    // Helper de prioridade
    const getPriorityBadge = (prio)=>{
        if (prio === "Alta" || prio === "VIP") {
            return {
                bg: "rgba(225, 29, 72, 0.14)",
                color: "#fb7185",
                border: "rgba(225, 29, 72, 0.3)"
            };
        }
        if (prio === "Baixa") {
            return {
                bg: "rgba(161, 161, 170, 0.1)",
                color: "#a1a1aa",
                border: "rgba(161, 161, 170, 0.2)"
            };
        }
        return {
            bg: "rgba(59, 130, 246, 0.12)",
            color: "#60a5fa",
            border: "rgba(59, 130, 246, 0.25)"
        };
    };
    // ========================================================
    // TELA DE DESBLOQUEIO POR PIN
    // ========================================================
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#08060a",
                padding: "20px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: "380px",
                    background: "#120e17",
                    border: "1px solid rgba(225, 29, 72, 0.25)",
                    borderRadius: "20px",
                    padding: "36px 28px",
                    textAlign: "center",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.8)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            margin: "0 auto 16px",
                            overflow: "hidden",
                            border: "2px solid #e11d48",
                            boxShadow: "0 0 20px rgba(225, 29, 72, 0.4)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/img/logo.jpg",
                            alt: "Logo",
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/gestao/page.js",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 334,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "1.3rem",
                            fontWeight: 700,
                            color: "#fff",
                            marginBottom: "4px"
                        },
                        children: "Toque de Desejo"
                    }, void 0, false, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.85rem",
                            color: "#a1a1aa",
                            marginBottom: "24px"
                        },
                        children: "Painel Executivo & Gestão"
                    }, void 0, false, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleLogin,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                placeholder: "Digite o PIN (2026)",
                                value: pinInput,
                                onChange: (e)=>setPinInput(e.target.value),
                                autoFocus: true,
                                style: {
                                    width: "100%",
                                    padding: "12px",
                                    fontSize: "1.1rem",
                                    textAlign: "center",
                                    letterSpacing: "4px",
                                    background: "#09070c",
                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                    borderRadius: "12px",
                                    color: "#fff",
                                    outline: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this),
                            authError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: "#fb7185",
                                    fontSize: "0.82rem"
                                },
                                children: authError
                            }, void 0, false, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 377,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                style: {
                                    width: "100%",
                                    padding: "12px",
                                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "9999px",
                                    fontSize: "0.92rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    boxShadow: "0 4px 15px rgba(225, 29, 72, 0.4)"
                                },
                                children: "Acessar Painel"
                            }, void 0, false, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "24px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            style: {
                                color: "#71717a",
                                fontSize: "0.82rem",
                                textDecoration: "none"
                            },
                            children: "← Voltar para a loja online"
                        }, void 0, false, {
                            fileName: "[project]/app/gestao/page.js",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 399,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/gestao/page.js",
                lineNumber: 322,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/gestao/page.js",
            lineNumber: 312,
            columnNumber: 7
        }, this);
    }
    // ========================================================
    // LAYOUT PRINCIPAL (IDÊNTICO AOS PRINTS, EM MODO ESCURO PRETO & VERMELHO)
    // ========================================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            display: "flex",
            background: "#09070c",
            color: "#f4f4f5",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        },
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    bottom: "28px",
                    right: "28px",
                    background: "#1c1424",
                    border: "1px solid #e11d48",
                    color: "#fff",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
                    zIndex: 99999,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.88rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        size: 16,
                        color: "#4ade80"
                    }, void 0, false, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 442,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toast
                    }, void 0, false, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 443,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/gestao/page.js",
                lineNumber: 424,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                style: {
                    width: "250px",
                    flexShrink: 0,
                    background: "#100c16",
                    borderRight: "1px solid rgba(255, 255, 255, 0.07)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "24px 16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    padding: "0 8px 24px",
                                    borderBottom: "1px solid rgba(255, 255, 255, 0.06)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "42px",
                                            height: "42px",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            border: "2px solid #e11d48",
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/img/logo.jpg",
                                            alt: "Logo",
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 475,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 465,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: "0.95rem",
                                                    color: "#fff",
                                                    lineHeight: 1.2
                                                },
                                                children: "Toque de Desejo"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 478,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.75rem",
                                                    color: "#e11d48",
                                                    fontWeight: 600
                                                },
                                                children: "Central da Boutique"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 481,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 464,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                style: {
                                    marginTop: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentView("dashboard"),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            width: "100%",
                                            padding: "10px 14px",
                                            borderRadius: "9999px",
                                            background: currentView === "dashboard" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                                            color: currentView === "dashboard" ? "#fff" : "#a1a1aa",
                                            fontWeight: currentView === "dashboard" ? 600 : 500,
                                            fontSize: "0.88rem",
                                            border: "none",
                                            cursor: "pointer",
                                            boxShadow: currentView === "dashboard" ? "0 4px 14px rgba(225, 29, 72, 0.35)" : "none",
                                            transition: "all 0.15s ease"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 509,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Dashboard"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 510,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "12px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setGestaoOpen(!gestaoOpen),
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    width: "100%",
                                                    padding: "6px 14px",
                                                    background: "transparent",
                                                    border: "none",
                                                    color: "#71717a",
                                                    fontSize: "0.82rem",
                                                    fontWeight: 600,
                                                    cursor: "pointer",
                                                    textTransform: "capitalize"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit2$3e$__["FolderGit2"], {
                                                                size: 16,
                                                                style: {
                                                                    color: "#e11d48"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 533,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "#d4d4d8"
                                                                },
                                                                children: "Gestão"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 534,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 532,
                                                        columnNumber: 17
                                                    }, this),
                                                    gestaoOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 536,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 536,
                                                        columnNumber: 59
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 515,
                                                columnNumber: 15
                                            }, this),
                                            gestaoOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: "4px",
                                                    paddingLeft: "12px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "4px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentView("clientes"),
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                            width: "100%",
                                                            padding: "9px 14px",
                                                            borderRadius: "9999px",
                                                            background: currentView === "clientes" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                                                            color: currentView === "clientes" ? "#fff" : "#a1a1aa",
                                                            fontWeight: currentView === "clientes" ? 600 : 500,
                                                            fontSize: "0.85rem",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            boxShadow: currentView === "clientes" ? "0 4px 14px rgba(225, 29, 72, 0.35)" : "none"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 559,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Clientes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 560,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 541,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentView("pedidos"),
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                            width: "100%",
                                                            padding: "9px 14px",
                                                            borderRadius: "9999px",
                                                            background: currentView === "pedidos" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                                                            color: currentView === "pedidos" ? "#fff" : "#a1a1aa",
                                                            fontWeight: currentView === "pedidos" ? 600 : 500,
                                                            fontSize: "0.85rem",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            boxShadow: currentView === "pedidos" ? "0 4px 14px rgba(225, 29, 72, 0.35)" : "none"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 581,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Pedidos & Entregas"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 582,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 563,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 540,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 514,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "12px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFinanceiroOpen(!financeiroOpen),
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    width: "100%",
                                                    padding: "6px 14px",
                                                    background: "transparent",
                                                    border: "none",
                                                    color: "#71717a",
                                                    fontSize: "0.82rem",
                                                    fontWeight: 600,
                                                    cursor: "pointer"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                size: 16,
                                                                style: {
                                                                    color: "#e11d48"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 607,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "#d4d4d8"
                                                                },
                                                                children: "Financeiro"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 608,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 606,
                                                        columnNumber: 17
                                                    }, this),
                                                    financeiroOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 610,
                                                        columnNumber: 35
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 610,
                                                        columnNumber: 63
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 590,
                                                columnNumber: 15
                                            }, this),
                                            financeiroOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: "4px",
                                                    paddingLeft: "12px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "4px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentView("estoque"),
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                            width: "100%",
                                                            padding: "9px 14px",
                                                            borderRadius: "9999px",
                                                            background: currentView === "estoque" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                                                            color: currentView === "estoque" ? "#fff" : "#a1a1aa",
                                                            fontWeight: currentView === "estoque" ? 600 : 500,
                                                            fontSize: "0.85rem",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            boxShadow: currentView === "estoque" ? "0 4px 14px rgba(225, 29, 72, 0.35)" : "none"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 633,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Estoque de Produtos"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 634,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 615,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentView("relatorios"),
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                            width: "100%",
                                                            padding: "9px 14px",
                                                            borderRadius: "9999px",
                                                            background: currentView === "relatorios" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                                                            color: currentView === "relatorios" ? "#fff" : "#a1a1aa",
                                                            fontWeight: currentView === "relatorios" ? 600 : 500,
                                                            fontSize: "0.85rem",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            boxShadow: currentView === "relatorios" ? "0 4px 14px rgba(225, 29, 72, 0.35)" : "none"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 655,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Relatórios"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 656,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 637,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 614,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 589,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "12px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setComunicacaoOpen(!comunicacaoOpen),
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    width: "100%",
                                                    padding: "6px 14px",
                                                    background: "transparent",
                                                    border: "none",
                                                    color: "#71717a",
                                                    fontSize: "0.82rem",
                                                    fontWeight: 600,
                                                    cursor: "pointer"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                                size: 16,
                                                                style: {
                                                                    color: "#e11d48"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 681,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "#d4d4d8"
                                                                },
                                                                children: "Atendimento"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 682,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 680,
                                                        columnNumber: 17
                                                    }, this),
                                                    comunicacaoOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 684,
                                                        columnNumber: 36
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 684,
                                                        columnNumber: 64
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 664,
                                                columnNumber: 15
                                            }, this),
                                            comunicacaoOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: "4px",
                                                    paddingLeft: "12px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "4px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentView("mensagens"),
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "10px",
                                                        width: "100%",
                                                        padding: "9px 14px",
                                                        borderRadius: "9999px",
                                                        background: currentView === "mensagens" ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)" : "transparent",
                                                        color: currentView === "mensagens" ? "#fff" : "#a1a1aa",
                                                        fontWeight: currentView === "mensagens" ? 600 : 500,
                                                        fontSize: "0.85rem",
                                                        border: "none",
                                                        cursor: "pointer"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 706,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Modelos WhatsApp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 707,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 689,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 688,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 663,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "12px 10px",
                            background: "rgba(255, 255, 255, 0.02)",
                            borderRadius: "14px",
                            border: "1px solid rgba(255, 255, 255, 0.05)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #e11d48 0%, #4c0519 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: 700,
                                            fontSize: "0.82rem",
                                            color: "#fff"
                                        },
                                        children: "TD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 728,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 600,
                                                    fontSize: "0.85rem",
                                                    color: "#fff"
                                                },
                                                children: "Toque de Desejo"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 745,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.72rem",
                                                    color: "#71717a"
                                                },
                                                children: "contato@toquededesejo.com"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 746,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 744,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 727,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: "#71717a",
                                    cursor: "pointer",
                                    padding: "4px"
                                },
                                title: "Sair do painel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 754,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 749,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 716,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/gestao/page.js",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "16px 32px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: "1 1 400px",
                                    maxWidth: "600px",
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 15,
                                        style: {
                                            position: "absolute",
                                            left: "16px",
                                            top: "12px",
                                            color: "#71717a"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 782,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Buscar pedido, cliente ou produto...",
                                        value: orderSearch,
                                        onChange: (e)=>setOrderSearch(e.target.value),
                                        style: {
                                            width: "100%",
                                            padding: "10px 16px 10px 42px",
                                            borderRadius: "9999px",
                                            background: "#14101a",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            color: "#fff",
                                            fontSize: "0.88rem",
                                            outline: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 783,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 775,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        target: "_blank",
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            padding: "8px 16px",
                                            borderRadius: "9999px",
                                            background: "rgba(255, 255, 255, 0.04)",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            color: "#d4d4d8",
                                            fontSize: "0.82rem",
                                            textDecoration: "none"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 819,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Site"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 820,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 803,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "50%",
                                            background: "rgba(255, 255, 255, 0.04)",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#eab308"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 836,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 823,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "50%",
                                            background: "rgba(255, 255, 255, 0.04)",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#a1a1aa",
                                            position: "relative"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 853,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: "absolute",
                                                    top: "8px",
                                                    right: "8px",
                                                    width: "6px",
                                                    height: "6px",
                                                    borderRadius: "50%",
                                                    background: "#e11d48"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 854,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 839,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: 700,
                                            fontSize: "0.8rem",
                                            color: "#fff"
                                        },
                                        children: "TD"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 857,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 802,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 764,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            padding: "32px",
                            overflowY: "auto"
                        },
                        children: [
                            currentView === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        style: {
                                                            fontSize: "1.75rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "Dashboard"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 888,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#a1a1aa",
                                                            fontSize: "0.88rem"
                                                        },
                                                        children: "Visão geral da boutique — setembro de 2026"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 891,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 887,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsNewOrderOpen(true),
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    padding: "10px 22px",
                                                    borderRadius: "9999px",
                                                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                                                    color: "#fff",
                                                    border: "none",
                                                    fontWeight: 600,
                                                    fontSize: "0.88rem",
                                                    cursor: "pointer",
                                                    boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 913,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Novo pedido"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 914,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 896,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 886,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                                            gap: "18px",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "22px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "flex-start",
                                                            marginBottom: "16px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: "38px",
                                                                    height: "38px",
                                                                    borderRadius: "10px",
                                                                    background: "rgba(225, 29, 72, 0.15)",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    color: "#fb7185"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 924,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 923,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                size: 16,
                                                                color: "#71717a"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 926,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 922,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "R$ 9.800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 928,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.88rem",
                                                            color: "#d4d4d8",
                                                            fontWeight: 600,
                                                            marginBottom: "2px"
                                                        },
                                                        children: "Faturamento do mês"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 931,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.78rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "33 pedidos • +12% vs. período anterior"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 934,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 921,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "22px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "flex-start",
                                                            marginBottom: "16px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: "38px",
                                                                    height: "38px",
                                                                    borderRadius: "10px",
                                                                    background: "rgba(56, 189, 248, 0.15)",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    color: "#38bdf8"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 943,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 942,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                size: 16,
                                                                color: "#71717a"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 945,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 941,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 947,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.88rem",
                                                            color: "#d4d4d8",
                                                            fontWeight: 600,
                                                            marginBottom: "2px"
                                                        },
                                                        children: "Pedidos em aberto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 950,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.78rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Em análise, separação ou aguardando"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 953,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 940,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "22px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "flex-start",
                                                            marginBottom: "16px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: "38px",
                                                                    height: "38px",
                                                                    borderRadius: "10px",
                                                                    background: "rgba(34, 197, 94, 0.15)",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    color: "#4ade80"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 962,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 961,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                size: 16,
                                                                color: "#71717a"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 964,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 960,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 966,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.88rem",
                                                            color: "#d4d4d8",
                                                            fontWeight: 600,
                                                            marginBottom: "2px"
                                                        },
                                                        children: "Prontos p/ entrega"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 969,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.78rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Aguardando envio discreto ou retirada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 972,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 959,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "22px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "flex-start",
                                                            marginBottom: "16px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: "38px",
                                                                    height: "38px",
                                                                    borderRadius: "10px",
                                                                    background: "rgba(225, 29, 72, 0.15)",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    color: "#fb7185"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 981,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 980,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                size: 16,
                                                                color: "#71717a"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 983,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 979,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 985,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.88rem",
                                                            color: "#d4d4d8",
                                                            fontWeight: 600,
                                                            marginBottom: "2px"
                                                        },
                                                        children: "Produtos em baixa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 988,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.78rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Abaixo do estoque mínimo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 991,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 978,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 919,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1.8fr 1fr",
                                            gap: "20px",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "24px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            marginBottom: "20px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        style: {
                                                                            fontSize: "1rem",
                                                                            fontWeight: 700,
                                                                            color: "#fff"
                                                                        },
                                                                        children: "Faturamento"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1003,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "0.78rem",
                                                                            color: "#71717a"
                                                                        },
                                                                        children: "Últimos 7 meses"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1004,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1002,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setCurrentView("relatorios"),
                                                                style: {
                                                                    background: "none",
                                                                    border: "none",
                                                                    color: "#e11d48",
                                                                    fontSize: "0.82rem",
                                                                    fontWeight: 600,
                                                                    cursor: "pointer"
                                                                },
                                                                children: "Ver relatórios →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1006,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1001,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: "200px",
                                                            width: "100%",
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                viewBox: "0 0 600 200",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    overflow: "visible"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                            id: "rubyGradient",
                                                                            x1: "0",
                                                                            y1: "0",
                                                                            x2: "0",
                                                                            y2: "1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "0%",
                                                                                    stopColor: "#e11d48",
                                                                                    stopOpacity: "0.45"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/gestao/page.js",
                                                                                    lineNumber: 1019,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "100%",
                                                                                    stopColor: "#e11d48",
                                                                                    stopOpacity: "0.0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/gestao/page.js",
                                                                                    lineNumber: 1020,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1018,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1017,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "0",
                                                                        y1: "20",
                                                                        x2: "600",
                                                                        y2: "20",
                                                                        stroke: "rgba(255,255,255,0.06)",
                                                                        strokeDasharray: "4 4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1025,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "0",
                                                                        y1: "70",
                                                                        x2: "600",
                                                                        y2: "70",
                                                                        stroke: "rgba(255,255,255,0.06)",
                                                                        strokeDasharray: "4 4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1026,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "0",
                                                                        y1: "120",
                                                                        x2: "600",
                                                                        y2: "120",
                                                                        stroke: "rgba(255,255,255,0.06)",
                                                                        strokeDasharray: "4 4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1027,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "0",
                                                                        y1: "170",
                                                                        x2: "600",
                                                                        y2: "170",
                                                                        stroke: "rgba(255,255,255,0.06)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1028,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M 20 120 C 80 110, 140 100, 180 115 C 220 130, 260 80, 320 60 C 380 40, 440 30, 500 50 C 540 60, 570 120, 580 140 L 580 170 L 20 170 Z",
                                                                        fill: "url(#rubyGradient)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1031,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M 20 120 C 80 110, 140 100, 180 115 C 220 130, 260 80, 320 60 C 380 40, 440 30, 500 50 C 540 60, 570 120, 580 140",
                                                                        fill: "none",
                                                                        stroke: "#e11d48",
                                                                        strokeWidth: "3.5",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1037,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1016,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    justifyContent: "space-between",
                                                                    marginTop: "12px",
                                                                    color: "#71717a",
                                                                    fontSize: "0.78rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Mar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1048,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Abr"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1049,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Mai"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1050,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Jun"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1051,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Jul"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1052,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Ago"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1053,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Set"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1054,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1047,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1015,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1000,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "24px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontSize: "1rem",
                                                                    fontWeight: 700,
                                                                    color: "#fff",
                                                                    marginBottom: "4px"
                                                                },
                                                                children: "Alertas de estoque"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1062,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: "0.78rem",
                                                                    color: "#71717a",
                                                                    display: "block",
                                                                    marginBottom: "18px"
                                                                },
                                                                children: "Reposição recomendada"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1065,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    gap: "14px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            alignItems: "center"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            fontWeight: 600,
                                                                                            color: "#fff",
                                                                                            fontSize: "0.88rem"
                                                                                        },
                                                                                        children: "Sedenta Por Conforto 50g"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/gestao/page.js",
                                                                                        lineNumber: 1072,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            color: "#71717a",
                                                                                            fontSize: "0.75rem"
                                                                                        },
                                                                                        children: "REF-SED-GLITTER"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/gestao/page.js",
                                                                                        lineNumber: 1073,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1071,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: "0.78rem",
                                                                                    padding: "3px 10px",
                                                                                    borderRadius: "9999px",
                                                                                    background: "rgba(245, 158, 11, 0.15)",
                                                                                    color: "#facc15",
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "2 / 4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1075,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1070,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            alignItems: "center"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            fontWeight: 600,
                                                                                            color: "#fff",
                                                                                            fontSize: "0.88rem"
                                                                                        },
                                                                                        children: "Vibrador Líquido Beijável"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/gestao/page.js",
                                                                                        lineNumber: 1082,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            color: "#71717a",
                                                                                            fontSize: "0.75rem"
                                                                                        },
                                                                                        children: "REF-VIB-LIQ"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/gestao/page.js",
                                                                                        lineNumber: 1083,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1081,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: "0.78rem",
                                                                                    padding: "3px 10px",
                                                                                    borderRadius: "9999px",
                                                                                    background: "rgba(239, 68, 68, 0.15)",
                                                                                    color: "#f87171",
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "0 / 2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1085,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1080,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            alignItems: "center"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            fontWeight: 600,
                                                                                            color: "#fff",
                                                                                            fontSize: "0.88rem"
                                                                                        },
                                                                                        children: "Phero Aroma Feromônios"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/gestao/page.js",
                                                                                        lineNumber: 1092,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            color: "#71717a",
                                                                                            fontSize: "0.75rem"
                                                                                        },
                                                                                        children: "REF-PHERO-15ML"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/gestao/page.js",
                                                                                        lineNumber: 1093,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1091,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: "0.78rem",
                                                                                    padding: "3px 10px",
                                                                                    borderRadius: "9999px",
                                                                                    background: "rgba(245, 158, 11, 0.15)",
                                                                                    color: "#facc15",
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "1 / 2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1095,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1090,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1069,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1061,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentView("estoque"),
                                                        style: {
                                                            marginTop: "20px",
                                                            background: "none",
                                                            border: "none",
                                                            color: "#a1a1aa",
                                                            fontSize: "0.85rem",
                                                            fontWeight: 500,
                                                            cursor: "pointer",
                                                            textAlign: "center"
                                                        },
                                                        children: "Gerenciar estoque →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1102,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1060,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 998,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#15111c",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            borderRadius: "20px",
                                            padding: "24px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    marginBottom: "16px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontSize: "1rem",
                                                                    fontWeight: 700,
                                                                    color: "#fff"
                                                                },
                                                                children: "Pedidos recentes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1124,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: "0.78rem",
                                                                    color: "#71717a"
                                                                },
                                                                children: "Acompanhamento de entregas em tempo real"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1125,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentView("pedidos"),
                                                        style: {
                                                            background: "none",
                                                            border: "none",
                                                            color: "#e11d48",
                                                            fontSize: "0.82rem",
                                                            fontWeight: 600,
                                                            cursor: "pointer"
                                                        },
                                                        children: "Ver todos →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1127,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    overflowX: "auto"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    style: {
                                                        width: "100%",
                                                        borderCollapse: "collapse",
                                                        textAlign: "left",
                                                        fontSize: "0.85rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                style: {
                                                                    color: "#71717a",
                                                                    fontSize: "0.78rem",
                                                                    borderBottom: "1px solid rgba(255, 255, 255, 0.06)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Pedido"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1139,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Cliente"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1140,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Produto / Itens"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1141,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Prioridade"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1142,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Previsão"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1143,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500,
                                                                            textAlign: "right"
                                                                        },
                                                                        children: "Status"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1144,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1138,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1137,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: orders.slice(0, 5).map((ord)=>{
                                                                const prio = getPriorityBadge(ord.priority);
                                                                const stat = getStatusBadge(ord.status);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    style: {
                                                                        borderBottom: "1px solid rgba(255, 255, 255, 0.04)"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                color: "#60a5fa",
                                                                                fontWeight: 600
                                                                            },
                                                                            children: ord.id
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1153,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                fontWeight: 600,
                                                                                color: "#fff"
                                                                            },
                                                                            children: ord.customerName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1154,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                color: "#d4d4d8"
                                                                            },
                                                                            children: ord.mainProduct
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1155,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: "0.74rem",
                                                                                    padding: "2px 8px",
                                                                                    borderRadius: "6px",
                                                                                    background: prio.bg,
                                                                                    color: prio.color,
                                                                                    border: `1px solid ${prio.border}`,
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: ord.priority
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1157,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1156,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                color: "#a1a1aa"
                                                                            },
                                                                            children: ord.date
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1171,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                textAlign: "right"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: "0.75rem",
                                                                                    padding: "4px 10px",
                                                                                    borderRadius: "9999px",
                                                                                    background: stat.bg,
                                                                                    color: stat.color,
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: stat.text
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1173,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1172,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, ord.id, true, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 1152,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1147,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 1136,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1135,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 884,
                                columnNumber: 13
                            }, this),
                            currentView === "pedidos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        style: {
                                                            fontSize: "1.75rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "Pedidos & Entregas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1204,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#a1a1aa",
                                                            fontSize: "0.88rem"
                                                        },
                                                        children: "Controle completo dos pedidos, embalagem discreta e entregas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1207,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsNewOrderOpen(true),
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    padding: "10px 22px",
                                                    borderRadius: "9999px",
                                                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                                                    color: "#fff",
                                                    border: "none",
                                                    fontWeight: 600,
                                                    fontSize: "0.88rem",
                                                    cursor: "pointer",
                                                    boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1229,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Novo pedido"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1230,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#15111c",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            borderRadius: "9999px",
                                            padding: "6px 12px 6px 18px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "14px",
                                            marginBottom: "26px",
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    flex: "1 1 240px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        size: 15,
                                                        color: "#71717a"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1250,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Buscar por pedido, cliente ou produto...",
                                                        value: orderSearch,
                                                        onChange: (e)=>setOrderSearch(e.target.value),
                                                        style: {
                                                            width: "100%",
                                                            background: "none",
                                                            border: "none",
                                                            color: "#fff",
                                                            fontSize: "0.85rem",
                                                            outline: "none"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1251,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1249,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "6px",
                                                    overflowX: "auto"
                                                },
                                                children: [
                                                    "Todas",
                                                    "Aguardando",
                                                    "Em análise",
                                                    "Aguardando reposição",
                                                    "Em separação",
                                                    "Pronto p/ entrega",
                                                    "Entregue"
                                                ].map((f)=>{
                                                    const isSel = orderFilter === f;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setOrderFilter(f),
                                                        style: {
                                                            padding: "6px 14px",
                                                            borderRadius: "9999px",
                                                            fontSize: "0.78rem",
                                                            fontWeight: isSel ? 600 : 500,
                                                            background: isSel ? "#e11d48" : "transparent",
                                                            color: isSel ? "#fff" : "#a1a1aa",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            whiteSpace: "nowrap"
                                                        },
                                                        children: f
                                                    }, f, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1272,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1268,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                                            gap: "20px"
                                        },
                                        children: filteredOrders.map((ord)=>{
                                            const prio = getPriorityBadge(ord.priority);
                                            const stat = getStatusBadge(ord.status);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "22px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    minHeight: "180px",
                                                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    justifyContent: "space-between",
                                                                    alignItems: "flex-start",
                                                                    marginBottom: "12px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "10px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    width: "36px",
                                                                                    height: "36px",
                                                                                    borderRadius: "10px",
                                                                                    background: "rgba(225, 29, 72, 0.15)",
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    justifyContent: "center",
                                                                                    color: "#fb7185"
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                                    size: 18
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/gestao/page.js",
                                                                                    lineNumber: 1330,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1318,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            fontSize: "0.75rem",
                                                                                            color: "#71717a",
                                                                                            fontWeight: 600,
                                                                                            display: "block"
                                                                                        },
                                                                                        children: ord.id
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/gestao/page.js",
                                                                                        lineNumber: 1333,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        style: {
                                                                                            fontSize: "0.95rem",
                                                                                            color: "#fff"
                                                                                        },
                                                                                        children: ord.mainProduct
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/gestao/page.js",
                                                                                        lineNumber: 1336,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1332,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1317,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "0.72rem",
                                                                            padding: "2px 8px",
                                                                            borderRadius: "6px",
                                                                            background: prio.bg,
                                                                            color: prio.color,
                                                                            border: `1px solid ${prio.border}`,
                                                                            fontWeight: 600
                                                                        },
                                                                        children: ord.priority
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1340,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1316,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: "#a1a1aa",
                                                                    fontSize: "0.82rem",
                                                                    lineHeight: 1.4,
                                                                    margin: "0 0 16px"
                                                                },
                                                                children: ord.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1355,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1315,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "flex-end",
                                                            paddingTop: "12px",
                                                            borderTop: "1px solid rgba(255, 255, 255, 0.06)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "#71717a",
                                                                            fontSize: "0.75rem",
                                                                            display: "block"
                                                                        },
                                                                        children: ord.customerName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1371,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        style: {
                                                                            fontSize: "1.05rem",
                                                                            color: "#fff"
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(ord.total)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1372,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1370,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: "0.75rem",
                                                                    padding: "4px 12px",
                                                                    borderRadius: "9999px",
                                                                    background: stat.bg,
                                                                    color: stat.color,
                                                                    fontWeight: 600
                                                                },
                                                                children: stat.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1377,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1361,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, ord.id, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1300,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1295,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 1200,
                                columnNumber: 13
                            }, this),
                            currentView === "clientes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        style: {
                                                            fontSize: "1.75rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "Clientes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1405,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#a1a1aa",
                                                            fontSize: "0.88rem"
                                                        },
                                                        children: [
                                                            clients.length,
                                                            " clientes cadastrados na boutique"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1408,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1404,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsNewClientOpen(true),
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    padding: "10px 22px",
                                                    borderRadius: "9999px",
                                                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                                                    color: "#fff",
                                                    border: "none",
                                                    fontWeight: 600,
                                                    fontSize: "0.88rem",
                                                    cursor: "pointer",
                                                    boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1430,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Novo cliente"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1431,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1413,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1403,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#15111c",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            borderRadius: "9999px",
                                            padding: "10px 20px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 15,
                                                color: "#71717a"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1448,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Buscar cliente por nome, telefone ou e-mail...",
                                                value: clientSearch,
                                                onChange: (e)=>setClientSearch(e.target.value),
                                                style: {
                                                    width: "100%",
                                                    background: "none",
                                                    border: "none",
                                                    color: "#fff",
                                                    fontSize: "0.88rem",
                                                    outline: "none"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1449,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1436,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                                            gap: "20px"
                                        },
                                        children: filteredClients.map((cli)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "24px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    minHeight: "220px",
                                                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "12px",
                                                                    marginBottom: "16px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: "44px",
                                                                            height: "44px",
                                                                            borderRadius: "50%",
                                                                            background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center",
                                                                            fontWeight: 700,
                                                                            color: "#fff",
                                                                            fontSize: "0.95rem",
                                                                            flexShrink: 0
                                                                        },
                                                                        children: cli.initials
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1485,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                style: {
                                                                                    fontSize: "1rem",
                                                                                    color: "#fff",
                                                                                    display: "block"
                                                                                },
                                                                                children: cli.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1503,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: "0.75rem",
                                                                                    color: "#71717a"
                                                                                },
                                                                                children: [
                                                                                    "Cliente desde ",
                                                                                    cli.since
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1504,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1502,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1484,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    gap: "6px",
                                                                    fontSize: "0.82rem",
                                                                    color: "#a1a1aa",
                                                                    marginBottom: "18px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "8px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                                size: 13,
                                                                                style: {
                                                                                    color: "#71717a"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1511,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: cli.phone
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1512,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1510,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "8px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                size: 13,
                                                                                style: {
                                                                                    color: "#71717a"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1515,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: cli.email
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1516,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1514,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "8px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                size: 13,
                                                                                style: {
                                                                                    color: "#71717a"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1519,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: cli.address
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1520,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1518,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1509,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1482,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            paddingTop: "14px",
                                                            borderTop: "1px solid rgba(255, 255, 255, 0.06)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "6px",
                                                                    color: "#a1a1aa",
                                                                    fontSize: "0.82rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                        size: 14,
                                                                        style: {
                                                                            color: "#e11d48"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1536,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            cli.ordersCount,
                                                                            " pedido(s)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1537,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1535,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    fontSize: "1.05rem",
                                                                    color: "#fff"
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(cli.totalSpent)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1540,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1526,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, cli.id, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1468,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1466,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 1401,
                                columnNumber: 13
                            }, this),
                            currentView === "estoque" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        style: {
                                                            fontSize: "1.75rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "Estoque de Produtos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1558,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#a1a1aa",
                                                            fontSize: "0.88rem"
                                                        },
                                                        children: "Controle de produtos sensuais, categorias e reposição"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1561,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1557,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/admin",
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    padding: "10px 22px",
                                                    borderRadius: "9999px",
                                                    background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                                                    color: "#fff",
                                                    textDecoration: "none",
                                                    fontWeight: 600,
                                                    fontSize: "0.88rem",
                                                    boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1582,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Novo produto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1583,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1566,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1556,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                                            gap: "18px",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "20px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "36px",
                                                            height: "36px",
                                                            borderRadius: "10px",
                                                            background: "rgba(59, 130, 246, 0.15)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "#60a5fa",
                                                            marginBottom: "12px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                            size: 17
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1591,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1590,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff"
                                                        },
                                                        children: "44"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1593,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.82rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Itens em estoque"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1594,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1589,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "20px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "36px",
                                                            height: "36px",
                                                            borderRadius: "10px",
                                                            background: "rgba(34, 197, 94, 0.15)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "#4ade80",
                                                            marginBottom: "12px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                            size: 17
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1599,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1598,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff"
                                                        },
                                                        children: "R$ 5.880"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1601,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.82rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Valor em estoque"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1602,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1597,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "20px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "36px",
                                                            height: "36px",
                                                            borderRadius: "10px",
                                                            background: "rgba(245, 158, 11, 0.15)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "#facc15",
                                                            marginBottom: "12px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                            size: 17
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1607,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1606,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff"
                                                        },
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1609,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.82rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Produtos em baixa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1610,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1605,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "20px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "36px",
                                                            height: "36px",
                                                            borderRadius: "10px",
                                                            background: "rgba(225, 29, 72, 0.15)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "#fb7185",
                                                            marginBottom: "12px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            size: 17
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1615,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1614,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff"
                                                        },
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1617,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.82rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Esgotadas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1618,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1613,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1588,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#15111c",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            borderRadius: "9999px",
                                            padding: "6px 12px 6px 18px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "14px",
                                            marginBottom: "22px",
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    flex: "1 1 240px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        size: 15,
                                                        color: "#71717a"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1638,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Buscar produto, código ou categoria...",
                                                        value: stockSearch,
                                                        onChange: (e)=>setStockSearch(e.target.value),
                                                        style: {
                                                            width: "100%",
                                                            background: "none",
                                                            border: "none",
                                                            color: "#fff",
                                                            fontSize: "0.85rem",
                                                            outline: "none"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1639,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1637,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "6px",
                                                    overflowX: "auto"
                                                },
                                                children: [
                                                    "Todas",
                                                    "Lubrificantes",
                                                    "Perfumes íntimos",
                                                    "Óleos para massagem",
                                                    "Vibradores",
                                                    "Cosméticos"
                                                ].map((c)=>{
                                                    const isSel = stockCategoryFilter === c;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setStockCategoryFilter(c),
                                                        style: {
                                                            padding: "6px 14px",
                                                            borderRadius: "9999px",
                                                            fontSize: "0.78rem",
                                                            fontWeight: isSel ? 600 : 500,
                                                            background: isSel ? "#e11d48" : "transparent",
                                                            color: isSel ? "#fff" : "#a1a1aa",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            whiteSpace: "nowrap"
                                                        },
                                                        children: c
                                                    }, c, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1659,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1655,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1623,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#15111c",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            borderRadius: "20px",
                                            overflow: "hidden"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                overflowX: "auto"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                style: {
                                                    width: "100%",
                                                    borderCollapse: "collapse",
                                                    textAlign: "left",
                                                    fontSize: "0.85rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                color: "#71717a",
                                                                fontSize: "0.78rem",
                                                                borderBottom: "1px solid rgba(255, 255, 255, 0.06)"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "14px 18px",
                                                                        fontWeight: 500
                                                                    },
                                                                    children: "Produto / Marca"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 1687,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "14px 18px",
                                                                        fontWeight: 500
                                                                    },
                                                                    children: "Código"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 1688,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "14px 18px",
                                                                        fontWeight: 500
                                                                    },
                                                                    children: "Categoria"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 1689,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "14px 18px",
                                                                        fontWeight: 500
                                                                    },
                                                                    children: "Preço"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 1690,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "14px 18px",
                                                                        fontWeight: 500,
                                                                        width: "220px"
                                                                    },
                                                                    children: "Estoque"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 1691,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "14px 18px",
                                                                        fontWeight: 500,
                                                                        textAlign: "center"
                                                                    },
                                                                    children: "Nível"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 1692,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "14px 18px",
                                                                        fontWeight: 500,
                                                                        textAlign: "right"
                                                                    },
                                                                    children: "Ajuste"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 1693,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1686,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1685,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: filteredStock.map((prod)=>{
                                                            const isZero = prod.stock <= 0;
                                                            const isLow = prod.stock <= 5 && !isZero;
                                                            const min = 3;
                                                            const percent = Math.min(100, Math.round(prod.stock / 10 * 100));
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                style: {
                                                                    borderBottom: "1px solid rgba(255, 255, 255, 0.04)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "14px 18px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                style: {
                                                                                    color: "#fff",
                                                                                    display: "block"
                                                                                },
                                                                                children: prod.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1706,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: "#71717a",
                                                                                    fontSize: "0.75rem"
                                                                                },
                                                                                children: prod.brand
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1707,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1705,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "14px 18px",
                                                                            color: "#a1a1aa",
                                                                            fontFamily: "monospace",
                                                                            fontSize: "0.78rem"
                                                                        },
                                                                        children: [
                                                                            "REF-",
                                                                            prod.id.slice(0, 8).toUpperCase()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1710,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "14px 18px",
                                                                            color: "#d4d4d8"
                                                                        },
                                                                        children: prod.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1714,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "14px 18px",
                                                                            color: "#fff",
                                                                            fontWeight: 600
                                                                        },
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(prod.price)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1718,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "14px 18px"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                gap: "10px"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        flex: 1,
                                                                                        height: "6px",
                                                                                        background: "rgba(255, 255, 255, 0.08)",
                                                                                        borderRadius: "9999px",
                                                                                        overflow: "hidden"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            height: "100%",
                                                                                            width: `${percent}%`,
                                                                                            background: isZero ? "#ef4444" : isLow ? "#f59e0b" : "#22c55e",
                                                                                            borderRadius: "9999px"
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/gestao/page.js",
                                                                                        lineNumber: 1726,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/gestao/page.js",
                                                                                    lineNumber: 1725,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: "0.78rem",
                                                                                        color: "#a1a1aa",
                                                                                        whiteSpace: "nowrap"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            style: {
                                                                                                color: "#fff"
                                                                                            },
                                                                                            children: prod.stock
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/gestao/page.js",
                                                                                            lineNumber: 1736,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        " / min ",
                                                                                        min
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/gestao/page.js",
                                                                                    lineNumber: 1735,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1724,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1723,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "14px 18px",
                                                                            textAlign: "center"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: "0.75rem",
                                                                                padding: "3px 10px",
                                                                                borderRadius: "9999px",
                                                                                fontWeight: 600,
                                                                                background: isZero ? "rgba(239, 68, 68, 0.15)" : isLow ? "rgba(245, 158, 11, 0.15)" : "rgba(34, 197, 94, 0.15)",
                                                                                color: isZero ? "#f87171" : isLow ? "#facc15" : "#4ade80"
                                                                            },
                                                                            children: isZero ? "Esgotado" : isLow ? "Baixo" : "Ok"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1743,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1742,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "14px 18px",
                                                                            textAlign: "right"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "inline-flex",
                                                                                gap: "4px"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleQuickStock(prod, -1),
                                                                                    style: {
                                                                                        width: "26px",
                                                                                        height: "26px",
                                                                                        borderRadius: "4px",
                                                                                        background: "rgba(255,255,255,0.06)",
                                                                                        border: "none",
                                                                                        color: "#fff",
                                                                                        cursor: "pointer"
                                                                                    },
                                                                                    children: "-"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/gestao/page.js",
                                                                                    lineNumber: 1760,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleQuickStock(prod, 1),
                                                                                    style: {
                                                                                        width: "26px",
                                                                                        height: "26px",
                                                                                        borderRadius: "4px",
                                                                                        background: "rgba(255,255,255,0.06)",
                                                                                        border: "none",
                                                                                        color: "#fff",
                                                                                        cursor: "pointer"
                                                                                    },
                                                                                    children: "+"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/gestao/page.js",
                                                                                    lineNumber: 1766,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1759,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1758,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, prod.id, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1704,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1696,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1684,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 1683,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1682,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 1554,
                                columnNumber: 13
                            }, this),
                            currentView === "relatorios" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        style: {
                                                            fontSize: "1.75rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "Relatórios de Faturamento"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1792,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#a1a1aa",
                                                            fontSize: "0.88rem"
                                                        },
                                                        children: "Faturamento mensal automático, custos e margem"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1795,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1791,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleExportPDF,
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    padding: "10px 22px",
                                                    borderRadius: "9999px",
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    color: "#fff",
                                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                                    fontWeight: 600,
                                                    fontSize: "0.88rem",
                                                    cursor: "pointer"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1816,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Exportar PDF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1817,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1800,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1790,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                                            gap: "18px",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "22px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "36px",
                                                            height: "36px",
                                                            borderRadius: "10px",
                                                            background: "rgba(59, 130, 246, 0.15)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "#60a5fa",
                                                            marginBottom: "12px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            size: 17
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1825,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1824,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff"
                                                        },
                                                        children: "R$ 100.250"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1827,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.82rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Faturamento (7 meses)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1828,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1823,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "22px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "36px",
                                                            height: "36px",
                                                            borderRadius: "10px",
                                                            background: "rgba(34, 197, 94, 0.15)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "#4ade80",
                                                            marginBottom: "12px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                            size: 17
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1833,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1832,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff"
                                                        },
                                                        children: "R$ 66.750"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1835,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.82rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Lucro bruto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1836,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1831,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "22px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "36px",
                                                            height: "36px",
                                                            borderRadius: "10px",
                                                            background: "rgba(56, 189, 248, 0.15)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "#38bdf8",
                                                            marginBottom: "12px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                            size: 17
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1841,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1840,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff"
                                                        },
                                                        children: "338"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1843,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.82rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Pedidos entregues"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1844,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1839,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "22px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "36px",
                                                            height: "36px",
                                                            borderRadius: "10px",
                                                            background: "rgba(168, 85, 247, 0.15)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "#c084fc",
                                                            marginBottom: "12px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            size: 17
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1849,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1848,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.7rem",
                                                            fontWeight: 700,
                                                            color: "#fff"
                                                        },
                                                        children: "R$ 297"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1851,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.82rem",
                                                            color: "#71717a"
                                                        },
                                                        children: "Ticket médio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1852,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1847,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1822,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1.8fr 1fr",
                                            gap: "20px",
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "24px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            marginBottom: "18px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        style: {
                                                                            fontSize: "1rem",
                                                                            fontWeight: 700,
                                                                            color: "#fff"
                                                                        },
                                                                        children: "Faturamento x Custos"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1862,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "0.78rem",
                                                                            color: "#71717a"
                                                                        },
                                                                        children: "Comparativo mensal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1863,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1861,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "14px",
                                                                    fontSize: "0.78rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "6px",
                                                                            color: "#e11d48"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    width: "8px",
                                                                                    height: "8px",
                                                                                    borderRadius: "50%",
                                                                                    background: "#e11d48"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1868,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Faturamento"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1867,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "6px",
                                                                            color: "#38bdf8"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    width: "8px",
                                                                                    height: "8px",
                                                                                    borderRadius: "50%",
                                                                                    background: "#38bdf8"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1872,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Custos"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1871,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1866,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1860,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: "200px",
                                                            width: "100%",
                                                            display: "flex",
                                                            alignItems: "flex-end",
                                                            justifyContent: "space-between",
                                                            padding: "0 10px 10px"
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gestaoStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTHLY_REPORTS"].map((m, idx)=>{
                                                            const hRev = m.revenue / 20000 * 160;
                                                            const hCost = m.costs / 20000 * 160;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    alignItems: "center",
                                                                    gap: "8px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "flex-end",
                                                                            gap: "4px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    width: "18px",
                                                                                    height: `${hRev}px`,
                                                                                    background: "#e11d48",
                                                                                    borderRadius: "4px 4px 0 0"
                                                                                },
                                                                                title: `Faturamento: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(m.revenue)}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1888,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    width: "18px",
                                                                                    height: `${hCost}px`,
                                                                                    background: "#38bdf8",
                                                                                    borderRadius: "4px 4px 0 0"
                                                                                },
                                                                                title: `Custos: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(m.costs)}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1898,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1886,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "0.75rem",
                                                                            color: "#71717a"
                                                                        },
                                                                        children: m.month.slice(0, 3)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1908,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1885,
                                                                columnNumber: 25
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1879,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1859,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "24px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: "1rem",
                                                            fontWeight: 700,
                                                            color: "#fff",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "Categorias mais rentáveis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1917,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "0.78rem",
                                                            color: "#71717a",
                                                            display: "block",
                                                            marginBottom: "20px"
                                                        },
                                                        children: "Receita acumulada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1920,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: "14px"
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gestaoStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_REVENUE"].map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            fontSize: "0.78rem",
                                                                            marginBottom: "6px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: "#d4d4d8"
                                                                                },
                                                                                children: cat.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1928,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: "#a1a1aa",
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(cat.value)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1929,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1927,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            height: "14px",
                                                                            background: "rgba(255, 255, 255, 0.06)",
                                                                            borderRadius: "6px",
                                                                            overflow: "hidden"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                height: "100%",
                                                                                width: `${cat.percent}%`,
                                                                                background: cat.color,
                                                                                borderRadius: "6px"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1932,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1931,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1926,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 1924,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1916,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1857,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#15111c",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            borderRadius: "20px",
                                            padding: "24px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: "1rem",
                                                    fontWeight: 700,
                                                    color: "#fff",
                                                    marginBottom: "16px"
                                                },
                                                children: "Fechamento mensal"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1949,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    overflowX: "auto"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    style: {
                                                        width: "100%",
                                                        borderCollapse: "collapse",
                                                        textAlign: "left",
                                                        fontSize: "0.85rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                style: {
                                                                    color: "#71717a",
                                                                    fontSize: "0.78rem",
                                                                    borderBottom: "1px solid rgba(255, 255, 255, 0.06)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Mês"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1957,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Pedidos"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1958,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Faturamento"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1959,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Custos"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1960,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Lucro"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1961,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: "12px 14px",
                                                                            fontWeight: 500,
                                                                            textAlign: "right"
                                                                        },
                                                                        children: "Margem"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 1962,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 1956,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1955,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gestaoStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTHLY_REPORTS"].map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    style: {
                                                                        borderBottom: "1px solid rgba(255, 255, 255, 0.04)"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                fontWeight: 700,
                                                                                color: "#fff"
                                                                            },
                                                                            children: m.month
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1968,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                color: "#a1a1aa"
                                                                            },
                                                                            children: m.orders
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1969,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                color: "#fff",
                                                                                fontWeight: 600
                                                                            },
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(m.revenue)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1970,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                color: "#38bdf8"
                                                                            },
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(m.costs)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1971,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                color: "#4ade80",
                                                                                fontWeight: 700
                                                                            },
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(m.profit)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1972,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: "14px",
                                                                                textAlign: "right"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: "0.75rem",
                                                                                    padding: "2px 8px",
                                                                                    borderRadius: "6px",
                                                                                    background: "rgba(34, 197, 94, 0.15)",
                                                                                    color: "#4ade80",
                                                                                    fontWeight: 700
                                                                                },
                                                                                children: m.margin
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/gestao/page.js",
                                                                                lineNumber: 1974,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/gestao/page.js",
                                                                            lineNumber: 1973,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/app/gestao/page.js",
                                                                    lineNumber: 1967,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 1965,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 1954,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1953,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1948,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 1788,
                                columnNumber: 13
                            }, this),
                            currentView === "mensagens" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: "26px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                style: {
                                                    fontSize: "1.75rem",
                                                    fontWeight: 700,
                                                    color: "#fff",
                                                    marginBottom: "4px"
                                                },
                                                children: "Modelos de Mensagem WhatsApp"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1993,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#a1a1aa",
                                                    fontSize: "0.88rem"
                                                },
                                                children: "Textos prontos e elegantes para atendimento e pós-venda"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 1996,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 1992,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                                            gap: "20px"
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gestaoStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUICK_MESSAGE_TEMPLATES"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#15111c",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "20px",
                                                    padding: "24px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            marginBottom: "14px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: "#fff",
                                                                    fontSize: "0.95rem"
                                                                },
                                                                children: t.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 2005,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    navigator.clipboard.writeText(t.text);
                                                                    showToast("Texto copiado!");
                                                                },
                                                                style: {
                                                                    background: "#e11d48",
                                                                    border: "none",
                                                                    color: "#fff",
                                                                    padding: "6px 14px",
                                                                    borderRadius: "9999px",
                                                                    fontSize: "0.78rem",
                                                                    fontWeight: 600,
                                                                    cursor: "pointer",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "4px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 2025,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Copiar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gestao/page.js",
                                                                        lineNumber: 2026,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gestao/page.js",
                                                                lineNumber: 2006,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 2004,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        style: {
                                                            background: "#0c0a10",
                                                            border: "1px solid rgba(255, 255, 255, 0.05)",
                                                            padding: "16px",
                                                            borderRadius: "12px",
                                                            fontSize: "0.82rem",
                                                            color: "#d4d4d8",
                                                            whiteSpace: "pre-wrap",
                                                            fontFamily: "inherit",
                                                            lineHeight: 1.6,
                                                            margin: 0
                                                        },
                                                        children: t.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gestao/page.js",
                                                        lineNumber: 2030,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, t.id, true, {
                                                fileName: "[project]/app/gestao/page.js",
                                                lineNumber: 2003,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/gestao/page.js",
                                        lineNumber: 2001,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gestao/page.js",
                                lineNumber: 1991,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gestao/page.js",
                        lineNumber: 879,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/gestao/page.js",
                lineNumber: 762,
                columnNumber: 7
            }, this),
            isNewOrderOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 99999,
                    padding: "20px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "#15111c",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "20px",
                        width: "100%",
                        maxWidth: "480px",
                        padding: "28px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "20px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "1.1rem",
                                        fontWeight: 700,
                                        color: "#fff"
                                    },
                                    children: "Novo Pedido / Ordem de Entrega"
                                }, void 0, false, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2061,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsNewOrderOpen(false),
                                    style: {
                                        background: "none",
                                        border: "none",
                                        color: "#a1a1aa",
                                        fontSize: "1.2rem",
                                        cursor: "pointer"
                                    },
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2062,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/gestao/page.js",
                            lineNumber: 2060,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveOrder,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: "0.78rem",
                                                color: "#a1a1aa",
                                                display: "block",
                                                marginBottom: "4px"
                                            },
                                            children: "Cliente *"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2067,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "Nome do cliente",
                                            value: newOrder.customerName,
                                            onChange: (e)=>setNewOrder({
                                                    ...newOrder,
                                                    customerName: e.target.value
                                                }),
                                            style: {
                                                width: "100%",
                                                padding: "10px 14px",
                                                background: "#0c0a10",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "10px",
                                                color: "#fff",
                                                fontSize: "0.85rem"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2068,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2066,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "12px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: "0.78rem",
                                                        color: "#a1a1aa",
                                                        display: "block",
                                                        marginBottom: "4px"
                                                    },
                                                    children: "WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 2080,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "11999999999",
                                                    value: newOrder.customerPhone,
                                                    onChange: (e)=>setNewOrder({
                                                            ...newOrder,
                                                            customerPhone: e.target.value
                                                        }),
                                                    style: {
                                                        width: "100%",
                                                        padding: "10px 14px",
                                                        background: "#0c0a10",
                                                        border: "1px solid rgba(255,255,255,0.1)",
                                                        borderRadius: "10px",
                                                        color: "#fff",
                                                        fontSize: "0.85rem"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 2081,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2079,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: "0.78rem",
                                                        color: "#a1a1aa",
                                                        display: "block",
                                                        marginBottom: "4px"
                                                    },
                                                    children: "Valor Total (R$)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 2090,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.01",
                                                    placeholder: "0,00",
                                                    value: newOrder.total,
                                                    onChange: (e)=>setNewOrder({
                                                            ...newOrder,
                                                            total: e.target.value
                                                        }),
                                                    style: {
                                                        width: "100%",
                                                        padding: "10px 14px",
                                                        background: "#0c0a10",
                                                        border: "1px solid rgba(255,255,255,0.1)",
                                                        borderRadius: "10px",
                                                        color: "#fff",
                                                        fontSize: "0.85rem"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 2091,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2089,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2078,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: "0.78rem",
                                                color: "#a1a1aa",
                                                display: "block",
                                                marginBottom: "4px"
                                            },
                                            children: "Produtos / Itens do Pedido *"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "Ex: Sedenta Molhada 50g + Óleo Tântrico",
                                            value: newOrder.mainProduct,
                                            onChange: (e)=>setNewOrder({
                                                    ...newOrder,
                                                    mainProduct: e.target.value
                                                }),
                                            style: {
                                                width: "100%",
                                                padding: "10px 14px",
                                                background: "#0c0a10",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "10px",
                                                color: "#fff",
                                                fontSize: "0.85rem"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: "0.78rem",
                                                color: "#a1a1aa",
                                                display: "block",
                                                marginBottom: "4px"
                                            },
                                            children: "Observações / Embalagem / Entrega"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Ex: Embalagem 100% neutra, entregar discretamente via motoboy",
                                            value: newOrder.description,
                                            onChange: (e)=>setNewOrder({
                                                    ...newOrder,
                                                    description: e.target.value
                                                }),
                                            style: {
                                                width: "100%",
                                                padding: "10px 14px",
                                                background: "#0c0a10",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "10px",
                                                color: "#fff",
                                                fontSize: "0.85rem"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "12px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: "0.78rem",
                                                        color: "#a1a1aa",
                                                        display: "block",
                                                        marginBottom: "4px"
                                                    },
                                                    children: "Prioridade"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 2127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newOrder.priority,
                                                    onChange: (e)=>setNewOrder({
                                                            ...newOrder,
                                                            priority: e.target.value
                                                        }),
                                                    style: {
                                                        width: "100%",
                                                        padding: "10px",
                                                        background: "#0c0a10",
                                                        border: "1px solid rgba(255,255,255,0.1)",
                                                        borderRadius: "10px",
                                                        color: "#fff",
                                                        fontSize: "0.85rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Normal",
                                                            children: "Normal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 2133,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Alta",
                                                            children: "Alta"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 2134,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Baixa",
                                                            children: "Baixa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 2135,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 2128,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: "0.78rem",
                                                        color: "#a1a1aa",
                                                        display: "block",
                                                        marginBottom: "4px"
                                                    },
                                                    children: "Status Inicial"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 2140,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newOrder.status,
                                                    onChange: (e)=>setNewOrder({
                                                            ...newOrder,
                                                            status: e.target.value
                                                        }),
                                                    style: {
                                                        width: "100%",
                                                        padding: "10px",
                                                        background: "#0c0a10",
                                                        border: "1px solid rgba(255,255,255,0.1)",
                                                        borderRadius: "10px",
                                                        color: "#fff",
                                                        fontSize: "0.85rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Aguardando",
                                                            children: "Aguardando"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 2146,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Em análise",
                                                            children: "Em análise"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 2147,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Aguardando reposição",
                                                            children: "Aguardando reposição"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 2148,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Em separação",
                                                            children: "Em separação"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 2149,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Pronto p/ entrega",
                                                            children: "Pronto p/ entrega"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 2150,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Entregue",
                                                            children: "Entregue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gestao/page.js",
                                                            lineNumber: 2151,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gestao/page.js",
                                                    lineNumber: 2141,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2139,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "10px",
                                        marginTop: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            style: {
                                                flex: 1,
                                                padding: "12px",
                                                borderRadius: "9999px",
                                                background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                                                color: "#fff",
                                                border: "none",
                                                fontWeight: 600,
                                                fontSize: "0.88rem",
                                                cursor: "pointer"
                                            },
                                            children: "Salvar Pedido"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsNewOrderOpen(false),
                                            style: {
                                                padding: "12px 20px",
                                                borderRadius: "9999px",
                                                background: "rgba(255,255,255,0.06)",
                                                color: "#a1a1aa",
                                                border: "none",
                                                fontSize: "0.88rem",
                                                cursor: "pointer"
                                            },
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2173,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/gestao/page.js",
                            lineNumber: 2065,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/gestao/page.js",
                    lineNumber: 2059,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gestao/page.js",
                lineNumber: 2058,
                columnNumber: 9
            }, this),
            isNewClientOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 99999,
                    padding: "20px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "#15111c",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "20px",
                        width: "100%",
                        maxWidth: "440px",
                        padding: "28px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "20px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "1.1rem",
                                        fontWeight: 700,
                                        color: "#fff"
                                    },
                                    children: "Cadastrar Novo Cliente"
                                }, void 0, false, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2201,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsNewClientOpen(false),
                                    style: {
                                        background: "none",
                                        border: "none",
                                        color: "#a1a1aa",
                                        fontSize: "1.2rem",
                                        cursor: "pointer"
                                    },
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2202,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/gestao/page.js",
                            lineNumber: 2200,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveClient,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: "0.78rem",
                                                color: "#a1a1aa",
                                                display: "block",
                                                marginBottom: "4px"
                                            },
                                            children: "Nome Completo *"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "Ex: Vanessa Guimarães",
                                            value: newClient.name,
                                            onChange: (e)=>setNewClient({
                                                    ...newClient,
                                                    name: e.target.value
                                                }),
                                            style: {
                                                width: "100%",
                                                padding: "10px 14px",
                                                background: "#0c0a10",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "10px",
                                                color: "#fff",
                                                fontSize: "0.85rem"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2208,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2206,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: "0.78rem",
                                                color: "#a1a1aa",
                                                display: "block",
                                                marginBottom: "4px"
                                            },
                                            children: "WhatsApp / Telefone *"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2219,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            placeholder: "(11) 98888-7777",
                                            value: newClient.phone,
                                            onChange: (e)=>setNewClient({
                                                    ...newClient,
                                                    phone: e.target.value
                                                }),
                                            style: {
                                                width: "100%",
                                                padding: "10px 14px",
                                                background: "#0c0a10",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "10px",
                                                color: "#fff",
                                                fontSize: "0.85rem"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2220,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2218,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: "0.78rem",
                                                color: "#a1a1aa",
                                                display: "block",
                                                marginBottom: "4px"
                                            },
                                            children: "E-mail"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2231,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "vanessa@email.com",
                                            value: newClient.email,
                                            onChange: (e)=>setNewClient({
                                                    ...newClient,
                                                    email: e.target.value
                                                }),
                                            style: {
                                                width: "100%",
                                                padding: "10px 14px",
                                                background: "#0c0a10",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "10px",
                                                color: "#fff",
                                                fontSize: "0.85rem"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2232,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2230,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: "0.78rem",
                                                color: "#a1a1aa",
                                                display: "block",
                                                marginBottom: "4px"
                                            },
                                            children: "Endereço / Bairro"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2242,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Moema, São Paulo/SP",
                                            value: newClient.address,
                                            onChange: (e)=>setNewClient({
                                                    ...newClient,
                                                    address: e.target.value
                                                }),
                                            style: {
                                                width: "100%",
                                                padding: "10px 14px",
                                                background: "#0c0a10",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "10px",
                                                color: "#fff",
                                                fontSize: "0.85rem"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2243,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2241,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "10px",
                                        marginTop: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            style: {
                                                flex: 1,
                                                padding: "12px",
                                                borderRadius: "9999px",
                                                background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                                                color: "#fff",
                                                border: "none",
                                                fontWeight: 600,
                                                fontSize: "0.88rem",
                                                cursor: "pointer"
                                            },
                                            children: "Salvar Cliente"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsNewClientOpen(false),
                                            style: {
                                                padding: "12px 20px",
                                                borderRadius: "9999px",
                                                background: "rgba(255,255,255,0.06)",
                                                color: "#a1a1aa",
                                                border: "none",
                                                fontSize: "0.88rem",
                                                cursor: "pointer"
                                            },
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gestao/page.js",
                                            lineNumber: 2269,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gestao/page.js",
                                    lineNumber: 2252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/gestao/page.js",
                            lineNumber: 2205,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/gestao/page.js",
                    lineNumber: 2199,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gestao/page.js",
                lineNumber: 2198,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/gestao/page.js",
        lineNumber: 413,
        columnNumber: 5
    }, this);
}
_s(GestaoPage, "5SrE9NT93lyPhKePkHjEc++pn68=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CatalogContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalog"]
    ];
});
_c = GestaoPage;
var _c;
__turbopack_context__.k.register(_c, "GestaoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/gestaoStorage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Dados e utilitários para o painel de gestão executivo da Toque de Desejo
__turbopack_context__.s([
    "CATEGORY_REVENUE",
    ()=>CATEGORY_REVENUE,
    "INITIAL_CLIENTS",
    ()=>INITIAL_CLIENTS,
    "INITIAL_ORDERS",
    ()=>INITIAL_ORDERS,
    "MONTHLY_REPORTS",
    ()=>MONTHLY_REPORTS,
    "QUICK_MESSAGE_TEMPLATES",
    ()=>QUICK_MESSAGE_TEMPLATES,
    "getStoredClients",
    ()=>getStoredClients,
    "getStoredOrders",
    ()=>getStoredOrders,
    "saveStoredClients",
    ()=>saveStoredClients,
    "saveStoredOrders",
    ()=>saveStoredOrders
]);
const INITIAL_CLIENTS = [
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
        tags: [
            "Cliente VIP",
            "Óleos Tântricos"
        ],
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
        tags: [
            "Gosta de Gel",
            "Entrega Rápida"
        ],
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
        tags: [
            "Cliente VIP",
            "Perfumes com Feromônios"
        ],
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
        tags: [
            "Primeira Compra"
        ],
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
        tags: [
            "Cliente VIP",
            "Vibradores & Cosméticos"
        ],
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
        tags: [
            "Sigilo Total",
            "Retirada"
        ],
        avatarColor: "#be123c"
    }
];
const INITIAL_ORDERS = [
    {
        id: "PED-2043",
        customerName: "Diego Martins",
        customerPhone: "11982203376",
        customerCity: "São Paulo/SP",
        mainProduct: "Sedenta Molhada + Tantric Apple",
        description: "Gel deslizante neutro + óleo maçã do amor.",
        total: 210.00,
        priority: "Normal",
        status: "Aguardando",
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
const MONTHLY_REPORTS = [
    {
        month: "Mar/2026",
        orders: 42,
        revenue: 12400,
        costs: 4200,
        profit: 8200,
        margin: "66%"
    },
    {
        month: "Abr/2026",
        orders: 48,
        revenue: 14100,
        costs: 4800,
        profit: 9300,
        margin: "66%"
    },
    {
        month: "Mai/2026",
        orders: 45,
        revenue: 13250,
        costs: 4500,
        profit: 8750,
        margin: "66%"
    },
    {
        month: "Jun/2026",
        orders: 57,
        revenue: 16800,
        costs: 5600,
        profit: 11200,
        margin: "67%"
    },
    {
        month: "Jul/2026",
        orders: 52,
        revenue: 15600,
        costs: 5100,
        profit: 10500,
        margin: "67%"
    },
    {
        month: "Ago/2026",
        orders: 61,
        revenue: 18300,
        costs: 6100,
        profit: 12200,
        margin: "67%"
    },
    {
        month: "Set/2026",
        orders: 33,
        revenue: 9800,
        costs: 3200,
        profit: 6600,
        margin: "67%"
    }
];
const CATEGORY_REVENUE = [
    {
        name: "Lubrificantes & Deslizantes",
        value: 34200,
        percent: 85,
        color: "#e11d48"
    },
    {
        name: "Perfumes Íntimos (Feromônios)",
        value: 24800,
        percent: 62,
        color: "#ff0055"
    },
    {
        name: "Óleos para Massagem Tântrica",
        value: 18400,
        percent: 46,
        color: "#fb7185"
    },
    {
        name: "Vibradores & Acessórios",
        value: 14200,
        percent: 35,
        color: "#be123c"
    },
    {
        name: "Velas & Cosméticos Beijáveis",
        value: 8650,
        percent: 22,
        color: "#9f1239"
    }
];
const QUICK_MESSAGE_TEMPLATES = [
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
function getStoredOrders() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
function saveStoredOrders(orders) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    } catch (e) {}
}
function getStoredClients() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
function saveStoredClients(clients) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(CLIENTS_KEY, JSON.stringify(clients));
    } catch (e) {}
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_20urg754hilip._.js.map