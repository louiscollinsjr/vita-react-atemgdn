import React from 'react';

import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { truncateText } from '../utils/utils';

const GET_NRTW_ITEMS = gql`
  query GetNrtwItems {
    posts(where: { tags_value_recursive: "nrtw" }) {
      tags
      title
      subtitle
      slug
      content {
        text
      }
      coverImage {
        fileName
        id
        url
      }
    }
  }
`;

const AtemNRTW: React.FC = () => {
  const { loading, error, data } = useQuery(GET_NRTW_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className=" w-full flex flex-col content-center items-center min-h-[42.5rem] py-48 -my-2">
      <div className="max-w-screen-2xl px-10">

            <p className="~text-base/lg font-bold tracking-wide text-black uppercase">
              Commuinity: #NRTW
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 content-center ~mx-0/0 my-6" >
            <div className="">
              <div className="max-w-screen-xl">
                <h2 className="~text-5xl/7xl text-left font-extrabold text-black tracking-tight w-full">
                  HASHTAG.Nerds Rule The World
                </h2>
                <p className="text-left text-2xl font-bold tracking-wide pt-8 text-gray-500">
                  See what our community is up too.{' '}
                  <span className="text-black">Google.</span> Next.js.
                  <span className="text-black"> Vercel.</span> Meta. Apple.
                </p>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
      {data.posts.map((post) => (
      <div className="bg-slate-50">
                <div className="p-8">
                <h2 className="text-base font-bold tracking-wide text-black uppercase">
                    {post.title}
                  </h2>
                  {/* {post.subtitle && <h3>{post.subtitle}</h3>} */}
                  <p>{truncateText(post.content.text, 110)}</p>
                  {/* Corrected to access text inside content */}
                  <p className="text-blue-600 text-xs pt-3">
                    <a href={`${post.slug}`}>Read more</a>
                  </p> </div> 
            </div>
     ))}
      </div>

        
      </div>
    </section>
  );
};

export default AtemNRTW;
