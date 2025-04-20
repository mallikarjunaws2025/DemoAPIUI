pipeline {
    agent any

    tools {
        jdk 'java-11'
    }

    environment {
        SOLUTION = 'CleanArchitectureDemo.sln'
        PROJECT = 'AuthService.API/AuthService.API.csproj'
        CONFIGURATION = 'Release'
        PUBLISH_DIR = 'publish' 
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

        stage('Restore') {
            steps {
                sh 'dotnet restore $SOLUTION'
            }
        }

        stage('Build') {
            steps {
                sh 'dotnet build $SOLUTION --configuration $CONFIGURATION --no-restore'
            }
        }

        // stage('Test') {
        //     steps {
        //         sh 'dotnet test $SOLUTION --configuration $CONFIGURATION --no-build --logger "trx"'
        //     }
        // }

        stage('Publish') {
            steps {
                sh 'dotnet publish $PROJECT --configuration $CONFIGURATION --output $PUBLISH_DIR'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: "$PUBLISH_DIR/**", fingerprint: true
            }
        }

        post {
            always {
                echo 'Build pipeline completed.'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                    }
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
