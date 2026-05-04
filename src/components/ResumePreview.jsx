export default function ResumePreview({ data }) {
  const fullName = [data.firstname, data.middlename, data.lastname].filter(Boolean).join(' ');
  const hasSkills = data.skills.some(s => s.skill.trim());
  const hasExp = data.experiences.some(e => e.title.trim());
  const hasEdu = data.educations.some(e => e.school.trim());
  const hasProj = data.projects.some(p => p.title.trim());
  const hasContact = data.phoneno || data.email || data.address || data.summary;

  return (
    <div className="preview-card">
      {/* LEFT */}
      <div className="pv-left">
        <div className="pv-photo">
          {data.image ? <img src={data.image} alt="Profile" /> : <span className="pv-photo-placeholder">👤</span>}
        </div>
        {fullName && <div className="pv-name">{fullName}</div>}
        {data.designation && <div className="pv-designation">{data.designation}</div>}

        {hasContact && (
          <div className="pv-block">
            <div className="pv-block-title">About</div>
            {data.phoneno && <div className="pv-info"><span className="pv-info-icon">📞</span>{data.phoneno}</div>}
            {data.email && <div className="pv-info"><span className="pv-info-icon">✉️</span>{data.email}</div>}
            {data.address && <div className="pv-info"><span className="pv-info-icon">📍</span>{data.address}</div>}
            {data.summary && <div className="pv-summary">{data.summary}</div>}
          </div>
        )}

        {hasSkills && (
          <div className="pv-block">
            <div className="pv-block-title">Skills</div>
            <div>{data.skills.filter(s => s.skill.trim()).map((s, i) => <span className="pv-skill" key={i}>{s.skill}</span>)}</div>
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="pv-right">
        {hasExp && (
          <div className="pv-block">
            <div className="pv-block-title">Experience</div>
            {data.experiences.filter(e => e.title.trim()).map((exp, i) => (
              <div className="pv-exp" key={i}>
                <div className="pv-item-title">{exp.title}</div>
                {(exp.organization || exp.location) && <div className="pv-item-sub">{exp.organization}{exp.organization && exp.location && ' — '}{exp.location}</div>}
                {(exp.startDate || exp.endDate) && <div className="pv-dates">{exp.startDate && <span className="pv-date">{exp.startDate}</span>}{exp.endDate && <span className="pv-date">{exp.endDate}</span>}</div>}
                {exp.description && <div className="pv-desc">{exp.description}</div>}
              </div>
            ))}
          </div>
        )}

        {hasEdu && (
          <div className="pv-block">
            <div className="pv-block-title">Education</div>
            {data.educations.filter(e => e.school.trim()).map((edu, i) => (
              <div className="pv-edu" key={i}>
                <div className="pv-item-title">{edu.school}</div>
                {(edu.degree || edu.city) && <div className="pv-item-sub">{edu.degree}{edu.degree && edu.city && ' — '}{edu.city}</div>}
                {(edu.startDate || edu.endDate) && <div className="pv-dates">{edu.startDate && <span className="pv-date">{edu.startDate}</span>}{edu.endDate && <span className="pv-date">{edu.endDate}</span>}</div>}
                {edu.description && <div className="pv-desc">{edu.description}</div>}
              </div>
            ))}
          </div>
        )}

        {hasProj && (
          <div className="pv-block">
            <div className="pv-block-title">Projects</div>
            {data.projects.filter(p => p.title.trim()).map((proj, i) => (
              <div className="pv-proj" key={i}>
                <div className="pv-item-title">{proj.title}</div>
                {proj.link && <div className="pv-link">🔗 {proj.link}</div>}
                {proj.description && <div className="pv-desc">{proj.description}</div>}
              </div>
            ))}
          </div>
        )}

        {!hasExp && !hasEdu && !hasProj && (
          <div className="pv-empty"><p>Start filling the form to see your resume come to life ✨</p></div>
        )}
      </div>
    </div>
  );
}
