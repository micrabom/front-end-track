# Creating a React Bootstrap 4 project

1. Create a new directory:

    ```
    mkdir react-bootstrap-4
    ```

2. Navigate into the directory:

    ```
    cd react-bootstrap-4
    ```

3. Create a new file named `package.json`.

4. Copy and paste the following code into the `package.json` file:

    ```
    {
        "name": "project-name",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
            "bootstrap": "^4.6.2",
            "react": "^17.0.2",
            "react-bootstrap": "^1.6.6",
            "react-dom": "^17.0.2",
            "react-scripts": "4.0.3"
        },
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },
        "eslintConfig": {
            "extends": "react-app"
        },
        "browserslist": {
            "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
            ],
            "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
            ]
        }
    }
    ```

    Note: Replace `project-name` with your own project name.

5. Run the following command to install the necessary dependencies:

    ```
    npm install
    ```

6. You can now try running a sample code for Jumbotron using React Bootstrap.


### Finish in 5 hours
## Install
```bash
npx install react-bootstrap
```