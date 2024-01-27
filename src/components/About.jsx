import React from 'react'

const About = () => {
  const stats = [
    {
      stat: 'Brand Recognition',
      desc: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
    },
    {
      stat: 'Detailed Records',
      desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    },
    {
      stat: 'Fully Customizable',
      desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    }
  ];


  return (
    <div className='text-center py-20 bg-slate-200'>
      <h1 className="text-5xl font-bold mb-6">Advanced Statistics</h1>

      <p className="text-slate-600 font-semibold w-96 mx-auto mb-10">
        Track how your links are performing across the web with our
        advanced statistics dashboard.
      </p>
      <div className='md:mx-32'>
        <ul className='flex gap-4 flex-col md:flex-row m-10'>
          {
            stats.map((tag, index) => (
              <li className={`bg-white rounded-md text-left p-6`} key={index}>
                <img src="" alt="" />
                <h2 className='font-semibold mb-2'>
                  {tag.stat}
                </h2>
                <p className="">
                  {tag.desc}
                </p>
              </li>
            ))
          }

        </ul>

      </div>

    </div>
  )
}

export default About