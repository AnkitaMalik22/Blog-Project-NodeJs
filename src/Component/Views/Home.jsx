import Blog from "./Blog"



function Home() {
  return (
    <div className="mt-3 p-4">
      <h1 className='text-3xl font-medium mb-4 '>Latest Blogs  </h1>
      <div className="blogs  md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5">
      <Blog/>
<Blog/>
<Blog/>
<Blog/>
<Blog/>
<Blog/>

      </div>


    </div>
  )
}

export default Home