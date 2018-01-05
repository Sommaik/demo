pipeline {
    agent {
        docker {
            image 'angular-cli'
            args '-p 3000:3000'
        }
    }
    // agent {
    //   dockerfile true
    // }
    stages {
        stage('Load Code'){
            steps {
                git 'https://github.com/Sommaik/demo'
            }
        }
        stage('Install-Lib') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
          steps {
            sh 'ng build --prod'
          }
        }
    }
}
