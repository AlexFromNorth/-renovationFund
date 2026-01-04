import { FlatTermsProps } from "@/entities/flat-terms";

export const flatTermsMock: FlatTermsProps = {
  title: 'Условия покупки',
  description: `Квартиры, машино-места в подземном паркинге или помещения для бизнеса в «Московских кварталах»
  можно купить по прямой продаже или по аукциону на электронной торговой площадке Росэлторг.`,
  image: '/pages/flatTerms.png',
  banks: [
    { name: 'Сбербанк', url: 'https://domclick.ru/ipoteka/calculator?subproductId=2&utm_source=sberbank&utm_medium=referral&utm_campaign=homenew', logo: '/assets/ui/i_sber.svg' },
    { name: 'Газпромбанк', url: 'https://www.gazprombank.ru/personal/mortgage/', logo: '/assets/ui/i_gasprom.svg' },
  ],
};
