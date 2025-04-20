pipeline {
    agent any

    tools {
        jdk 'java-11'
        maven 'maven'
    }

    environment {
        IMAGE_NAME = "mallikarjunaws2025/arjun"
        CONTAINER_NAME = "c8"
        PORT_MAPPING = "9008:8080"
    }

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mallikarjunaws2025/DemoAPIUI.git'
            }
        }

        stage('Compile Code') {
            steps {
                sh 'mvn compile'
            }
        }

        stage('Package Code') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('Docker Build & Tag') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh "docker push ${IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }

        stage('Run Container') {
            steps {
                sh """
                docker rm -f ${CONTAINER_NAME} || true
                docker run -d --name ${CONTAINER_NAME} -p ${PORT_MAPPING} ${IMAGE_NAME}:${BUILD_NUMBER}
                """
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        cleanup {
            sh 'docker image prune -f'
        }
    }
}
