import { useCallback } from 'react';

export default function ResumeForm({ data, setData }) {
  const set = useCallback((field, value) => setData(prev => ({ ...prev, [field]: value })), [setData]);

  const setItem = useCallback((list, idx, field, value) => {
    setData(prev => {
      const arr = [...prev[list]];
      arr[idx] = { ...arr[idx], [field]: value };
      return { ...prev, [list]: arr };
    });
  }, [setData]);

  const addItem = useCallback((list, template) => {
    setData(prev => ({ ...prev, [list]: [...prev[list], { ...template }] }));
  }, [setData]);

  const removeItem = useCallback((list, idx) => {
    setData(prev => ({ ...prev, [list]: prev[list].filter((_, i) => i !== idx) }));
  }, [setData]);

  const onImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const r = new FileReader();
    r.onload = (ev) => set('image', ev.target.result);
    r.readAsDataURL(file);
  };

  return (
    <>
      {/* ABOUT */}
      <div className="form-card">
        <div className="form-card-header">👤 About Section</div>
        <div className="form-card-body">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input className="form-control" placeholder="e.g. John" value={data.firstname} onChange={e => set('firstname', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Middle Name <span className="opt">(optional)</span></label>
              <input className="form-control" placeholder="e.g. Herbert" value={data.middlename} onChange={e => set('middlename', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input className="form-control" placeholder="e.g. Doe" value={data.lastname} onChange={e => set('lastname', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your Image</label>
              <input className="form-control" type="file" accept="image/*" onChange={onImage} />
            </div>
            <div className="form-group">
              <label className="form-label">Designation</label>
              <input className="form-control" placeholder="e.g. Sr. Accountant" value={data.designation} onChange={e => set('designation', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <input className="form-control" placeholder="e.g. Lake Street-23" value={data.address} onChange={e => set('address', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-control" placeholder="e.g. johndoe@gmail.com" value={data.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Phone No</label>
              <input className="form-control" placeholder="e.g. 456-768-798" value={data.phoneno} onChange={e => set('phoneno', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Summary</label>
              <input className="form-control" placeholder="Brief professional summary" value={data.summary} onChange={e => set('summary', e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="form-card">
        <div className="form-card-header">💼 Experience</div>
        <div className="form-card-body">
          {data.experiences.map((exp, i) => (
            <div className="repeater-item" key={i}>
              {data.experiences.length > 1 && <button className="repeater-remove" onClick={() => removeItem('experiences', i)}>×</button>}
              <div className="form-row">
                <div className="form-group"><label className="form-label">Title</label><input className="form-control" value={exp.title} onChange={e => setItem('experiences', i, 'title', e.target.value)} /></div>
                <div className="form-group"><label className="form-label">Company</label><input className="form-control" value={exp.organization} onChange={e => setItem('experiences', i, 'organization', e.target.value)} /></div>
                <div className="form-group"><label className="form-label">Location</label><input className="form-control" value={exp.location} onChange={e => setItem('experiences', i, 'location', e.target.value)} /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Start Date</label><input className="form-control" type="date" value={exp.startDate} onChange={e => setItem('experiences', i, 'startDate', e.target.value)} /></div>
                <div className="form-group"><label className="form-label">End Date</label><input className="form-control" type="date" value={exp.endDate} onChange={e => setItem('experiences', i, 'endDate', e.target.value)} /></div>
                <div className="form-group"><label className="form-label">Description</label><input className="form-control" value={exp.description} onChange={e => setItem('experiences', i, 'description', e.target.value)} /></div>
              </div>
            </div>
          ))}
          <button className="repeater-add" onClick={() => addItem('experiences', { title: '', organization: '', location: '', startDate: '', endDate: '', description: '' })}>+ Add Experience</button>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="form-card">
        <div className="form-card-header">🎓 Education</div>
        <div className="form-card-body">
          {data.educations.map((edu, i) => (
            <div className="repeater-item" key={i}>
              {data.educations.length > 1 && <button className="repeater-remove" onClick={() => removeItem('educations', i)}>×</button>}
              <div className="form-row">
                <div className="form-group"><label className="form-label">School / College</label><input className="form-control" value={edu.school} onChange={e => setItem('educations', i, 'school', e.target.value)} /></div>
                <div className="form-group"><label className="form-label">Degree</label><input className="form-control" value={edu.degree} onChange={e => setItem('educations', i, 'degree', e.target.value)} /></div>
                <div className="form-group"><label className="form-label">City</label><input className="form-control" value={edu.city} onChange={e => setItem('educations', i, 'city', e.target.value)} /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Start Date</label><input className="form-control" type="date" value={edu.startDate} onChange={e => setItem('educations', i, 'startDate', e.target.value)} /></div>
                <div className="form-group"><label className="form-label">End Date</label><input className="form-control" type="date" value={edu.endDate} onChange={e => setItem('educations', i, 'endDate', e.target.value)} /></div>
                <div className="form-group"><label className="form-label">Description</label><input className="form-control" value={edu.description} onChange={e => setItem('educations', i, 'description', e.target.value)} /></div>
              </div>
            </div>
          ))}
          <button className="repeater-add" onClick={() => addItem('educations', { school: '', degree: '', city: '', startDate: '', endDate: '', description: '' })}>+ Add Education</button>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="form-card">
        <div className="form-card-header">🚀 Projects</div>
        <div className="form-card-body">
          {data.projects.map((proj, i) => (
            <div className="repeater-item" key={i}>
              {data.projects.length > 1 && <button className="repeater-remove" onClick={() => removeItem('projects', i)}>×</button>}
              <div className="form-row">
                <div className="form-group"><label className="form-label">Project Name</label><input className="form-control" value={proj.title} onChange={e => setItem('projects', i, 'title', e.target.value)} /></div>
                <div className="form-group"><label className="form-label">Project Link</label><input className="form-control" value={proj.link} onChange={e => setItem('projects', i, 'link', e.target.value)} /></div>
                <div className="form-group"><label className="form-label">Description</label><input className="form-control" value={proj.description} onChange={e => setItem('projects', i, 'description', e.target.value)} /></div>
              </div>
            </div>
          ))}
          <button className="repeater-add" onClick={() => addItem('projects', { title: '', link: '', description: '' })}>+ Add Project</button>
        </div>
      </div>

      {/* SKILLS */}
      <div className="form-card">
        <div className="form-card-header">⚡ Skills</div>
        <div className="form-card-body">
          {data.skills.map((s, i) => (
            <div className="repeater-item" key={i} style={{ padding: '12px 20px' }}>
              {data.skills.length > 1 && <button className="repeater-remove" onClick={() => removeItem('skills', i)}>×</button>}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Skill</label>
                <input className="form-control" placeholder="e.g. JavaScript" value={s.skill} onChange={e => setItem('skills', i, 'skill', e.target.value)} />
              </div>
            </div>
          ))}
          <button className="repeater-add" onClick={() => addItem('skills', { skill: '' })}>+ Add Skill</button>
        </div>
      </div>
    </>
  );
}
