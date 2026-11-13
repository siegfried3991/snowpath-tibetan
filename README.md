# Snowpath Tibetan / 雪徑藏語

A personal noncommercial Tibetan learning app with complete Traditional Chinese and English teaching interfaces. Open `index.html` through a web server, or visit the GitHub Pages deployment.

The conversation and reading goal requires more than lesson completion. This release adds 19 substantial modules in spoken sentence patterns, practical interaction, and supported literary reading. Each has source examples, Chinese/English explanation, an independent task, and grammar/comprehension questions. Advanced vocabulary, sustained listening, evidentiality, broader case/verb grammar, and longer unfamiliar texts remain a continuation plan, not an implemented fluency course.

## Included

- 36 lessons across six stages, all 30 consonants, four vowel marks, syllable construction.
- Lhasa-oriented isolated-letter IPA with aspiration and tone-register distinctions; Wylie always labelled as spelling.
- Recognition, reverse recall, syllable ordering, handwriting practice, review, local progress, XP and streaks.
- Cultural readings on Tsangyang Gyatso, the Gesar oral epic, and Buddhist vocabulary.
- Recording and playback on the hosted site. Optional OpenAI feedback through a private local Node server.
- Source and limitations page in both teaching languages.

## Private AI studio

GitHub Pages serves static files and cannot securely hold an API secret. `server.mjs` is a companion for the configured Mac; it is not a deployed cloud backend. Run `node server.mjs` (Node 22+ with `process.loadEnvFile`), then open `http://127.0.0.1:8765/?lang=en#speak`. The supplied Mac launcher does the same. The configured `.env.local` is ignored and must NEVER be uploaded.

The server binds only to 127.0.0.1, serves an explicit file allowlist, validates Host and Origin, requires a per-session token, limits body/audio length, and caps API requests at 12/hour and 60/day per server process. It does not store recordings. OpenAI requests use `store:false`; this is not a claim of zero provider retention. Audio feedback is experimental, not validated Lhasa pronunciation scoring. It incurs ordinary OpenAI API charges if account billing allows it.

The server uses `gpt-audio-1.5`, overridable via `OPENAI_AUDIO_MODEL`. Text-only questions and recorded WAV input are supported. Do not expose the companion on the internet without adding proper authentication, persistent quotas, and secure deployment.

## Content limits

This prototype has not been reviewed by a qualified Lhasa Tibetan teacher. Letter IPA is simplified and not a full model of connected speech. Forty bundled PCM WAV recordings cover 30 individual consonants, eight rows, the complete alphabet, and four vowels. Human source recordings are from MSU Basic Tibetan (CC BY-NC 4.0), with dialect not independently verified as native Lhasa. See AUDIO-LICENSE.md. Playback loads bundled files from the same site, using a PCM Web Audio player plus a system-player/download fallback. It no longer relies on an external media host. No fabricated native-speaker audio or accent scores are provided.

Historical Tibetan poetry is distinguished from original lesson glosses. The Gesar reading is an original teaching summary, not an alleged excerpt. There is no religious participation requirement. Source acknowledgements are embedded in the app. New study prose is original; historical and third-party materials retain their own rights.

## Validation

Run `node --check app.js`, `node --check content.js`, `node --check server.mjs`, and `node verify.mjs`. Browser checks cover the two language interfaces, lessons and feedback, syllable builder, cultural readings, progress persistence and mobile layout. API availability and billing are separately checked.

No build, install, tracking, account registration or database is required. Progress is per browser origin; use export/import to move it. Not affiliated with Duolingo.
