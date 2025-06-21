const Locations = {
        Tehran: "Tehran",
      };
      const NAME = "Amirhossein";
      const URL = "https://github.com/amir78729";
      const CURRENT_LOCATION = Locations.Tehran;

      const logs = [
        {
          time: new Date("2025/6/13 02:23"),
          text: `Heard 💥s just now. I think it's really happening.`,
        },
        {
          time: new Date("2025/6/14 23:38"),
          text: `Still alive. The noises are terrifying, but I'm okay.`,
        },
        {
          time: new Date("2025/6/15 3:54"),
          text: `Alive. Exhausted.`,
        },
        {
          time: new Date("2025/6/16 16:34"),
          text: `Everything's quiet. The streets are empty. I'm still here.`,
        },
        {
          time: new Date("2025/6/17 6:32"),
          text: `Woke up to a blast 💥 way too close. It's 6 AM. Going back to sleep—somehow I'm fine.`,
        },
        {
          time: new Date("2025/6/18 1:32"),
          text: `I can hear 💥, but it's far away.`,
        },
        {
          time: new Date("2025/6/18 12:20"),
          text: `Slept better last night. Less noise than before.`,
        },
        {
          time: new Date("2025/6/18 20:34"),
          text: `Internet's barely working. Only local sites load.`,
        },
        {
          time: new Date("2025/6/19 12:54"),
          text: `Found a VPN that still works. Still safe, still waiting.`,
        },
        {
          time: new Date("2025/6/19 17:44"),
          text: `Hardly anyone left in the city. Just a few shadows moving. 🍂`,
        },
        {
          time: new Date("2025/6/19 21:05"),
          text: `The 💥 are back.`,
        },
        {
          time: new Date("2025/6/19 21:32"),
          text: `[Silence]`,
        },
        {
          time: new Date("2025/6/20 12:40"),
          text: `My sleep's ruined. No explosions last night, but I barely rested. So tired 🫩`,
        },
        {
          time: new Date("2025/6/20 15:03"),
          text: `Trying to share a VPN or proxy with my friends. The internet connection is very poor.`,
        },
        {
          time: new Date("2025/6/20 22:00"),
          text: `Based on news, an earthquake just happened, but I felt nothing. I'm safe.`,
        },
        {
          time: new Date("2025/6/20 22:05"),
          text: `Just messaged my friends in Semnan (the center of the earthquake's location), they're safe.`,
        },
        {
          time: new Date("2025/6/21 01:07"),
          text: `Nothing new. My internet just connected so I logged this message.`,
        },
        {
          time: new Date("2025/6/21 02:05"),
          text: `Chatting with my friends out of the country. It feels so nice and lovely. 🏮💚`,
        },
        {
          time: new Date("2025/6/21 03:14"),
          text: `From now on, for each update on this page, a message will be sent to <a href="https://t.me/theamirhosseinalibakhshi" target="_blank">this Telegram channel</a>.`,
        },
        {
          time: new Date("2025/6/21 03:46"),
          text: `The 💥 sounds are back again.`,
        },
        {
          time: new Date("2025/6/21 12:52"),
          text: `Just came here to say I'm fine. Also my friends in Esfahan, Karaj, Tehran and Semnan are okay.`,
        },
      ];

      const headerSection = document.getElementById("title");
      const logsSection = document.getElementById("logs");
      const locationSection = document.getElementById("location");

      headerSection.innerHTML = `<a id="avatar" aria-label="${NAME}" target="_blank" href="${URL}"><img src="./image.jpg" alt="${NAME}'s picture" /></a>'s Health Check`;
      locationSection.innerText = CURRENT_LOCATION;

      const dateOption = {
        timeZone: "Asia/Tehran",
        timeZoneName: "long",
      };

      logsSection.innerHTML = logs
        .reverse()
        .map(({ time, text, location }) => {
          const formattedDate =
            time.toDateString() +
            " " +
            time.toTimeString().split(" ")[0] +
            " (" +
            new Intl.DateTimeFormat("en-US", dateOption)
              .formatToParts(time)
              .find((part) => part.type === "timeZoneName").value +
            ")";

          return `<li><span class="date">${
            location || Locations.Tehran
          }</span><br><span class="date">${formattedDate}</span><br>${
            text || "I'm alive."
          }</li>`;
        })
        .join("");