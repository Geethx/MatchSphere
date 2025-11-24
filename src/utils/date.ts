// Simple date utilities without external dependencies
// For full functionality, install: npm install date-fns

export const formatDate = (
  dateString: string,
  formatStr: string = "MMM dd, yyyy"
): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
};

export const formatTime = (timeString: string): string => {
  try {
    const date = new Date(timeString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  } catch {
    return timeString;
  }
};

export const formatDateTime = (dateTimeString: string): string => {
  try {
    const date = new Date(dateTimeString);
    const now = new Date();

    // Check if today
    if (date.toDateString() === now.toDateString()) {
      return `Today at ${formatTime(dateTimeString)}`;
    }

    // Check if tomorrow
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (date.toDateString() === tomorrow.toDateString()) {
      return `Tomorrow at ${formatTime(dateTimeString)}`;
    }

    return date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateTimeString;
  }
};

export const getRelativeTime = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    return `${diffDays} days ago`;
  } catch {
    return dateString;
  }
};

export const isMatchToday = (dateString: string): boolean => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    return date.toDateString() === now.toDateString();
  } catch {
    return false;
  }
};

export const isMatchPast = (dateString: string): boolean => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    return date < now;
  } catch {
    return false;
  }
};

export const getTodayDateString = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
