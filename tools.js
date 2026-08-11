const CATEGORY_ORDER = [
  'AI',
  'Desktop-Browsers',
  'Android-Browsers',
  'Productivity',
  'Resume Builder',
  'File & Office',
  'Media & Creative',
  'Music & Audio',
  'Networking & Remote',
  'Security & Privacy',
  'Converters & Web Tools',
  'Windows Tweaks',
  'Entertainment',
  'Learning & Reference',
  'Developer Tools',
  'Design & Diagramming',
  'Writing & Publishing',
  'System Monitoring',
];

const TOOLS = [

  // ── AI ────────────────────────────────────────────────────────────────────
  { cat: 'AI', name: 'Mistral',     desc: 'Best Academic AI. Sharp reasoning, technical writing, and research.', recommended: true, url: 'https://chat.mistral.ai/chat' },

  { cat: 'AI', name: 'NotebookLM',  desc: 'Once you learn how to use it, You are never going back. Google AI for analyzing and chatting with your own documents.', recommended: true, url: 'https://notebooklm.google/' },

  { cat: 'AI', name: 'Gemini',      desc: 'Multi-modal research assitant. Excellent for document analysis.', url: 'https://gemini.google.com/app' },

  { cat: 'AI', name: 'Claude',      desc: 'Excellent for long-form writing, coding and analysis.', recommended: true, url: 'https://claude.ai/' },

  { cat: 'AI', name: 'ChatGPT',     desc: 'There is no other AI that performs this BAD.', notRecommended: true, url: 'https://chatgpt.com/' },

  { cat: 'AI', name: 'Z AI',        desc: 'AI Presentation Maker & Coding Assistant. Fast at scaffolding slides and generating boilerplate code.', url: 'https://chat.z.ai/' },

  { cat: 'AI', name: 'Perplexity',  desc: 'Since it has launched, the quality of responses has degraded ever since. I will not recommend it at any point.', notRecommended: true, url: 'https://www.perplexity.ai/' },

  { cat: 'AI', name: 'HuggingChat', desc: 'Open-source AI chat frontend for HuggingFace models.', url: 'https://huggingface.co/chat' },

  { cat: 'AI', name: 'Jan.ai',      desc: 'Run LLMs locally on your machine. Privacy-first, offline.', url: 'https://jan.ai/' },

  { cat: 'AI', name: 'LM Studio',   desc: 'Discover, download, and run local LLMs on Windows/Mac/Linux.', url: 'https://lmstudio.ai/' },

  { cat: 'AI', name: 'Ollama',      desc: 'Run large language models locally via CLI. Fast and clean.', url: 'https://ollama.com/' },

  { cat: 'AI', name: 'You.com',     desc: 'I used to use it because I got annoyed from perplexity.', url: 'https://you.com/search' },



  // ── Desktop-Browsers ──────────────────────────────────────────────────────
  { cat: 'Desktop-Browsers', name: 'Helium Browser', desc: 'Minimal, fast, and beautifully clean browser. Ublock Origin Pre-Installed.', recommended: true, url: 'https://helium.computer/' },

  { cat: 'Desktop-Browsers', name: 'Zen Browser', desc: 'Privacy-focused Firefox fork with elegant sidebar and tab management. Just install Ublock Origin.', recommended: true, url: 'https://zen-browser.app/' },

  { cat: 'Desktop-Browsers', name: 'Firefox', desc: 'The gold standard open-source browser.', recommended: true, url: 'https://www.firefox.com/' },

  { cat: 'Desktop-Browsers', name: 'LibreWolf', desc: 'Hardened Firefox fork. Maximum privacy out of the box.', recommended: true, url: 'https://librewolf.net/' },

  { cat: 'Desktop-Browsers', name: 'Brave Browser', desc: 'Clunky and laggy because of its crypto bullshit.', notRecommended: true, url: 'https://brave.com/' },

  { cat: 'Desktop-Browsers', name: 'Floorp', desc: 'Firefox fork focused on privacy and heavy customization.', url: 'https://floorp.app/' },

  { cat: 'Desktop-Browsers', name: 'Vivaldi', desc: 'Extremely feature-rich browser for power users. Tab stacking and more.', url: 'https://vivaldi.com/' },

  { cat: 'Desktop-Browsers', name: 'Thorium', desc: 'The developer has been into some controversies, so its not really a good option.', notRecommended: true, url: 'https://thorium.rocks/' },



  // ── Android-Browsers ──────────────────────────────────────────────────────
  { cat: 'Android-Browsers', name: 'Firefox', desc: 'Browser with the best ad blocking. After installing, make sure to go to extensions and add uBlock Origin and enable it in private browsing mode.', recommended: true, url: 'https://www.firefox.com/en-US/' },

  { cat: 'Android-Browsers', name: 'Cromite', desc: 'Bromite successor. NO LONGER SUPPORTED. Chromium with built-in ad blocking and Extention support.', notRecommended: true, url: 'https://github.com/uazo/cromite/' },

  { cat: 'Android-Browsers', name: 'Mull', desc: 'Privacy-hardened Firefox fork for Android. No telemetry.', recommended: true, url: 'https://f-droid.org/packages/org.mozilla.fennec_fdroid/' },

  { cat: 'Android-Browsers', name: 'Brave Browser', desc: 'Built-in ad blocker, fast, and private on mobile. BUT you will have to tur off alot of things before you can use it properly', notRecommended: true, url: 'https://brave.com/' },

  { cat: 'Android-Browsers', name: 'Edge Browser', desc: 'Chromium-based with desktop extension support on Android. Not Privacy Friendly', notRecommended: true, url: 'https://www.microsoft.com/en-us/edge/' },

  { cat: 'Android-Browsers', name: 'Via Browser', desc: 'Tiny, fast, and highly customizable Android browser.', notRecommended: true, url: 'https://viabrowser.com/' },

  { cat: 'Android-Browsers', name: 'DuckDuckGo Browser', desc: 'Simple privacy-first browser with tracker blocking.', url: 'https://duckduckgo.com/app' },



  // ── Productivity ──────────────────────────────────────────────────────────
  { cat: 'Productivity', name: 'Libre Office', desc: 'LibreOffice is a powerful, completely free, and privacy-first office suite that delivers a lightweight alternative to Microsoft Office.', recommended: true, url: 'https://www.libreoffice.org/' },

  { cat: 'Productivity', name: 'Only Office', desc: 'A mirrored Alternative to Microsoft-Office. It mimics Microsoft Office’s interface while offering native compatibility.', recommended: true, url: 'https://www.onlyoffice.com/' },

  { cat: 'Productivity', name: 'Albert', desc: 'Fast application launcher for Linux. Plugin-based.', url: 'https://albertlauncher.github.io/' },

  { cat: 'Productivity', name: 'Raycast', desc: 'Supercharged launcher for macOS. Extensions for everything.', url: 'https://www.raycast.com/' },

  { cat: 'Productivity', name: 'Super Productivity', desc: 'Todo list and time tracker with Jira/GitHub sync. Offline-first.', url: 'https://superproductivity.com/' },

  { cat: 'Productivity', name: 'Obsidian', desc: 'Markdown-based knowledge base. Local-first, plugin-rich.', url: 'https://obsidian.md/' },

  { cat: 'Productivity', name: 'Logseq', desc: 'Open-source outliner and knowledge graph. Local or self-hosted.', url: 'https://logseq.com/' },

  { cat: 'Productivity', name: 'Notion', desc: 'All-in-one workspace for notes, databases, and project management.', url: 'https://www.notion.so/' },

  { cat: 'Productivity', name: 'Excalidraw', desc: 'Virtual whiteboard for hand-drawn diagrams. Collaborative.', recommended: true, url: 'https://excalidraw.com/' },

  { cat: 'Productivity', name: 'TinyTask', desc: 'Tiny portable macro recorder for Windows.', url: 'https://www.tinytask.net/' },

  { cat: 'Productivity', name: 'AutoHotkey', desc: 'Windows scripting language for automation and hotkeys.', url: 'https://www.autohotkey.com/' },

  { cat: 'Productivity', name: 'Espanso', desc: 'Cross-platform text expander. Type shortcuts, expand to full text.', url: 'https://espanso.org/' },

  { cat: 'Productivity', name: 'Google Keep', desc: 'Lightweight notes and checklists. Syncs across devices.', url: 'https://keep.google.com/' },

  { cat: 'Productivity', name: 'Joplin', desc: 'Open-source note-taking with encryption and sync options.', url: 'https://joplinapp.org/' },

  { cat: 'Productivity', name: 'StandardNotes', desc: 'End-to-end encrypted note app. Minimal and private.', recommended: true, url: 'https://standardnotes.com/' },

  { cat: 'Productivity', name: 'Cryptee', desc: 'Encrypted private documents and photos. Zero-knowledge.', recommended: true, url: 'https://crypt.ee/' },

  { cat: 'Productivity', name: 'CopyQ', desc: 'Cross-platform clipboard manager with scripting support.', url: 'https://hluk.github.io/CopyQ/' },

  { cat: 'Productivity', name: 'Pomotroid', desc: 'Simple customizable Pomodoro timer.', url: 'https://github.com/Splode/pomotroid' },

  { cat: 'Productivity', name: 'ActivityWatch', desc: 'Privacy-first automatic time tracker. Tracks app usage.', url: 'https://activitywatch.net/' },

  { cat: 'Productivity', name: 'Stretchly', desc: 'Break reminder app. Encourages healthy work intervals.', url: 'https://hovancik.net/stretchly/' },




  // ── Resume Builder ────────────────────────────────────────────────────────
  { cat: 'Resume Builder', name: 'Reactive Resume', desc: 'Free, open-source resume builder. No watermarks, exports to PDF.', recommended: true, url: 'https://rxresu.me/' },

  { cat: 'Resume Builder', name: 'FlowCV', desc: 'Clean resume builder with ATS-friendly templates.', url: 'https://flowcv.com/' },

  { cat: 'Resume Builder', name: 'Resume.io', desc: 'Guided resume builder with templates.', url: 'https://resume.io/' },

  { cat: 'Resume Builder', name: 'Open Resume', desc: 'Design is very old. Free open-source resume builder. Privacy-focused, runs locally.', notRecommended: true, url: 'https://www.open-resume.com/' },

  { cat: 'Resume Builder', name: 'Canva Resume', desc: 'Drag-and-drop visual resume builder with templates.', url: 'https://www.canva.com/resumes/' },

  { cat: 'Resume Builder', name: 'Jsonresume', desc: 'JSON-based open resume standard. Can be difficult to use. Convert to any format.', notRecommended: true, url: 'https://jsonresume.org/' },

  { cat: 'Resume Builder', name: 'Overleaf', desc: 'LaTeX-based resume editor in the browser. Academic-grade.', url: 'https://www.overleaf.com/' },

  { cat: 'Resume Builder', name: 'Kick Resume', desc: 'Resume Builder (AI Assisted).', url: 'https://www.kickresume.com/' },

  { cat: 'Resume Builder', name: 'Rezi AI', desc: 'AI Resume Builder.', url: 'https://www.rezi.ai/' },



  // ── File & Office ─────────────────────────────────────────────────────────
  { cat: 'File & Office', name: 'LibreOffice', desc: 'Full-featured open-source office suite. Best MS Office alternative.', recommended: true, url: 'https://www.libreoffice.org/' },

  { cat: 'File & Office', name: 'OnlyOffice', desc: 'Office suite with excellent .docx/.xlsx/.pptx compatibility.', recommended: true, url: 'https://www.onlyoffice.com/' },

  { cat: 'File & Office', name: 'Sumatra PDF', desc: 'Lightweight, instant PDF and ebook reader. No bloat. (Windows Only)', recommended: true, url: 'https://www.sumatrapdfreader.org' },

  { cat: 'File & Office', name: 'Okular', desc: 'Feature-rich PDF and ebook reader by KDE.', url: 'https://okular.kde.org/' },

  { cat: 'File & Office', name: 'NanaZip', desc: 'Modern archive manager forked from 7-Zip. Windows 11 design.', recommended: true, url: 'https://github.com/M2Team/NanaZip' },

  { cat: 'File & Office', name: 'PeaZip', desc: 'Archive manager supporting 200+ formats. Open-source.', url: 'https://peazip.github.io/' },

  { cat: 'File & Office', name: 'QuickLook', desc: 'Spacebar preview files without opening apps. Windows.', url: 'https://github.com/QL-Win/QuickLook' },

  { cat: 'File & Office', name: 'N-File', desc: 'Simple FAST File Manager. (Android Only)', url: 'https://github.com/Senzme/NFile' },

  { cat: 'File & Office', name: 'Double Commander', desc: 'Cross-platform two-panel file manager.', url: 'https://doublecmd.sourceforge.io/' },

  { cat: 'File & Office', name: 'FreeOffice', desc: 'Lightweight, fast office suite. Free for personal use.', url: 'https://www.freeoffice.com/' },

  { cat: 'File & Office', name: 'Calibre', desc: 'Ebook manager, editor, and converter. Supports all formats.', recommended: true, url: 'https://calibre-ebook.com/' },

  { cat: 'File & Office', name: 'HomeBackupRestore', desc: 'Simple home directory backup and restore tool.', url: 'https://github.com/osmanonurkoc/home_backup_restore' },

  { cat: 'File & Office', name: 'FreeFileSync', desc: 'Folder comparison and synchronization tool.', url: 'https://freefilesync.org/' },

  { cat: 'File & Office', name: 'Everything', desc: 'Instant file search for Windows. Searches entire drive in milliseconds.', recommended: true, url: 'https://www.voidtools.com/' },



  // ── Media & Creative ──────────────────────────────────────────────────────
  { cat: 'Media & Creative', name: 'GIMP', desc: 'Powerful open-source image editor. Full-featured Photoshop alternative.', recommended: true, url: 'https://www.gimp.org' },

  { cat: 'Media & Creative', name: 'Krita', desc: 'Professional digital painting and illustration software.', recommended: true, url: 'https://krita.org/' },

  { cat: 'Media & Creative', name: 'Inkscape', desc: 'Open-source vector graphics editor. SVG-based.', recommended: true, url: 'https://inkscape.org/' },

  { cat: 'Media & Creative', name: 'Photopea', desc: 'Advanced photo editor in the browser. Opens PSD files.', recommended: true, url: 'https://www.photopea.com/' },

  { cat: 'Media & Creative', name: 'OBS Studio', desc: 'Industry-standard free screen recorder and live streamer.', recommended: true, url: 'https://obsproject.com/' },

  { cat: 'Media & Creative', name: 'Local Send', desc: 'Free No-Ads File Sharing across platform.', recommended: true, url: 'https://localsend.org/' },

  { cat: 'Media & Creative', name: 'Flameshot', desc: 'Open-source screenshot for Linux/Windows.', url: 'https://flameshot.org/' },

  { cat: 'Media & Creative', name: 'DaVinci Resolve', desc: 'Professional video editing and color grading. Free version is exceptional.', recommended: true, url: 'https://www.blackmagicdesign.com/products/davinciresolve' },

  { cat: 'Media & Creative', name: 'Kdenlive', desc: 'Open-source video editor. Multi-track, cross-platform.', recommended: true, url: 'https://kdenlive.org/' },

  { cat: 'Media & Creative', name: 'Shotcut', desc: 'Free, open-source video editor with native timeline editing.', url: 'https://shotcut.org/' },

  { cat: 'Media & Creative', name: 'HandBrake', desc: 'Open-source video transcoder. Compress and convert video files.', url: 'https://handbrake.fr/' },

  { cat: 'Media & Creative', name: 'PhotoGIMP', desc: 'GIMP patch for a Photoshop-like layout and keyboard shortcuts.', url: 'https://github.com/Diolinux/PhotoGIMP' },

  { cat: 'Media & Creative', name: 'Jitter', desc: 'Motion design for animated UI and videos. Drag-and-drop.', url: 'https://jitter.video/' },

  { cat: 'Media & Creative', name: 'Canva', desc: 'Easy graphic design. Templates for everything.', recommended: true, url: 'https://www.canva.com/' },

  { cat: 'Media & Creative', name: 'Figma', desc: 'Collaborative UI/UX design tool. Industry standard.', url: 'https://www.figma.com/' },

  { cat: 'Media & Creative', name: 'Penpot', desc: 'Open-source Figma alternative. Self-hostable.', url: 'https://penpot.app/' },

  { cat: 'Media & Creative', name: 'Blender', desc: 'Industry-grade open-source 3D creation suite. Modeling to rendering.', recommended: true, url: 'https://www.blender.org/' },

  { cat: 'Media & Creative', name: 'Audacity', desc: 'Free cross-platform audio editor and recorder. Reliable workhorse.', recommended: true, url: 'https://www.audacityteam.org/' },



  // ── Music & Audio ─────────────────────────────────────────────────────────
  { cat: 'Music & Audio', name: 'Audacity', desc: 'Free cross-platform audio editor and recorder. Reliable workhorse.', recommended: true, url: 'https://www.audacityteam.org/' },

  { cat: 'Music & Audio', name: 'Metrolist', desc: 'Music Without ads.', recommended: true, url: 'https://metrolist.cc/' },

  { cat: 'Music & Audio', name: 'Spotube', desc: 'Open-source Spotify client using YouTube as backend. No ads.', recommended: true, url: 'https://spotube.netlify.app/' },

  { cat: 'Music & Audio', name: 'Nora', desc: 'Play your offline music. Beautiful local music player for Windows.', recommended: true, url: 'https://noramusic.netlify.app/' },

  { cat: 'Music & Audio', name: 'LMMS', desc: 'Open-source DAW for music production. Beat and melody creation.', url: 'https://lmms.io/' },

  { cat: 'Music & Audio', name: 'Ardour', desc: 'Professional open-source DAW. Multi-track recording and mixing.', url: 'https://ardour.org/' },

  { cat: 'Music & Audio', name: 'MusicBrainz Picard', desc: 'Open-source music tagger using acoustic fingerprinting.', url: 'https://picard.musicbrainz.org/' },

  { cat: 'Music & Audio', name: 'fre:ac', desc: 'Free audio converter and CD ripper. Supports many formats.', url: 'https://www.freac.org/' },

  { cat: 'Music & Audio', name: 'Amberol', desc: 'Simple, beautiful music player for GNOME/Linux.', url: 'https://apps.gnome.org/Amberol/' },

  { cat: 'Music & Audio', name: 'MusicPod', desc: 'Open-source music and podcast player. Cross-platform.', url: 'https://github.com/ubuntu-flutter-community/musicpod' },

  { cat: 'Music & Audio', name: 'YouTube Music', desc: "Google's music streaming service. Huge catalog.", url: 'https://music.youtube.com/' },

  { cat: 'Music & Audio', name: 'Volumey', desc: 'Per-app volume mixer for Windows. Control apps independently.', url: 'https://github.com/G some/Volumey' },

  { cat: 'Music & Audio', name: 'Discord Music Presence', desc: 'Show what you listen to on Discord.', url: 'https://musicpresence.app/' },

  { cat: 'Music & Audio', name: 'Sparkles', desc: 'Clean, elegant music player app. Minimal design.', url: 'https://getsparkle.net/' },



  // ── Networking & Remote ───────────────────────────────────────────────────
  { cat: 'Networking & Remote', name: 'RustDesk', desc: 'Open-source remote desktop. Self-hosted or relay, no subscription.', recommended: true, url: 'https://rustdesk.com' },

  { cat: 'Networking & Remote', name: 'Proton VPN', desc: 'Privacy-first VPN with free tier. Made by Proton.', recommended: true, url: 'https://protonvpn.com/' },

  { cat: 'Networking & Remote', name: 'LocalSend', desc: 'Share files locally without internet. Cross-platform, no account.', recommended: true, url: 'https://localsend.org' },

  { cat: 'Networking & Remote', name: 'Syncthing', desc: 'Continuous file sync between your devices. Peer-to-peer, encrypted.', recommended: true, url: 'https://syncthing.net' },

  { cat: 'Networking & Remote', name: 'Tailscale', desc: 'Zero-config VPN using WireGuard. Connects devices securely.', recommended: true, url: 'https://tailscale.com/' },

  { cat: 'Networking & Remote', name: 'Moonlight', desc: 'Open-source NVIDIA GameStream client. Low-latency game streaming.', recommended: true, url: 'https://moonlight-stream.org/' },

  { cat: 'Networking & Remote', name: 'Apollo', desc: 'Open-source GameStream hosting server. Self-hosted alternative.', url: 'https://github.com/ClassicOldSong/Apollo' },

  { cat: 'Networking & Remote', name: 'Privado VPN', desc: 'Controversial. 10GB free tier.', notRecommended: true, url: 'https://privadovpn.com/' },

  { cat: 'Networking & Remote', name: 'EZVIDIA', desc: 'Quickly switch NVIDIA display profiles. Streaming-friendly.', url: 'https://github.com/shamskv/EZVIDIA' },

  { cat: 'Networking & Remote', name: 'Angry IP Scanner', desc: 'Fast open-source network scanner.', url: 'https://angryip.org/' },

  { cat: 'Networking & Remote', name: 'Wireshark', desc: 'Industry-standard network protocol analyzer.', recommended: true, url: 'https://www.wireshark.org/' },

  { cat: 'Networking & Remote', name: 'Handy', desc: 'Remote access and computer management from anywhere. Simple to set up.', url: 'https://handy.computer/' },




  // ── Security & Privacy ────────────────────────────────────────────────────
  { cat: 'Security & Privacy', name: 'Ublock Origin', desc: 'THE BEST Adblocker.', recommended: true, url: 'https://github.com/gorhill/uBlock#ublock-origin-ubo' },

  { cat: 'Security & Privacy', name: 'Bitwarden', desc: 'Open-source password manager. End-to-end encrypted, free tier complete.', recommended: true, url: 'https://bitwarden.com/' },

  { cat: 'Security & Privacy', name: 'ProtonMail', desc: 'End-to-end encrypted email. Zero-access encryption.', recommended: true, url: 'https://proton.me/mail' },

  { cat: 'Security & Privacy', name: 'Tutanota', desc: 'Open-source encrypted email. Calendar included.', recommended: true, url: 'https://tuta.com/' },

  { cat: 'Security & Privacy', name: 'SimpleLogin', desc: 'Email alias service. Protect your real email address.', recommended: true, url: 'https://simplelogin.io/' },

  { cat: 'Security & Privacy', name: 'KeePassXC', desc: 'Offline password manager. Local vault, no cloud needed.', url: 'https://keepassxc.org/' },

  { cat: 'Security & Privacy', name: 'Virus Total', desc: 'Anti-malware scanner for Web. Free scan tier.', url: 'https://www.virustotal.com/gui/home/upload/' },

  { cat: 'Security & Privacy', name: 'ClamAV', desc: 'Open-source antivirus engine. Great for Linux servers.', url: 'https://www.clamav.net/' },

  { cat: 'Security & Privacy', name: 'Privacy Badger', desc: 'EFF browser extension that learns to block invisible trackers.', recommended: true, url: 'https://privacybadger.org/' },

  { cat: 'Security & Privacy', name: 'VeraCrypt', desc: 'Open-source disk encryption. Successor to TrueCrypt.', url: 'https://www.veracrypt.fr/' },

  { cat: 'Security & Privacy', name: 'Portmaster', desc: 'Privacy firewall for your device. Blocks trackers app-level.', url: 'https://safing.io/' },

  { cat: 'Security & Privacy', name: 'Ente Auth', desc: 'Cross-platform 2FA app with cloud backup.', recommended: true, url: 'https://ente.com/auth/' },

  { cat: 'Security & Privacy', name: 'Aegis Authenticator', desc: 'Open-source 2FA authenticator for Android.', url: 'https://getaegis.app/' },

  { cat: 'Security & Privacy', name: 'Have I Been Pwned', desc: 'Check if your email was in a data breach.', url: 'https://haveibeenpwned.com/' },



  // ── Converters & Web Tools ────────────────────────────────────────────────
  { cat: 'Converters & Web Tools', name: 'Vert.sh', desc: 'Local file converter in the browser. No server upload, stays on device.', recommended: true, url: 'https://vert.sh/' },

  { cat: 'Converters & Web Tools', name: '123apps', desc: 'Browser-based file conversion suite. Audio, video, PDF, image.', url: 'https://123apps.com/' },

  { cat: 'Converters & Web Tools', name: 'Squoosh', desc: 'Google image compression tool. Client-side, no upload.', recommended: true, url: 'https://squoosh.app/' },

  { cat: 'Converters & Web Tools', name: 'PixelCut Upscaler', desc: 'AI image upscaler in the browser.', url: 'https://create.pixelcut.ai/upscaler' },

  { cat: 'Converters & Web Tools', name: 'Remove.bg', desc: 'Background removal tool. Fast and accurate.', url: 'https://www.remove.bg/' },

  { cat: 'Converters & Web Tools', name: 'Temp Mail', desc: 'Disposable temporary email addresses. Instant, no signup.', recommended: true, url: 'https://temp-mail.org/' },

  { cat: 'Converters & Web Tools', name: 'PineTools', desc: 'Collection of math, text, image, color utility tools.', recommended: true, url: 'https://pinetools.com/' },

  { cat: 'Converters & Web Tools', name: 'I2Text', desc: 'Complete Text related tools online.', url: 'https://www.i2text.com/' },

  { cat: 'Converters & Web Tools', name: 'QuillBot', desc: 'AI paraphrasing, grammar, and summarization tool.', recommended: true, url: 'https://quillbot.com/' },

  { cat: 'Converters & Web Tools', name: 'TinyWow', desc: 'Huge collection of free online file tools. PDF, image, video.', url: 'https://tinywow.com/' },

  { cat: 'Converters & Web Tools', name: 'iLovePDF', desc: 'PDF editing suite in the browser. Merge, compress, convert.', url: 'https://www.ilovepdf.com/' },

  { cat: 'Converters & Web Tools', name: 'CloudConvert', desc: 'File converter supporting 200+ formats. Cloud-based.', notRecommended: true, url: 'https://cloudconvert.com/' },

  { cat: 'Converters & Web Tools', name: 'Regex101', desc: 'Test and debug regular expressions. Supports multiple flavors.', recommended: true, url: 'https://regex101.com/' },

  { cat: 'Converters & Web Tools', name: 'Epoch Converter', desc: 'Convert Unix timestamps to human-readable dates.', url: 'https://www.epochconverter.com/' },

  { cat: 'Converters & Web Tools', name: 'Background Remover', desc: 'Remove image backgrounds online. Fast and accurate for most subjects.', url: 'https://quillbot.com/background-remover' },




  // ── Windows Tweaks ────────────────────────────────────────────────────────
  { cat: 'Windows Tweaks', name: 'WinToys', desc: 'All-in-one Windows management and tweaks. Clean modern UI.', recommended: true, url: 'https://www.microsoft.com/store/apps' },

  { cat: 'Windows Tweaks', name: 'CTT Windows Utility', desc: 'Open-source Windows optimizer and debloater. Windows itself can be very demanding even of decent-spec computers; this helps to reduce that bloat and give you a comforting experience.', recommended: true, url: 'https://github.com/christitustech/winutil' },

  { cat: 'Windows Tweaks', name: 'Windhawk', desc: 'Mod and customize Windows behavior. Community mods.', url: 'https://windhawk.net/' },

  { cat: 'Windows Tweaks', name: 'Ninite', desc: 'Create a custom app installer. Go to the website select apps you need, get yourself a single exe file that downloads and installs your favourite apps in one go', recommended: true, url: 'https://ninite.com/' },

  { cat: 'Windows Tweaks', name: 'PowerToys', desc: "Microsoft's power user utilities. FancyZones, Run, and more.", url: 'https://github.com/microsoft/PowerToys' },

  { cat: 'Windows Tweaks', name: 'Uninstallr', desc: 'Thorough app uninstaller. Catches leftover files and registry entries.', url: 'https://uninstallr.com/' },

  { cat: 'Windows Tweaks', name: 'Process Explorer', desc: 'Advanced task manager by Sysinternals. Deep process inspection.', recommended: true, url: 'https://learn.microsoft.com/en-us/sysinternals/' },

  { cat: 'Windows Tweaks', name: 'O&O ShutUp10++', desc: 'If you want privacy use Linux. Anti-spy tool for Windows 10/11. Disable telemetry easily.', notRecommended: true, url: 'https://www.oo-software.com/en/shutup10' },

  { cat: 'Windows Tweaks', name: 'NTLite', desc: 'Windows image customization and slimming tool.', url: 'https://www.ntlite.com/' },

  { cat: 'Windows Tweaks', name: 'ContextMenuManager', desc: 'Manage and clean up your right-click context menu.', url: 'https://github.com/stari67/ContextMenuManager' },




  // ── Entertainment ─────────────────────────────────────────────────────────
  { cat: 'Entertainment', name: 'YouTube', desc: "We all know what youtube is. A big pile of add platform. Once you use Freetube/Morphe OR Use adblocker in your browser, you will never use classic youtube ever.", url: 'https://www.youtube.com/' },

  { cat: 'Entertainment', name: 'Cineby', desc: 'Steam Everything.', recommended: true, url: 'https://www.cineby.at/' },

  { cat: 'Entertainment', name: 'FreeTube', desc: 'Ad-Free Open-source YouTube desktop client. Private viewing.', recommended: true, url: 'https://freetubeapp.io/' },

  { cat: 'Entertainment', name: 'Morphe', desc: 'Youtube and Youtube Music Ad blocking mod. You only learn it once and never look back to original youtube app. (Android-Only).', recommended: true, url: 'https://morphe.software/' }, 

  { cat: 'Entertainment', name: 'Mod-List', desc: 'Download your favourite movies series and anime. An adbloking browser is recommended such as Firefox with Ublock Origin or Brave', recommended: true, url: 'https://modlist.in/' }, 

  { cat: 'Entertainment', name: 'MPV', desc: 'Minimalist, powerful open-source media player. Scriptable.', recommended: true, url: 'https://mpv.io/' },

  { cat: 'Entertainment', name: 'VLC', desc: 'Open-source media player. Plays everything, everywhere.', recommended: true, url: 'https://www.videolan.org/vlc/' },

  { cat: 'Entertainment', name: 'Plex', desc: 'Personal media server. Organize and stream your library.', url: 'https://www.plex.tv/' },

  { cat: 'Entertainment', name: 'Jellyfin', desc: 'Open-source media server. Stream your own collection.', recommended: true, url: 'https://jellyfin.org/' },

  { cat: 'Entertainment', name: 'Steam', desc: 'Largest PC gaming platform. Frequent sales, huge library.', url: 'https://store.steampowered.com/' },

  { cat: 'Entertainment', name: 'Kodi', desc: 'Open-source home theater software. Plays and organizes media.', url: 'https://kodi.tv/' },

  { cat: 'Entertainment', name: 'Heroic Games Launcher', desc: 'Open-source Epic Games and GOG launcher for Linux/Windows.', url: 'https://heroicgameslauncher.com/' },

  { cat: 'Entertainment', name: 'Lutris', desc: 'Open gaming platform for Linux. Manages all game stores.', url: 'https://lutris.net/' },




  // ── Learning & Reference ──────────────────────────────────────────────────
  { cat: 'Learning & Reference', name: 'IndiaBIX', desc: 'Aptitude, reasoning, and exam preparation. Covers quantitative, verbal, and technical topics.', recommended: true, url: 'https://www.indiabix.com/' },

  { cat: 'Learning & Reference', name: 'Khan Academy', desc: 'Free world-class education for anyone. Math, science, and more.', recommended: true, url: 'https://www.khanacademy.org/' },

  { cat: 'Learning & Reference', name: 'MIT OpenCourseWare', desc: 'Free MIT course materials. Lectures, notes, assignments.', url: 'https://ocw.mit.edu/' },

  { cat: 'Learning & Reference', name: 'Coursera', desc: 'Online courses are there but the value of the certificates is ZERO.', notRecommended: true, url: 'https://www.coursera.org/' },

  { cat: 'Learning & Reference', name: 'freeCodeCamp', desc: 'Free coding curriculum. HTML, CSS, JS, Python, and more.', recommended: true, url: 'https://www.freecodecamp.org/' },

  { cat: 'Learning & Reference', name: 'The Odin Project', desc: 'Free open-source full-stack curriculum.', recommended: true, url: 'https://www.theodinproject.com/' },

  { cat: 'Learning & Reference', name: 'W3Schools', desc: 'Web development reference and tutorials. Beginner-friendly.', recommended: true, url: 'https://www.w3schools.com/' },

  { cat: 'Learning & Reference', name: 'MDN Web Docs', desc: 'Definitive reference for web technologies by Mozilla.', recommended: true, url: 'https://developer.mozilla.org/' },

  { cat: 'Learning & Reference', name: 'DevDocs', desc: 'Fast, searchable API documentation for 100+ languages/frameworks.', recommended: true, url: 'https://devdocs.io/' },

  { cat: 'Learning & Reference', name: 'Anki', desc: 'Open-source spaced repetition flashcard app. Best for memorization.', url: 'https://apps.ankiweb.net/' },

  { cat: 'Learning & Reference', name: 'Zotero', desc: 'Free, open-source reference manager for research.', recommended: true, url: 'https://www.zotero.org/' },

  { cat: 'Learning & Reference', name: 'Wolfram Alpha', desc: 'Computational knowledge engine. Math, science, data.', url: 'https://www.wolframalpha.com/' },

  { cat: 'Learning & Reference', name: 'Desmos', desc: 'Interactive graphing calculator in the browser.', recommended: true, url: 'https://www.desmos.com/' },



  // ── Developer Tools ───────────────────────────────────────────────────────
  { cat: 'Developer Tools', name: 'VS Code', desc: 'Most popular open-source code editor. Huge extension ecosystem.', recommended: true, url: 'https://code.visualstudio.com/' },

  { cat: 'Developer Tools', name: 'Neovim', desc: 'Hyperextensible modal text editor. Blazing fast with Lua config.', recommended: true, url: 'https://neovim.io/' },

  { cat: 'Developer Tools', name: 'Helix', desc: 'Post-modern modal text editor. Multiple selections, tree-sitter.', url: 'https://helix-editor.com/' },

  { cat: 'Developer Tools', name: 'Zed', desc: 'New high-performance code editor built in Rust.', recommended: true, url: 'https://zed.dev/' },

  { cat: 'Developer Tools', name: 'Kitty', desc: 'GPU-accelerated terminal emulator. Fast and feature-rich.', url: 'https://sw.kovidgoyal.net/kitty/' },

  { cat: 'Developer Tools', name: 'Alacritty', desc: 'Cross-platform GPU-accelerated terminal. Minimal and fast.', url: 'https://alacritty.org/' },

  { cat: 'Developer Tools', name: 'Hoppscotch', desc: 'Open-source Postman alternative. Fast, browser-based.', recommended: true, url: 'https://hoppscotch.io/' },

  { cat: 'Developer Tools', name: 'Insomnia', desc: 'Open-source API client. REST, GraphQL, gRPC.', url: 'https://insomnia.rest/' },

  { cat: 'Developer Tools', name: 'DBeaver', desc: 'Free, open-source database management tool.', url: 'https://dbeaver.io/' },

  { cat: 'Developer Tools', name: 'TablePlus', desc: 'Modern GUI for relational databases. MySQL, Postgres, SQLite.', url: 'https://tableplus.com/' },

  { cat: 'Developer Tools', name: 'GitHub Desktop', desc: 'Open-source GUI for GitHub. Simplifies Git workflows.', recommended: true, url: 'https://desktop.github.com/' },

  { cat: 'Developer Tools', name: 'Git', desc: 'Distributed version control system. Industry standard.', recommended: true, url: 'https://git-scm.com/' },

  { cat: 'Developer Tools', name: 'Lazygit', desc: 'Terminal UI for Git commands. Fast and keyboard-driven.', recommended: true, url: 'https://github.com/jesseduffield/lazygit' },

  { cat: 'Developer Tools', name: 'Meld', desc: 'Open-source visual diff and merge tool.', url: 'https://meldmerge.org/' },

  { cat: 'Developer Tools', name: 'Docker Desktop', desc: 'Container management GUI. Run isolated environments.', url: 'https://www.docker.com/products/docker-desktop/' },



  // ── Design & Diagramming ──────────────────────────────────────────────────
  { cat: 'Design & Diagramming', name: 'Excalidraw', desc: 'Virtual whiteboard for hand-drawn diagrams. Collaborative.', recommended: true, url: 'https://excalidraw.com/' },

  { cat: 'Design & Diagramming', name: 'Diagrams.net', desc: 'Free, open-source diagramming tool. Flowcharts and architecture.', recommended: true, url: 'https://app.diagrams.net/' },

  { cat: 'Design & Diagramming', name: 'Mermaid', desc: 'Diagrams from text in Markdown. Flowcharts, ER, Gantt.', recommended: true, url: 'https://mermaid.js.org/' },

  { cat: 'Design & Diagramming', name: 'Penpot', desc: 'Open-source Figma alternative. Browser-based, self-hostable.', recommended: true, url: 'https://penpot.app/' },

  { cat: 'Design & Diagramming', name: 'Miro', desc: 'Collaborative online whiteboard. Brainstorm and plan together.', url: 'https://miro.com/' },

  { cat: 'Design & Diagramming', name: 'Whimsical', desc: 'Fast wireframing, mind maps, and flowcharts in the browser.', url: 'https://whimsical.com/' },

  { cat: 'Design & Diagramming', name: 'PlantUML', desc: 'Text-based UML diagram generator. Integrates with editors.', url: 'https://plantuml.com/' },

  { cat: 'Design & Diagramming', name: 'Lucidchart', desc: 'Web-based diagramming and visual collaboration.', url: 'https://www.lucidchart.com/' },

  { cat: 'Design & Diagramming', name: 'Structurizr', desc: 'Software architecture diagrams as code. C4 model support.', url: 'https://structurizr.com/' },

  { cat: 'Design & Diagramming', name: 'Quint', desc: 'Minimal collaborative diagramming tool. Fast and clean.', url: 'https://quint.co/' },



  // ── Writing & Publishing ──────────────────────────────────────────────────
  { cat: 'Writing & Publishing', name: 'Ghostwriter', desc: 'Distraction-free Markdown editor for Linux and Windows. I write my blogs on these.', recommended: true, url: 'https://ghostwriter.kde.org/' },

  { cat: 'Writing & Publishing', name: 'Hugo', desc: 'Fastest static site generator. Write in Markdown, deploy anywhere.', recommended: true, url: 'https://gohugo.io/' },

  { cat: 'Writing & Publishing', name: 'Typora', desc: 'Minimal Markdown editor with live preview. Beautiful and clean.', url: 'https://typora.io/' },

  { cat: 'Writing & Publishing', name: 'Zettlr', desc: 'Academic Markdown editor with citation and reference support.', url: 'https://www.zettlr.com/' },

  { cat: 'Writing & Publishing', name: 'LanguageTool', desc: 'Open-source grammar and style checker. Supports 25+ languages.', recommended: true, url: 'https://languagetool.org/' },

  { cat: 'Writing & Publishing', name: 'Hemingway Editor', desc: 'Writing clarity tool. Highlights complex sentences and adverbs.', url: 'https://hemingwayapp.com/' },

  { cat: 'Writing & Publishing', name: 'ProWritingAid', desc: 'In-depth grammar and style analysis for writers.', url: 'https://prowritingaid.com/' },

  { cat: 'Writing & Publishing', name: 'Ulysses', desc: 'Premium Markdown writing app for macOS/iOS.', url: 'https://ulysses.app/' },

  { cat: 'Writing & Publishing', name: 'Write.as', desc: 'Minimalist, privacy-respecting blogging platform.', url: 'https://write.as/' },

  { cat: 'Writing & Publishing', name: 'Ghost', desc: 'Open-source publishing platform. Newsletter + blog combined.', url: 'https://ghost.org/' },



  // ── System Monitoring ─────────────────────────────────────────────────────
  { cat: 'System Monitoring', name: 'HWINFO', desc: 'In-depth hardware monitoring for Windows. Sensors and logging.', recommended: true, url: 'https://www.hwinfo.com/' },

  { cat: 'System Monitoring', name: 'MSI Afterburner', desc: 'GPU overclocking and monitoring. Overlay during gaming.', url: 'https://www.msi.com/Landing/afterburner' },

  { cat: 'System Monitoring', name: 'CPU-Z', desc: 'Detailed CPU, RAM, and motherboard information.', url: 'https://www.cpuid.com/softwares/cpu-z.html' },

  { cat: 'System Monitoring', name: 'GPU-Z', desc: 'Detailed GPU information and monitoring.', url: 'https://www.techpowerup.com/gpuz/' },

  { cat: 'System Monitoring', name: 'CrystalDiskInfo', desc: 'Hard drive health monitoring via S.M.A.R.T. data.', recommended: true, url: 'https://crystalmark.info/en/software/crystaldiskinfo/' },

  { cat: 'System Monitoring', name: 'Netdata', desc: 'Real-time performance monitoring. Web dashboard, open-source.', url: 'https://www.netdata.cloud/' },

  { cat: 'System Monitoring', name: 'Prometheus', desc: 'Open-source monitoring and alerting toolkit. Industry standard.', url: 'https://prometheus.io/' },

  { cat: 'System Monitoring', name: 'Grafana', desc: 'Open-source data visualization and monitoring dashboards.', url: 'https://grafana.com/' },

  { cat: 'System Monitoring', name: 'btop', desc: 'Beautiful resource monitor for Linux/macOS terminal.', recommended: true, url: 'https://github.com/aristocratos/btop' },

  { cat: 'System Monitoring', name: 'Radiograph', desc: 'Elegant hardware monitoring app for Windows.', url: 'https://apps.microsoft.com/detail/9nhr8l8q8kz2' },

  { cat: 'System Monitoring', name: 'CoreTemp', desc: 'Lightweight CPU temperature monitor for Windows.', url: 'https://www.alcpu.com/CoreTemp/' },

  { cat: 'System Monitoring', name: 'Glances', desc: 'Cross-platform system monitoring tool via terminal or web.', url: 'https://nicolargo.github.io/glances/' },

];
