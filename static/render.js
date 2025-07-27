const workshops = [
    {
        title: "Barclays Workshop",
        filename: "barclays.html",
        description: "Participated in a workshop lead by Barclays and financial services at Capgemini containing many group tasks as well as information about money."
    },
    {
        title: "Project Management Workshop",
        filename: "project-management.html",
        description: "Participated in a workshop lead by Bilyana Balkanska on different project management techniques how to successfully manage a group project."
    },
    {
        title: "Chaos Engineering Workshop",
        filename: "chaos-engineering.html",
        description: "Participated in a workshop on Chaos Engineering and how it is used within the industry."
    },
    {
        title: "Agile Methodology Workshop",
        filename: "agile-methodology.html",
        description: "Participated in a workshop on Agile Methodology and how to successfully implement it within a team."
    },
    {
        title: "Group Research Task",
        filename: "group-research.html",
        description: "Engaged in a group research task on Capgemini and one of it's clients, and presented our findings to the cohort."
    },
    {
        title: "Group Project Task",
        filename: "group-project.html",
        description: "Engaged in a group project task to create and present an application to solve a given brief: Sustainable Living."
    },
    {
        title: "AI Engineer Workshop",
        filename: "ai-engineer.html",
        description: "Participated in a workshop lead by Nana Akua T-Mensah on the state of AI and it's future."
    },
    {
        title: "Portfolio",
        filename: "portfolio.html",
        description: "And finally, I designed and created this portfolio website from scratch using static html, css and javascript files."
    }
];

const container = document.getElementById("entries");

workshops.forEach(w => {
    const card = document.createElement("a");
    card.className = "entry-card";
    card.href = `./entries/${w.filename}`;
    card.innerHTML = `
        <h3><u>${w.title}</u></h3>
        <p>${w.description}</p>`;
    container.appendChild(card);
});
