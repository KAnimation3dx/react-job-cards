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
    brandLogo: "https://logo.clearbit.com/google.com",
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
    brandLogo: "https://logo.clearbit.com/adobe.com",
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