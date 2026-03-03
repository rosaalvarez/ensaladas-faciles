export default function TerminosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
        <p><strong>Última actualización:</strong> Marzo 2026</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">1. Información general</h2>
        <p>Estos Términos y Condiciones regulan el uso de <strong>Nutre</strong> (disponible en ensaladasfaciles.online), un producto desarrollado y operado por <strong>VersaLab</strong>, con domicilio en Bogotá, Colombia. Al acceder o utilizar Nutre, aceptas estos términos en su totalidad. Si no estás de acuerdo, por favor no utilices el servicio.</p>
        <p>Para cualquier comunicación puedes escribirnos a: <a href="mailto:hola@versalab.pro" className="text-[#2D8C4E] underline">hola@versalab.pro</a></p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">2. Descripción del servicio</h2>
        <p>Nutre es una aplicación web progresiva (PWA) que ofrece recetas de ensaladas adaptadas a ingredientes disponibles en países latinoamericanos. El servicio opera bajo un modelo freemium:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Versión gratuita:</strong> acceso a una selección limitada de recetas de muestra.</li>
          <li><strong>Versión premium:</strong> acceso completo a todas las recetas, funcionalidades avanzadas y futuras actualizaciones, mediante un pago único.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">3. Pago y acceso premium</h2>
        <p>El acceso premium se adquiere mediante un <strong>pago único de $29,900 COP</strong> (o su equivalente en moneda local) a través de MercadoPago. Una vez confirmado el pago, obtendrás acceso de por vida a todo el contenido premium, incluyendo futuras actualizaciones.</p>
        <p>Los pagos son procesados íntegramente por MercadoPago. VersaLab no almacena datos de tarjetas de crédito ni información financiera de los usuarios.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">4. Política de reembolso</h2>
        <p>De conformidad con la Ley 1480 de 2011 (Estatuto del Consumidor de Colombia), si no estás satisfecho con tu compra, puedes solicitar un <strong>reembolso completo dentro de los 7 días calendario</strong> siguientes al pago. Para solicitarlo, escríbenos a <a href="mailto:hola@versalab.pro" className="text-[#2D8C4E] underline">hola@versalab.pro</a> indicando tu comprobante de pago. Transcurrido este plazo, no se realizarán reembolsos.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">5. Propiedad intelectual</h2>
        <p>Todo el contenido de Nutre —incluyendo recetas, textos, fotografías, ilustraciones, diseños, código fuente y demás material— es propiedad de <strong>VersaLab</strong> y está protegido por las leyes colombianas e internacionales de derechos de autor y propiedad intelectual. Queda prohibida su reproducción, distribución, modificación o venta sin autorización previa y por escrito de VersaLab.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">6. Uso aceptable</h2>
        <p>El contenido de Nutre es exclusivamente para <strong>uso personal y no comercial</strong>. No está permitido:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Redistribuir, revender o compartir el acceso premium con terceros.</li>
          <li>Copiar o republicar recetas o contenido en otros sitios web o medios.</li>
          <li>Utilizar el servicio para fines ilegales o no autorizados.</li>
          <li>Intentar vulnerar la seguridad o el funcionamiento de la plataforma.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">7. Limitación de responsabilidad</h2>
        <p>Las recetas, información nutricional y recomendaciones proporcionadas en Nutre son de carácter <strong>informativo y orientativo</strong>. No constituyen asesoría médica, nutricional ni dietética profesional. VersaLab no se hace responsable de decisiones alimentarias tomadas con base en el contenido de la plataforma.</p>
        <p>Consulta siempre a un profesional de la salud o nutricionista antes de realizar cambios significativos en tu dieta, especialmente si tienes condiciones médicas, alergias alimentarias o estás en embarazo.</p>
        <p>VersaLab no garantiza la disponibilidad ininterrumpida del servicio ni se responsabiliza por pérdidas derivadas de fallos técnicos o interrupciones.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">8. Modificaciones a los términos</h2>
        <p>VersaLab se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigencia desde su publicación en esta página con la fecha de actualización correspondiente. El uso continuado del servicio después de una modificación implica la aceptación de los nuevos términos.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">9. Ley aplicable y jurisdicción</h2>
        <p>Estos términos se rigen por las leyes de la <strong>República de Colombia</strong>, en particular la Ley 1480 de 2011 (Estatuto del Consumidor). Cualquier controversia será resuelta ante los tribunales competentes de Bogotá, Colombia.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">10. Contacto</h2>
        <p>Para cualquier consulta, queja o solicitud relacionada con estos términos:</p>
        <p><strong>VersaLab</strong><br />Bogotá, Colombia<br />Correo: <a href="mailto:hola@versalab.pro" className="text-[#2D8C4E] underline">hola@versalab.pro</a><br />Web: <a href="https://versalab.pro" className="text-[#2D8C4E] underline" target="_blank" rel="noopener noreferrer">versalab.pro</a></p>
      </div>
    </div>
  );
}
