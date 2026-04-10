export const projects = [
  {
    id: "linkvault",
    title: "LinkVault",
    subtitle: "Android Bookmark Manager",
    description:
      "A modern Android bookmark manager for saving, organizing, and searching web links with collections, metadata previews, and offline-first persistence.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Retrofit",
      "Hilt",
      "Coroutines",
      "Flow",
      "WorkManager"
    ],
    architecture: "Clean Architecture, MVVM, Offline-first",
    category: "Productivity",
    highlights: [
      "Save and organize bookmarks",
      "Collections and search",
      "Metadata preview integration",
      "Share intent support",
      "Chrome Custom Tabs support",
      "Room-backed local persistence"
    ],
    github: "https://github.com/moekyawaung-micro/linkvault",
    demo: "#",
    image: "/images/projects/linkvault.png",
    featured: true
  },
  {
    id: "news-reader-app",
    title: "News Reader App",
    subtitle: "Content & Article Reader",
    description:
      "A modern Android article reader application featuring API integration, local caching, search, and clean list-detail architecture.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Retrofit",
      "Room",
      "Coroutines",
      "Flow",
      "Hilt"
    ],
    architecture: "MVVM, Repository Pattern, Reactive UI State",
    category: "API",
    highlights: [
      "Remote content fetching",
      "Room local cache",
      "Search functionality",
      "List-detail navigation",
      "Modern Compose UI"
    ],
    github: "https://github.com/moekyawaung-micro/news-reader-app",
    demo: "#",
    image: "/images/projects/news-reader-app.png",
    featured: true
  },
  {
    id: "github-browser",
    title: "GitHub Repository Browser",
    subtitle: "Developer Resources App",
    description:
      "An Android application for searching repositories and browsing developer resources using a clean Compose-based UI.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Retrofit",
      "Hilt",
      "Coroutines",
      "Material 3"
    ],
    architecture: "Clean Architecture, MVVM",
    category: "Developer Tools",
    highlights: [
      "Repository search",
      "REST API integration",
      "Reusable UI components",
      "State-driven UI",
      "Developer-focused product design"
    ],
    github: "https://github.com/moekyawaung-micro/github-browser",
    demo: "#",
    image: "/images/projects/github-browser.png",
    featured: true
  },
  {
    id: "task-manager-app",
    title: "Task Manager App",
    subtitle: "Productivity Application",
    description:
      "A local-first Android productivity app for managing tasks, priorities, and daily workflows with clean architecture and reactive UI patterns.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Flow",
      "Hilt",
      "Material 3"
    ],
    architecture: "MVVM, Clean Architecture, Local-first",
    category: "Productivity",
    highlights: [
      "Task create/update/delete",
      "Filtering and sorting",
      "Room local persistence",
      "Clean UI state management",
      "Reusable Compose components"
    ],
    github: "https://github.com/moekyawaung-micro/task-manager-app",
    demo: "#",
    image: "/images/projects/task-manager-app.png",
    featured: true
  },
  {
    id: "android-architecture-sample",
    title: "Android Architecture Sample",
    subtitle: "Engineering Showcase",
    description:
      "A sample Android project demonstrating modularization, reusable patterns, testability, and modern mobile engineering practices.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Retrofit",
      "Hilt",
      "JUnit",
      "GitHub Actions"
    ],
    architecture: "Clean Architecture, Multi-module",
    category: "Architecture",
    highlights: [
      "Modular codebase",
      "Reusable design system",
      "Repository abstraction",
      "Testing support",
      "CI-ready setup"
    ],
    github: "https://github.com/moekyawaung-micro/android-architecture-sample",
    demo: "#",
    image: "/images/projects/android-architecture-sample.png",
    featured: false
  }
];
