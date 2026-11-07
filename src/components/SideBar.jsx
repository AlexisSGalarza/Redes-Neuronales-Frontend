function SideBar({ historial, nuevoChat, abrirChat, chatAbierto }) {
    return (
        <aside className="w-64 bg-[#075e54] text-white p-4 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Mi Chat</h1>
            <button onClick={nuevoChat} className="border border-white/40 rounded-lg px-4 py-2 font-bold text-white/80 hover:bg-white/15 hover:text-white transition-colors">
                + Nuevo Chat
            </button>
            {historial.map((c, i) => (
                <p key={i} onClick={() => abrirChat(i)} className={"truncate px-2 py-1 rounded hover:bg-white/15 cursor-pointer " + (i === chatAbierto ? "bg-white/20 text-white font-bold" : "text-white/80")}>
                    💬 {c.titulo}
                </p>
            ))}
        </aside>
    )
}

export default SideBar
