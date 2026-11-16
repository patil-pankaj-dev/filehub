/**
 * Filehub - Firebase Configuration & Multi-Tier Authentication Engine
 * Super Administrator:
 * Gmail: patilpankaj221134@gmail.com
 * Password: Pankaj123@
 */

// Replace these Firebase Console keys anytime with your project credentials:
const firebaseConfig = {
  apiKey: "AIzaSyCCc1y2kNbSftG45mB3gkbUCGs4gfjts-E",
  authDomain: "filehub-pankaj.firebaseapp.com",
  projectId: "filehub-pankaj",
  storageBucket: "filehub-pankaj.firebasestorage.app",
  messagingSenderId: "984202175754",
  appId: "1:984202175754:web:filehub2026",
};

// Permanent Super Administrator Credentials (Owner)
const SUPER_ADMIN = {
  email: "patilpankaj221134@gmail.com",
  password: "Pankaj123@",
  name: "Pankaj Patil",
  role: "Super Administrator & Developer"
};

const SESSION_KEY = "filehub_admin_session";
const ASSIGNMENTS_KEY = "filehub_user_assignments";
const PYQS_KEY = "filehub_user_pyqs";
const ADMINS_KEY = "filehub_managed_admins";

const FilehubAuth = {
  config: firebaseConfig,
  superAdminEmail: SUPER_ADMIN.email,
  
  // Check if given email is Super Admin
  isSuperAdmin: function(email) {
    return (email || "").trim().toLowerCase() === SUPER_ADMIN.email.toLowerCase();
  },

  // Sub-Admins Data Store (managed only by patilpankaj221134@gmail.com)
  getManagedAdmins: function() {
    try {
      return JSON.parse(localStorage.getItem(ADMINS_KEY) || '[]');
    } catch(e) {
      return [];
    }
  },

  saveManagedAdmins: function(admins) {
    localStorage.setItem(ADMINS_KEY, JSON.stringify(admins));
  },

  addManagedAdmin: function(adminData) {
    const email = (adminData.email || "").trim().toLowerCase();
    if (!email) {
      return { success: false, message: "Gmail address is required." };
    }
    if (this.isSuperAdmin(email)) {
      return { success: false, message: "This email is already the permanent Super Administrator." };
    }
    const admins = this.getManagedAdmins();
    if (admins.some(a => a.email.toLowerCase() === email)) {
      return { success: false, message: "An admin account with this Gmail already exists." };
    }

    const newAdmin = {
      id: "adm-" + Date.now(),
      name: (adminData.name || "Admin").trim(),
      email: email,
      password: adminData.password || "Admin123@",
      status: "active", // "active" or "restricted"
      role: "Content Admin",
      createdAt: new Date().toISOString()
    };

    admins.unshift(newAdmin);
    this.saveManagedAdmins(admins);
    return { success: true, admin: newAdmin };
  },

  deleteManagedAdmin: function(id) {
    let admins = this.getManagedAdmins();
    const target = admins.find(a => a.id === id);
    if (!target) return false;
    
    admins = admins.filter(a => a.id !== id);
    this.saveManagedAdmins(admins);

    // If currently logged-in user was deleted, clear their session
    const current = this.getUser();
    if (current && current.email.toLowerCase() === target.email.toLowerCase()) {
      localStorage.removeItem(SESSION_KEY);
    }
    return true;
  },

  toggleRestrictAdmin: function(id) {
    const admins = this.getManagedAdmins();
    const admin = admins.find(a => a.id === id);
    if (!admin) return null;

    admin.status = admin.status === "active" ? "restricted" : "active";
    admin.updatedAt = new Date().toISOString();
    this.saveManagedAdmins(admins);

    // If restricted admin is currently logged in, invalidate their session
    if (admin.status === "restricted") {
      const current = this.getUser();
      if (current && current.email.toLowerCase() === admin.email.toLowerCase()) {
        localStorage.removeItem(SESSION_KEY);
      }
    }
    return admin;
  },

  // Universal Login (Super Admin or Sub-Admins)
  login: async function(email, password) {
    const trimmedEmail = (email || "").trim().toLowerCase();
    
    // 1. Check Super Admin Credentials
    if (trimmedEmail === SUPER_ADMIN.email.toLowerCase()) {
      if (password === SUPER_ADMIN.password) {
        const sessionData = {
          email: SUPER_ADMIN.email,
          name: SUPER_ADMIN.name,
          role: SUPER_ADMIN.role,
          isSuperAdmin: true,
          token: "fh_super_" + Date.now(),
          loginTime: new Date().toISOString()
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
        return { success: true, user: sessionData };
      } else {
        return { success: false, message: "Invalid password for Super Administrator." };
      }
    }

    // 2. Check Sub-Admins
    const admins = this.getManagedAdmins();
    const subAdmin = admins.find(a => a.email.toLowerCase() === trimmedEmail);

    if (subAdmin) {
      if (subAdmin.password !== password) {
        return { success: false, message: "Invalid password for this admin account." };
      }
      if (subAdmin.status === "restricted") {
        return { 
          success: false, 
          message: "Your admin account is currently RESTRICTED by Super Admin (patilpankaj221134@gmail.com). You cannot log in." 
        };
      }

      const sessionData = {
        id: subAdmin.id,
        email: subAdmin.email,
        name: subAdmin.name,
        role: "Content Admin",
        isSuperAdmin: false,
        token: "fh_adm_" + Date.now(),
        loginTime: new Date().toISOString()
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
      return { success: true, user: sessionData };
    }
    
    return { 
      success: false, 
      message: "Invalid Gmail or password. Please use authorized administrator credentials." 
    };
  },

  // Logout
  logout: function() {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "login.html";
  },

  // Check if admin is currently logged in
  isAuthenticated: function() {
    try {
      const session = localStorage.getItem(SESSION_KEY);
      return session ? JSON.parse(session) : null;
    } catch(e) {
      return null;
    }
  },

  // Get current session data
  getUser: function() {
    return this.isAuthenticated();
  },

  // Require auth on protected pages
  requireAuth: function() {
    const user = this.isAuthenticated();
    if (!user) {
      window.location.href = "login.html";
    }
    return user;
  }
};

// Central Data Layer for Assignments & PYQ papers
const FilehubData = {
  // Assignments CRUD
  getAssignments: function() {
    try {
      return JSON.parse(localStorage.getItem(ASSIGNMENTS_KEY) || '[]');
    } catch(e) {
      return [];
    }
  },
  saveAssignments: function(list) {
    localStorage.setItem(ASSIGNMENTS_KEY, JSON.stringify(list));
  },
  addAssignment: function(item) {
    const list = this.getAssignments();
    list.unshift(item);
    this.saveAssignments(list);
    return list;
  },
  updateAssignment: function(id, updatedFields) {
    const list = this.getAssignments();
    const idx = list.findIndex(a => a.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedFields, modifiedAt: new Date().toISOString() };
      this.saveAssignments(list);
      return list[idx];
    }
    return null;
  },
  deleteAssignment: function(id) {
    let list = this.getAssignments();
    list = list.filter(a => a.id !== id);
    this.saveAssignments(list);
    return list;
  },

  // PYQs CRUD
  getPYQs: function() {
    try {
      return JSON.parse(localStorage.getItem(PYQS_KEY) || '[]');
    } catch(e) {
      return [];
    }
  },
  savePYQs: function(list) {
    localStorage.setItem(PYQS_KEY, JSON.stringify(list));
  },
  addPYQ: function(item) {
    const list = this.getPYQs();
    list.unshift(item);
    this.savePYQs(list);
    return list;
  },
  updatePYQ: function(id, updatedFields) {
    const list = this.getPYQs();
    const idx = list.findIndex(p => p.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedFields, modifiedAt: new Date().toISOString() };
      this.savePYQs(list);
      return list[idx];
    }
    return null;
  },
  deletePYQ: function(id) {
    let list = this.getPYQs();
    list = list.filter(p => p.id !== id);
    this.savePYQs(list);
    return list;
  }
};

window.FilehubAuth = FilehubAuth;
window.FilehubData = FilehubData;
