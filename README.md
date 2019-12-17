# Inform Consent Form Application
This application is used for Duke Hospital Clinical Trials to inform consent progress, which is convenient and efficient for volunteers to learn the knowledge and risks of the program they are participating in. This repository is a simplified version omitting many private information of the clinical trial department.
 
## Dependency
For this application, we use the Angular framework as frontend and Spring framework as backend.

Before you can build this project, you must install and configure the following dependencies on your machine. 

**1. Node.js**

We use [Node.js](https://nodejs.org/en/) to run a development web server and build the project. Depending on your system, you can install Node either from the source or as a pre-packaged bundle.
After installing Node, you can use the following command to check your Node version and `npm` version.

```
node --version
npm --version
```
For the development of this project, we use the version of `Node@v12.12.0` and `npm@6.13.0`.

**2. Angluar CLI**

The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain [Angular](https://angular.io/) applications. To install the Angular CLI, run the following command on your machine.

```
npm install -g @angular/cli
```

Then you could check your Angular CLI version using the following command.

```
ng --version
```

We use `Angluar/CLI@v8.3.18` as the frontend development environment.


Then you should be able to run the following command to install all development dependency tools. You will only need to run this command when dependencies change in **package.json**.

```
npm install
```

In order to see all the dependency tools used in this application, you can run the following command.

```
cd ICF_Application/frontend/icf
npm list --depth=0
```

Then you would see all the dependency tools used in this application.

```
todo@0.0.0 /Users/xxx/Desktop/ICF_Application/frontend/icf
├── @angular-devkit/build-angular@0.803.18
├── @angular/animations@8.2.13
├── @angular/cli@8.3.18
├── @angular/common@8.2.13
├── @angular/compiler@8.2.13
├── @angular/compiler-cli@8.2.13
├── @angular/core@8.2.13
├── @angular/forms@8.2.13
├── @angular/language-service@8.2.13
├── @angular/platform-browser@8.2.13
├── @angular/platform-browser-dynamic@8.2.13
├── @angular/router@8.2.13
├── @fortawesome/fontawesome-free@5.11.2
├── @types/chart.js@2.9.4
├── @types/jasmine@3.3.16
├── @types/jasminewd2@2.0.8
├── @types/node@8.9.5
├── angular-bootstrap-md@8.7.0
├── animate.css@3.7.2
├── bootstrap@4.3.1
├── chart.js@2.5.0
├── codelyzer@5.2.0
├── file-system@2.2.2
├── fs@0.0.1-security
├── google-translate@3.0.0
├── hammerjs@2.0.8
├── jasmine-core@3.4.0
├── jasmine-spec-reporter@4.2.1
├── jquery@3.4.1
├── karma@4.1.0
├── karma-chrome-launcher@2.2.0
├── karma-coverage-istanbul-reporter@2.0.6
├── karma-jasmine@2.0.1
├── karma-jasmine-html-reporter@1.4.2
├── UNMET PEER DEPENDENCY popper.js@^1.14.7
├── protractor@5.4.2
├── rxjs@6.4.0
├── ts-node@7.0.1
├── tslib@1.10.0
├── tslint@5.15.0
├── typescript@3.5.3
└── zone.js@0.9.1
```

**3. Spring Boot & MySQL**

In Intellij IDEA, open **ICF_Application/backend/build.gradle**
 to install dependencies. This project use MySQL as a database to store data. You can run provided **test.sql** file to create the database and tables (dummy test data included for convenience).

The configuration of the database is indicated at **ICF_Application/backend/src/main/resources/application.properties**. You need to set the authentication data based on your settings to use the application.

## Get Started

**1. Run frontend website**

Open one terminal and go to the foler of ICF_Application/frontend/icf, and run the following command to start the frontend.

```
npm install
ng serve
```
Then you should be able to visited the website on `http://localhost:4200/`


**2. Run backend server**

Open the folder `ICF_Application/backend` with **Intellij IDEA**, and click the `Run` button.	


## Development

### **Frontend**

**1. User Interface**

For the UI, we import the library of `bootstrap@4.3` and `angular-bootstrap-md@8.7`. We make use of many customed class to make our website more user-friendly.


**2. Components**

##### 1) welcome-pre

This is the first page you will look at when you visited `localhost:4200/`. And this page will give users the instruction to login by clicking the `login` button on the right-top corner.

##### 2) login

This component handles the logics of user login. By entering the user's first name, last name and password, the backend will handle the request of authentication verification.

##### 3) welcome

This component constructs the first page after the user login successfully. It will require the user to enter his/her SiteID so that he/she would start the specific project. For users, just enter the assigned SiteID to get started.

##### 4) confirmation

This component constructs the page after entering the SiteID. It is used for users to confirm the project they are going to start. It will display the project name in the middle of the page. Just click the button `NEXT` to continue.

##### 5) summary

This page is a guide to the whole process of online training. It shows the summary of the three sections: Explanation of what is a clinical trial, A summary of the informed consent for the clinical trial, A short quiz which will ensure you know about the clinical trial you may sign up for. This will give the user a clear instruction about what is going to happen in the next few steps.

##### 6) yourProject

This component constructs a guide for the Education Module, which will show the four questions that are going to educate the user.

##### 7) edu-module

This component is mainly for the education module. In this page, it shows the explanations for four education questions indicated before. The materials for the education module will be consistent for each project. This page also provides the audio-enhanced function allowing users to play the audio of reading contexts. Users may change the languages or speed as they wish.

##### 8) icf-module-pre

This component constructs the guide page before the inform consent module after the user finishing the education module. It will show four questions, which are going to let users learn later.

##### 9) icf-module

This component is mainly for the inform consent module. In this page, it shows the explanation for four inform consent form questions indicated before. The materials for each question vary between different projects. It fetches data from the database through backend part and returns the project date to the frontend page. Also, it provides the audio-enhanced function, which allows users to play the audio of reading contexts. Users may change the languages or speed as they wish.

##### 10) teach-module-pre

This component constructs the page that indicates the user has finished reading the inform consent questions and explanations. It shows the "Congratulations" for the user and prepares to load the following teach-back module.

##### 11) teach-module

This component is mainly for the teach-back module. It consists of the questions to let the user test himself/herself. Each question will have three options and only if the user chooses the correct answer will the page be reloaded with the next question. Otherwise, it pops up some explanation for the current question and gives the user another chance to choose the correct answer. 

##### 12) teach-result

This component constructs the page after the user has completed the teach-back module and finished all testing questions. 


**3. Audio-enhanced Function**

We make use of the jQuery SpeechSynthesis APIs to implement the context-narration function. The user could click the PLAY button to start the narration. The user could also change the speech speed and accent if he/she likes.

**4. Dynamic Time Recording Function**

We record the time of each page and allow the admin to see how much time each user spent on each module. This is used for the analysis of education by admin.



### **Backend**






