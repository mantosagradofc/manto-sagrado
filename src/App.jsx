import { useState } from 'react'
import { ShoppingCart, Search, Menu, Star, Truck, ShieldCheck, MessageCircle, CreditCard } from 'lucide-react'

export default function FutebolStore() {
  const [search, setSearch] = useState('')
  const [selectedTeam, setSelectedTeam] = useState('Todos')
  const [cart, setCart] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  const whatsappNumber = '5511999999999'

  const products = [
    {
      id: 1,
      name: 'Brasil 2002 Retrô',
      team: 'Seleções',
      price: 149.9,
      size: ['P', 'M', 'G', 'GG'],
      badge: 'Mais Vendida',
      image:
        'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Real Madrid Home 24/25',
      team: 'Europa',
      price: 169.9,
      size: ['P', 'M', 'G'],
      badge: 'Nova',
      image:
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Milan Retrô 2007',
      team: 'Retrô',
      price: 159.9,
      size: ['M', 'G', 'GG'],
      badge: 'Retrô',
      image:
        'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Argentina Campeã',
      team: 'Seleções',
      price: 169.9,
      size: ['P', 'M', 'G', 'GG'],
      badge: 'Premium',
      image:
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Manchester United 2008',
      team: 'Retrô',
      price: 159.9,
      size: ['M', 'G'],
      badge: 'Clássica',
      image:
        'https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 6,
      name: 'Barcelona 2011',
      team: 'Europa',
      price: 179.9,
      size: ['P', 'M', 'G', 'GG'],
      badge: 'Lendária',
      image:
        'https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase())

  const matchesTeam =
    selectedTeam === 'Todos' || product.team === selectedTeam

  return matchesSearch && matchesTeam
})

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  const finishOnWhatsApp = () => {
    const items = cart.map((item) => `• ${item.name} - R$ ${item.price}`).join('%0A')

    const message = `Olá! Quero finalizar meu pedido:%0A%0A${items}%0A%0ATotal: R$ ${total.toFixed(
      2
    )}`

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-wide text-green-400">
              MANTO SAGRADO
            </h1>
            <p className="text-zinc-400 text-sm">
              Camisas Premium & Retrô
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
            <a href="#inicio" className="hover:text-green-400 transition">
              Início
            </a>
            <a href="#produtos" className="hover:text-green-400 transition">
              Produtos
            </a>
            <a href="#beneficios" className="hover:text-green-400 transition">
              Benefícios
            </a>
            <a href="#contato" className="hover:text-green-400 transition">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="relative bg-zinc-900 border border-zinc-800 p-3 rounded-2xl">
              <ShoppingCart size={20} />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs font-black w-6 h-6 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden bg-zinc-900 border border-zinc-800 p-3 rounded-2xl"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-zinc-800 px-6 py-5 flex flex-col gap-4 bg-black">
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#contato">Contato</a>
          </div>
        )}
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden border-b border-zinc-900"
      >
        <div className="absolute inset-0 bg-green-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold border border-green-500/30">
              NOVA TEMPORADA 2026
            </span>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mt-8">
              Vista o manto
              <span className="text-green-400"> da sua história.</span>
            </h2>

            <p className="text-zinc-400 text-lg mt-6 leading-relaxed max-w-xl">
              Camisas premium dos maiores clubes do mundo.
              Modelos retrô, lançamentos e edições especiais.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#produtos"
                className="bg-green-500 text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition"
              >
                Ver Produtos
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="border border-zinc-700 px-8 py-4 rounded-2xl font-semibold hover:border-green-400 transition flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[40px] border border-zinc-800 shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-4xl font-black text-green-400">+1.000</h3>
              <p className="text-zinc-400">camisas vendidas</p>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-5xl font-black">Catálogo</h2>
            <p className="text-zinc-400 mt-3 text-lg">
              Adicione suas camisas facilmente editando apenas a lista de produtos.
            </p>
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-4 text-zinc-500" size={18} />

            <input
            
              type="text"
              placeholder="Buscar camisa"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-12 pr-5 outline-none focus:border-green-400"
            />
            <select
  value={selectedTeam}
  onChange={(e) => setSelectedTeam(e.target.value)}
  className="bg-zinc-900 border border-zinc-800 rounded-2xl py-4 px-5 outline-none focus:border-green-400"
