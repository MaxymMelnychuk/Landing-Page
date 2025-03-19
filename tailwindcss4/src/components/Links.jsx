export function Links({href, text}) {
    return (
        <a href={href} className="text-white hover:text-gray-300 transition-all ease duration-300">{text}</a>
    )
}
