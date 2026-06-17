import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { JSX } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img style={{width:150}} src="img/whatsapp-flutter-logo.png"/>
        <Heading as="h1" className="hero__title">
          #1 Flutter Package for WhatsApp Business API
        </Heading>
        <p className="hero__subtitle">
          Seamlessly integrate WhatsApp Business API into your Flutter apps. Send messages, media, templates, manage business profiles, create interactive flows, and more with the latest API v25.0 support.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://pub.dev/packages/whatsapp">
            View on Pub.dev
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">Quick Start</Heading>
            <p>
              Get started with WhatsApp Business API integration in just a few steps:
            </p>
            <ol>
              <li>Add the package to your pubspec.yaml: <code>whatsapp: ^4.0.1</code></li>
              <li>Import the package: <code>import 'package:whatsapp/whatsapp.dart';</code></li>
              <li>Initialize with your API credentials</li>
              <li>Start sending messages and media!</li>
            </ol>
            <Link
              className="button button--primary"
              to="/docs/getting-started">
              View Full Documentation
            </Link>
          </div>
          <div className="col col--6">
            <img src="img/undraw_docusaurus_react.svg" alt="Quick Start" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUseIt() {
  return (
    <section className={styles.whyUse}>
      <div className="container">
        <div className="text--center">
          <Heading as="h2">Why Choose WhatsApp Flutter Package?</Heading>
          <p>
            Built for developers who want reliable, easy-to-use WhatsApp Business API integration.
          </p>
        </div>
        <div className="row">
          <div className="col col--4">
            <h3>🚀 Latest API Support</h3>
            <p>Always updated with the latest WhatsApp Business API features and v25.0 compatibility.</p>
          </div>
          <div className="col col--4">
            <h3>📚 Comprehensive Documentation</h3>
            <p>Well-documented API with examples for all methods and features.</p>
          </div>
          <div className="col col--4">
            <h3>🔧 Easy Integration</h3>
            <p>Simple methods with minimal properties required, perfect for rapid development.</p>
          </div>
          <div className="col col--4">
            <h3>💪 Production Ready</h3>
            <p>Tested and used in production applications with high reliability.</p>
          </div>
          <div className="col col--4">
            <h3>🌍 Flutter Native</h3>
            <p>Built specifically for Flutter, leveraging Dart's strengths for mobile and web.</p>
          </div>
          <div className="col col--4">
            <h3>🛠️ Active Maintenance</h3>
            <p>Regular updates, bug fixes, and community support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Flutter's #1 WhatsApp Business Package.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickStart />
        <WhyUseIt />
      </main>
    </Layout>
  );
}
