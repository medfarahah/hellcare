# DjibCare - Medical Care Tracker

## 📱 General App Overview

DjibCare is a mobile + web application designed to help elderly people and people with disabilities manage their healthcare journey. The app provides an intuitive interface to track medications, appointments, doctor advice, and medical records in one centralized location.

**Key Features:**
- Medication tracking with reminders
- Doctor appointments management
- Medical records storage
- Doctor advice and notes
- Emergency contacts
- Health vitals monitoring

---

## 👥 Main User Types

### 1. Primary Users (Patients)
- Elderly individuals
- People with disabilities
- Requires large, clear UI elements
- Simple navigation patterns

### 2. Caregivers
- Family members
- Professional caregivers
- Can manage multiple patient profiles
- Need quick access to critical information

### 3. Healthcare Providers (Future)
- Doctors
- Nurses
- Can view patient data with permission

---

## 📄 Main Screens List

### Core Screens
1. **Dashboard/Home** - Overview of today's medications, appointments, vitals
2. **Medications** - List of all medications with schedule
3. **Appointments** - Calendar view of doctor appointments
4. **Medical Records** - Document storage and viewing
5. **Doctor Advice** - Notes and instructions from healthcare providers
6. **Vitals** - Blood pressure, glucose, weight tracking
7. **Emergency Contacts** - Quick access to important contacts
8. **Profile** - User settings and account management

### Authentication Screens
9. **Login** - Sign in screen
10. **Register** - New user registration
11. **Onboarding** - First-time user guidance

---

## 🧭 Basic Navigation Structure

```
┌─────────────────────────────┐
│      Top Navigation Bar      │
│   Logo | Profile | Settings  │
└─────────────────────────────┘
┌─────────────────────────────┐
│                             │
│     Main Content Area       │
│                             │
│                             │
└─────────────────────────────┘
┌─────────────────────────────┐
│    Bottom Navigation Bar     │
│  Home | Meds | Appt | More  │
└─────────────────────────────┘
```

**Navigation Flow:**
- Bottom navigation for primary actions (Mobile)
- Sidebar navigation for desktop
- Breadcrumbs for sub-pages
- Large touch targets (minimum 48px)

---

## 🎨 Light Color Theme Proposal

### Primary Colors
- **Primary Blue:** `#4A90E2` - Trust, medical, calm
- **Primary Dark:** `#2C5F8D` - Headers, emphasis
- **Primary Light:** `#E8F4FF` - Backgrounds, cards

### Secondary Colors
- **Success Green:** `#5CB85C` - Completed tasks, positive
- **Warning Orange:** `#F0AD4E` - Reminders, attention needed
- **Error Red:** `#D9534F` - Urgent, missed medications
- **Info Purple:** `#7B68EE` - Tips, information

### Neutral Colors
- **Background:** `#F8F9FA` - Main background
- **White:** `#FFFFFF` - Cards, surfaces
- **Text Primary:** `#212529` - Main text
- **Text Secondary:** `#6C757D` - Secondary text
- **Border:** `#DEE2E6` - Dividers, borders

### Accessibility
- High contrast ratios (WCAG AA compliant)
- Large font sizes (minimum 16px body text)
- Clear visual hierarchy
- Icon + text labels for all actions

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 🔐 Demo Credentials (MVP)

**Patient Account (Abdifatah Ismail):**
- Email: `patient@demo.com`
- Password: `demo123`

**Caregiver Account (Mohamed):**
- Email: `caregiver@demo.com`
- Password: `demo123`

**Doctor Account (Dr. Mohamed):**
- Email: `doctor@demo.com`
- Password: `demo123`
- Specialty: Cardiology
- Full doctor portal access

## 👨‍⚕️ Doctor Portal

The doctor side includes:
- **Dashboard**: Quick stats, today's appointments, pending actions
- **My Patients**: Search, view, and manage patient records
- **Appointments**: Full appointment management with scheduling
- **Consultations**: Detailed consultation notes and history
- **Prescriptions**: Approve, manage, and track prescriptions
- **Lab Results**: Review and approve laboratory test results

See `DOCTOR_FEATURES.md` for complete documentation.

## 💳 Subscription Plans

DjibCare offers two subscription tiers:

### Standard Plan
- **3,000 DJF** per month
- **30,000 DJF** per year (save 17%)
- Essential health tracking features

### Premium Plan  
- **5,000 DJF** per month
- **50,000 DJF** per year (save 17%)
- All features + advanced analytics & priority support

---

## 📦 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Responsive:** Mobile-first approach


