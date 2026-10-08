const http = require("http");
const fs = require("fs");
const findSkill = require("./skillMatcher");

const server = http.createServer((req, res) => {

    // Show existing SkillSwap HTML page
    if (req.url === "/") {

        fs.readFile("index.html", (err, data) => {

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });

    }

    // Use our custom module
    else if (req.url === "/photography") {

        const match = findSkill("Photography");

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>SkillSwap Match</h1>
            <p>${match.name} can teach you ${match.skill}!</p>
            <a href="/">Back to SkillSwap</a>
        `);
    }

});

server.listen(3000, () => {
    console.log("SkillSwap server running on port 3000");
});
