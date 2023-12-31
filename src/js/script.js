const endingPath = '/' + window.location.pathname.split('/').pop();
const sidebar = document.getElementById('nav-sidebar');
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

  // NavLinks Active Class
  const navLinks = document.querySelectorAll('#nav-sidebar a');
  const navActiveClasses = ['bg-gray-100', 'dark:bg-gray-700'];
  for (const link of navLinks) {
    if (endingPath === '/') {
      navLinks[0].classList.add(...navActiveClasses);
      break;
    }
    if (link.getAttribute('href').includes(endingPath)) {
      link.classList.add(...navActiveClasses);
    }
  }

  // Sidebar Toggle on Small Screens
  const toggleButton = document.querySelector(
    '[data-drawer-toggle="nav-sidebar"]'
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

  // On Logging-out
  const logoutAction = document.querySelector('#logout-action');
  logoutAction.addEventListener('click', () => {
    console.log('logged out');
  });
}

if (endingPath.includes('news')) {
  // API Request
  const newsList = [
    {
      content: 'lorem ipsum',
      date: '9 Sep 2023',
    },
    {
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
      date: '9 Sep 2023',
    },
    {
      content: 'lorem ipsum',
      date: '5 Sep 2023',
    },
  ];
  const newsBody = document.querySelector('#news-table-body');

  newsList.forEach((item) => {
    const row = document.createElement('tr');
    row.classList.add(
      'bg-white',
      'border-b',
      'dark:bg-gray-800',
      'dark:border-gray-700'
    );

    const contentCell = document.createElement('th');
    contentCell.classList.add(
      'px-6',
      'py-4',
      'text-gray-900',
      'dark:text-white',
      'font-medium'
    );
    contentCell.textContent = item.content;

    const DateCell = document.createElement('td');
    DateCell.classList.add('px-6', 'py-4', 'whitespace-nowrap');
    DateCell.textContent = item.date;

    row.appendChild(contentCell);
    row.appendChild(DateCell);
    newsBody.appendChild(row);
  });
}
