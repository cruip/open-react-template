export const metadata = {
  title: "Контакты - АЛМ",
  description: "Свяжитесь с нами",
};

export default function Contact() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 text-center">
          <h1 className="pb-8 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-700),var(--color-indigo-700),var(--color-gray-600),var(--color-indigo-800),var(--color-gray-700))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-3xl" data-aos="fade-up">
          О нас
          </h1>
          <p className="mb-6 text-xl" data-aos="fade-up" data-aos-delay={200}>
            «Архитектурно-реставрационная компания» занимается производством и продажей продукции торговой марки «АЛМ», наша компания зарекомендовала себя надёжным производителем продукции для работ по гидроизоляции, ремонту трещин и других дефектов, усилению и восстановлению строительных конструкций из бетона и кирпича современными методами – инъектирования, на объектах гражданского строительства, инфраструктурных объектах и объектах культурного наследия.
          </p>
         
        </div>
      </div>
    </section>
  );
}
