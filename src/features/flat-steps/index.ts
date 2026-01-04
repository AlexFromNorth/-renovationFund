import { flatStepsProps } from "@/entities/flat-steps/model/types";

export const flatStepsMock: flatStepsProps = {
  steps: [
    { id: 1, title: 'Выбор и осмотр объекта' },
    { id: 2, title: 'Одобрение в банке' },
    { id: 3, title: 'Оформление ЭЦП', comment: '*' },
    { id: 4, title: 'Регистрация на торговой площадке' },
    { id: 5, title: 'Подача заявки на участие в аукционе' },
    { id: 6, title: 'Участие в аукционе' },
    { id: 7, title: 'Предоставление данных' },
    { id: 8, title: 'Оценка недвижимости' },
    { id: 9, title: 'Согласование даты сделки' },
    { id: 10, title: 'Заключение и оплата договора' },
    { id: 11, title: 'Регистрация права собственности и получение ключей' },
  ],
  banks: [
    { name: 'Сбербанк', url: 'https://domclick.ru/ipoteka/calculator?subproductId=2&utm_source=sberbank&utm_medium=referral&utm_campaign=homenew', logo: '/assets/ui/i_sber.svg' },
    { name: 'Газпромбанк', url: 'https://www.gazprombank.ru/personal/mortgage/', logo: '/assets/ui/i_gasprom.svg' },
  ],
  moreLink: '/pokupka-nedvizhimosti-dlya-vseh/uslovia-pokupki/#buy_mortgage',
};
