# 🛠️ DevPulse

A lightweight Node.js CLI tool for logging your dev sessions, generating summaries, and keeping track of what you've been working on.

---

## Installation

```bash
npm install -g devpulse
```

Or clone and link locally:

```bash
git clone https://github.com/your-username/devpulse.git
cd devpulse
npm install
npm link
```

---

## Commands

### `devpulse log`

Save a new dev session log.

```bash
devpulse log
```

command : devpulse log "Developing dashboard for LegalAI" --project LegalAI --hours 3
output : 

✅ Session logged!
   Project : LegalAI
   Date   : 2026-03-02T15:30:05.766Z
   Notes   : Developing dashboard for LegalAI
   Hours   : 3


---

### `devpulse summary`

Generate a summary of all logs from the **past 7 days**.

```bash
devpulse summary
```

Aggregates your recent session logs and outputs a digest of your activity over the last week — great for standups, retrospectives, or just staying on top of your work.

---

### `devpulse list`

Display all saved logs.

```bash
devpulse list
```

Lists every log entry you've recorded, sorted by date.

---

## Requirements

- [Node.js](https://nodejs.org/) v16 or higher
- npm v7 or higher

---

## Contributing

Pull requests are welcome! Please open an issue first to discuss any major changes.

---

## License

[MIT](LICENSE)