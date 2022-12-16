import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data2';

export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    },
    revalidate: 60 
  };
}
export default function Home({ allData }) {
  return (
    <Layout home>
      <h1>Posts?</h1>
      <div className="list-group">
        {allData ?
          allData.map(({ id, name }) => (
          <Link
            key={id}
            href={`/${id}`}
            className="list-group-item list-group-item-action">
            {name}
          </Link>
        ))
        : null }
      </div>
      <Link href="/" class="btn btn-primary mt-3">
            ← Back to home
          </Link>
    </Layout>
  );
}