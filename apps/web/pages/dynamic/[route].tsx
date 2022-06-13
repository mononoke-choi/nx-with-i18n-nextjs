import { GetStaticPaths } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import i18config from '../../next-i18next.config';
import styles from '../index.module.css';

const DynamicRoute = () => {
  const { t } = useTranslation('common');
  const { locale, asPath } = useRouter();

  return (
    <div className={styles.warpper}>
      <h1>{t('dynamic')}</h1>
      <Link href={asPath} locale={locale === 'kr' ? 'en' : 'kr'}>
        <a className={styles.button}>{t('changeLocaleButtonText')}</a>
      </Link>
      <hr />
      <Link href="/">
        <a className={styles.buttonSecondary}>{t('goBack')}</a>
      </Link>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          route: 'cat',
        },
        locale: 'kr',
      },
      {
        params: {
          route: 'cat',
        },
        locale: 'en',
      },
      {
        params: {
          route: 'dog',
        },
        locale: 'kr',
      },
      {
        params: {
          route: 'dog',
        },
        locale: 'en',
      },
    ],
    fallback: 'blocking',
  };
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18config)),
    },
  };
}

export default DynamicRoute;
