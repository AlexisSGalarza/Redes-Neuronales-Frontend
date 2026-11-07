function ChatInput({ archivo, setArchivo, cantidad, setCantidad, dificultad, setDificultad, tipo, setTipo, enviar, cargando }) {
    const estiloSelector = "bg-white border border-zinc-300 rounded-lg px-2 py-1 text-zinc-800 outline-none focus:border-[#128c7e]"

    return (
        <div className="flex flex-col gap-2 p-3 bg-[#f0f2f5]">
            <div className="flex flex-wrap gap-2 text-sm">
                <label className="flex items-center gap-1">
                    Preguntas:
                    <input
                        type="number"
                        min="1"
                        max="20"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        className={estiloSelector + " w-16"}
                    />
                </label>

                <label className="flex items-center gap-1">
                    Dificultad:
                    <select value={dificultad} onChange={(e) => setDificultad(e.target.value)} className={estiloSelector}>
                        <option>Fácil</option>
                        <option>Media</option>
                        <option>Difícil</option>
                    </select>
                </label>

                <label className="flex items-center gap-1">
                    Tipo:
                    <select value={tipo} onChange={(e) => setTipo(e.target.value)} className={estiloSelector}>
                        <option value="abierto">Abiertas</option>
                        <option value="opción múltiple">Opción múltiple</option>
                        <option value="ambos">Ambos</option>
                    </select>
                </label>
            </div>

            <div className="flex gap-2 items-center">
                <label className="bg-white border border-zinc-300 rounded-lg p-2 flex-1 text-zinc-800 cursor-pointer hover:border-[#128c7e] truncate">
                    {archivo ? "📄 " + archivo.name : "📎 Haz clic para subir tu PDF..."}
                    <input
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => setArchivo(e.target.files[0] || null)}
                    />
                </label>
                <button onClick={enviar} disabled={cargando || !archivo} className="bg-[#128c7e] hover:bg-[#075e54] text-white rounded-full w-10 h-10 shrink-0 transition-colors disabled:opacity-50">
                    ➤
                </button>
            </div>
        </div>
    )
}

export default ChatInput
