import React from "react";

export const LogoIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#4F46E5" />
    <path d="M22 10H10V22H22V10Z" stroke="white" strokeWidth="2" />
  </svg>
);

export const NotificationIcon: React.FC = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 20C10.1 20 11 19.1 11 18H7C7 19.1 7.9 20 9 20ZM16 14V9C16 5.93 14.36 3.36 11.5 2.68V2C11.5 1.17 10.83 0.5 10 0.5C9.17 0.5 8.5 1.17 8.5 2V2.68C5.63 3.36 4 5.92 4 9V14L2 16V17H16V16L14 14Z" fill="#6B7280" />
  </svg>
);

export const HomeIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0L0 10H3V20H17V10H20L10 0ZM15 18H5V8.83L10 3.83L15 8.83V18Z" fill="currentColor" />
  </svg>
);

export const EmployeesIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" fill={color} />
    <path d="M10 12C5.58172 12 2 15.5817 2 20H18C18 15.5817 14.4183 12 10 12Z" fill={color} />
  </svg>
);

export const TasksIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V4C20 2.9 19.1 2 18 2ZM18 18H2V8H18V18ZM18 6H2V4H18V6Z" fill="currentColor" />
  </svg>
);

export const ReportsIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 0H18C19.1 0 20 0.9 20 2V18C20 19.1 19.1 20 18 20H2C0.9 20 0 19.1 0 18V2C0 0.9 0.9 0 2 0ZM2 2V18H18V2H2ZM4 8H8V16H4V8ZM10 4H14V16H10V4ZM6 4V6H12V4H6Z" fill="currentColor" />
  </svg>
);

export const ScheduleIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="currentColor" />
  </svg>
);

export const TasksInProgressIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="#F59E0B" />
  </svg>
);

export const CompletedTasksIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#10B981" />
  </svg>
);

export const ScheduleCheckinIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V4C20 2.9 19.1 2 18 2ZM18 18H2V8H18V18ZM18 6H2V4H18V6ZM9 11H7V13H9V11ZM13 11H11V13H13V11ZM5 11H3V13H5V11Z" fill="#8B5CF6" />
  </svg>
);

export const VideoIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 8V6C15 5.45 14.55 5 14 5H2C1.45 5 1 5.45 1 6V14C1 14.55 1.45 15 2 15H14C14.55 15 15 14.55 15 14V12L19 16V4L15 8Z" fill="#4F46E5" />
  </svg>
);

export const MoreIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 6C11.1 6 12 5.1 12 4C12 2.9 11.1 2 10 2C8.9 2 8 2.9 8 4C8 5.1 8.9 6 10 6ZM10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10C12 8.9 11.1 8 10 8ZM10 14C8.9 14 8 14.9 8 16C8 17.1 8.9 18 10 18C11.1 18 12 17.1 12 16C12 14.9 11.1 14 10 14Z" fill="#6B7280" />
  </svg>
);
