import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy Documentation',
    Svg: require('@site/static/img/undraw_join_re_w1lh.svg').default,
    description: (
      <>
         We comes with a well-documented API, making it easy to integrate into your Flutter applications.
      </>
    ),
  },
  {
    title: 'So Many Methods',
    Svg: require('@site/static/img/undraw_search_app_oso2.svg').default,
    description: (
      <>
        Package supports multiple services like messages, media, location and more.
      </>
    ),
  },
  {
    title: 'Easy Use Methods',
    Svg: require('@site/static/img/undraw_make_it_rain_re_w9pc.svg').default,
    description: (
      <>
        We provide easy-to-use methods with use full and less property only.
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
