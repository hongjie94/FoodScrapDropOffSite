import React from 'react'

const Contents = () => {

  const datasets = [
    {
      title: "Dataset:",
      description: "Food Scrap Drop-Off Locations in NYC",
    },
    {
      title: "Explanation:",
      description:
        `The selected dataset represents the Food Scrap Drop-Off Locations in New York City. 
        It provides information about the locations where residents can drop off their food scraps for composting.`,
    },
    {
      title: "Source:",
      description: `The dataset is sourced from NYC Open Data, 
        an initiative by the City of New York to provide access to 
        various datasets related to city operations, facilities,
        and services. The dataset can be accessed through the NYC Open Data platform,
        which aims to promote transparency and accountability by making data available to the public.`,
    },
    {
      title: "Reason for Selection:",
      description: `We chose this dataset because it focuses on food waste management and sustainability, 
      which are important topics for environmental conservation and reducing greenhouse gas emissions. 
      By understanding the locations where residents can drop off their food scraps, individuals and 
      organizations can actively participate in composting programs and contribute to sustainable waste 
      management practices. This dataset can also be used to analyze the accessibility and distribution of food scrap.`,
    }
  ];
  
  return (
    <div className='my-10'>
     {datasets.map((dataset, index) => (
      <div key={index} className="my-10">
        <h1 className="font-semibold text-lg my-2">{dataset.title}</h1>
        <p className="w-full font-light lg:w-2/3">{dataset.description}</p>
      </div>
    ))}

      <div className="my-10">
        <h1 className="font-semibold text-lg my-2">Jupyter Notebook Analysis:</h1>
        <p className="w-full font-light lg:w-2/3">We have conducted interesting data analysis using Jupyter Notebook. 
      You can find the details of our analysis on the GitHub page: 
      <a className="text-blue-500 hover:text-blue-700" href="#"> GitHub Repository.</a>
     </p>
      </div>
 </div>
  )
}

export default Contents