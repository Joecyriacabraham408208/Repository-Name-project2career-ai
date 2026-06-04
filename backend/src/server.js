const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Project2Career AI Backend Running",
  });
});

app.get("/about", (req, res) => {
  res.json({
    project: "Project2Career AI",
    version: "1.0",
    developer: "Joe Abraham",
  });
});

app.post("/analyze",(req,res) =>{
  const githubUrl=req.body.githubUrl;

  res.json({
    success:true,
    receivedUrl:githubUrl,
    skills:[
      "HTML",
      "CSS",
      "JavaScript"
           ]


  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});