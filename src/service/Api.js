const API_URL = "LA URL"

export async function pedirRespuesta(archivo, cantidad, dificultad, tipo) {
    const datos = new FormData()
    datos.append("pdf", archivo)
    datos.append("cantidad", cantidad)
    datos.append("dificultad", dificultad)
    datos.append("tipo", tipo)

    const res = await fetch(`${API_URL}/generar`, {
        method: "POST",
        headers: { "ngrok-skip-browser-warning": "true" },
        body: datos,
    })

    const json = await res.json().catch(() => null)
    if (json?.respuesta) return json.respuesta

    throw new Error(`La IA respondió con error ${res.status}`)
}
