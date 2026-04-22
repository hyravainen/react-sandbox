import { useState, useEffect } from "react";
import type { StoreItem } from "./types";
import Modal from "./Modal";

export default function ProductCatalog() {
  const [items, setItems] = useState<StoreItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=6");
        const data: StoreItem[] = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Fetch epäonnistui:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "60px", color: "#888", fontSize: "18px" }}>
        Ladataan tuotteita...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "32px", color: "#1a1a1a" }}>
        Tuotekuvasto
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "16px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)")
            }
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "80px", height: "80px", objectFit: "contain" }}
            />
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#374151",
                textAlign: "center",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                margin: 0,
              }}
            >
              {item.title}
            </p>
            <p style={{ color: "#4f46e5", fontWeight: 700, margin: 0 }}>
              ${item.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal onClose={() => setSelectedItem(null)}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              style={{ width: "140px", height: "140px", objectFit: "contain" }}
            />
            <h2 style={{ fontSize: "18px", fontWeight: 700, textAlign: "center", margin: 0, color: "#1a1a1a" }}>
              {selectedItem.title}
            </h2>
            <p style={{ color: "#4f46e5", fontWeight: 700, fontSize: "20px", margin: 0 }}>
              ${selectedItem.price.toFixed(2)}
            </p>
            <p style={{ color: "#6b7280", fontSize: "14px", textAlign: "center", lineHeight: 1.6, margin: 0 }}>
              {selectedItem.description}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
}