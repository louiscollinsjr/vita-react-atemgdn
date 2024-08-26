import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { truncateText } from '../utils/utils';



import BigCookiePNG from '../assets/a_happy_woman_holding_cookie.png';
import SatchelPeopleWalking from '../assets/people_walking_around_the_city_shopping.png';


const GET_ATEMPROJECTS_ITEMS = gql`
  query GetAtemProjectsItems {
  posts(where: {tags_value_recursive: "atem-projects"}) {
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


const AtemProjects: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ATEMPROJECTS_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className=' w-full flex flex-col content-center items-center min-h-[42.5rem]   bg-zinc-50 px-10  py-48 -my-2'>
    <div className="max-w-screen-2xl">
    <p className="~text-base/lg font-bold tracking-wide text-black uppercase py-6">Coders at Heart</p>
    
    <div className="grid grid-cols-1 gap-6 content-center ~mx-0/0 " >
      
      
      <div className="lg:pb-24 lg:pr-24 mb-1">

      <div className="max-w-screen-xl pb-10"> 
      <h2 className="~text-4xl/7xl col-span-2 text-left font-semibold text-black tracking-tight pb-8">
        We are seriously in the business of starting new things.
      </h2>
      <p className="text-left ~text-lg/2xl font-bold tracking-wide text-gray-500">
        At Atem,<span className="text-black">innovation is at our core.</span>
        Alongside our commitment to starting new ventures, we're thrilled to
        introduce atem.Labs, our incubator for groundbreaking initiatives like 
        <span className="text-black"> Satchel</span>, our AR Advertising
        platform. Furthermore, we're excited to expand our expertise in AI,
        design, and e-commerce, driving forward our pursuit of excellence in
        every domain.
      </p></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.posts.map((post) => (

      <div className="py-4">
        <div>
                <img
                        className="w-full h-64 object-cover"
                        src={post.coverImage.url}
                        alt={post.coverImage.fileName}
                      /></div>
                <div className="py-2">

                <h2 className="~text-base/2xl font-bold tracking-wide text-black uppercase py-1">
                    {post.title}
                  </h2>
                  {/* {post.subtitle && <h3>{post.subtitle}</h3>} */}
                  <p className='~text-sm/base'>{truncateText(post.content.text, 110)}</p>
                  {/* Corrected to access text inside content */}
                 <p className="text-blue-600 text-xs pt-3">
                    Case Study Coming Soon...
                  </p> </div> 
            </div>
     ))}
      </div>
  


    
    
    
    </div>  
    </div>
    
    </section>
  );
};

export default AtemProjects;