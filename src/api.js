const API = import.meta.env.VITE_API_URL;

export async function generarExamen(file, { cantidad = 10, dificultad = "Fácil", tipo = "ambos" } = {}) {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("cantidad", cantidad);
  fd.append("dificultad", dificultad);
  fd.append("tipo", tipo);

  const res = await fetch(`${API}/generar`, { method: "POST", body: fd });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
  return data; // { examen, paginas }
}