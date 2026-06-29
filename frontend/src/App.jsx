import { useState } from "react";
import "./App.css";

function App() {

  const [githubUrl, setGithubUrl] =
    useState("");

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const analyzeRepository = async () => {

    if (!githubUrl.trim()) {

  setError(
    "Please enter a GitHub repository URL."
  );

  return;

}

setError("");

    setLoading(true);

    try {

      const response = await fetch(
        "http://localhost:5000/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            githubUrl
          })

        }
      );

      const data =
  await response.json();

if (!data.success) {

  setError(data.message);

  setResult(null);

}
else {

  setError("");

  setResult(data);

}

setLoading(false);
    }
    catch (error) {

      console.log(error);

      setLoading(false);

    }

  };

  return (

    <div className="container">

      <h1>

 GitHub Skill Analyzer

</h1>

<p className="subtitle">

Analyze GitHub repositories and discover career opportunities.

</p>

      <input
        type="text"
        placeholder="Enter GitHub Repository URL"
        value={githubUrl}
        onChange={(event) =>
          setGithubUrl(
            event.target.value
          )
        }

        onKeyDown={(event)=>{

  if(event.key==="Enter"){

    analyzeRepository();

  }

}}
      />

     {error && (

  <div className="error-card">

    ❌ {error}

  </div>

)}
      <button
  onClick={analyzeRepository}
  disabled={loading}
>

  {loading
    ? "⏳ Analyzing..."
    : "🔍 Analyze Repository"}

</button>

{!result && !error && (

  <div className="empty-state">

    <h2>

      Analyze Any GitHub Repository

    </h2>

    <p>

      Enter a GitHub repository URL to discover
      skills, career suggestions, and repository insights.

    </p>

  </div>

)}

{result && (

        <div className="result">

          <h2>
            {result.metadata.owner} / {result.metadata.repository}
          </h2>

          <h3>
  Project Score
</h3>


<div className="progress-bar">

  <div
    className="progress-fill"
    style={{
      width:
        `${result.projectScore}%`
    }}
  >

    {result.projectScore}%

  </div>

</div>
          <p>
            <strong>
              Repository Rating:
            </strong>{" "}
            {result.repositoryRating}
          </p>

          <p>
            <strong>
              Repository Category:
            </strong>{" "}
            {result.repositoryCategory}
          </p>

          <h3>
  Skills
</h3>

<div className="skills">

  {result.skills.map((skill) => (

    <span
      className="skill-badge"
      key={skill}
    >
      {skill}
    </span>

  ))}

</div>

          <h3>
  Career Suggestions
</h3>

<div className="career-container">

  {result.careerSuggestions.map(
    (career) => (

      <div
        className="career-card"
        key={career}
      >

         {career}

      </div>

    )
  )}

</div>

          <h3>
  Repository Statistics
</h3>

<div className="stats-grid">

  <div className="stat-card">
    ⭐
    <h4>Stars</h4>
    <p>{result.metadata.stars.toLocaleString()}</p>
  </div>

  <div className="stat-card">
    🍴
    <h4>Forks</h4>
    <p>{result.metadata.forks.toLocaleString()}</p>
  </div>

  <div className="stat-card">
    👀
    <h4>Watchers</h4>
    <p>{result.metadata.watchers.toLocaleString()}</p>
  </div>

  <div className="stat-card">
    🐞
    <h4>Issues</h4>
    <p>{result.metadata.openIssues.toLocaleString()}</p>
  </div>

  <div className="stat-card">
    💻
    <h4>Language</h4>
    <p>{result.metadata.language}</p>
  </div>

  <div className="stat-card">
    🌿
    <h4>Branch</h4>
    <p>{result.metadata.defaultBranch}</p>
  </div>

</div>

<h3>
  Description
</h3>

<p className="description">

  {result.metadata.description}

</p>

<a
  href={result.receivedUrl}
  target="_blank"
  rel="noreferrer"
  className="github-btn"
>

🔗 View Repository on GitHub

</a>

        </div>

      )}

    </div>

  );

}

export default App;