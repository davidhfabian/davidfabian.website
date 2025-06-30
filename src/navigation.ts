import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Acerca de',
      href: getPermalink('/about'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Navegación',
      links: [
        { text: 'Inicio', href: getPermalink('/') },
        { text: 'Acerca de', href: getPermalink('/about') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <span class="text-sm">© 2025 David Fabián. Todos los derechos reservados.</span>
  `,
};
