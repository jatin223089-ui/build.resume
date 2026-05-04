import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">🚀 Online Resume Builder</div>
            <h1>Only 2% of resumes make it past the first round. <span className="highlight">Be in the top 2%</span></h1>
            <p>Use professional field-tested resume templates that follow the exact 'resume rules' employers look for. Easy to use and done within minutes - try now for free!</p>
            <div className="hero-actions">
              <Link to="/builder" className="btn btn-primary btn-lg">✨ Create My Resume</Link>
              <a href="#features" className="btn btn-secondary btn-lg">Learn More ↓</a>
            </div>
            <div className="hero-img">
              <img src="/dublin-resume-templates.avif" alt="Resume templates" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-one">
        <div className="container">
          <div className="section-one-content">
            <div className="section-one-l">
              <img src="/visual-0c7080adf17f1f207276f613447c924f667dab34b7ac415cd7ef653172defd0b.svg" alt="" />
            </div>
            <div className="section-one-r">
              <h2 className="lg-title">Use the best resume maker as your guide!</h2>
              <p className="text">Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.</p>
              <div className="btn-group">
                <Link to="/builder" className="btn btn-primary">Create My Resume</Link>
                <a href="#" className="btn btn-secondary">Watch Video</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-two" id="features">
        <div className="container">
          <div className="section-items">
            <div className="section-item">
              <div className="section-item-icon">
                <img src="/feature-1-edf4481d69166ac81917d1e40e6597c8d61aa970ad44367ce78049bf830fbda5.svg" alt="" />
              </div>
              <h5 className="section-item-title">Make a resume that wins interviews!</h5>
              <p className="text">Use our resume maker with its advanced creation tools to tell professional story that engages recruiters, hiring managers and even CEOs.</p>
            </div>
            <div className="section-item">
              <div className="section-item-icon">
                <img src="/feature-2-a7a471bd973c02a55d1b3f8aff578cd3c9a4c5ac4fc74423d94ecc04aef3492b.svg" alt="" />
              </div>
              <h5 className="section-item-title">Resume writing made easy!</h5>
              <p className="text">Resume writing has never been this effortless. Pre-generated text, visual designs and more - all already integrated into the resume maker.</p>
            </div>
            <div className="section-item">
              <div className="section-item-icon">
                <img src="/feature-3-4e87a82f83e260488c36f8105e26f439fdc3ee5009372bb5e12d9421f32eabdd.svg" alt="" />
              </div>
              <h5 className="section-item-title">A recruiter-tested CV maker tool</h5>
              <p className="text">Our resume builder and its pre-generated content are tested by recruiters and IT experts. We help your CV become truly competitive.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
