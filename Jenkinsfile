// pipeline {
//     // agent {
//     //     docker {
//     //         image 'angular-cli'
//     //         args '-p 3000:3000'
//     //     }
//     // }
//     agent {
//       dockerfile true
//     }
//     environment {
//       CI = 'true'
//     }
//     stages {
//         stage('Load Code'){
//             steps {
//                 git 'https://github.com/Sommaik/demo'
//             }
//         }
//         stage('Install-Lib') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Build') {
//           steps {
//             sh 'npm build'
//           }
//         }
//         stage('Deliver') {
//           steps {
//             sh 'npm start'
//           }
//         }
//     }
// }

// node {
//   def customImage = docker.build("angular-cli")

//   customImage.inside {
//       stage('Test') {
//           sh 'node --version'
//       }
//       stage('build') {
//         git 'https://github.com/Sommaik/demo'
//         sh 'cd demo'
//         sh 'npm install'
//         sh 'npm run serve'
//       }
//   }
// }

// docker build -t myapp .
// docker run -d -p 9090:80 --name myapp myapp
// docker push myapp:1.0

node {
  stage('sync source code'){
     git 'https://github.com/Sommaik/demo'
  }
  stage('build image'){
    sh 'cd /var/jenkins_home/workspace/demopipe'
    sh 'docker build -t myapp -f /var/jenkins_home/workspace/demopipe/Dockerfile .'
  }
  stage('run image'){
    sh 'docker run -d -p 9090:80 --name myapp myapp'
  }
}
