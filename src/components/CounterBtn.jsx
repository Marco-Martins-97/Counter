// Reusable Button
export default function CounterBtn({ label, onClick, color }) {
    return <button onClick={onClick} className={`px-6 py-2 rounded-lg text-white font-semibold transition-colors ${color}`}>{label}</button>;
}