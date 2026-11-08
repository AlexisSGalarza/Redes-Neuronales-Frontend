import { useState } from "react";
import { generarExamen } from "./api";

export default function TestApi() {
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);

  async function onChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    setOut("");
    try {
      const { examen } = await generarExamen(file, { cantidad: 3 });
      setOut(examen);
    } catch (err) {
      setOut("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <input type="file" accept="application/pdf" onChange={onChange} />
      {loading && <p>Generando...</p>}
      <pre style={{ whiteSpace: "pre-wrap" }}>{out}</pre>
    </div>
  );
}