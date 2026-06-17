"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import { fallbackFAQs } from "@/lib/woocommerce";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "booking" | "safety" | "therapists" | "health">("all");

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // Filter FAQs based on tab and search query
  const filteredFAQs = fallbackFAQs.filter((faq) => {
    const matchesTab = activeTab === "all" || faq.category === activeTab;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const categories = [
    { id: "all", name: "Todos" },
    { id: "booking", name: "Agendamiento" },
    { id: "safety", name: "Seguridad" },
    { id: "therapists", name: "Terapeutas" },
    { id: "health", name: "Contraindicaciones" },
  ];

  return (
    <div className="max-w-4xl mx-auto w-full">
      {/* Search Input */}
      <div className="relative mb-12 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar pregunta..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-charcoal-light border border-white/10 hover:border-rose/30 focus:border-rose focus:outline-none rounded-full px-6 py-3.5 text-sm text-ivory placeholder-ivory-muted/40 transition-colors duration-300"
        />
        <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-muted/50" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id as any)}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${
              activeTab === cat.id
                ? "bg-rose border-rose text-charcoal-deep font-semibold"
                : "bg-transparent border-white/5 text-ivory-muted hover:border-white/10 hover:text-ivory"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-4">
        {filteredFAQs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-charcoal-light border border-white/[0.03] overflow-hidden transition-all duration-300 hover:border-white/10"
            >
              {/* Accordion Trigger */}
              <button
                onClick={() => toggleAccordion(faq.id as number)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="font-serif text-base sm:text-lg text-ivory tracking-wide group-hover:text-rose transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full bg-charcoal/50 flex items-center justify-center text-rose border border-white/5 shrink-0 ml-4">
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-white/[0.02] text-sm text-ivory-muted leading-relaxed font-sans">
                      {/* Check if there are semicolon separated contraindications and format as list */}
                      {faq.answer.includes(";") ? (
                        <div>
                          <p className="mb-3">
                            {faq.answer.split(":")[0]}:
                          </p>
                          <ul className="list-disc pl-5 flex flex-col gap-2">
                            {faq.answer
                              .split(":")[1]
                              ?.split(";")
                              .map((item, index) => (
                                <li key={index} className="text-xs text-ivory-muted/95">
                                  {item.trim()}
                                </li>
                              ))}
                          </ul>
                        </div>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {filteredFAQs.length === 0 && (
          <p className="text-center text-sm text-ivory-muted/40 py-12">
            No se encontraron preguntas que coincidan con tu búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}
