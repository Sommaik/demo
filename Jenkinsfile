pipeline {
    agent none
    environment {
        imageName = 'sommaik/demo'
        port = 80
    }
    
    stages {
       stage('Package') { 
          agent any
          steps {
              sh "docker --version"
              sh "docker build -t ${env.imageName} ."
              withCredentials(
                  [usernamePassword(
                      credentialsId: 'docker_hub', 
                      passwordVariable: 'dockerHubPassword', 
                      usernameVariable: 'dockerHubUser'
                    )]
                ) {
              sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
              sh "docker push ${env.imageName}"
            }
          }
       }

       stage('Deploy') { 
          agent {label 'mgr1'}
          steps {
           sh "docker pull ${env.imageName}"
          }
       }
    }
}