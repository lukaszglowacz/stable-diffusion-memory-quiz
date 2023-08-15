# NORTON Memory Game
NORTON Memory Game is a project created for the needs of NORTON Innovation. NORTON Innovation deals with interior design based on the combination of Stable Diffusion technology with printing images on the walls. The game is about finding a pair of the same photos generated thanks to the Stable Diffusion model. If the user sees the same team, the pictures are revealed; if the user misses a match, the images are covered. The user gets a point in the Correct section for discovering the correct pair. If not, the user gets a point to the Wrong area. The game ends when the user has revealed all the cards. The user wins the game if the number of Correct points is higher than the Wrong points.

![Screenshot 2023-08-11 115835](https://github.com/lukaszglowacz/stable-diffusion-memory-quiz/assets/119242394/6d308438-baff-4ff4-a2e1-1fe545377e04)

## User Experience (UX)
### Design Choices
- Typography
  - The fonts chosen were 'Fira Sans Condensed' for the headings and 'Andika' for the body text. They fall back to sans-serif, respectively.
  - Andika is an easily readable font, and Fira Sans Condensed was selected via https://typ.io/search
  
- Colour Scheme
  - The colors were selected via http://colormind.io/

![Screenshot 2023-08-11 120658](https://github.com/lukaszglowacz/stable-diffusion-memory-quiz/assets/119242394/bd34a6fa-680d-4154-8a51-35ff7c32775d)

## Features
The site has one subpage with the title, game, results, start button, and footer. A modal with the game's instructions is displayed when the user enters the site for the first time.

### Existing Features

- **Instruction Page**
    
    The Instructions modal appears every time a user visits the page. To turn it off, click the Got It! button. The manual tells you step by step what needs to be done so that the user can start the game and what the game is all about.

![Screenshot 2023-08-11 121800](https://github.com/lukaszglowacz/stable-diffusion-memory-quiz/assets/119242394/6bf8a499-078c-4c63-b1b7-0622bf953ba3)

 - **Logo**
    
    The logo was designed to refer to the content of NORTON Innovation. It consists of the primary NORTON Innovation logo with a colored letter I passing through the logo's center. Then the logo on the right side was separated by a vertical line to indicate that the game belongs to NORTON Innovation. Right after the line is the name of the game, i.e., Memory Game, which refers to the specificity of the game and, at the very beginning, tells the user what to expect from it.

![Screenshot 2023-08-11 121440](https://github.com/lukaszglowacz/stable-diffusion-memory-quiz/assets/119242394/630bdde1-f86f-4d66-9712-ccc6e49a0e8d)

  - **Game Container**
    
    The game container consists of 16 cards, which, when revealed, turn into pictures hidden under the cards. There are eight pictures in pairs randomly scattered throughout the game module. The game container responds to the user's actions only when clicking the Start Game button. Otherwise, the module is disabled. The front side of the card represents the NORTON Innovation logo.

![Screenshot 2023-08-11 122240](https://github.com/lukaszglowacz/stable-diffusion-memory-quiz/assets/119242394/20949149-a3ee-4372-8160-cc9b562a7c41)

  - **Score Container and Play Button**
    
    The score container consists of two elements: Correct with a number and Wrong with a number. When the user finds a correct matching pair of two pictures, the number next to the word Correct increases its value by 1; otherwise, the number next to the word Wrong increases its value by 1. So that you know, the user only wins if the amount of Correct is more significant than Wrong.
    The Start Game button has been designed in such a way that it is visible and legible. The green color is eye-catching. This is important for the best UX. In addition, this button changes its value during the game. When the user starts the game, this button's value is changed to Playing..., and when the user finishes the game, the button's value is changed to Play Again.

![Screenshot 2023-08-11 123233](https://github.com/lukaszglowacz/stable-diffusion-memory-quiz/assets/119242394/94892281-2400-48e6-8d9e-97d49936dad2)

  
  - **The Footer**
    
    The footer section contains the year of production of the game and a reference to the commercial name.

![Screenshot 2023-08-11 123952](https://github.com/lukaszglowacz/stable-diffusion-memory-quiz/assets/119242394/e2cd2e6d-1b0a-439e-bd56-04d8ff069305)


### Features Left to Implement
 
 - API Integration: Plans are in motion to integrate an API with the server, providing the game with diverse images. This feature will allow for a more dynamic and unpredictable gaming experience by randomly altering the photos presented during gameplay.

## Technology Used
 
 - JavaScript: a versatile, high-level programming language primarily used for interactive web development, enabling dynamic content and interactivity in web browsers.
 - HTML5: the latest evolution of the standard markup language, HTML5 structures content on the web, introducing improved multimedia integration, semantic elements, and forms enhancement for better user and developer experiences.
 - CSS3: The latest version of Cascading Style Sheets, CSS3 allows for advanced styling, animations, and responsive design transformations, bringing visual creativity and interactive designs to web interfaces.
 - Adobe Photoshop: A professional digital image editing tool by Adobe, Photoshop offers an extensive suite of design, drawing, and retouching tools for creators aiming to produce standout visuals.
 - Adobe Illustrator: Adobe's premier vector graphics editor, Illustrator, is the industry standard for creating and designing scalable, high-quality visuals such as logos, illustrations, and typography.

## Testing

### Code Validation

The NORTON Memory Game has been thoroughly tested. All the code has been run through the W3C HTML Validator and the W3C CSS Validator. No errors were found after the last test.

The HTML validator results for each page are below:

- Home Page

![no-errors-html](https://user-images.githubusercontent.com/119242394/213243744-d7515fe5-acb1-4bd5-8fd9-9614443d14e4.jpg)

The CSS validator results are below:

![no-errors-css](https://user-images.githubusercontent.com/119242394/213244593-53d7ec51-3a37-44fd-a6b4-c74edabcb237.jpg)

JSHint Validator shows no errors in the JavaScript code.

### Responsiveness Test

The responsive design tests were carried out manually with Google Chrome DevTools.

|  | Mobile S - 320px | Mobile M - 375px | Mobile L - 425px | Tablet - 768px | Laptop - 1024px | Laptop L - 1440px | 4K - 2560px |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Render | passed | passed | passed | passed | passed | passed | passed |
| Images | passed | passed | passed | passed | passed | passed | passed |
| Links | passed | passed | passed | passed | passed | passed | passed |

All responsiveness tests were successful. The site is ready to work with devices of various widths. In addition, the site has been adapted to large screens above 1440px.

### Browser Compatibility

The website was tested on the following browsers with no visible issues for the user:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
 
Appearance, functionality, and responsiveness were consistent for various device sizes and browsers.

### Unfixed Bugs

There are no known unfixed bugs on this site.

### Additional Testing

The site was also tested using Lighthouse Chrome Dev Tools to test each of the pages for:

  - Performance - How the page performs while loading.
  - Accessibility - Is the site accessible for all users, and how can it be improved?
  - Best Practices - The site conforms to industry best practices.
  - SEO - Search engine optimization. Is the site optimized for search engine result rankings?

Here are the desktop parameters of each repository page:

- Home Page

![Screenshot 2023-08-11 144303](https://github.com/lukaszglowacz/stable-diffusion-memory-quiz/assets/119242394/6ec5b017-fcdc-47d8-a701-eb32bf210c59)

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

1. In the GitHub repository, navigate to the Settings tab.
2. Once in Settings, navigate to the Pages tab on the left-hand side.
3. Under Source, select the branch to master, then click Save.
4. Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://lukaszglowacz.github.io/stable-diffusion-memory-quiz/

## Credits

### Content
  - Google Fonts - used for fonts
  - Font Awesome - used for icons
  - Colormind - used to generate color pallet
  - typ.io - used to generate two compatible types of icons
  
### Media
  - mage.space - web application for crafting stable diffusion models.
