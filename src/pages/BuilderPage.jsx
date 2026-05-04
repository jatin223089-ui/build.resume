import { useState } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';

const initialData = {
  firstname: '', middlename: '', lastname: '', image: null,
  designation: '', address: '', email: '', phoneno: '', summary: '',
  experiences: [{ title: '', organization: '', location: '', startDate: '', endDate: '', description: '' }],
  educations: [{ school: '', degree: '', city: '', startDate: '', endDate: '', description: '' }],
  projects: [{ title: '', link: '', description: '' }],
  skills: [{ skill: '' }],
};

export default function BuilderPage() {
  const [data, setData] = useState(initialData);
  return (
    <section className="builder-page">
      <div className="container">
        <div className="builder-header">
          <h2>Craft Your Resume</h2>
          <p>Fill in the form — your resume updates live on the right.</p>
        </div>
        <div className="builder-layout">
          <div>
            <ResumeForm data={data} setData={setData} />
          </div>
          <div className="preview-sticky">
            <div className="preview-container">
              <ResumePreview data={data} />
            </div>
            <div className="preview-actions">
              <button className="btn btn-primary btn-lg" onClick={() => window.print()}>🖨️ Print / Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
