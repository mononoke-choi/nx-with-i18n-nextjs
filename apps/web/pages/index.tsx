import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import i18config from '../next-i18next.config';
import styles from './index.module.css';

export function Index() {
  const { locale, asPath } = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className={styles.warpper}>
      <h1>{t('title')}</h1>
      <Link href={asPath} locale={locale === 'kr' ? 'en' : 'kr'}>
        <a className={styles.button}>{t('changeLocaleButtonText')}</a>
      </Link>
      <hr />
      <Link href="/dynamic">
        <a className={styles.buttonSecondary}>
          {t('goToDynamicPageButtonText')}
        </a>
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
