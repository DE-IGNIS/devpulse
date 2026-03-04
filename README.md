# DevPulse

![npm version](https://img.shields.io/npm/v/@matrixmind/devpulse)
![npm downloads](https://img.shields.io/npm/dw/@matrixmind/devpulse)
![license](https://img.shields.io/npm/l/@matrixmind/devpulse)
![GitHub repo size](https://img.shields.io/github/repo-size/DE-IGNIS/devpulse)

A lightweight Node.js CLI tool for logging development sessions, generating weekly summaries, and tracking what you've been working on — directly from your terminal.

---

## Features

- Log development sessions with project name and hours worked
- Generate automatic 7-day summaries
- View complete session history
- Clean and simple CLI experience

---

## Installation

### Install globally via npm

```bash
npm install -g @matrixmind/devpulse
```

### Or clone and link locally (for development)

```bash
git clone https://github.com/DE-IGNIS/devpulse.git
cd devpulse
npm install
npm link
```

---

##  Commands

### `devpulse log`

Save a new development session.

```bash
devpulse log "Your log message" --project "Project Name" --hours 3
```

**Example:**

```bash
devpulse log "Developing dashboard for LegalAI" --project "LegalAI" --hours 3
```

**Output:**

```
✅ Session logged!
   Project : LegalAI
   Date    : 2026-03-02T15:30:05.766Z
   Notes   : Developing dashboard for LegalAI
   Hours   : 3
```

---

### `devpulse summary`

Generate a summary of all logs from the past 7 days.

```bash
devpulse summary
```

This aggregates your recent session logs and provides a concise activity digest — ideal for standups, retrospectives, or weekly reviews.

---

### `devpulse list`

Display all saved session logs.

```bash
devpulse list
```

Lists every recorded entry, sorted by date.

---

## Requirements

- Node.js v18 or higher
- npm v7 or higher

---
