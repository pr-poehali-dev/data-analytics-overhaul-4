export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/0130b2a2-584e-42ad-9141-976105377345/bucket/f643226d-552d-4545-ae51-4cad693ee9c9.jpg"
          alt="Sophie Fedorenko"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Индивидуальный подход к каждому</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Занятия строятся под вас: ваш темп, ваши цели, ваш уровень. Разбираем сложные правила, учимся чувствовать язык
          и открываем литературу заново — с удовольствием.
        </p>
        <a
          href="https://vk.com/sophie_fedorenko"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black w-fit uppercase tracking-wide inline-block"
        >
          Записаться на урок
        </a>
      </div>
    </div>
  );
}