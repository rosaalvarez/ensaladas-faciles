export default function PlanificaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Planifica tu <span className="text-[#2D8C4E]">Semana</span></h1>
      <p className="text-gray-500 mb-8 max-w-lg mx-auto">Próximamente podrás organizar tus ensaladas para toda la semana con lista de compras unificada.</p>
      <div className="bg-green-50 rounded-2xl p-8 mb-8">
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-gray-500 mb-3">
          {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(d => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['🥗 César', '🥑 Tropical', '🍅 Griega', '🥕 Thai', '🌽 Mexicana', '🍋 Cítrica', '🫒 Mediterránea'].map((meal, i) => (
            <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xs font-bold text-gray-400">{i + 1}</div>
              <div className="text-xs mt-1 text-gray-700">{meal}</div>
            </div>
          ))}
        </div>
      </div>
      <a href="https://mpago.li/2TTtDgT" target="_blank" rel="noopener" className="inline-block bg-[#2D8C4E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#246E3E] transition">
        Desbloquear por $29,900 COP →
      </a>
      <p className="text-xs text-gray-400 mt-4">Pago único • Acceso de por vida</p>
    </div>
  );
}
