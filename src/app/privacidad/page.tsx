export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
        <p><strong>Última actualización:</strong> Marzo 2026</p>
        <p>En <strong>VersaLab</strong> respetamos tu privacidad y nos comprometemos a proteger tus datos personales en cumplimiento con la <strong>Ley 1581 de 2012</strong> (Ley de Protección de Datos Personales de Colombia) y el <strong>Decreto 1377 de 2013</strong>.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">1. Responsable del tratamiento</h2>
        <p><strong>VersaLab</strong><br />Bogotá, Colombia<br />Correo: <a href="mailto:hola@versalab.pro" className="text-[#2D8C4E] underline">hola@versalab.pro</a><br />Web: <a href="https://versalab.pro" className="text-[#2D8C4E] underline" target="_blank" rel="noopener noreferrer">versalab.pro</a><br />Producto: Nutre (ensaladasfaciles.online)</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">2. Datos que recopilamos</h2>
        <p>Nutre es una aplicación web diseñada para funcionar principalmente en tu dispositivo, recopilando la mínima información necesaria:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Datos de navegación y preferencias:</strong> país seleccionado, recetas favoritas y lista de compras se almacenan <strong>localmente en tu dispositivo</strong> mediante localStorage. Estos datos no se transmiten a nuestros servidores.</li>
          <li><strong>Datos de pago:</strong> procesados directamente por MercadoPago como encargado del tratamiento. VersaLab no almacena datos de tarjetas, cuentas bancarias ni información financiera.</li>
          <li><strong>Datos de contacto:</strong> correo electrónico u otros datos que nos proporciones voluntariamente al comunicarte con nosotros.</li>
          <li><strong>Datos analíticos básicos:</strong> información agregada y anónima sobre el uso del servicio (páginas visitadas, dispositivo, navegador) para mejorar la experiencia del usuario.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">3. Finalidad del tratamiento</h2>
        <p>Tus datos personales serán tratados para las siguientes finalidades:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Personalizar las recetas según tu país y preferencias.</li>
          <li>Procesar y gestionar compras del plan premium.</li>
          <li>Responder consultas, quejas o solicitudes de soporte.</li>
          <li>Mejorar el funcionamiento y la experiencia del servicio.</li>
          <li>Cumplir con obligaciones legales aplicables.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">4. Derechos del titular (ARCO)</h2>
        <p>De acuerdo con la Ley 1581 de 2012, como titular de tus datos personales tienes derecho a:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Acceso:</strong> conocer qué datos personales tenemos sobre ti.</li>
          <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
          <li><strong>Cancelación (Supresión):</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
          <li>Solicitar prueba de la autorización otorgada.</li>
          <li>Revocar la autorización para el tratamiento de tus datos.</li>
          <li>Presentar quejas ante la <strong>Superintendencia de Industria y Comercio (SIC)</strong>.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">5. Ejercicio de derechos</h2>
        <p>Para ejercer cualquiera de tus derechos, envía un correo a <a href="mailto:hola@versalab.pro" className="text-[#2D8C4E] underline">hola@versalab.pro</a> con el asunto &quot;Derechos de datos personales&quot;, indicando:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Tu nombre completo y documento de identidad.</li>
          <li>El derecho que deseas ejercer.</li>
          <li>Una descripción clara de tu solicitud.</li>
        </ul>
        <p>Responderemos en un plazo máximo de <strong>15 días hábiles</strong>, conforme a lo establecido en la ley.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">6. Cookies y tecnologías similares</h2>
        <p>Nutre utiliza <strong>localStorage</strong> para almacenar tus preferencias y datos de la aplicación localmente en tu dispositivo. No utilizamos cookies de rastreo de terceros ni compartimos datos con redes publicitarias.</p>
        <p>Podemos utilizar herramientas de analítica web que recopilan información agregada y anónima para entender cómo se usa el servicio y mejorarlo.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">7. Transferencia y encargados del tratamiento</h2>
        <p>VersaLab podrá compartir datos con los siguientes encargados del tratamiento, exclusivamente para las finalidades descritas:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>MercadoPago:</strong> procesamiento de pagos. MercadoPago opera bajo sus propias políticas de privacidad y seguridad.</li>
        </ul>
        <p>No vendemos, alquilamos ni compartimos tus datos personales con terceros para fines de marketing o publicidad.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">8. Menores de edad</h2>
        <p>Nutre no está dirigido a menores de 14 años. No recopilamos intencionalmente datos de menores sin el consentimiento de sus padres o tutores legales. Si detectamos que hemos recopilado datos de un menor sin autorización, procederemos a eliminarlos.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">9. Seguridad de los datos</h2>
        <p>VersaLab implementa medidas técnicas y organizativas razonables para proteger tus datos personales contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún sistema es completamente seguro, por lo que no podemos garantizar la seguridad absoluta de la información.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">10. Modificaciones</h2>
        <p>VersaLab se reserva el derecho de modificar esta Política de Privacidad. Los cambios serán publicados en esta página con la fecha de actualización correspondiente.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">11. Vigencia</h2>
        <p>Esta política está vigente desde marzo de 2026 y permanecerá en efecto mientras VersaLab opere el servicio Nutre o hasta que sea reemplazada por una versión actualizada.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">12. Contacto</h2>
        <p>Para cualquier consulta relacionada con esta política o el tratamiento de tus datos:</p>
        <p><strong>VersaLab</strong><br />Bogotá, Colombia<br />Correo: <a href="mailto:hola@versalab.pro" className="text-[#2D8C4E] underline">hola@versalab.pro</a><br />Web: <a href="https://versalab.pro" className="text-[#2D8C4E] underline" target="_blank" rel="noopener noreferrer">versalab.pro</a></p>
      </div>
    </div>
  );
}
