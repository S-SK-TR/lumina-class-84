import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, HelpCircle, BarChart2, User } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/', icon: Home, label: 'Ana Sayfa' },
  { to: '/students', icon: Users, label: 'Öğrenciler' },
  { to: '/tasks', icon: HelpCircle, label: 'Görevler' },
  { to: '/analytics', icon: BarChart2, label: 'Analiz' },
  { to: '/profile', icon: User, label: 'Profil' }
];

export function MobileBottomNav() {
  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--glass-bg)] backdrop-blur-md border-t border-[var(--glass-border)] z-50"
    >
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <li key={item.to} className="flex-1">
            <NavLink
              to={item.to}
              className={({ isActive }) => (
                `flex flex-col items-center justify-center h-full transition-all duration-200 $
                {isActive ? 'text-[var(--brand-500)]' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}
              )}
            >
              <item.icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
