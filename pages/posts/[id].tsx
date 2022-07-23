import Date from 'components/date';
import Layout from 'components/layout';
import { getAllPostIds, getPostData, PostData } from 'lib/posts';
import Head from 'next/head';
import utilStyles from 'styles/utils.module.css';

type Props = {
  postData: PostData;
};

export const getStaticProps = async ({ params }): Promise<{ props: Props }> => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const Post: React.FC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
