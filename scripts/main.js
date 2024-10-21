const commands = [
  "help",
  "about",
  "skills",
  "education",
  "projects",
  "github",
  "linkedin",
  "contact",
  "clear",
  "color-a",
  "color-b",
  "color-c",
  "certifications",
];

function helpMenu() {
  const content = [
    "------------------------------------------------------------------",
    "&emsp;&emsp;&emsp;&emsp;Available Commands",
    "------------------------------------------------------------------",
    "<span class='underline underline-offset-2 font-bold'>help</span>               - Show the available commands",
    "<span class='underline underline-offset-2 font-bold'>about</span>              - To know who is Vamsi Praveen",
    "<span class='underline underline-offset-2 font-bold'>skills</span>             - To know what skills Vamsi has..?",
    "<span class='underline underline-offset-2 font-bold'>education</span>          - To Know where Vamsi Study..?",
    "<span class='underline underline-offset-2 font-bold'>projects</span>           - To know what projects Vamsi did..?",
    "<span class='underline underline-offset-2 font-bold'>certifications</span>     - To know what certifications Vamsi did..?",
    "<span class='underline underline-offset-2 font-bold'>contact</span>            - To know how to contact Vamsi..?",
    "<span class='underline underline-offset-2 font-bold'>linkedin</span>           - To navigate to Vamsi's Linkedin Profile",
    "<span class='underline underline-offset-2 font-bold'>github</span>             - To navigate to Vamsi's Github Profile",
    "-------------------------------------------------------------------",
    "&emsp;&emsp;&emsp;&emsp;System commands",
    "------------------------------------------------------------------",
    "<span class='underline underline-offset-2 font-bold'>clear</span>              - To clear the terminal",
    "<span class='underline underline-offset-2 font-bold'>color-a</span>            - To change terminal color to green",
    "<span class='underline underline-offset-2 font-bold'>color-b</span>            - To change terminal color to white",
    "<span class='underline underline-offset-2 font-bold'>color-c</span>            - To change terminal color to yellow",
    "------------------------------------------------------------------",
  ];
  return content.join("<br/>");
}

function aboutMe() {
  const content = [
    "About Me - Vamsi Praveen",
    "I am FullStack Developer (MERN) from India.",
  ];
  return content.join("<br/>");
}

function skills() {
  const content = [
    "------------------------------------------------------------------",
    "&emsp;&emsp;&emsp;Skills I have 💪\n",
    "------------------------------------------------------------------",
    "<span class='font-bold'>Programming Languages</span>&emsp;&emsp;&emsp;- C, C++, Python, Java",
    "<span class='font-bold'>Scripting Languages</span>&emsp;&emsp;&emsp;&emsp;- Javascript, PHP",
    "<span class='font-bold'>Frameworks / Libraries</span>&emsp;&emsp;&nbsp;- ReactJs, NodeJs, ExpressJs",
    "<span class='font-bold'>Styling Frameworks</span>&emsp;&emsp;&emsp;&emsp;&nbsp;- TailwindCSS, Bootstrap",
    "<span class='font-bold'>Development Tools</span>&emsp;&emsp;&emsp;&emsp;&emsp;- Git, Docker",
    "<span class='font-bold'>Database Systems</span>&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;- MongoDB, MYSQL",
    "<span class='font-bold'>Operating Systems</span>&emsp;&emsp;&emsp;&emsp;&emsp;- Linux(Ubuntu, Redhat), Windows",
    "<span class='font-bold'>Cloud Technologies</span>&emsp;&emsp;&emsp;&emsp;&nbsp;- Aws (Intermediate)",
    "------------------------------------------------------------------",
  ];
  return content.join("<br/>");
}

function github() {
  window.open("https://github.com/Vamsi-Praveen", "_blank");
  return "Opening Github - <span class='underline underline-offset-3 text-white'>https://github.com/Vamsi-Praveen</span>";
}

function linkedin() {
  window.open("https://www.linkedin.com/in/vamsi-nakka", "_blank");
  return "Opening Linkedin - <span class='underline underline-offset-3 text-white'>https://www.linkedin.com/in/vamsi-nakka</span>";
}

