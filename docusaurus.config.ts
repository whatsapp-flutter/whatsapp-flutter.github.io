import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WhatsApp Flutter Package',
  tagline: '#1 WhatsApp Flutter Package',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://whatsapp-flutter.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'whatsapp-flutter', // Usually your GitHub org/user name.
  projectName: 'whatsapp-flutter.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs', // Base URL for current documentation
          sidebarPath: './sidebars.ts',
          lastVersion: 'current',
          versions: {
            current: {
              label: '3.0.0',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/whatsapp-flutter/whatsapp-flutter.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/whatsapp-flutter/whatsapp-flutter.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/banner.jpg',
    navbar: {
      title: 'WhatsApp Flutter',
      logo: {
        alt: 'WhatsApp Flutter',
        src: 'img/whatsapp-flutter-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://pub.dev/packages/whatsapp',
          label: 'Pub.dev',
          position: 'right',
        },
        {
          href: 'https://github.com/rohit-chouhan/whatsapp',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Initialization',
              to: '/docs/initialization',
            }
          ],
        },
        {
          title: 'Any Issue?',
          items: [
            {
              label: 'Raise Issue',
              href: 'https://github.com/rohit-chouhan/whatsapp/issues',
            },
            {
              label: 'Contact Me',
              href: 'https://rohitchouhan.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              href: 'https://pub.dev/packages/whatsapp',
              label: 'Pub.dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rohit-chouhan/whatsapp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://rohitchouhan.com">Rohit Chouhan</a>`,
    },
    prism: {
      additionalLanguages: ['dart'],
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
