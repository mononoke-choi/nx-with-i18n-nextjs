import { GetStaticPaths } from 'next';
import Link               from 'next/link';
import { useRouter }      from 'next/router';
import styles             from '../index.module.css';


const DynamicRoute = () => {
  const { locale, asPath } = useRouter();

  return (
    <div className={styles.warpper}>
      <h1>{'dynamic'}</h1>
      <Link href={asPath} locale={locale === 'kr' ? 'en' : 'kr'}>
        <a className={styles.button}>{'changeLocaleButtonText'}</a>
      </Link>
      <hr />
      <Link href="/">
        <a className={styles.buttonSecondary}>{'goBack'}</a>
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
    },
    revalidate: 1
  };
}

export default DynamicRoute;
