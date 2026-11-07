function Message({ quien, texto }) {
    return (
        <div className={quien === "yo" ? "flex justify-start" : "flex justify-end"}>
            <p className={quien === "yo" ? "bg-[#dcf8c6] text-zinc-800 rounded-2xl px-4 py-2 mt-2 shadow-sm whitespace-pre-wrap max-w-[75%]" : "bg-white text-zinc-800 rounded-2xl px-4 py-2 mt-2 shadow-sm whitespace-pre-wrap max-w-[75%]"}>
                {texto}
            </p>
        </div>
    )
}

export default Message
