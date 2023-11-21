/**
 * Константа позволяет получить доступ к ссылкам на роуты сайта
 */
const Links = [
    { title: "Главная", path: "/" },
    { title: "О подписке", path: "/price" },
    { title: "О сервисе", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "Вакансии", path: "/job" },
]

/**
 * Ссылки для Footer
 */
const FooterLinks1 = [
    ...Links,
];

const FooterLinks2 = [
    { title: "Паспорт проекта", path: "/legaldocs" },
];

const FooterLinks3 = [
    { title: "Правовые документы", path: "/legaldocs" },
];

export { FooterLinks1, FooterLinks2, FooterLinks3 };
export default Links;