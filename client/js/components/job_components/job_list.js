function renderJobList() {
  document.querySelector('#page').innerHTML = `
  <section class="josb-list">
    ${renderJobs()}

  </section>
  `
}

function renderJobListEmpty() {
  document.querySelector('#page').innerHTML = `
  `
}

function renderJobs() {
  return state.jobs.map(job => `
  <section class="job" data-id="${job.id}">
    <header>
      <h2>${job.position_title}</h2>
      <span onClick="deleteJob(event)" 
      >Delete</span>
      <span onClick="renderEditJob(event)">Edit</span>
    </header>
    <p>Job Type: ${job.type_of_employment}</p>
    <p>Salary: ${job.salary}</p>
    <p>Job Link: ${job.job_url}</p>
    <p>Closing Date: ${job.closing_date}</p>
    <p>Company Name: ${job.company_name}</p>
    <p>Company Website: ${job.company_url}</p>
    <p>Contact Person: ${job.contact_person}</p>
    <p>Contact Phone Number: ${job.contact_phone}</p>
    <p>Contact Email: ${job.contact_email}</p>
    <p>Notes: ${job.notes_about_company}</p>
    <p>Job Ad Screenshot: ${job.job_advertisement_screen_shot}</p>
    <p>Date Applied: ${job.date_applied}</p>
    <p>Upcoming Interview: ${upcomingOrNot(job.upcoming_interview)}</p>
    <p>Completed Interview: ${completedOrNot(job.completed_interview)}</p>
    <p>Received Job Offer: ${receivedOrNot(job.received_job_offer)}</p>
  </section>
  `).join('')
}

function upcomingOrNot (boolean) {
  if (boolean) {
    return 'Upcoming'
  } else {
    return 'Not Yet'
  }
}

function completedOrNot (boolean) {
  if (boolean) {
    return 'Completed'
  } else {
    return 'Not Yet'
  }
}

function receivedOrNot (boolean) {
  if (boolean) {
    return 'Received'
  } else {
    return 'Not Yet'
  }
}
