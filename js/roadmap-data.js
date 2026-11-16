/**
 * Filehub - 9 Professional Developer Career Roadmaps
 * Production-ready, authentic curriculum data for B.Tech & Engineering students.
 * Absolutely NO placeholder content or lorem ipsum.
 */

const ROADMAPS_DATA = [
  {
    id: "software-developer",
    title: "Software Developer",
    category: "Application Engineering",
    thumbnail: "assets/icons/software-developer.svg",
    badge: "Most In-Demand",
    quickSummary: "Builds, tests, and maintains end-user computer software, desktop utilities, enterprise modules, and business workflows using robust coding principles.",
    distinction: "Focuses on delivering business features, clean code, algorithmic logic, and reliable software functionality compared to high-level infrastructure design.",
    coreSkills: ["Java / C++ / Python", "Data Structures & Algorithms", "Git & GitHub", "Object-Oriented Programming (OOP)", "Unit Testing (JUnit/PyTest)", "SQL & Relational DBs"],
    roadmapPhases: [
      {
        phase: "Phase 1: Computer Science & Algorithmic Foundations (Months 1-4)",
        details: "Master one primary programming language deeply (C++ or Java). Learn Object-Oriented Design patterns, memory management, and complete 150+ standard DSA questions on LeetCode/GeeksforGeeks covering arrays, hashing, trees, and graphs."
      },
      {
        phase: "Phase 2: Core Software Design & Databases (Months 5-8)",
        details: "Learn SQL schema design, normalization, transactions (ACID), and indexing in PostgreSQL/MySQL. Understand OS concepts (concurrency, threads, file I/O) and network fundamentals (TCP/IP, HTTP/HTTPS)."
      },
      {
        phase: "Phase 3: Production Code & Architecture (Months 9-12)",
        details: "Adopt Test-Driven Development (TDD), CI/CD workflows with GitHub Actions, clean architecture principles (SOLID, DRY), and build full-scale desktop or enterprise utility applications."
      },
      {
        phase: "Phase 4: Capstone Projects & Placement Prep (Months 13-16)",
        details: "Construct 2 enterprise-grade portfolio applications with automated test coverage >80%, prepare core CS subject interview topics (DBMS, OS, CN), and practice mock coding interviews."
      }
    ],
    projectIdeas: [
      "Enterprise Inventory & Billing Management Desktop Suite with SQLite and JavaFX/PyQt",
      "Multi-threaded File Sync & Deduplication Utility using C++ and POSIX threads",
      "Automated Code Quality & Security Linter CLI tool published on package registries"
    ],
    salaryInsights: "Entry Level (India): ₹6 - ₹14 LPA | Mid-Senior: ₹18 - ₹35+ LPA | US/Remote: $85,000 - $145,000+"
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    category: "Systems & Architecture",
    thumbnail: "assets/icons/software-engineer.svg",
    badge: "High Growth",
    quickSummary: "Applies systematic engineering methodologies, computer science theory, and architectural patterns to design scalable, fault-tolerant, high-performance systems.",
    distinction: "Focuses on systems architecture, distributed scale, reliability, observability, and trade-offs beyond just writing functional code.",
    coreSkills: ["Distributed Systems", "High & Low-Level System Design (HLD/LLD)", "Go / Java / Rust", "Kafka / RabbitMQ", "Docker & Kubernetes", "Microservices & gRPC"],
    roadmapPhases: [
      {
        phase: "Phase 1: Advanced Computing Foundations (Months 1-4)",
        details: "Deep dive into Operating Systems internals, distributed consensus algorithms (Raft/Paxos), memory layouts, and advanced algorithmic complexity analysis."
      },
      {
        phase: "Phase 2: Low-Level Design & Concurrency (Months 5-8)",
        details: "Master object-oriented design patterns (Factory, Observer, Strategy), concurrency primitives (mutexes, semaphores, goroutines), and schema migration strategies."
      },
      {
        phase: "Phase 3: High-Level System Architecture (Months 9-12)",
        details: "Design distributed systems handling millions of requests: horizontal partitioning (sharding), load balancing algorithms, caching hierarchies (Redis/Memcached), and event-driven streaming with Apache Kafka."
      },
      {
        phase: "Phase 4: Observability, Cloud & Production Readiness (Months 13-16)",
        details: "Deploy resilient microservices with Docker, Kubernetes, Prometheus, and Grafana. Focus on zero-downtime deployments, Chaos Engineering, and architectural interview cases."
      }
    ],
    projectIdeas: [
      "Distributed Key-Value Store with Raft consensus and Write-Ahead Logging (WAL)",
      "Real-time Distributed Rate Limiter & API Gateway with sliding window algorithms",
      "High-throughput Log Processing Engine streaming 100K msg/sec using Go and Kafka"
    ],
    salaryInsights: "Entry Level (India): ₹8 - ₹20 LPA | Tier-1 Tech: ₹24 - ₹48+ LPA | US/Remote: $110,000 - $185,000+"
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    category: "End-to-End Web Systems",
    thumbnail: "assets/icons/fullstack-developer.svg",
    badge: "Versatile",
    quickSummary: "Engineers both client-facing graphical user interfaces and server-side business logic, APIs, background jobs, and persistent database layers.",
    distinction: "Owns the complete product lifecycle from UI/UX and client state management down to database schemas and cloud deployments.",
    coreSkills: ["TypeScript / JavaScript", "React.js / Next.js", "Node.js / Express or Go", "PostgreSQL & Prisma/Drizzle", "REST & GraphQL", "Tailwind CSS & shadcn/ui"],
    roadmapPhases: [
      {
        phase: "Phase 1: Modern Web Foundations & TypeScript (Months 1-3)",
        details: "Master semantic HTML5, CSS Grid/Flexbox, responsive design, and core JavaScript (ES6+, async/await, closures). Transition to TypeScript for strict end-to-end typing."
      },
      {
        phase: "Phase 2: Frontend Engineering & UI Systems (Months 4-7)",
        details: "Build reactive interfaces with React and Next.js App Router. Learn component design systems with Tailwind CSS, shadcn/ui, state management (Zustand), and React Query for server state."
      },
      {
        phase: "Phase 3: Backend APIs & Database Modeling (Months 8-11)",
        details: "Architect REST and GraphQL APIs using Node.js/Express or NestJS. Model relational schemas with PostgreSQL, write optimized SQL queries, handle authentication (JWT/OAuth), and configure Redis caching."
      },
      {
        phase: "Phase 4: Full-Stack Integration & Production Cloud (Months 12-15)",
        details: "Implement server actions, optimistic UI updates, webhooks (Stripe payment integration), Docker containerization, and deploy scalable apps on AWS/Vercel with CI/CD pipelines."
      }
    ],
    projectIdeas: [
      "Collaborative Real-time Document Workspace with WebSocket syncing and CRDTs",
      "Multi-tenant SaaS E-commerce Platform with automated invoice generation and payment processing",
      "Developer Job Board with semantic search, resume parser, and applicant tracking system"
    ],
    salaryInsights: "Entry Level (India): ₹5 - ₹12 LPA | Mid-Senior: ₹16 - ₹32+ LPA | US/Remote: $90,000 - $150,000+"
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    category: "Client Experience & UI",
    thumbnail: "assets/icons/frontend-developer.svg",
    badge: "Creative & Technical",
    quickSummary: "Specializes in crafting responsive, accessible, interactive, and high-performance user interfaces that work seamlessly across devices and browsers.",
    distinction: "Focuses deeply on browser rendering performance, micro-interactions, accessibility (WCAG), state synchronization, and component design systems.",
    coreSkills: ["Modern JavaScript & TypeScript", "React.js / Vue.js", "Tailwind CSS & CSS Architecture", "Core Web Vitals & Lighthouse", "Framer Motion & Web Animations", "Web Accessibility (a11y)"],
    roadmapPhases: [
      {
        phase: "Phase 1: Semantic Web & Layout Mastery (Months 1-3)",
        details: "Master semantic HTML, CSS Grid, Flexbox, responsive typography, media queries, and accessible DOM structures compliant with WCAG 2.1 AA standards."
      },
      {
        phase: "Phase 2: Advanced JavaScript & Reactive Frameworks (Months 4-6)",
        details: "Understand browser event loops, DOM rendering engine lifecycles, and modern JavaScript. Learn React, hooks, component composition, and virtual DOM reconciliation."
      },
      {
        phase: "Phase 3: State Management & Design Systems (Months 7-9)",
        details: "Build reusable, accessible component libraries using Tailwind CSS and Radix UI primitives. Implement client-side caching with TanStack Query and state handling with Zustand."
      },
      {
        phase: "Phase 4: Web Performance Optimization & Animations (Months 10-12)",
        details: "Master Core Web Vitals (LCP, FID/INP, CLS). Optimize assets (WebP/AVIF, lazy-loading), implement smooth micro-animations using Framer Motion, and setup automated testing with Jest and Cypress."
      }
    ],
    projectIdeas: [
      "High-Performance Analytics Dashboard with interactive charts and dark/light mode",
      "Accessible Design System & Component Library published to NPM with Storybook",
      "Browser-based Code Editor and Markdown Live Previewer with offline PWA support"
    ],
    salaryInsights: "Entry Level (India): ₹4.5 - ₹11 LPA | Mid-Senior: ₹14 - ₹28+ LPA | US/Remote: $80,000 - $135,000+"
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    category: "Server Logic & Data",
    thumbnail: "assets/icons/backend-developer.svg",
    badge: "Data Heavy",
    quickSummary: "Builds resilient server architectures, high-performance database engines, secure authentication layers, and reliable APIs that power modern applications.",
    distinction: "Specializes in business logic processing, database query optimization, security, background job queues, and cloud server scalability.",
    coreSkills: ["Node.js / Python / Go / Java", "PostgreSQL & MongoDB", "Redis Caching", "REST & gRPC APIs", "Docker & Linux CLI", "Authentication & Security (OAuth2/JWT)"],
    roadmapPhases: [
      {
        phase: "Phase 1: Backend Language & Networking Protocols (Months 1-3)",
        details: "Master one backend language (Node.js/Go/Python/Java). Learn HTTP methods, headers, status codes, WebSockets, gRPC, and command-line Linux server administration."
      },
      {
        phase: "Phase 2: Relational & NoSQL Database Engineering (Months 4-7)",
        details: "Learn SQL deeply: complex joins, indexing strategies (B-Trees), query plans (EXPLAIN ANALYZE), transactions, and NoSQL models (document stores, key-value caches)."
      },
      {
        phase: "Phase 3: API Architecture, Security & Caching (Months 8-11)",
        details: "Design secure RESTful APIs, rate-limiting, CORS, input sanitization, and password hashing (Argon2/bcrypt). Implement in-memory caching with Redis and message brokers with RabbitMQ."
      },
      {
        phase: "Phase 4: Scalability, Microservices & Containerization (Months 12-15)",
        details: "Containerize services with Docker, handle asynchronous background processing (BullMQ / Celery), configure reverse proxies (Nginx), and deploy on AWS EC2/ECS with CI/CD."
      }
    ],
    projectIdeas: [
      "Distributed Booking Engine with ACID transactional safety and seat-locking locks",
      "High-scale URL Shortener & Analytics Redirector with Redis caching and PostgreSQL",
      "Financial Ledger & Wallet Microservice with idempotency keys and audit logging"
    ],
    salaryInsights: "Entry Level (India): ₹6 - ₹15 LPA | Mid-Senior: ₹18 - ₹36+ LPA | US/Remote: $95,000 - $160,000+"
  },
  {
    id: "web-developer",
    title: "Web Developer",
    category: "Commercial & Business Web",
    thumbnail: "assets/icons/web-developer.svg",
    badge: "Quick Entry",
    quickSummary: "Creates dynamic, fast-loading, SEO-optimized business websites, e-commerce storefronts, and web portals tailored for maximum user reach.",
    distinction: "Focuses on rapid web delivery, CMS integrations, SEO best practices, mobile responsiveness, and cross-browser consistency.",
    coreSkills: ["HTML5, CSS3, Modern JS", "Tailwind CSS / Bootstrap", "Next.js / WordPress / Shopify", "Search Engine Optimization (SEO)", "Web Analytics & Performance", "Web Hosting & Domains"],
    roadmapPhases: [
      {
        phase: "Phase 1: Web Fundamentals & Responsive Layouts (Months 1-2)",
        details: "Master HTML5 semantics, modern CSS (Flexbox, Grid, custom properties), and mobile-first responsive design for 360px budget Android screens to 4K monitors."
      },
      {
        phase: "Phase 2: JavaScript DOM & Interactive UIs (Months 3-4)",
        details: "Learn DOM manipulation, fetch API, asynchronous operations, interactive UI components (modals, sliders, form validators), and modern CSS frameworks like Tailwind."
      },
      {
        phase: "Phase 3: Modern Web Frameworks & CMS (Months 5-7)",
        details: "Build production websites with Next.js or Astro for static site generation (SSG) and server-side rendering (SSR). Integrate headless CMS platforms (Strapi, Sanity)."
      },
      {
        phase: "Phase 4: SEO, Web Performance & Client Delivery (Months 8-10)",
        details: "Implement OpenGraph metadata, schema.org structured markup, sitemaps, robots.txt, image optimization pipelines, and achieve 95+ mobile Lighthouse scores."
      }
    ],
    projectIdeas: [
      "Ultra-Fast College Resource & Assignment Portal with search and download filters",
      "Modern Business Agency Portfolio with headless CMS integration and dynamic case studies",
      "Local E-commerce Storefront with shopping cart, WhatsApp ordering, and Razorpay checkout"
    ],
    salaryInsights: "Entry Level (India): ₹4 - ₹9 LPA | Mid-Senior: ₹12 - ₹22+ LPA | US/Remote: $65,000 - $110,000+"
  },
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer",
    category: "Cross-Platform Mobile",
    thumbnail: "assets/icons/mobile-developer.svg",
    badge: "Cross-Platform",
    quickSummary: "Builds cross-platform native-feeling mobile applications for both Android and iOS from a single unified codebase using Flutter or React Native.",
    distinction: "Maximizes engineering speed and code reuse across both major mobile operating systems while maintaining near-native fluid performance.",
    coreSkills: ["Flutter (Dart) OR React Native", "Mobile State Management (Bloc / Redux)", "Native Device APIs (Camera, GPS)", "Offline Storage (SQLite / Hive)", "Push Notifications (FCM)", "App Store & Play Store Deployment"],
    roadmapPhases: [
      {
        phase: "Phase 1: Mobile UI Paradigms & Framework Core (Months 1-3)",
        details: "Choose Flutter (Dart) or React Native (TypeScript). Master widget/component tree composition, responsive layouts, device orientation handling, and touch gesture systems."
      },
      {
        phase: "Phase 2: State Management & Device Integrations (Months 4-6)",
        details: "Implement state management architectures (Bloc/Riverpod for Flutter, Zustand/Redux for React Native). Access hardware sensors, camera, geolocation, and local secure storage."
      },
      {
        phase: "Phase 3: Networking, Offline-First & Push Alerts (Months 7-9)",
        details: "Connect to RESTful backends, implement local SQLite/WatermelonDB syncing for offline availability, and configure Firebase Cloud Messaging (FCM) for push notifications."
      },
      {
        phase: "Phase 4: App Store Optimization & Release Pipeline (Months 10-12)",
        details: "Configure app icons, splash screens, permissions handling, build release APKs/AABs and IPAs, and navigate Google Play Console & Apple App Store review guidelines."
      }
    ],
    projectIdeas: [
      "Offline-First B.Tech College Study Notes & Assignment Companion App",
      "Personal Finance & Expense Tracker with interactive charts and biometric lock",
      "Real-time Food Delivery & Courier Tracking App with live GPS maps"
    ],
    salaryInsights: "Entry Level (India): ₹5 - ₹13 LPA | Mid-Senior: ₹15 - ₹30+ LPA | US/Remote: $85,000 - $140,000+"
  },
  {
    id: "android-developer",
    title: "Android Developer",
    category: "Native Mobile OS",
    thumbnail: "assets/icons/android-developer.svg",
    badge: "High India Traffic",
    quickSummary: "Specializes exclusively in the Android operating system, building high-performance native apps using Kotlin, Jetpack Compose, and Material Design 3.",
    distinction: "Leverages deep native Android OS capabilities, background services, custom hardware drivers, and Android SDK optimizations.",
    coreSkills: ["Kotlin", "Jetpack Compose", "Android Architecture Components (MVVM)", "Room Database", "Coroutines & Flow", "WorkManager & Services"],
    roadmapPhases: [
      {
        phase: "Phase 1: Modern Kotlin & Android Studio Setup (Months 1-3)",
        details: "Master Kotlin fundamentals (null safety, lambdas, extension functions, coroutines). Setup Android Studio, emulator, and understand Android project structure and Gradle builds."
      },
      {
        phase: "Phase 2: Declarative UI with Jetpack Compose (Months 4-6)",
        details: "Build modern, accessible Android user interfaces with Jetpack Compose, Material 3 theming, animations, scaffold layouts, and state hoisting."
      },
      {
        phase: "Phase 3: Clean Architecture & Local Persistence (Months 7-10)",
        details: "Implement MVVM / MVI architecture. Use Room DB for local data caching, Retrofit with Kotlin serialization for networking, and Hilt for dependency injection."
      },
      {
        phase: "Phase 4: Background Work & Play Store Publishing (Months 11-13)",
        details: "Schedule persistent background tasks with WorkManager, handle battery optimization, manage runtime permissions, create release app bundles, and publish to Google Play Store."
      }
    ],
    projectIdeas: [
      "Native B.Tech PYQ Paper Reader with built-in PDF viewer, offline bookmarking, and dark theme",
      "Fitness & Step Tracker using Android Sensors and Health Connect APIs",
      "Crypto & Stock Live Ticker with Android Home Screen Widgets and background sync"
    ],
    salaryInsights: "Entry Level (India): ₹5.5 - ₹14 LPA | Mid-Senior: ₹16 - ₹32+ LPA | US/Remote: $90,000 - $150,000+"
  },
  {
    id: "ios-developer",
    title: "iOS Developer",
    category: "Apple Ecosystem",
    thumbnail: "assets/icons/ios-developer.svg",
    badge: "Premium Market",
    quickSummary: "Engineers sleek native applications exclusively for Apple iOS, iPadOS, watchOS, and macOS using Swift, SwiftUI, and Apple Human Interface Guidelines.",
    distinction: "Focuses on Apple's premium UX standards, fluid spring animations, device security (Enclave), CoreML, and strict App Store review guidelines.",
    coreSkills: ["Swift 6", "SwiftUI & UIKit", "Combine & Swift Concurrency", "SwiftData / Core Data", "Xcode & Instruments", "Apple Human Interface Guidelines"],
    roadmapPhases: [
      {
        phase: "Phase 1: Swift Language & iOS Foundations (Months 1-3)",
        details: "Master Swift 6 syntax (optionals, protocols, generics, memory ARC, async/await). Familiarize yourself with Xcode, simulators, and Apple's Human Interface Guidelines."
      },
      {
        phase: "Phase 2: Declarative UI with SwiftUI (Months 4-6)",
        details: "Build fluid user interfaces with SwiftUI, state properties (@State, @Binding, @Observable), custom layout containers, and native iOS navigation stacks."
      },
      {
        phase: "Phase 3: Data Persistence & Networking (Months 7-10)",
        details: "Implement SwiftData / Core Data for local caching, URLSession for asynchronous networking, secure keychain storage, and biometric authentication (FaceID/TouchID)."
      },
      {
        phase: "Phase 4: Profiling, Instruments & App Store Release (Months 11-13)",
        details: "Profile CPU/memory leaks with Xcode Instruments, configure TestFlight beta testing, handle in-app subscriptions with StoreKit 2, and submit to Apple App Store."
      }
    ],
    projectIdeas: [
      "Apple HIG-compliant Daily Habit & Goal Tracker with interactive iOS Lock Screen Widgets",
      "Audio Streaming & Podcast Player with lock-screen media controls and background audio",
      "Minimalist Markdown Notes App with CloudKit automatic sync across iPhone, iPad, and Mac"
    ],
    salaryInsights: "Entry Level (India): ₹6 - ₹16 LPA | Mid-Senior: ₹18 - ₹38+ LPA | US/Remote: $105,000 - $175,000+"
  }
];
