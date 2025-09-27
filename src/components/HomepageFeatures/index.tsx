import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { JSX } from 'react';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Send Messages & Media',
    Svg: require('@site/static/img/undraw_join_re_w1lh.svg').default,
    description: (
      <>
        Send text messages, images, videos, documents, audio files, stickers, and contacts with simple API calls.
      </>
    ),
  },
  {
    title: 'Interactive Elements',
    Svg: require('@site/static/img/undraw_search_app_oso2.svg').default,
    description: (
      <>
        Create buttons, lists, reply buttons, and flows to engage users interactively through WhatsApp.
      </>
    ),
  },
  {
    title: 'Business Profile Management',
    Svg: require('@site/static/img/undraw_make_it_rain_re_w9pc.svg').default,
    description: (
      <>
        Update business profiles, manage catalogs, send product messages, and handle customer interactions.
      </>
    ),
  },
  {
    title: 'Template Messages',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Send authenticated template messages for marketing, notifications, and transactional communications.
      </>
    ),
  },
  {
    title: 'Location & Media Handling',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Share locations, upload media by URL or file, manage media lifecycle, and request user locations.
      </>
    ),
  },
  {
    title: 'User Management',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Register numbers, verify codes, block/unblock users, and manage user interactions seamlessly.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
