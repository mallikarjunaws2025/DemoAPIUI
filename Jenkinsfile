pipeline {
  agent any

  environment {
    DOCKER_COMPOSE_VERSION = "1.29.2"
  }

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Build Angular UI Docker Image') {
      steps {
        dir('AngularApp') {
          script {
            docker.build('angular-ui:latest')
          }
        }
      }
    }

    stage('Build .NET API Docker Image') {
      steps {
        dir('YourApiProject') {
          script {
            docker.build('dotnet-api:latest')
          }
        }
      }
    }

    stage('Start Containers with Docker Compose') {
      steps {
        sh 'docker-compose down || true'
        sh 'docker-compose up -d --build'
      }
    }
  }

  post {
    always {
      echo 'Cleaning up unused containers/images...'
      sh 'docker system prune -f'
    }
    success {
      echo '✅ Application deployed successfully!'
    }
    failure {
      echo '❌ Deployment failed!'
    }
  }
}