function processCommand(command) {
  let outputContent = "";
  switch (command) {
    case "help":
      outputContent = helpMenu();
      break;
    case "clear":
      document.getElementById("output").innerHTML = "";
      return "";
    case "about":
      outputContent = aboutMe();
      break;
    case "skills":
      outputContent = skills();
      break;
    case "contact":
      outputContent = contact();
      break;
    case "linkedin":
      outputContent = linkedin();
      break;
    case "github":
      outputContent = github();
      break;
    case "project":
      outputContent = projects();
      break;
    case "education":
      outputContent = education();
      break;
    case "color-a":
      changeColors("bg-black/90", "text-green-300");
      return "Terminal color changed to green theme.";
    case "color-b":
      changeColors("bg-gray-300", "text-gray-900");
      return "Terminal color changed to light theme.";
    case "color-c":
      changeColors("bg-yellow-300", "text-yellow-900");
      return "Terminal color changed to yellow theme.";
    case "ls":
      outputContent = "secret.txt";
      break;
    case "cat secret.txt":
      outputContent =
        '🔐 Yahh!! You breaked the system 😉 - Secret Code is "NOTHING!!😎😅"';
      break;
    default:
      outputContent = `<span class="text-red-500 font-bold">Error:</span> ${command} command not recognized. Type <span class="underline underline-offset-2">help</span> for more.`;
      break;
  }
  return outputContent;
}

document.addEventListener("DOMContentLoaded", loadStoredColors);

const terminal = document.getElementById("terminal");
const output = document.getElementById("output");
const currentCommand = document.getElementById("currentCommand");
const commandInput = document.getElementById("commandInput");
const prompt = document.getElementById("prompt");

let historyCommandColor = "text-white";

document.addEventListener("click", () => {
  commandInput.focus();
});

const hostname = `vamsi@localhost:~$`;
prompt.innerHTML = `<span class="font-bold tracking-wide">${hostname}</span>`;

commandInput.addEventListener("input", (e) => {
  currentCommand.textContent = e.target.value;
});

commandInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    const command = commandInput.value;
    addToOutput(
      `<p class="mb-1"><span class="font-bold text-lg tracking-wide">${hostname}</span>&nbsp;<span class="text-white text-lg" id="prompt-command">${command}</span></p>`
    );
    if (command.trim() != "") {
      const outputText = processCommand(command);
      addToOutput(outputText);
      currentCommand.textContent = "";
      commandInput.value = "";
    }
  } else if (e.key == "Backspace") {
    currentCommand.textContent = currentCommand.textContent.slice(0, -1);
  }
});

function addToOutput(outputText) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerHTML = outputText.replace("text-white", historyCommandColor);
  div.appendChild(p);
  output.appendChild(div);
  setTimeout(() => {
    terminal.scrollTop = terminal.scrollHeight;
  }, 0);
}

function changeColors(bgColor, textColor) {
  document.body.className = `${bgColor} ${textColor} h-screen w-screen py-8 px-10 overflow-x-hidden`;
  setPersistentItem("bgColor", bgColor);
  setPersistentItem("textColor", textColor);
  const currentCommandEl = document.getElementById("currentCommand");
  if (currentCommandEl) {
    currentCommandEl.className = `ml-1 ${textColor} text-lg`;
  }
  const promptCommandEl = document.getElementById("prompt-command");
  if (promptCommandEl) {
    promptCommandEl.className = `${textColor} text-lg`;
  }
  const previousCommands = document.querySelectorAll("span#prompt-command");
  previousCommands.forEach((cmd) => {
    cmd.classList.forEach((cls) => {
      if (cls.startsWith("text-")) {
        cmd.classList.remove(cls);
      }
    });
    cmd.classList.add(textColor);
  });
  historyCommandColor = textColor;
}

function setPersistentItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getPersistentItem(key) {
  const output = JSON.parse(localStorage.getItem(key));
  return output;
}

function loadStoredColors() {
  const bgColor = getPersistentItem("bgColor") || "bg-black/90";
  const textColor = getPersistentItem("textColor") || "text-green-300";
  changeColors(bgColor, textColor);
}