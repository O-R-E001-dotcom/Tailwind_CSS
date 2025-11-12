

export default function NaijaColors() {
  const colors = [
    { name: "Naija Green 50", hex: "#E6F6EE" },
    { name: "Naija Green 100", hex: "#C1EAD6" },
    { name: "Naija Green 200", hex: "#99DEBD" },
    { name: "Naija Green 300", hex: "#6FD1A4" },
    { name: "Naija Green 400", hex: "#3CC488" },
    { name: "Naija Green 500", hex: "#008751" }, 
    { name: "Naija Green 600", hex: "#007247" },
    { name: "Naija Green 700", hex: "#005E3C" },
    { name: "Naija Green 800", hex: "#004A30" },
    { name: "Naija Green 900", hex: "#003626" },
    { name: "White", hex: "#FFFFFF" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-slate-800">
        🇳🇬 Naija Green Shades
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {colors.map((color) => (
          <div key={color.hex} className="flex flex-col items-center">
            <div
              className="w-24 h-24 rounded-lg shadow-md border"
              style={{ backgroundColor: color.hex }}
            ></div>
            <p
              className={`mt-2 text-sm font-semibold ${
                color.hex === "#FFFFFF" ? "text-slate-700" : "text-slate-100"
              }`}
              style={{
                backgroundColor:
                  color.hex === "#FFFFFF" ? "#E5E7EB" : "transparent",
                padding: "0.25rem 0.5rem",
                borderRadius: "0.25rem",
              }}
            >
              {color.name}
            </p>
            <p className="text-base text-slate-600">{color.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
