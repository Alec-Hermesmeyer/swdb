// This is an example using an in-memory array to store the job data
let jobs = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { jobName, company, pm } = req.body;

    // Create a new job object
    const newJob = {
      jobName,
      company,
      pm,
    };

    // Add the new job to the jobs array
    jobs.push(newJob);

    // Return the updated jobs as the API response
    res.status(200).json({ jobs });
  } else if (req.method === 'GET') {
    // Return the existing jobs as the API response
    res.status(200).json({ jobs });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