>
  <option>Todos</option>
  <option>Seleções</option>
  <option>Europa</option>
  <option>Retrô</option>
</select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-950 border border-zinc-800 rounded-[32px] overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[420px] w-full object-cover hover:scale-105 transition duration-500"
                />

                <span className="absolute top-5 left-5 bg-green-500 text-black px-4 py-2 rounded-full text-xs font-black">
                  {product.badge}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-zinc-500 text-sm">{product.team}</span>

                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <Star size={15} fill="currentColor" />
                    5.0
                  </div>
                </div>

                <h3 className="text-2xl font-black leading-tight">
                  {product.name}
                </h3>

                <div className="flex gap-2 mt-4 flex-wrap">
                  {product.size.map((size) => (
                    <span
                      key={size}
                      className="border border-zinc-700 px-3 py-1 rounded-full text-xs text-zinc-300"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <p className="text-zinc-500 text-sm">Preço</p>
                    <span className="text-3xl font-black text-green-400">
                      R$ {product.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-green-500 text-black px-5 py-3 rounded-2xl font-black hover:bg-green-400 transition"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="beneficios"
        className="bg-zinc-950 border-y border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black border border-zinc-800 rounded-3xl p-8">
            <Truck className="text-green-400" size={40} />
            <h3 className="text-2xl font-black mt-5">Entrega</h3>
            <p className="text-zinc-400 mt-3">
              Enviamos para todo o Brasil.
            </p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8">
            <ShieldCheck className="text-green-400" size={40} />
            <h3 className="text-2xl font-black mt-5">Compra Segura</h3>
            <p className="text-zinc-400 mt-3">
              Atendimento confiável e seguro.
            </p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8">
            <CreditCard className="text-green-400" size={40} />
            <h3 className="text-2xl font-black mt-5">Pagamento</h3>
            <p className="text-zinc-400 mt-3">
              PIX, cartão e transferência.
            </p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8">
            <MessageCircle className="text-green-400" size={40} />
            <h3 className="text-2xl font-black mt-5">Suporte</h3>
            <p className="text-zinc-400 mt-3">
              Atendimento rápido pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {cart.length > 0 && (
        <section className="fixed bottom-6 right-6 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl w-[340px] z-50">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-2xl font-black">Carrinho</h3>
            <span className="text-green-400 font-bold">
              {cart.length} itens
            </span>
          </div>

          <div className="space-y-3 max-h-60 overflow-auto">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-black border border-zinc-800 rounded-2xl p-3"
              >
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <span className="text-green-400 font-bold text-sm">
                    R$ {item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-800 mt-5 pt-5 flex items-center justify-between">
            <span className="text-zinc-400">Total</span>
            <span className="text-3xl font-black text-green-400">
              R$ {total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={finishOnWhatsApp}
            className="w-full mt-5 bg-green-500 text-black py-4 rounded-2xl font-black hover:bg-green-400 transition"
          >
            Finalizar no WhatsApp
          </button>
        </section>
      )}

      <section id="contato" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-6xl font-black leading-tight">
          Sua loja já está
          <span className="text-green-400"> praticamente pronta.</span>
        </h2>

        <p className="text-zinc-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Agora você só precisa trocar imagens, preços e conectar seu número real do WhatsApp.
        </p>

        <div className="flex flex-wrap gap-5 justify-center mt-10">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="bg-green-500 text-black px-8 py-5 rounded-2xl font-black text-lg hover:scale-105 transition"
          >
            Começar a vender
          </a>

          <button className="border border-zinc-700 px-8 py-5 rounded-2xl font-bold hover:border-green-400 transition">
            Personalizar Loja
          </button>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        © 2026 MANTO SAGRADO — Todos os direitos reservados.
      </footer>
    </div>
  )
}
