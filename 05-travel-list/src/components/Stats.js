export default function Stats({ items }) {
    if (!items.length) return (
        <p className="stats">
            <em>Start adding some items to your packing list 🚀</em>
        </p>
    )
    const numItems = items.length
    const numPacked = items.filter(item => item.packed).length
    const percentage = Math.round((numPacked / numItems) * 100)
    return <footer className="stats">
        <em>
            {percentage === 100 ? (
                `You got everything! Ready to go✈️`
            ) : percentage === 0 ? (`Harry Up , Packing your list 🎒`) : (
                ` 💼 You have ${numItems} Items in your list, and you already packed ${numPacked} (${percentage} %)`
            )}
        </em>
    </footer>
}