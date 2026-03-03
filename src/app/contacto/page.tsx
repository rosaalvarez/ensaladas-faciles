export default function ContactoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contacto</h1>
      <div className="bg-green-50 rounded-2xl p-8 md:p-12">
        <div className="text-center">
          <div className="text-5xl mb-4">💚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes preguntas?</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
          </p>
          <a 
            href="mailto:hola@versalab.pro" 
            className="inline-block bg-[#2D8C4E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#246E3E] transition transform hover:scale-105 shadow-lg shadow-green-200"
          >
            📧 hola@versalab.pro
          </a>
          <div className="mt-8 space-y-3 text-sm text-gray-500">
            <p>📍 Bogotá, Colombia</p>
            <p>⏰ Respondemos en menos de 24 horas (días hábiles)</p>
            <p className="text-gray-400 mt-2">Nutre es un producto de <a href="https://versalab.pro" className="text-[#2D8C4E] underline" target="_blank" rel="noopener noreferrer">VersaLab</a></p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-200">
          <h3 className="font-bold text-gray-900 mb-4">Preguntas frecuentes</h3>
          <div className="space-y-4">
            {[
              { q: '¿Cómo accedo al contenido premium después de pagar?', a: 'Después de completar el pago en MercadoPago, recibirás un correo con las instrucciones de acceso. Si tienes problemas, escríbenos a hola@versalab.pro.' },
              { q: '¿Puedo pedir reembolso?', a: 'Sí, tienes 7 días después de la compra para solicitar un reembolso completo escribiendo a hola@versalab.pro.' },
              { q: '¿Las recetas se actualizan?', a: 'Sí, agregamos nuevas recetas cada mes. Con el pago único tienes acceso a todas las actualizaciones futuras.' },
              { q: '¿Funciona en mi celular?', a: 'Sí, Nutre es una PWA (Progressive Web App). Puedes instalarla en tu celular y usarla incluso sin internet.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 text-sm">{faq.q}</h4>
                <p className="text-gray-600 text-sm mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
