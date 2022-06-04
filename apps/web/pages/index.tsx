import { SSRConfig, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import i18config from '../next-i18next.config';
import styles from './index.module.css';

type IndexProps = SSRConfig;
export function Index(props: IndexProps) {
  const currentLocale = props._nextI18Next.initialLocale;
  const { t } = useTranslation('common');

  return (
    <div className={styles.warpper}>
      <h1>{t('title')}</h1>
      <Link href="/" locale={currentLocale === 'kr' ? 'en' : 'kr'}>
        <a className={styles.button}>Change locale</a>
      </Link>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18config)),
    },
  };
}

export default Index;
