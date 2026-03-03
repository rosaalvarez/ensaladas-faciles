export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
        <p><strong>Última actualización:</strong> Marzo 2026</p>
        <p>En Nutre (ensaladasfaciles.online) respetamos tu privacidad y nos comprometemos a proteger tus datos personales en cumplimiento con la Ley 1581 de 2012 (Ley de Protección de Datos Personales de Colombia) y el Decreto 1377 de 2013.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">1. Responsable del tratamiento</h2>
        <p>Nutre · ensaladasfaciles.online<br />Correo: <a href="mailto:hola@ensaladasfaciles.online" className="text-[#2D8C4E] underline">hola@ensaladasfaciles.online</a></p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">2. Datos que recopilamos</h2>
        <p>Nutre es una aplicación web que funciona principalmente en tu dispositivo. Recopilamos la mínima información necesaria:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Datos de navegación:</strong> país seleccionado, preferencias de recetas (almacenados localmente en tu dispositivo via localStorage, no en nuestros servidores).</li>
          <li><strong>Datos de pago:</strong> procesados directamente por MercadoPago. No almacenamos datos de tarjetas ni información financiera.</li>
          <li><strong>Correo electrónico:</strong> solo si nos contactas directamente.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">3. Finalidad del tratamiento</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Personalizar las recetas según tu país y preferencias.</li>
          <li>Procesar compras del plan premium.</li>
          <li>Responder consultas de soporte.</li>
          <li>Mejorar el servicio.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">4. Almacenamiento local</h2>
        <p>La mayoría de tus datos (país, lista de compras, preferencias) se almacenan localmente en tu dispositivo mediante localStorage y la tecnología PWA. Estos datos no se transmiten a nuestros servidores.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">5. Derechos del titular (Habeas Data)</h2>
        <p>De acuerdo con la Ley 1581 de 2012, tienes derecho a:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Conocer, actualizar y rectificar tus datos personales.</li>
          <li>Solicitar prueba de la autorización otorgada.</li>
          <li>Ser informado sobre el uso de tus datos.</li>
          <li>Revocar la autorización y/o solicitar la supresión de tus datos.</li>
          <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">6. Ejercicio de derechos</h2>
        <p>Para ejercer cualquiera de estos derechos, escríbenos a: <a href="mailto:hola@ensaladasfaciles.online" className="text-[#2D8C4E] underline">hola@ensaladasfaciles.online</a></p>
        <p>Responderemos en un plazo máximo de 15 días hábiles, de acuerdo con la ley.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">7. Cookies y tecnologías similares</h2>
        <p>Nutre utiliza localStorage para almacenar preferencias. No utilizamos cookies de rastreo ni compartimos datos con terceros para publicidad.</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">8. Modificaciones</h2>
        <p>Nos reservamos el derecho de modificar esta política. Los cambios serán publicados en esta página.</p>
      </div>
    </div>
  );
}
