import Card from './components/card'


const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$58/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Cloud Infrastructure Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "3 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$92/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "Data Scientist",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "data:image/jpeg;base64,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",
    name: "Google",
    datePosted: "1 week ago",
    post: "Software Engineer Intern",
    tag1: "Part-time",
    tag2: "Internship",
    pay: "$32/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "3 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    name: "Tesla",
    datePosted: "4 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$88/hour",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    name: "NVIDIA",
    datePosted: "10 weeks ago",
    post: "AI Research Intern",
    tag1: "Part-time",
    tag2: "Internship",
    pay: "$45/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    name: "OpenAI",
    datePosted: "6 days ago",
    post: "Prompt Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$110/hour",
    location: "Remote"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/060/100/954/non_2x/adobe-logo-free-download-adobe-logo-free-png.png",
    name: "Adobe",
    datePosted: "2 days ago",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "New Delhi, India"
  }
];

const App = () => {
  return <div className='parent'>
    {jobOpenings.map(function (prep, i) {
      return <Card key={i} brandLogo={prep.brandLogo} alter={prep.name + 'Logo'} name={prep.name} datePosted={prep.datePosted} post={prep.post} tag1={prep.tag1} tag2={prep.tag2} pay={prep.pay} location={prep.location} />
    })}
  </div>
}

export default App