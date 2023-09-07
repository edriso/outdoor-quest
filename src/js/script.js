const sidebar = document.getElementById('logo-sidebar');
if (sidebar) {
  // Dark Mode
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.classList.add('dark');
  }
  const darkModeAction = document.querySelector('#dark-mode-action');
  darkModeAction.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  });

  // Sidebar Toggle on Small Screens
  const toggleButton = document.querySelector(
    '[data-drawer-toggle="logo-sidebar"]'
  );
  const toggleSidebar = () => {
    sidebar.classList.toggle('-translate-x-full');

    if (sidebar.classList.contains('-translate-x-full')) {
      // Sidebar is closed
      document.body.classList.remove('overflow-hidden');
      backdrop.remove();
    } else {
      // Sidebar is open
      document.body.classList.add('overflow-hidden');
      document.body.appendChild(backdrop);
    }
  };
  const backdrop = document.createElement('div');
  backdrop.classList.add(
    'bg-gray-900',
    'bg-opacity-50',
    'dark:bg-opacity-80',
    'fixed',
    'inset-0',
    'z-30'
  );
  toggleButton.addEventListener('click', toggleSidebar);
  backdrop.addEventListener('click', toggleSidebar);

  // Toggle User's Dropdown in Nav
  const userDropdownBtn = document.querySelector(
    '[data-dropdown-toggle="dropdown-user"]'
  );
  const userDropdownMenu = document.querySelector('#dropdown-user');
  userDropdownBtn.addEventListener('click', () => {
    userDropdownMenu.classList.toggle('hidden');
  });

  const logoutAction = document.querySelector('#logout-action');
  logoutAction.addEventListener('click', (e) => {
    console.log('logged out');
  });
}
