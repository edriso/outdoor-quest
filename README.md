# OutdoorQuest

OutdoorQuest is a straightforward application constructed using Gulp, EJS, Sass, and TailwindCSS.

## Features

- **Efficient Build Process**: The project uses [Gulp](https://gulpjs.com/) to automate various tasks, ensuring an efficient development workflow. It includes tasks for processing SCSS stylesheets, JavaScript files, and templating using [EJS](https://ejs.co/).

- **Responsive Design**: Z~OReoo Dashboard is designed to be responsive, providing a seamless experience on various devices and screen sizes.

- **Styling with Tailwind CSS**: The application is styled using [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework that allows for rapid and consistent UI development.

- **Customizable Icons**: Navigation icons in the dashboard are provided by [tabler-icons](https://tabler-icons.io/), offering a wide range of sleek and customizable icons.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/edriso/outdoor-quest.git
   ```

2. Navigate to the project directory:

   ```bash
   cd outdoor-quest
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Build the project for production:

   ```bash
   npm run build
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Access the website in your web browser by opening the `index.html` file located in the `dist` directory.

**Note**: If you make changes to the `src/assets` folder, like adding new images, please keep in mind that you'll need to execute the build or start command again for those changes to take effect.

## Usage

- Add your custom content and functionality by modifying the EJS templates in `src/views` directory.

- Customize the styling by editing Tailwind CSS classes or the SCSS files in `src/scss` directory.

- Extend the JavaScript functionality by adding or modifying JavaScript files in `src/js` directory.
